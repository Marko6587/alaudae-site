"use client"

import { useEffect, useRef, useState } from "react"

/**
 * Cinematic monochrome hero built from photoreal Roman weapon imagery:
 * an ornate scutum shield centered over two crossed gladii. It composites the
 * pure-black-background art with a screen blend, then adds a slow camera
 * push-in, pointer parallax (depth), a one-time light sweep across the metal,
 * drifting dust motes and a vignette. Respects prefers-reduced-motion.
 */
export default function RomanEmblemHero({ className }: { className?: string }) {
  const rootRef = useRef<HTMLDivElement | null>(null)
  const stageRef = useRef<HTMLDivElement | null>(null)
  const shieldRef = useRef<HTMLDivElement | null>(null)
  const swordLeftRef = useRef<HTMLDivElement | null>(null)
  const swordRightRef = useRef<HTMLDivElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const root = rootRef.current
    const stage = stageRef.current
    const shield = shieldRef.current
    const swordL = swordLeftRef.current
    const swordR = swordRightRef.current
    const canvas = canvasRef.current
    if (!root || !stage || !shield || !swordL || !swordR || !canvas) return

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    // ---- pointer parallax (eased) ----
    let px = 0
    let py = 0
    let tx = 0
    let ty = 0
    const onPointer = (e: PointerEvent) => {
      const r = root.getBoundingClientRect()
      tx = ((e.clientX - r.left) / r.width - 0.5) * 2 // -1..1
      ty = ((e.clientY - r.top) / r.height - 0.5) * 2
    }
    if (!reduced) window.addEventListener("pointermove", onPointer, { passive: true })

    // ---- dust motes ----
    const ctx = canvas.getContext("2d")
    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    const resize = () => {
      const r = root.getBoundingClientRect()
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.max(1, Math.floor(r.width * dpr))
      canvas.height = Math.max(1, Math.floor(r.height * dpr))
    }
    resize()
    window.addEventListener("resize", resize)

    type Mote = { x: number; y: number; r: number; s: number; a: number; drift: number }
    const motes: Mote[] = []
    const moteCount = reduced ? 0 : window.innerWidth < 768 ? 34 : 60
    for (let i = 0; i < moteCount; i++) {
      motes.push({
        x: Math.random(),
        y: Math.random(),
        r: 0.4 + Math.random() * 1.6,
        s: 0.004 + Math.random() * 0.012,
        a: 0.06 + Math.random() * 0.22,
        drift: (Math.random() - 0.5) * 0.0025,
      })
    }

    const start = performance.now()
    let raf = 0

    const frame = (nowMs: number) => {
      const t = (nowMs - start) / 1000

      // eased parallax
      px += (tx - px) * 0.06
      py += (ty - py) * 0.06

      // camera: quick settle push-in, then slow breathing
      const settle = Math.min(1, t / 2.4)
      const settleEased = 1 - Math.pow(1 - settle, 3)
      const zoom = 1.06 - 0.06 * settleEased + Math.sin(t * 0.35) * 0.01
      stage.style.transform = `scale(${zoom.toFixed(4)}) translate3d(${(px * 6).toFixed(2)}px, ${(py * 6).toFixed(2)}px, 0)`

      // layered parallax — shield (front) moves most, crossed swords (behind) less
      const sShift = 16
      shield.style.transform = `translate3d(${(px * sShift).toFixed(2)}px, ${(py * sShift).toFixed(2)}px, 0)`
      const bShift = 7
      swordL.style.transform = `translate3d(${(-6 + px * bShift).toFixed(2)}px, ${(py * bShift).toFixed(2)}px, 0) rotate(-27deg)`
      swordR.style.transform = `translate3d(${(6 + px * bShift).toFixed(2)}px, ${(py * bShift).toFixed(2)}px, 0) rotate(27deg)`

      // dust
      if (ctx && moteCount) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        for (const m of motes) {
          m.y -= m.s * 0.016 * 60 * 0.06
          m.x += m.drift * 0.06
          if (m.y < -0.05) {
            m.y = 1.05
            m.x = Math.random()
          }
          const twinkle = 0.6 + 0.4 * Math.sin(t * 1.3 + m.x * 40)
          ctx.beginPath()
          ctx.arc(m.x * canvas.width, m.y * canvas.height, m.r * dpr, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(235,235,235,${(m.a * twinkle).toFixed(3)})`
          ctx.fill()
        }
      }

      raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("pointermove", onPointer)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <div ref={rootRef} className={className} aria-hidden="true">
      <div className="relative h-full w-full overflow-hidden bg-black">
        {/* faint radial key light behind the emblem */}
        <div
          className="pointer-events-none absolute left-1/2 top-[42%] h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70"
          style={{ background: "radial-gradient(closest-side, rgba(120,120,120,0.28), rgba(0,0,0,0) 70%)" }}
        />

        {/* camera stage */}
        <div
          ref={stageRef}
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${ready ? "opacity-100" : "opacity-0"}`}
          style={{ willChange: "transform" }}
        >
          <div className="relative flex items-center justify-center" style={{ width: "min(90%, 72vh)", aspectRatio: "1 / 1" }}>
            {/* crossed gladii behind the shield (right is mirrored) */}
            <div
              ref={swordLeftRef}
              className="absolute left-1/2 top-1/2 h-[104%] w-[104%] -translate-x-1/2 -translate-y-1/2"
              style={{ willChange: "transform" }}
            >
              <img
                src="/roman/gladius.png"
                alt=""
                className="h-full w-full object-contain opacity-90 [mix-blend-mode:screen]"
                draggable={false}
              />
            </div>
            <div
              ref={swordRightRef}
              className="absolute left-1/2 top-1/2 h-[104%] w-[104%] -translate-x-1/2 -translate-y-1/2"
              style={{ willChange: "transform" }}
            >
              <img
                src="/roman/gladius.png"
                alt=""
                className="h-full w-full -scale-x-100 object-contain opacity-90 [mix-blend-mode:screen]"
                draggable={false}
              />
            </div>

            {/* scutum shield in front */}
            <div
              ref={shieldRef}
              className="absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2"
              style={{ willChange: "transform", filter: "drop-shadow(0 24px 60px rgba(0,0,0,0.85))" }}
            >
              <img
                src="/roman/scutum.png"
                alt="Ancient Roman legionary scutum shield with an embossed eagle, laurel wreaths and central boss"
                className="h-full w-full object-contain [mix-blend-mode:screen]"
                draggable={false}
                onLoad={() => setReady(true)}
              />
              {/* one-time light sweep across the metal */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="roman-sweep absolute -inset-y-1/2 left-0 w-1/3 [mix-blend-mode:overlay]" />
              </div>
            </div>
          </div>
        </div>

        {/* dust */}
        <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 h-full w-full" />

        {/* vignette */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse at center, rgba(0,0,0,0) 45%, rgba(0,0,0,0.55) 100%)" }}
        />
      </div>

      <style jsx>{`
        .roman-sweep {
          background: linear-gradient(
            105deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.55) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: skewX(-12deg) translateX(-160%);
          animation: roman-sweep 2.6s cubic-bezier(0.22, 1, 0.36, 1) 0.7s 1 both;
        }
        @keyframes roman-sweep {
          to {
            transform: skewX(-12deg) translateX(420%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .roman-sweep {
            animation: none;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
