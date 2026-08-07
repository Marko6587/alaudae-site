"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { Line2 } from "three/examples/jsm/lines/Line2.js"
import { LineGeometry } from "three/examples/jsm/lines/LineGeometry.js"
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial.js"
import { buildCinematicScene, buildFallbackSvg, type Pt } from "@/lib/roman-cinematic"

const SPACING = 0.02 // world units between resampled points (uniform draw speed)
const LINE_W = 0.014 // stroke thickness in world units (fine, precise ink line)

const INK = new THREE.Color("#0a0a0a") // near-black line on a white field
const PAPER = "#ffffff"

function resample(pts: Pt[], spacing: number): Pt[] {
  if (pts.length === 0) return []
  const out: Pt[] = [pts[0]]
  let carry = 0
  for (let i = 0; i < pts.length - 1; i++) {
    const [ax, ay] = pts[i]
    const [bx, by] = pts[i + 1]
    const segLen = Math.hypot(bx - ax, by - ay)
    if (segLen < 1e-6) continue
    let d = carry
    while (d < segLen) {
      const t = d / segLen
      out.push([ax + (bx - ax) * t, ay + (by - ay) * t])
      d += spacing
    }
    carry = d - segLen
  }
  out.push(pts[pts.length - 1])
  return out
}

function headTexture(): THREE.Texture {
  const c = document.createElement("canvas")
  c.width = c.height = 128
  const ctx = c.getContext("2d")!
  const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64)
  g.addColorStop(0, "rgba(10,10,10,1)")
  g.addColorStop(0.5, "rgba(10,10,10,0.6)")
  g.addColorStop(1, "rgba(10,10,10,0)")
  ctx.fillStyle = g
  ctx.fillRect(0, 0, 128, 128)
  const tex = new THREE.CanvasTexture(c)
  tex.needsUpdate = true
  return tex
}

export default function RomanLineCinematic({ className }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement>(null)
  const [fallback, setFallback] = useState(false)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    // WebGL support check
    try {
      const test = document.createElement("canvas")
      if (!(test.getContext("webgl2") || test.getContext("webgl"))) {
        setFallback(true)
        return
      }
    } catch {
      setFallback(true)
      return
    }

    let cleanup: (() => void) | undefined
    try {
      cleanup = setupScene(mount, () => setFallback(true))
    } catch (err) {
      console.log("[v0] line hero setup failed, using SVG fallback:", err)
      setFallback(true)
    }
    return cleanup
  }, [])

  if (fallback) {
    const { viewBox, polylines } = buildFallbackSvg()
    return (
      <div className={className} aria-hidden="true">
        <svg viewBox={viewBox} className="h-full w-full" preserveAspectRatio="xMidYMid meet">
          {polylines.map((pts, i) => (
            <polyline
              key={i}
              points={pts}
              fill="none"
              stroke="#0a0a0a"
              strokeWidth={0.024}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ))}
        </svg>
      </div>
    )
  }

  return <div ref={mountRef} className={className} aria-hidden="true" />
}

type PieceObj = {
  line: Line2
  mat: LineMaterial
  count: number
  startLen: number
  len: number
  z: number
  flat: Pt[]
}

