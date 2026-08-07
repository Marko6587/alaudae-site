"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import * as THREE from "three"

/** Linear interpolation used for all damping so nothing snaps. */
function lerp(current: number, target: number, factor: number) {
  return current + (target - current) * factor
}

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas")
    return Boolean(
      window.WebGLRenderingContext && (canvas.getContext("webgl2") || canvas.getContext("webgl")),
    )
  } catch {
    return false
  }
}

/** Roman "meander" (Greek key) + laurel band drawn to a canvas, used as the shield face map. */
function createShieldTexture() {
  const size = 1024
  const canvas = document.createElement("canvas")
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext("2d")
  if (!ctx) return null

  ctx.fillStyle = "#3a3a3a"
  ctx.fillRect(0, 0, size, size)

  // Subtle vertical brushed-metal streaks
  for (let i = 0; i < 220; i++) {
    const x = Math.random() * size
    ctx.strokeStyle = `rgba(255,255,255,${Math.random() * 0.04})`
    ctx.lineWidth = Math.random() * 2
    ctx.beginPath()
    ctx.moveTo(x, 0)
    ctx.lineTo(x, size)
    ctx.stroke()
  }

  const light = "#d8d6d2"
  ctx.strokeStyle = light
  ctx.lineCap = "square"

  // Outer border frame
  ctx.lineWidth = 10
  ctx.strokeRect(52, 52, size - 104, size - 104)
  ctx.lineWidth = 4
  ctx.strokeRect(84, 84, size - 168, size - 168)

  // Meander band along the top and bottom
  const drawMeander = (y: number, flip: number) => {
    ctx.lineWidth = 7
    const step = 74
    for (let x = 110; x < size - 130; x += step) {
      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineTo(x + 52 * 1, y)
      ctx.lineTo(x + 52, y + 40 * flip)
      ctx.lineTo(x + 20, y + 40 * flip)
      ctx.lineTo(x + 20, y + 20 * flip)
      ctx.stroke()
    }
  }
  drawMeander(150, 1)
  drawMeander(size - 150, -1)

  // Central winged motif: vertical spine with laurel leaves
  const cx = size / 2
  ctx.lineWidth = 8
  ctx.beginPath()
  ctx.moveTo(cx, 260)
  ctx.lineTo(cx, size - 260)
  ctx.stroke()

  ctx.lineWidth = 6
  for (let i = 0; i < 9; i++) {
    const y = 300 + i * 50
    const span = 150 - Math.abs(i - 4) * 16
    for (const dir of [-1, 1]) {
      ctx.beginPath()
      ctx.moveTo(cx, y)
      ctx.quadraticCurveTo(cx + dir * span * 0.6, y - 34, cx + dir * span, y + 6)
      ctx.stroke()
    }
  }

  // Concentric rings behind the boss
  ctx.lineWidth = 5
  for (const r of [190, 132]) {
    ctx.beginPath()
    ctx.arc(cx, size / 2, r, 0, Math.PI * 2)
    ctx.stroke()
  }

  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  texture.anisotropy = 4
  return texture
}

/** A soft studio gradient used as the environment so the metal reads as metal. */
function createEnvironment(renderer: THREE.WebGLRenderer) {
  const canvas = document.createElement("canvas")
  canvas.width = 512
  canvas.height = 256
  const ctx = canvas.getContext("2d")
  if (!ctx) return null
  const gradient = ctx.createLinearGradient(0, 0, 0, 256)
  gradient.addColorStop(0, "#ffffff")
  gradient.addColorStop(0.45, "#e6e6e6")
  gradient.addColorStop(0.55, "#9a9a9a")
  gradient.addColorStop(1, "#3d3d3d")
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, 512, 256)

  const source = new THREE.CanvasTexture(canvas)
  source.mapping = THREE.EquirectangularReflectionMapping
  source.colorSpace = THREE.SRGBColorSpace

  const pmrem = new THREE.PMREMGenerator(renderer)
  const envMap = pmrem.fromEquirectangular(source).texture
  pmrem.dispose()
  source.dispose()
  return envMap
}

