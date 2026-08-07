// Ordered line geometry for the cinematic "self-drawing" Roman shield hero.
//
// Everything is generated as polylines ("pieces") in a shared design space and
// returned in the exact order the line should trace them, starting from a
// single point and building an authentic Roman scutum: a rounded-rectangle
// body with a riveted bronze border, a central boss (umbo), four symmetric
// feathered wings and a vertical winged-thunderbolt (fulmen). No art files.

export type Pt = [number, number]
export type Piece = { pts: Pt[]; z: number }

const D = (deg: number) => (deg * Math.PI) / 180

// ---- primitive builders ---------------------------------------------------

function arc(cx: number, cy: number, r: number, a0: number, a1: number, seg = 48): Pt[] {
  const out: Pt[] = []
  for (let i = 0; i <= seg; i++) {
    const a = a0 + ((a1 - a0) * i) / seg
    out.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r])
  }
  return out
}

function circle(cx: number, cy: number, r: number, seg = 72): Pt[] {
  return arc(cx, cy, r, 0, Math.PI * 2, seg)
}

function quad(p0: Pt, pc: Pt, p1: Pt, seg = 24): Pt[] {
  const out: Pt[] = []
  for (let i = 0; i <= seg; i++) {
    const t = i / seg
    const mt = 1 - t
    out.push([
      mt * mt * p0[0] + 2 * mt * t * pc[0] + t * t * p1[0],
      mt * mt * p0[1] + 2 * mt * t * pc[1] + t * t * p1[1],
    ])
  }
  return out
}

// Continuous rounded-rectangle loop (the scutum body), drawn clockwise.
function roundedRect(hw: number, hh: number, r: number, seg = 12): Pt[] {
  const out: Pt[] = []
  out.push([-hw + r, hh], [hw - r, hh]) // top edge
  for (const q of arc(hw - r, hh - r, r, D(90), D(0), seg)) out.push(q) // TR
  out.push([hw, -hh + r]) // right edge
  for (const q of arc(hw - r, -hh + r, r, D(0), D(-90), seg)) out.push(q) // BR
  out.push([-hw + r, -hh]) // bottom edge
  for (const q of arc(-hw + r, -hh + r, r, D(-90), D(-180), seg)) out.push(q) // BL
  out.push([-hw, hh - r]) // left edge
  for (const q of arc(-hw + r, hh - r, r, D(180), D(90), seg)) out.push(q) // TL
  return out
}

// Resample a path into n evenly (arc-length) spaced points — for rivet studs.
function resample(path: Pt[], n: number): Pt[] {
  const cum: number[] = [0]
  let L = 0
  for (let i = 1; i < path.length; i++) {
    L += Math.hypot(path[i][0] - path[i - 1][0], path[i][1] - path[i - 1][1])
    cum.push(L)
  }
  const out: Pt[] = []
  for (let k = 0; k < n; k++) {
    const d = (L * k) / n
    let i = 1
    while (i < cum.length && cum[i] < d) i++
    if (i >= path.length) i = path.length - 1
    const span = cum[i] - cum[i - 1] || 1
    const t = (d - cum[i - 1]) / span
    out.push([path[i - 1][0] + (path[i][0] - path[i - 1][0]) * t, path[i - 1][1] + (path[i][1] - path[i - 1][1]) * t])
  }
  return out
}

// Zigzag bolt from a to b with perpendicular deviation (the thunderbolt shaft).
function zigzag(a: Pt, b: Pt, steps: number, amp: number): Pt[] {
  const dx = b[0] - a[0]
  const dy = b[1] - a[1]
  const len = Math.hypot(dx, dy)
  const dir: Pt = [dx / len, dy / len]
  const perp: Pt = [-dir[1], dir[0]]
  const out: Pt[] = []
  for (let i = 0; i <= steps; i++) {
    const t = i / steps
    const s = i === 0 || i === steps ? 0 : i % 2 === 0 ? amp : -amp
    out.push([a[0] + dir[0] * len * t + perp[0] * s, a[1] + dir[1] * len * t + perp[1] * s])
  }
  return out
}

// A single curved feather stroke from a root, sweeping in a direction, hooking.
function feather(ox: number, oy: number, ang: number, len: number, curl: number): Pt[] {
  const dir: Pt = [Math.cos(ang), Math.sin(ang)]
  const perp: Pt = [-dir[1], dir[0]]
  const tip: Pt = [ox + dir[0] * len, oy + dir[1] * len]
  const mid: Pt = [ox + dir[0] * len * 0.5 + perp[0] * curl, oy + dir[1] * len * 0.5 + perp[1] * curl]
  return quad([ox, oy], mid, tip, 18)
}

