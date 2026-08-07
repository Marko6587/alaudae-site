"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js"
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js"
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js"
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js"
import { buildCinematicScene, buildFallbackSvg, type Pt } from "@/lib/roman-cinematic"

const SPACING = 0.03 // world units between resampled points (uniform draw speed)

// bronze -> warm gold gradient stops
const STOPS = [new THREE.Color("#b0742c"), new THREE.Color("#e0a84a"), new THREE.Color("#ffe4ad")]
function gradientColor(t: number, out: THREE.Color) {
  const x = THREE.MathUtils.clamp(t, 0, 1) * (STOPS.length - 1)
  const i = Math.min(Math.floor(x), STOPS.length - 2)
  out.copy(STOPS[i]).lerp(STOPS[i + 1], x - i)
}

function resample(pts: Pt[], spacing: number): number[] {
  if (pts.length === 0) return []
  const out: number[] = [pts[0][0], pts[0][1]]
  let carry = 0
  for (let i = 0; i < pts.length - 1; i++) {
    const [ax, ay] = pts[i]
    const [bx, by] = pts[i + 1]
    const segLen = Math.hypot(bx - ax, by - ay)
    if (segLen < 1e-6) continue
    let d = carry
    while (d < segLen) {
      const t = d / segLen
      out.push(ax + (bx - ax) * t, ay + (by - ay) * t)
      d += spacing
    }
    carry = d - segLen
  }
  out.push(pts[pts.length - 1][0], pts[pts.length - 1][1])
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
              stroke="#c8862f"
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

// Builds and runs the whole WebGL scene. Returns a cleanup function.
// Throws synchronously on setup failure; reports async runtime failures via onRuntimeError.
function setupScene(mount: HTMLDivElement, onRuntimeError: () => void): () => void {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches

  const scene = new THREE.Scene()
  scene.background = new THREE.Color("#000000")

  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100)
  camera.position.set(0, 0, 9)

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75))
  renderer.setSize(mount.clientWidth || 1, mount.clientHeight || 1)
  mount.appendChild(renderer.domElement)

  // ---- build line geometry --------------------------------------------------
  const { pieces, width, height } = buildCinematicScene()

  const resampled = pieces.map((p) => ({ flat: resample(p.pts, SPACING), z: p.z }))
  let totalLen = 0
  const meta = resampled.map(({ flat, z }) => {
    const count = flat.length / 2
    const len = (count - 1) * SPACING
    const startLen = totalLen
    totalLen += len
    return { count, len, startLen, z }
  })

  const group = new THREE.Group()
  const col = new THREE.Color()
  const lineObjs: { line: THREE.Line; count: number; startLen: number; len: number; z: number; flat: number[] }[] = []

  resampled.forEach(({ flat, z }, idx) => {
    const count = flat.length / 2
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = flat[i * 2]
      positions[i * 3 + 1] = flat[i * 2 + 1]
      positions[i * 3 + 2] = z
      const globalT = (meta[idx].startLen + i * SPACING) / totalLen
      gradientColor(globalT, col)
      colors[i * 3] = col.r
      colors[i * 3 + 1] = col.g
      colors[i * 3 + 2] = col.b
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3))
    const mat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 1,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
    const line = new THREE.Line(geo, mat)
    geo.setDrawRange(0, reduced ? count : 0)
    group.add(line)
    lineObjs.push({ line, count, startLen: meta[idx].startLen, len: meta[idx].len, z, flat })
  })
  scene.add(group)

  // ---- warm haze + volumetric streaks ---------------------------------------
  const hazeTex = radialTexture("rgba(200,134,47,0.35)", "rgba(200,134,47,0)")
  const haze = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1),
    new THREE.MeshBasicMaterial({ map: hazeTex, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.16 }),
  )
  haze.scale.set(width * 1.5, height * 1.5, 1)
  haze.position.z = -1.2
  scene.add(haze)

  const streakTex = radialTexture("rgba(255,225,160,0.4)", "rgba(255,225,160,0)")
  const streaks: THREE.Mesh[] = []
  for (let i = 0; i < 2; i++) {
    const s = new THREE.Mesh(
      new THREE.PlaneGeometry(1, 1),
      new THREE.MeshBasicMaterial({ map: streakTex, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.05 }),
    )
    s.scale.set(0.28, height * 2.6, 1)
    s.position.z = -0.8
    s.rotation.z = i === 0 ? 0.5 : -0.7
    scene.add(s)
    streaks.push(s)
  }

  // ---- drifting dust --------------------------------------------------------
  const dustCount = reduced ? 0 : 240
  const dustPos = new Float32Array(dustCount * 3)
  const dustVel = new Float32Array(dustCount * 3)
  for (let i = 0; i < dustCount; i++) {
    dustPos[i * 3] = (Math.random() - 0.5) * width * 1.6
    dustPos[i * 3 + 1] = (Math.random() - 0.5) * height * 1.8
    dustPos[i * 3 + 2] = (Math.random() - 0.5) * 2
    dustVel[i * 3] = (Math.random() - 0.5) * 0.02
    dustVel[i * 3 + 1] = 0.01 + Math.random() * 0.02
    dustVel[i * 3 + 2] = 0
  }
  const dustGeo = new THREE.BufferGeometry()
  dustGeo.setAttribute("position", new THREE.BufferAttribute(dustPos, 3))
  const dust = new THREE.Points(
    dustGeo,
    new THREE.PointsMaterial({ color: 0xffcf8a, size: 0.045, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false }),
  )
  if (dustCount) scene.add(dust)

  // ---- head sparks (pool) ---------------------------------------------------
  const sparkMax = reduced ? 0 : 160
  const sparkPos = new Float32Array(sparkMax * 3)
  const sparkLife = new Float32Array(sparkMax)
  const sparkVel = new Float32Array(sparkMax * 3)
  let sparkCursor = 0
  const sparkGeo = new THREE.BufferGeometry()
  sparkGeo.setAttribute("position", new THREE.BufferAttribute(sparkPos, 3))
  const sparks = new THREE.Points(
    sparkGeo,
    new THREE.PointsMaterial({ color: 0xffe6a0, size: 0.09, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false }),
  )
  if (sparkMax) scene.add(sparks)

  // ---- post-processing bloom ------------------------------------------------
  const composer = new EffectComposer(renderer)
  composer.addPass(new RenderPass(scene, camera))
  const bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.62, 0.4, 0.18)
  composer.addPass(bloom)
  composer.addPass(new OutputPass())

  let baseZ = 9
  const resize = () => {
    const w = mount.clientWidth || 1
    const h = mount.clientHeight || 1
    camera.aspect = w / h
    const fitH = height * 1.35
    const fitW = width * 1.15
    const distForH = fitH / 2 / Math.tan((camera.fov * Math.PI) / 180 / 2)
    const distForW = fitW / 2 / Math.tan((camera.fov * Math.PI) / 180 / 2) / camera.aspect
    baseZ = Math.max(distForH, distForW)
    camera.updateProjectionMatrix()
    renderer.setSize(w, h)
    composer.setSize(w, h)
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
  const DRAW = 8.0 // the line draws itself once, then the emblem holds permanently
  const start = performance.now()
  let raf = 0
  let failed = false
  const headV = new THREE.Vector3()

  const spawnSpark = (x: number, y: number, z: number) => {
    if (!sparkMax) return
    for (let k = 0; k < 2; k++) {
      const i = sparkCursor
      sparkPos[i * 3] = x
      sparkPos[i * 3 + 1] = y
      sparkPos[i * 3 + 2] = z
      sparkVel[i * 3] = (Math.random() - 0.5) * 0.06
      sparkVel[i * 3 + 1] = (Math.random() - 0.5) * 0.06 + 0.02
      sparkVel[i * 3 + 2] = (Math.random() - 0.5) * 0.04
      sparkLife[i] = 1
      sparkCursor = (sparkCursor + 1) % sparkMax
    }
  }

  const render = () => {
    if (failed) return
    raf = requestAnimationFrame(render)
    if (!visible) return
    const now = (performance.now() - start) / 1000

    // Draw the whole emblem once over DRAW seconds, then hold it permanently.
    // It never erases, so the hero is never blank after the initial reveal.
    let alpha = 1
    let progress = 1
    if (!reduced && now < DRAW) {
      progress = smoother(now / DRAW)
      alpha = 0.55 + 0.45 * Math.min(1, now / 1.0)
    }
    const revealed = progress * totalLen

    let headSet = false
    for (const o of lineObjs) {
      const local = revealed - o.startLen
      let count: number
      if (local <= 0) count = 0
      else if (local >= o.len) count = o.count
      else count = Math.max(1, Math.min(o.count, Math.round(local / SPACING) + 1))
      o.line.geometry.setDrawRange(0, reduced ? o.count : count)
      ;(o.line.material as THREE.LineBasicMaterial).opacity = alpha
      if (!reduced && count > 0 && count < o.count && !headSet) {
        const hi = (count - 1) * 2
        headV.set(o.flat[hi], o.flat[hi + 1], o.z)
        headSet = true
      }
    }
    if (headSet && alpha > 0.5) spawnSpark(headV.x, headV.y, headV.z)

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
    const pushed = reduced ? baseZ * 0.94 : baseZ * (1 + 0.16 * (1 - progress))
    camera.position.x += (pointer.x * 0.6 - camera.position.x) * 0.05
    camera.position.y += (-pointer.y * 0.4 - camera.position.y) * 0.05
    camera.position.z += (pushed - camera.position.z) * 0.06
    camera.lookAt(0, 0, 0)

    const pulse = 0.15 + Math.sin(now * 0.6) * 0.03
    ;(haze.material as THREE.MeshBasicMaterial).opacity = pulse * (0.5 + alpha * 0.5)
    streaks.forEach((s, i) => {
      s.rotation.z += i === 0 ? 0.0006 : -0.0004
      ;(s.material as THREE.MeshBasicMaterial).opacity = 0.05 * alpha
    })

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
    streakTex.dispose()
    if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement)
  }
}
