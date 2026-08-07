"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { buildSymbolSvg, sampleSymbolPoints, type SymbolId } from "@/lib/roman-symbols"

interface RomanSymbolSceneProps {
  symbol: SymbolId
  className?: string
}

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
}

function supportsWebGL() {
  if (typeof window === "undefined") return false
  try {
    const canvas = document.createElement("canvas")
    return !!(canvas.getContext("webgl2") || canvas.getContext("webgl"))
  } catch {
    return false
  }
}

// A soft round dot so particles read as points, not squares.
function makeDotTexture() {
  const size = 64
  const canvas = document.createElement("canvas")
  canvas.width = canvas.height = size
  const ctx = canvas.getContext("2d")!
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
  g.addColorStop(0, "rgba(17,17,17,1)")
  g.addColorStop(0.55, "rgba(17,17,17,0.9)")
  g.addColorStop(1, "rgba(17,17,17,0)")
  ctx.fillStyle = g
  ctx.fillRect(0, 0, size, size)
  const tex = new THREE.CanvasTexture(canvas)
  tex.needsUpdate = true
  return tex
}

const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2)
const clamp01 = (v: number) => Math.min(1, Math.max(0, v))

export default function RomanSymbolScene({ symbol, className }: RomanSymbolSceneProps) {
  const mountRef = useRef<HTMLDivElement>(null)
  const [fallback, setFallback] = useState(false)

  useEffect(() => {
    if (!supportsWebGL() || prefersReducedMotion()) {
      setFallback(true)
      return
    }

    const mount = mountRef.current
    if (!mount) return

    const count = window.innerWidth < 768 ? 700 : 1300

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100)
    camera.position.set(0, 0, 7.2)

    let renderer: THREE.WebGLRenderer
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" })
    } catch {
      setFallback(true)
      return
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    // Target outline positions and a scattered starting cloud.
    const targets = sampleSymbolPoints(symbol, count)
    const scatter = new Float32Array(count * 3)
    const current = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 3.4 + Math.random() * 3.2
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      scatter[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      scatter[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.8
      scatter[i * 3 + 2] = (r * Math.cos(phi)) * 0.5
      current[i * 3] = scatter[i * 3]
      current[i * 3 + 1] = scatter[i * 3 + 1]
      current[i * 3 + 2] = scatter[i * 3 + 2]
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute("position", new THREE.BufferAttribute(current, 3))

    const dot = makeDotTexture()
    const material = new THREE.PointsMaterial({
      color: 0x111111,
      size: window.innerWidth < 768 ? 0.1 : 0.08,
      map: dot,
      transparent: true,
      depthWrite: false,
      sizeAttenuation: true,
    })

    const points = new THREE.Points(geometry, material)
    const group = new THREE.Group()
    group.add(points)
    scene.add(group)

    // interaction / progress state (all lerped for inertia)
    const pointer = { x: 0, y: 0 }
    const smoothPointer = { x: 0, y: 0 }
    let progress = 0 // eased assembly progress
    let targetProgress = 0
    let visible = true
    let frame = 0

    const readProgress = () => {
      const rect = mount.getBoundingClientRect()
      const vh = window.innerHeight || 1
      // Fully assembled once the panel is roughly half in view, and it stays
      // assembled while it sits higher up — so the symbol is solid whenever the
      // visitor is actually looking at this section.
      const raw = (vh * 0.85 - rect.top) / (vh * 0.3)
      targetProgress = clamp01(raw)
    }

    const onResize = () => {
      const w = mount.clientWidth || 1
      const h = mount.clientHeight || 1
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h, false)
      const scale = THREE.MathUtils.clamp(Math.min(w, h) / 460, 0.62, 1.15)
      group.scale.setScalar(scale)
      readProgress()
    }

    const onPointerMove = (e: PointerEvent) => {
      const rect = mount.getBoundingClientRect()
      pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      pointer.y = ((e.clientY - rect.top) / rect.height) * 2 - 1
    }

    const io = new IntersectionObserver(
      (entries) => {
        visible = entries[0]?.isIntersecting ?? true
      },
      { threshold: 0 },
    )
    io.observe(mount)

    const pos = geometry.getAttribute("position") as THREE.BufferAttribute
    const start = performance.now()

    const render = () => {
      frame = requestAnimationFrame(render)
      if (!visible) return

      const elapsed = (performance.now() - start) / 1000

      // Track the panel position every frame so assembly works regardless of
      // which element actually scrolls (window, body or a nested container).
      readProgress()

      // inertia: ease progress and pointer toward their targets
      progress += (targetProgress - progress) * 0.08
      smoothPointer.x += (pointer.x - smoothPointer.x) * 0.05
      smoothPointer.y += (pointer.y - smoothPointer.y) * 0.05

      const p = easeInOut(clamp01(progress))

      for (let i = 0; i < count; i++) {
        const ix = i * 3
        // subtle idle drift keeps the assembled symbol alive
        const driftX = Math.sin(elapsed * 0.6 + i) * 0.015 * (1 - p)
        const driftY = Math.cos(elapsed * 0.5 + i * 1.3) * 0.015 * (1 - p)
        const desiredX = scatter[ix] + (targets[ix] - scatter[ix]) * p + driftX
        const desiredY = scatter[ix + 1] + (targets[ix + 1] - scatter[ix + 1]) * p + driftY
        const desiredZ = scatter[ix + 2] + (targets[ix + 2] - scatter[ix + 2]) * p
        // per-particle damping toward the desired mix -> inertial assembly
        current[ix] += (desiredX - current[ix]) * 0.12
        current[ix + 1] += (desiredY - current[ix + 1]) * 0.12
        current[ix + 2] += (desiredZ - current[ix + 2]) * 0.12
      }
      pos.needsUpdate = true

      // parallax with damping
      group.rotation.y = smoothPointer.x * 0.35 + Math.sin(elapsed * 0.15) * 0.04
      group.rotation.x = smoothPointer.y * 0.22
      group.position.x = smoothPointer.x * 0.25

      renderer.render(scene, camera)
    }

    onResize()
    render()

    window.addEventListener("resize", onResize)
    window.addEventListener("scroll", readProgress, { passive: true })
    mount.addEventListener("pointermove", onPointerMove)

    return () => {
      cancelAnimationFrame(frame)
      io.disconnect()
      window.removeEventListener("resize", onResize)
      window.removeEventListener("scroll", readProgress)
      mount.removeEventListener("pointermove", onPointerMove)
      geometry.dispose()
      material.dispose()
      dot.dispose()
      renderer.dispose()
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement)
    }
  }, [symbol])

  if (fallback) {
    const { viewBox, polylines } = buildSymbolSvg(symbol)
    return (
      <div className={className} aria-hidden="true">
        <svg viewBox={viewBox} className="h-full w-full" fill="none" stroke="#111111" strokeWidth={0.045}>
          {polylines.map((pts, i) => (
            <polyline key={i} points={pts} strokeLinecap="round" strokeLinejoin="round" />
          ))}
        </svg>
      </div>
    )
  }

  return <div ref={mountRef} className={className} aria-hidden="true" />
}