// Builds and runs the whole WebGL scene. Returns a cleanup function.
function setupScene(mount: HTMLDivElement, onRuntimeError: () => void): () => void {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches

  const scene = new THREE.Scene()
  scene.background = new THREE.Color(PAPER)

  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100)
  camera.position.set(0, 0, 9)

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(mount.clientWidth || 1, mount.clientHeight || 1)
  mount.appendChild(renderer.domElement)

  // ---- build thick-line geometry (Line2) ------------------------------------
  const { pieces, width, height } = buildCinematicScene()

  const resampled = pieces.map((p) => ({ flat: resample(p.pts, SPACING), z: p.z }))
  let totalLen = 0
  const meta = resampled.map(({ flat }) => {
    const count = flat.length
    const len = (count - 1) * SPACING
    const startLen = totalLen
    totalLen += len
    return { count, len, startLen }
  })

  const group = new THREE.Group()
  const lineObjs: PieceObj[] = []
  const materials: LineMaterial[] = []

  resampled.forEach(({ flat, z }, idx) => {
    const count = flat.length
    const positions: number[] = []
    const colors: number[] = []
    for (let i = 0; i < count; i++) {
      positions.push(flat[i][0], flat[i][1], z)
      colors.push(INK.r, INK.g, INK.b)
    }
    const geo = new LineGeometry()
    geo.setPositions(positions)
    geo.setColors(colors)

    const mat = new LineMaterial({
      linewidth: LINE_W,
      worldUnits: true,
      vertexColors: true,
      transparent: true,
      opacity: 1,
      blending: THREE.NormalBlending,
      depthWrite: false,
      dashed: true,
      dashSize: 1e-4,
      gapSize: meta[idx].len + 1,
    })
    const line = new Line2(geo, mat)
    line.computeLineDistances()
    if (reduced) {
      mat.dashSize = meta[idx].len
      mat.gapSize = 1e-4
    }
    group.add(line)
    materials.push(mat)
    lineObjs.push({ line, mat, count, startLen: meta[idx].startLen, len: meta[idx].len, z, flat })
  })
  scene.add(group)

  // ---- a small dark head dot that starts and leads the drawing line ---------
  const headTex = headTexture()
  const head = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: headTex,
      transparent: true,
      blending: THREE.NormalBlending,
      depthWrite: false,
      opacity: 0,
    }),
  )
  head.scale.set(0.14, 0.14, 1)
  scene.add(head)

  let baseZ = 9
  const resize = () => {
    const w = mount.clientWidth || 1
    const h = mount.clientHeight || 1
    camera.aspect = w / h
    // tight padding so the shield fills as much of the frame as possible
    const fitH = height * 1.08
    const fitW = width * 1.08
    const distForH = fitH / 2 / Math.tan((camera.fov * Math.PI) / 180 / 2)
    const distForW = fitW / 2 / Math.tan((camera.fov * Math.PI) / 180 / 2) / camera.aspect
    baseZ = Math.max(distForH, distForW)
    camera.updateProjectionMatrix()
    renderer.setSize(w, h)
    for (const m of materials) m.resolution.set(w, h)
  }
  resize()
  window.addEventListener("resize", resize)

  // pointer parallax (very subtle for a calm, minimal feel)
  const pointer = { x: 0, y: 0, tx: 0, ty: 0 }
  const onPointer = (e: PointerEvent) => {
    const r = mount.getBoundingClientRect()
    pointer.tx = ((e.clientX - r.left) / r.width - 0.5) * 2
    pointer.ty = ((e.clientY - r.top) / r.height - 0.5) * 2
  }
  mount.addEventListener("pointermove", onPointer)

  // pause when off-screen
  let visible = true
  const io = new IntersectionObserver((entries) => (visible = entries[0].isIntersecting), { threshold: 0.01 })
  io.observe(mount)

  // ---- animation ------------------------------------------------------------
  const smoother = (t: number) => t * t * t * (t * (t * 6 - 15) + 10)
  const DRAW = 9.0 // the line draws itself once, then the emblem holds permanently
  const start = performance.now()
  let raf = 0
  let failed = false

  const render = () => {
    if (failed) return
    raf = requestAnimationFrame(render)
    if (!visible) return
    const now = (performance.now() - start) / 1000

    // Draw the whole shield once over DRAW seconds, then hold it permanently.
    let progress = 1
    let drawing = false
    if (!reduced && now < DRAW) {
      progress = smoother(now / DRAW)
      drawing = true
    }
    const revealed = progress * totalLen

    let headX = 0
    let headY = 0
    let headZ = 0
    let headSet = false
    for (const o of lineObjs) {
      if (reduced) {
        o.mat.opacity = 1
        continue
      }
      const local = revealed - o.startLen
      o.mat.opacity = 1
      if (local <= 0) {
        o.mat.dashSize = 1e-4
        o.mat.gapSize = o.len + 1
      } else if (local >= o.len) {
        o.mat.dashSize = o.len
        o.mat.gapSize = 1e-4
      } else {
        o.mat.dashSize = local
        o.mat.gapSize = o.len + 1
        if (!headSet) {
          const hi = Math.max(0, Math.min(o.count - 1, Math.round(local / SPACING)))
          headX = o.flat[hi][0]
          headY = o.flat[hi][1]
          headZ = o.z
          headSet = true
        }
      }
    }

    // dark travelling head dot while the line is drawing
    if (headSet && drawing) {
      head.position.set(headX, headY, headZ + 0.02)
      ;(head.material as THREE.SpriteMaterial).opacity = 1
    } else {
      ;(head.material as THREE.SpriteMaterial).opacity *= 0.88
    }

    pointer.x += (pointer.tx - pointer.x) * 0.05
    pointer.y += (pointer.ty - pointer.y) * 0.05
    const pushed = reduced ? baseZ * 0.98 : baseZ * (1 + 0.1 * (1 - progress))
    camera.position.x += (pointer.x * 0.28 - camera.position.x) * 0.05
    camera.position.y += (-pointer.y * 0.18 - camera.position.y) * 0.05
    camera.position.z += (pushed - camera.position.z) * 0.06
    camera.lookAt(0, 0, 0)

    try {
      renderer.render(scene, camera)
    } catch (err) {
      failed = true
      cancelAnimationFrame(raf)
      console.log("[v0] line hero render failed, using SVG fallback:", err)
      onRuntimeError()
    }
  }
  render()

  return () => {
    failed = true
    cancelAnimationFrame(raf)
    window.removeEventListener("resize", resize)
    mount.removeEventListener("pointermove", onPointer)
    io.disconnect()
    renderer.dispose()
    scene.traverse((obj) => {
      const anyObj = obj as unknown as { geometry?: THREE.BufferGeometry; material?: THREE.Material | THREE.Material[] }
      anyObj.geometry?.dispose()
      if (Array.isArray(anyObj.material)) anyObj.material.forEach((m) => m.dispose())
      else anyObj.material?.dispose()
    })
    headTex.dispose()
    if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement)
  }
}