/** Leaf-shaped gladius blade profile, extruded with a bevel to form real edges. */
function createBladeGeometry() {
  const half = [
    [0.0, 0.0],
    [0.19, 0.06],
    [0.185, 0.9],
    [0.15, 1.55],
    [0.175, 2.05],
    [0.135, 2.5],
    [0.06, 2.85],
    [0.0, 3.05],
  ] as const

  const shape = new THREE.Shape()
  shape.moveTo(half[0][0], half[0][1])
  for (let i = 1; i < half.length; i++) shape.lineTo(half[i][0], half[i][1])
  for (let i = half.length - 2; i >= 0; i--) shape.lineTo(-half[i][0], half[i][1])
  shape.closePath()

  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: 0.075,
    bevelEnabled: true,
    bevelThickness: 0.022,
    bevelSize: 0.032,
    bevelSegments: 2,
    curveSegments: 6,
  })
  geometry.translate(0, 0, -0.0375)
  geometry.computeVertexNormals()
  return geometry
}

export default function RomanHeroScene({ className = "" }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement>(null)
  const [fallback, setFallback] = useState(false)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    if (!supportsWebGL()) {
      setFallback(true)
      return
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const isMobile = window.matchMedia("(max-width: 768px)").matches

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(38, mount.clientWidth / mount.clientHeight, 0.1, 100)
    camera.position.set(0, 0, 8)

    let renderer: THREE.WebGLRenderer
    try {
      renderer = new THREE.WebGLRenderer({ antialias: !isMobile, alpha: true, powerPreference: "high-performance" })
    } catch {
      setFallback(true)
      return
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2))
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.05
    mount.appendChild(renderer.domElement)

    const envMap = createEnvironment(renderer)
    if (envMap) scene.environment = envMap

    // ---- Lighting: high-key monochrome studio -------------------------------
    scene.add(new THREE.AmbientLight(0xffffff, 0.5))
    const key = new THREE.DirectionalLight(0xffffff, 2.1)
    key.position.set(-4, 6, 5)
    scene.add(key)
    const rim = new THREE.DirectionalLight(0xffffff, 1.2)
    rim.position.set(5, -2, 3)
    scene.add(rim)

    // ---- Layer 1: background (slowest parallax) -----------------------------
    const bgLayer = new THREE.Group()
    bgLayer.position.z = -8
    scene.add(bgLayer)

    // Vertical lines evoking a colonnade
    const colonnadePositions: number[] = []
    for (let i = -7; i <= 7; i++) {
      const x = i * 1.15
      colonnadePositions.push(x, -7, 0, x, 7, 0)
    }
    const colonnadeGeometry = new THREE.BufferGeometry()
    colonnadeGeometry.setAttribute("position", new THREE.Float32BufferAttribute(colonnadePositions, 3))
    const colonnadeMaterial = new THREE.LineBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.06 })
    bgLayer.add(new THREE.LineSegments(colonnadeGeometry, colonnadeMaterial))

    // Dust motes
    const dustCount = isMobile ? 120 : 320
    const dustPositions = new Float32Array(dustCount * 3)
    for (let i = 0; i < dustCount; i++) {
      dustPositions[i * 3] = (Math.random() - 0.5) * 20
      dustPositions[i * 3 + 1] = (Math.random() - 0.5) * 14
      dustPositions[i * 3 + 2] = (Math.random() - 0.5) * 6
    }
    const dustGeometry = new THREE.BufferGeometry()
    dustGeometry.setAttribute("position", new THREE.BufferAttribute(dustPositions, 3))
    const dustMaterial = new THREE.PointsMaterial({
      color: 0x000000,
      size: 0.035,
      transparent: true,
      opacity: 0.28,
      sizeAttenuation: true,
    })
    const dust = new THREE.Points(dustGeometry, dustMaterial)
    bgLayer.add(dust)

    // ---- Layer 2: midground rings (medium parallax) -------------------------
    const midLayer = new THREE.Group()
    midLayer.position.z = -3.2
    scene.add(midLayer)

    const ringMaterial = new THREE.MeshStandardMaterial({
      color: 0x8f8f8f,
      metalness: 0.9,
      roughness: 0.45,
    })
    const rings: THREE.Mesh[] = []
    ;[2.9, 3.5, 4.2].forEach((radius, index) => {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(radius, 0.012, 6, isMobile ? 64 : 128), ringMaterial)
      ring.rotation.x = 0.35 + index * 0.12
      ring.rotation.y = index * 0.2
      midLayer.add(ring)
      rings.push(ring)
    })

    // ---- Layer 3: foreground hero objects (strongest parallax) --------------
    const heroLayer = new THREE.Group()
    scene.add(heroLayer)

    // Scutum: curved panel + boss
    const shieldGroup = new THREE.Group()
    const shieldTexture = createShieldTexture()
    const shieldMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      map: shieldTexture ?? undefined,
      metalness: 0.55,
      roughness: 0.5,
      side: THREE.DoubleSide,
    })
    const shieldPanel = new THREE.Mesh(
      new THREE.CylinderGeometry(2.05, 2.05, 3.15, isMobile ? 32 : 64, 1, true, -0.62, 1.24),
      shieldMaterial,
    )
    shieldGroup.add(shieldPanel)

    // Rim outline
    const rimOutline = new THREE.LineSegments(
      new THREE.EdgesGeometry(shieldPanel.geometry, 25),
      new THREE.LineBasicMaterial({ color: 0x111111, transparent: true, opacity: 0.55 }),
    )
    shieldGroup.add(rimOutline)

    // Umbo (central boss)
    const bossMaterial = new THREE.MeshStandardMaterial({ color: 0xb9b9b9, metalness: 1, roughness: 0.24 })
    const boss = new THREE.Mesh(new THREE.SphereGeometry(0.34, 32, 20), bossMaterial)
    boss.scale.set(1, 1, 0.55)
    boss.position.set(0, 0, 2.05)
    shieldGroup.add(boss)

    shieldGroup.rotation.set(0, 0, 0)
    shieldGroup.position.set(-0.55, 0, -1.4)
    heroLayer.add(shieldGroup)

    // Gladius
    const gladius = new THREE.Group()
    const steel = new THREE.MeshStandardMaterial({ color: 0xdcdcdc, metalness: 1, roughness: 0.18 })
    const dark = new THREE.MeshStandardMaterial({ color: 0x1c1c1c, metalness: 0.4, roughness: 0.7 })
    const brass = new THREE.MeshStandardMaterial({ color: 0x8a8a8a, metalness: 1, roughness: 0.32 })

    const blade = new THREE.Mesh(createBladeGeometry(), steel)
    gladius.add(blade)

    const guard = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.14, 0.24), brass)
    guard.position.y = -0.07
    gladius.add(guard)

    const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.095, 0.82, 20, 4), dark)
    grip.position.y = -0.55
    gladius.add(grip)

    // Grip ribbing
    for (let i = 0; i < 4; i++) {
      const rib = new THREE.Mesh(new THREE.TorusGeometry(0.093, 0.016, 6, 20), brass)
      rib.rotation.x = Math.PI / 2
      rib.position.y = -0.28 - i * 0.18
      gladius.add(rib)
    }

    const pommel = new THREE.Mesh(new THREE.SphereGeometry(0.155, 24, 16), brass)
    pommel.position.y = -1.05
    gladius.add(pommel)

    gladius.position.set(0.75, -0.2, 0.9)
    heroLayer.add(gladius)

    // ---- Interaction state --------------------------------------------------
    const pointerTarget = { x: 0, y: 0 }
    const pointer = { x: 0, y: 0 }
    let scrollTarget = 0
    let scrollProgress = 0
    let intro = 0
    let visible = true
    let frame = 0

    const onPointerMove = (event: PointerEvent) => {
      pointerTarget.x = (event.clientX / window.innerWidth) * 2 - 1
      pointerTarget.y = (event.clientY / window.innerHeight) * 2 - 1
    }
    const onPointerLeave = () => {
      pointerTarget.x = 0
      pointerTarget.y = 0
    }

    /** Scroll progress of this section, 0 at top of viewport, 1 once scrolled past. */
    const readScrollProgress = () => {
      const rect = mount.getBoundingClientRect()
      const distance = rect.height + window.innerHeight * 0.6
      scrollTarget = THREE.MathUtils.clamp((window.innerHeight * 0.6 - rect.top) / distance, 0, 1)
    }

    const onResize = () => {
      if (!mount.clientWidth || !mount.clientHeight) return
      camera.aspect = mount.clientWidth / mount.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mount.clientWidth, mount.clientHeight)
      const scale = THREE.MathUtils.clamp(mount.clientWidth / 1280, 0.62, 1)
      heroLayer.scale.setScalar(scale)
      midLayer.scale.setScalar(scale)
      readScrollProgress()
    }

    window.addEventListener("pointermove", onPointerMove, { passive: true })
    window.addEventListener("pointerleave", onPointerLeave)
    window.addEventListener("scroll", readScrollProgress, { passive: true })
    window.addEventListener("resize", onResize)

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
      },
      { threshold: 0 },
    )
    observer.observe(mount)

    onResize()

    const clock = new THREE.Clock()

    const render = () => {
      frame = requestAnimationFrame(render)
      if (!visible) return

      const elapsed = clock.getElapsedTime()

      // Damped pointer + scroll so motion always eases in
      pointer.x = lerp(pointer.x, pointerTarget.x, reduceMotion ? 1 : 0.05)
      pointer.y = lerp(pointer.y, pointerTarget.y, reduceMotion ? 1 : 0.05)
      scrollProgress = lerp(scrollProgress, scrollTarget, reduceMotion ? 1 : 0.075)
      intro = Math.min(1, intro + 0.012)

      const easeIntro = 1 - Math.pow(1 - intro, 3)
      const p = scrollProgress

      // Parallax: each layer reacts to the pointer with a different amplitude
      bgLayer.position.x = pointer.x * 0.35
      bgLayer.position.y = -pointer.y * 0.25 - p * 0.6
      bgLayer.rotation.z = pointer.x * 0.02 + elapsed * 0.005

      midLayer.position.x = pointer.x * 0.9
      midLayer.position.y = -pointer.y * 0.6 + p * 1.1
      midLayer.rotation.z = elapsed * 0.04 + p * 0.5
      rings.forEach((ring, index) => {
        ring.rotation.y = elapsed * (0.08 + index * 0.03) + p * (1 + index * 0.4)
      })

      heroLayer.position.x = pointer.x * 1.5
      heroLayer.position.y = -pointer.y * 1.0
      heroLayer.rotation.y = pointer.x * 0.32
      heroLayer.rotation.x = pointer.y * 0.2

      // Scroll-driven choreography, staged by progress
      const shieldStage = THREE.MathUtils.smoothstep(p, 0, 0.55)
      shieldGroup.rotation.y = -0.35 + shieldStage * 1.15 + Math.sin(elapsed * 0.25) * 0.03
      shieldGroup.rotation.z = shieldStage * -0.18
      shieldGroup.position.x = -0.55 - shieldStage * 1.5
      shieldGroup.position.z = -1.4 - shieldStage * 1.2
      shieldGroup.scale.setScalar((0.86 + easeIntro * 0.14) * (1 - shieldStage * 0.12))

      const bladeStage = THREE.MathUtils.smoothstep(p, 0.1, 0.9)
      gladius.rotation.z = -0.55 + bladeStage * 1.35
      gladius.rotation.y = 0.4 + bladeStage * 2.4 + Math.sin(elapsed * 0.3) * 0.05
      gladius.rotation.x = Math.sin(elapsed * 0.2) * 0.04
      gladius.position.x = 0.75 + bladeStage * 0.9
      gladius.position.y = -0.2 + bladeStage * 0.7 + Math.sin(elapsed * 0.45) * 0.04
      gladius.scale.setScalar((0.9 + easeIntro * 0.1) * (1 - bladeStage * 0.18))

      dust.rotation.y = elapsed * 0.02
      camera.position.z = 8 + p * 1.6

      renderer.render(scene, camera)
    }
    render()

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      window.removeEventListener("pointermove", onPointerMove)
      window.removeEventListener("pointerleave", onPointerLeave)
      window.removeEventListener("scroll", readScrollProgress)
      window.removeEventListener("resize", onResize)
      scene.traverse((object) => {
        const mesh = object as THREE.Mesh
        if (mesh.geometry) mesh.geometry.dispose()
        const material = mesh.material as THREE.Material | THREE.Material[] | undefined
        if (Array.isArray(material)) material.forEach((entry) => entry.dispose())
        else material?.dispose()
      })
      shieldTexture?.dispose()
      envMap?.dispose()
      renderer.dispose()
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement)
    }
  }, [])

  if (fallback) {
    return (
      <div className={`relative ${className}`} aria-hidden="true">
        <Image
          src="/hero-gladius-fallback.png"
          alt="Roman gladius and scutum shield"
          fill
          priority
          className="object-contain opacity-90"
        />
      </div>
    )
  }

  return <div ref={mountRef} className={className} aria-hidden="true" />
}
