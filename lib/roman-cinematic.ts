// Ordered line geometry for the cinematic "self-drawing" Roman shield hero.
//
// Everything is generated as polylines ("pieces") in a shared design space and
// returned in the exact order the glowing line should trace them, starting from
// a single point and building the ornate scutum with all its motifs. Each piece
// also carries a small z so the composition reads with depth/parallax. No art files.

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

function quad(p0: Pt, pc: Pt, p1: Pt, seg = 32): Pt[] {
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

// A continuous Greek-key (meander) run from A to B. `perp` pushes the pattern
// to one side (inward). Returns one polyline so it draws as a single stroke.
function meander(a: Pt, b: Pt, units: number, amp: number): Pt[] {
  const dx = b[0] - a[0]
  const dy = b[1] - a[1]
  const len = Math.hypot(dx, dy)
  const dir: Pt = [dx / len, dy / len]
  const perp: Pt = [-dir[1], dir[0]]
  // one key unit, x along edge (0..1), y along perpendicular (0..1), returns to baseline
  const unit: Pt[] = [
    [0, 0],
    [0, 1],
    [0.78, 1],
    [0.78, 0.28],
    [0.28, 0.28],
    [0.28, 0.72],
    [0.52, 0.72],
    [0.52, 0],
  ]
  const out: Pt[] = []
  for (let i = 0; i < units; i++) {
    for (const [kx, ky] of unit) {
      const along = (i + kx) / units
      out.push([
        a[0] + dir[0] * len * along + perp[0] * ky * amp,
        a[1] + dir[1] * len * along + perp[1] * ky * amp,
      ])
    }
  }
  out.push([b[0], b[1]])
  return out
}

// small spiral flourish (filigree) starting at p, winding inward
function spiral(cx: number, cy: number, r: number, turns: number, dir = 1, seg = 40): Pt[] {
  const out: Pt[] = []
  for (let i = 0; i <= seg; i++) {
    const t = i / seg
    const a = dir * t * Math.PI * 2 * turns
    const rr = r * (1 - t * 0.85)
    out.push([cx + Math.cos(a) * rr, cy + Math.sin(a) * rr])
  }
  return out
}

// ---- the eagle (aquila), reused small at the shield centre ----------------

function aquila(scale: number, ox: number, oy: number): Pt[][] {
  const S = (p: Pt): Pt => [p[0] * scale + ox, p[1] * scale + oy]
  const map = (pts: Pt[]) => pts.map(S)
  const pieces: Pt[][] = []
  pieces.push(map(circle(0, 1.45, 0.24, 24))) // head
  pieces.push(map([[0.2, 1.42], [0.6, 1.32]])) // beak
  pieces.push(map([[0, 1.2], [0, -0.2]])) // body
  pieces.push(map(quad([0, 0.95], [-1.15, 1.75], [-2.05, 1.15], 26))) // left wing
  pieces.push(map(quad([0, 0.95], [1.15, 1.75], [2.05, 1.15], 26))) // right wing
  for (let i = 1; i <= 4; i++) {
    const t = i / 5
    pieces.push(map([[-t * 1.75, 1.35 - t * 0.1], [-t * 1.75, 0.95 - t * 0.12]]))
    pieces.push(map([[t * 1.75, 1.35 - t * 0.1], [t * 1.75, 0.95 - t * 0.12]]))
  }
  pieces.push(map([[0, -0.2], [-0.42, -1.0]])) // tail feathers
  pieces.push(map([[0, -0.2], [0, -1.12]]))
  pieces.push(map([[0, -0.2], [0.42, -1.0]]))
  return pieces
}

// ---- the full ordered scene: the scutum, drawn as one journey -------------

function rawScene(): Piece[] {
  const p: Piece[] = []

  // 1) shield barrel outline as one continuous loop (the line's opening journey)
  const outline: Pt[] = [
    [-1.55, 2.15],
    [1.55, 2.15],
    ...quad([1.55, 2.15], [1.95, 0], [1.55, -2.15], 28),
    [-1.55, -2.15],
    ...quad([-1.55, -2.15], [-1.95, 0], [-1.55, 2.15], 28),
  ]
  p.push({ pts: outline, z: 0 })

  // 2) Greek-key meander border, one run per edge (inset from the outline)
  const bx = 1.28
  const by = 1.85
  p.push({ pts: meander([-bx, by], [bx, by], 6, -0.26), z: 0.04 }) // top (push down/in)
  p.push({ pts: meander([bx, -by], [-bx, -by], 6, -0.26), z: 0.04 }) // bottom
  p.push({ pts: meander([-bx, -by], [-bx, by], 5, 0.26), z: 0.04 }) // left
  p.push({ pts: meander([bx, by], [bx, -by], 5, 0.26), z: 0.04 }) // right

  // 3) central ridge
  p.push({ pts: [[0, 1.55], [0, -1.55]], z: 0.06 })

  // 4) radiating sunburst behind the boss
  const rays = 24
  for (let i = 0; i < rays; i++) {
    const a = (i / rays) * Math.PI * 2
    p.push({
      pts: [
        [Math.cos(a) * 0.62, Math.sin(a) * 0.62],
        [Math.cos(a) * 1.15, Math.sin(a) * 1.15],
      ],
      z: 0.05,
    })
  }

  // 5) laurel ring around the centre (two branches + outward leaves)
  const R = 1.22
  p.push({ pts: arc(0, 0, R, D(102), D(258), 40), z: 0.07 })
  p.push({ pts: arc(0, 0, R, D(78), D(-78), 40), z: 0.07 })
  for (let a = 100; a <= 260; a += 20) {
    p.push({ pts: [[Math.cos(D(a)) * R, Math.sin(D(a)) * R], [Math.cos(D(a)) * (R + 0.34), Math.sin(D(a)) * (R + 0.34)]], z: 0.07 })
  }
  for (let a = -80; a <= 80; a += 20) {
    p.push({ pts: [[Math.cos(D(a)) * R, Math.sin(D(a)) * R], [Math.cos(D(a)) * (R + 0.34), Math.sin(D(a)) * (R + 0.34)]], z: 0.07 })
  }

  // 6) the eagle at the centre
  for (const piece of aquila(0.46, 0, -0.05)) p.push({ pts: piece, z: 0.1 })

  // 7) central boss
  p.push({ pts: circle(0, 0.05, 0.32, 40), z: 0.11 })

  // 8) filigree flourishes in all four corners
  p.push({ pts: spiral(-1.05, 1.5, 0.3, 1.4, 1, 34), z: 0.05 })
  p.push({ pts: spiral(1.05, 1.5, 0.3, 1.4, -1, 34), z: 0.05 })
  p.push({ pts: spiral(-1.05, -1.5, 0.3, 1.4, -1, 34), z: 0.05 })
  p.push({ pts: spiral(1.05, -1.5, 0.3, 1.4, 1, 34), z: 0.05 })

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
  return { viewBox: "-2.6 -2.9 5.2 5.8", polylines }
}
