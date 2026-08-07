"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js"
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js"
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js"
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js"
import { Line2 } from "three/examples/jsm/lines/Line2.js"
import { LineGeometry } from "three/examples/jsm/lines/LineGeometry.js"
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial.js"
import { buildCinematicScene, buildFallbackSvg, type Pt } from "@/lib/roman-cinematic"

const SPACING = 0.02 // world units between resampled points (uniform draw speed)
const LINE_W = 0.018 // stroke thickness in world units (crisp engraved look)

// Monochrome silver -> bright white gradient. Additive blending + bloom then
// renders the strokes as glowing brushed steel on pure black.
const STOPS = [new THREE.Color("#7c7c7c"), new THREE.Color("#c8c8c8"), new THREE.Color("#ffffff")]
function gradientColor(t: number, out: THREE.Color) {
  const x = THREE.MathUtils.clamp(t, 0, 1) * (STOPS.length - 1)
  const i = Math.min(Math.floor(x), STOPS.length - 2)
  out.copy(STOPS[i]).lerp(STOPS[i + 1], x - i)
}

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

function radialTexture(inner: string, outer: string): THREE.Texture {
  const c = document.createElement("canvas")
  c.width = c.height = 256
  const ctx = c.getContext("2d")!
  const g = ctx.createRadialGradient(128, 128, 0, 128, 128, 128)
  g.addColorStop(0, inner)
  g.addColorStop(1, outer)
  ctx.fillStyle = g
  ctx.fillRect(0, 0, 256, 256)
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

    // Any failure while building or running the WebGL scene (driver quirks,
    // blocked context, unsupported post-processing) drops to the static SVG
    // instead of leaving a permanently black hero.
    let cleanup: (() => void) | undefined
    try {
      cleanup = setupScene(mount, () => setFallback(true))
    } catch (err) {
      console.log("[v0] cinematic hero setup failed, using SVG fallback:", err)
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
              stroke="#d4d4d4"
              strokeWidth={0.03}
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity={0.9}
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
// Throws synchronously on setup failure; reports async runtime failures via onRuntimeError.
function setupScene(mount: HTMLDivElement, onRuntimeError: () => void): () => void {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches

  const scene = new THREE.Scene()
  scene.background = new THREE.Color("#000000")

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
  const col = new THREE.Color()
  const lineObjs: PieceObj[] = []
  const materials: LineMaterial[] = []

  resampled.forEach(({ flat, z }, idx) => {
    const count = flat.length
    const positions: number[] = []
    const colors: number[] = []
    for (let i = 0; i < count; i++) {
      positions.push(flat[i][0], flat[i][1], z)
      const globalT = (meta[idx].startLen + i * SPACING) / totalLen
      gradientColor(globalT, col)
      colors.push(col.r, col.g, col.b)
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
      blending: THREE.AdditiveBlending,
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

  // ---- soft cool halo behind the emblem (subtle, monochrome) ----------------
  const hazeTex = radialTexture("rgba(255,255,255,0.22)", "rgba(255,255,255,0)")
  const haze = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1),
    new THREE.MeshBasicMaterial({
      map: hazeTex,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0.14,
    }),
  )
  haze.scale.set(width * 1.4, height * 1.4, 1)
  haze.position.z = -1.2
  scene.add(haze)

  // ---- drifting dust (cool white motes) -------------------------------------
  const dustCount = reduced ? 0 : 200
  const dustPos = new Float32Array(dustCount * 3)
  const dustVel = new Float32Array(dustCount * 3)
  for (let i = 0; i < dustCount; i++) {
    dustPos[i * 3] = (Math.random() - 0.5) * width * 1.8
    dustPos[i * 3 + 1] = (Math.random() - 0.5) * height * 1.8
    dustPos[i * 3 + 2] = (Math.random() - 0.5) * 2
    dustVel[i * 3] = (Math.random() - 0.5) * 0.015
    dustVel[i * 3 + 1] = 0.008 + Math.random() * 0.016
    dustVel[i * 3 + 2] = 0
  }
  const dustGeo = new THREE.BufferGeometry()
  dustGeo.setAttribute("position", new THREE.BufferAttribute(dustPos, 3))
  const dust = new THREE.Points(
    dustGeo,
    new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.03,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }),
  )
  if (dustCount) scene.add(dust)

  // ---- head sparks (pool) — the bright tip that leaves the trail ------------
  const sparkMax = reduced ? 0 : 170
  const sparkPos = new Float32Array(sparkMax * 3)
  const sparkLife = new Float32Array(sparkMax)
  const sparkVel = new Float32Array(sparkMax * 3)
  let sparkCursor = 0
  const sparkGeo = new THREE.BufferGeometry()
  sparkGeo.setAttribute("position", new THREE.BufferAttribute(sparkPos, 3))
  const sparks = new THREE.Points(
    sparkGeo,
    new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.07,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }),
  )
  if (sparkMax) scene.add(sparks)

  // a bright glowing head dot that rides the tip of the drawing line
  const headTex = radialTexture("rgba(255,255,255,1)", "rgba(255,255,255,0)")
  const head = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: headTex,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0,
    }),
  )
  head.scale.set(0.28, 0.28, 1)
  scene.add(head)

  // ---- post-processing bloom (white glow) -----------------------------------
  const composer = new EffectComposer(renderer)
  composer.addPass(new RenderPass(scene, camera))
  const bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.72, 0.5, 0.1)
  composer.addPass(bloom)
  composer.addPass(new OutputPass())

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
    composer.setSize(w, h)
    for (const m of materials) m.resolution.set(w, h)
  }
  resize()
  window.addEventListener("resize", resize)

  // pointer parallax
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

  const spawnSpark = (x: number, y: number, z: number) => {
    if (!sparkMax) return
    for (let k = 0; k < 2; k++) {
      const i = sparkCursor
      sparkPos[i * 3] = x
      sparkPos[i * 3 + 1] = y
      sparkPos[i * 3 + 2] = z
      sparkVel[i * 3] = (Math.random() - 0.5) * 0.05
      sparkVel[i * 3 + 1] = (Math.random() - 0.5) * 0.05 + 0.015
      sparkVel[i * 3 + 2] = (Math.random() - 0.5) * 0.03
      sparkLife[i] = 1
      sparkCursor = (sparkCursor + 1) % sparkMax
    }
  }

  const render = () => {
    if (failed) return
    raf = requestAnimationFrame(render)
    if (!visible) return
    const now = (performance.now() - start) / 1000

    // Draw the whole shield once over DRAW seconds, then hold it permanently.
    let alpha = 1
    let progress = 1
    let drawing = false
    if (!reduced && now < DRAW) {
      progress = smoother(now / DRAW)
      alpha = 0.5 + 0.5 * Math.min(1, now / 1.0)
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
      o.mat.opacity = alpha
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

    // bright travelling head + trailing sparks while the line is drawing
    if (headSet && drawing) {
      head.position.set(headX, headY, headZ + 0.02)
      ;(head.material as THREE.SpriteMaterial).opacity = 0.9
      spawnSpark(headX, headY, headZ)
    } else {
      ;(head.material as THREE.SpriteMaterial).opacity *= 0.9
    }

    if (sparkMax) {
      for (let i = 0; i < sparkMax; i++) {
        if (sparkLife[i] > 0) {
          sparkLife[i] -= 0.02
          sparkPos[i * 3] += sparkVel[i * 3]
          sparkPos[i * 3 + 1] += sparkVel[i * 3 + 1]
          sparkPos[i * 3 + 2] += sparkVel[i * 3 + 2]
        } else {
          sparkPos[i * 3 + 1] = -9999
        }
      }
      sparkGeo.attributes.position.needsUpdate = true
      ;(sparks.material as THREE.PointsMaterial).opacity = 0.9 * alpha
    }

    if (dustCount) {
      for (let i = 0; i < dustCount; i++) {
        dustPos[i * 3] += dustVel[i * 3]
        dustPos[i * 3 + 1] += dustVel[i * 3 + 1]
        if (dustPos[i * 3 + 1] > height) dustPos[i * 3 + 1] = -height
      }
      dustGeo.attributes.position.needsUpdate = true
    }

    pointer.x += (pointer.tx - pointer.x) * 0.05
    pointer.y += (pointer.ty - pointer.y) * 0.05
    const pushed = reduced ? baseZ * 0.96 : baseZ * (1 + 0.12 * (1 - progress))
    camera.position.x += (pointer.x * 0.4 - camera.position.x) * 0.05
    camera.position.y += (-pointer.y * 0.26 - camera.position.y) * 0.05
    camera.position.z += (pushed - camera.position.z) * 0.06
    camera.lookAt(0, 0, 0)

    const pulse = 0.12 + Math.sin(now * 0.5) * 0.025
    ;(haze.material as THREE.MeshBasicMaterial).opacity = pulse * (0.5 + alpha * 0.5)

    try {
      composer.render()
    } catch (err) {
      failed = true
      cancelAnimationFrame(raf)
      console.log("[v0] cinematic hero render failed, using SVG fallback:", err)
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
    composer.dispose()
    renderer.dispose()
    scene.traverse((obj) => {
      const anyObj = obj as unknown as { geometry?: THREE.BufferGeometry; material?: THREE.Material | THREE.Material[] }
      anyObj.geometry?.dispose()
      if (Array.isArray(anyObj.material)) anyObj.material.forEach((m) => m.dispose())
      else anyObj.material?.dispose()
    })
    hazeTex.dispose()
    headTex.dispose()
    if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement)
  }
}