// An eagle wing (upper-right): tall inner primaries next to the thunderbolt
// shading down to short, down-curling outer feathers, plus a leading-edge
// contour across the tips so the wing reads as a solid, neat silhouette.
function wing(): Pt[][] {
  const out: Pt[][] = []
  const tips: Pt[] = []
  const n = 7
  for (let i = 0; i < n; i++) {
    const t = i / (n - 1) // 0 = inner (by the bolt), 1 = outer
    const ang = D(86 - t * 76) // near-vertical inner -> near-horizontal outer
    const len = 1.15 * (0.5 + 0.5 * (1 - t)) // long inner, short outer
    const rx = 0.14 + t * 0.24
    const ry = 0.36 - t * 0.26
    const curl = -0.09 - t * 0.16 // outer tips droop/curl outward
    const f = feather(rx, ry, ang, len, curl)
    out.push(f)
    tips.push(f[f.length - 1])
  }
  out.push(tips) // leading-edge contour across the feather tips
  return out
}

const mirrorX = (pts: Pt[]): Pt[] => pts.map(([x, y]) => [-x, y] as Pt)
const mirrorY = (pts: Pt[]): Pt[] => pts.map(([x, y]) => [x, -y] as Pt)

// ---- the full ordered scene: the scutum, drawn as one journey -------------

const HW = 1.5 // half width
const HH = 2.15 // half height
const CR = 0.4 // corner radius

function rawScene(): Piece[] {
  const p: Piece[] = []

  // 1) shield body outline — the line's opening journey around the barrel
  p.push({ pts: roundedRect(HW, HH, CR, 14), z: 0 })

  // 2) inner border line (defines the bronze rim band)
  const t = 0.26
  p.push({ pts: roundedRect(HW - t, HH - t, CR - t * 0.5, 14), z: 0.02 })

  // 3) rivet studs evenly spaced along the middle of the rim band
  const studPath = roundedRect(HW - t * 0.5, HH - t * 0.5, CR - t * 0.25, 24)
  for (const [sx, sy] of resample(studPath, 34)) {
    p.push({ pts: circle(sx, sy, 0.045, 12), z: 0.03 })
  }

  // 4) vertical thunderbolt shaft (zigzag) above and below the boss
  p.push({ pts: zigzag([0, 0.5], [0, HH - t - 0.28], 6, 0.055), z: 0.06 })
  p.push({ pts: zigzag([0, -0.5], [0, -(HH - t - 0.28)], 6, 0.055), z: 0.06 })

  // 5) trident finial (top) and barbed arrow finial (bottom)
  const top = HH - t - 0.28
  p.push({ pts: [[0, top], [0, top + 0.3]], z: 0.06 })
  p.push({ pts: [[0, top + 0.06], [-0.17, top + 0.32]], z: 0.06 })
  p.push({ pts: [[0, top + 0.06], [0.17, top + 0.32]], z: 0.06 })
  const bot = -(HH - t - 0.28)
  p.push({ pts: [[0, bot], [0, bot - 0.3]], z: 0.06 })
  p.push({ pts: [[0, bot - 0.3], [-0.15, bot - 0.12]], z: 0.06 })
  p.push({ pts: [[0, bot - 0.3], [0.15, bot - 0.12]], z: 0.06 })

  // 6) four symmetric eagle wings emerging from behind the boss
  const upperRight = wing()
  for (const f of upperRight) p.push({ pts: f, z: 0.08 })
  for (const f of upperRight) p.push({ pts: mirrorX(f), z: 0.08 }) // upper left
  for (const f of upperRight) p.push({ pts: mirrorY(f), z: 0.08 }) // lower right
  for (const f of upperRight) p.push({ pts: mirrorX(mirrorY(f)), z: 0.08 }) // lower left

  // 7) central boss (umbo): rim, inner ring, domed centre and a ring of rivets
  p.push({ pts: circle(0, 0, 0.36, 44), z: 0.11 })
  p.push({ pts: circle(0, 0, 0.28, 40), z: 0.12 })
  p.push({ pts: circle(0, 0, 0.12, 28), z: 0.13 }) // domed centre
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2
    p.push({ pts: circle(Math.cos(a) * 0.32, Math.sin(a) * 0.32, 0.022, 10), z: 0.12 })
  }

  return p
}

// Centre the whole composition on the origin and report its extent so the
// camera can frame it. Returns pieces ready to resample in the renderer.
export function buildCinematicScene(): { pieces: Piece[]; width: number; height: number } {
  const pieces = rawScene()
  let minX = Infinity
  let minY = Infinity
  let maxX = -Infinity
  let maxY = -Infinity
  for (const { pts } of pieces) {
    for (const [x, y] of pts) {
      if (x < minX) minX = x
      if (x > maxX) maxX = x
      if (y < minY) minY = y
      if (y > maxY) maxY = y
    }
  }
  const cx = (minX + maxX) / 2
  const cy = (minY + maxY) / 2
  const centred = pieces.map(({ pts, z }) => ({ pts: pts.map(([x, y]) => [x - cx, y - cy] as Pt), z }))
  return { pieces: centred, width: maxX - minX, height: maxY - minY }
}

// ---- static SVG fallback (no WebGL): a clean shield outline ---------------

export function buildFallbackSvg(): { viewBox: string; polylines: string[] } {
  const { pieces } = buildCinematicScene()
  const polylines = pieces.map(({ pts }) => pts.map(([x, y]) => `${x.toFixed(3)},${(-y).toFixed(3)}`).join(" "))
  return { viewBox: "-2.4 -2.7 4.8 5.4", polylines }
}
