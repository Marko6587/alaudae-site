// Pure geometry for the Roman line-symbols used by the services scenes.
// Each symbol is a set of "strokes" (polylines) in a normalised design box
// roughly x in [-2, 2], y in [-2.4, 2.4]. From these strokes we can either
// resample evenly spaced particle targets (Three.js) or emit SVG polylines
// (no-WebGL fallback). No illustration files — everything is generated.

export type Point = [number, number]
export type Stroke = Point[]

export type SymbolId = "cyber" | "corporate" | "audits" | "training" | "loss" | "fraud"

// ---- primitive stroke builders -------------------------------------------

function arc(cx: number, cy: number, r: number, a0: number, a1: number, segments = 48): Stroke {
  const pts: Stroke = []
  for (let i = 0; i <= segments; i++) {
    const a = a0 + ((a1 - a0) * i) / segments
    pts.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r])
  }
  return pts
}

function circle(cx: number, cy: number, r: number, segments = 64): Stroke {
  return arc(cx, cy, r, 0, Math.PI * 2, segments)
}

function line(a: Point, b: Point): Stroke {
  return [a, b]
}

const D = (deg: number) => (deg * Math.PI) / 180

// small leaf tick used by the wreath, pointing outward from an arc
function leaf(cx: number, cy: number, angle: number, len: number): Stroke {
  const tip: Point = [cx + Math.cos(angle) * len, cy + Math.sin(angle) * len]
  return [[cx, cy], tip]
}

// ---- the six symbols ------------------------------------------------------

// quadratic bezier sampled as a polyline
function quadEdge(p0: Point, pc: Point, p1: Point, segments = 30): Stroke {
  const pts: Stroke = []
  for (let i = 0; i <= segments; i++) {
    const t = i / segments
    const mt = 1 - t
    const x = mt * mt * p0[0] + 2 * mt * t * pc[0] + t * t * p1[0]
    const y = mt * mt * p0[1] + 2 * mt * t * pc[1] + t * t * p1[1]
    pts.push([x, y])
  }
  return pts
}

function scutum(): Stroke[] {
  // Curved legionary shield: barrel outline, central ridge, round boss.
  const strokes: Stroke[] = []
  strokes.push(line([-1.4, 2.0], [1.4, 2.0])) // top
  strokes.push(quadEdge([1.4, 2.0], [1.75, 0], [1.4, -2.0])) // right barrel edge
  strokes.push(line([1.4, -2.0], [-1.4, -2.0])) // bottom
  strokes.push(quadEdge([-1.4, -2.0], [-1.75, 0], [-1.4, 2.0])) // left barrel edge
  strokes.push(line([0, 1.55], [0, -1.55])) // central ridge
  strokes.push(circle(0, 0, 0.5)) // boss
  return strokes
}

function galea(): Stroke[] {
  // Roman helmet: dome, brow, nose + cheek guards, plume crest.
  const strokes: Stroke[] = []
  strokes.push(arc(0, 0.1, 1.25, D(180), D(0), 48)) // dome
  strokes.push(line([-1.25, 0.1], [1.25, 0.1])) // brow
  strokes.push(line([0, 0.1], [0, -0.95])) // nose guard
  strokes.push(line([-0.95, 0.1], [-0.95, -1.15])) // left cheek
  strokes.push(line([0.95, 0.1], [0.95, -1.15])) // right cheek
  strokes.push(line([-0.95, -1.15], [-0.5, -1.15]))
  strokes.push(line([0.95, -1.15], [0.5, -1.15]))
  strokes.push(quadEdge([-1.15, 0.6], [0, 2.3], [1.15, 0.6], 40)) // plume crest
  return strokes
}

function laurel(): Stroke[] {
  // Two laurel branches forming a near-circle with outward leaves.
  const strokes: Stroke[] = []
  const R = 1.55
  const left = arc(0, 0, R, D(105), D(255), 46)
  const right = arc(0, 0, R, D(75), D(-75), 46)
  strokes.push(left)
  strokes.push(right)
  for (let a = 110; a <= 250; a += 20) {
    strokes.push(leaf(Math.cos(D(a)) * R, Math.sin(D(a)) * R, D(a), 0.42))
  }
  for (let a = -70; a <= 70; a += 20) {
    strokes.push(leaf(Math.cos(D(a)) * R, Math.sin(D(a)) * R, D(a), 0.42))
  }
  return strokes
}

function gladius(): Stroke[] {
  // Short sword: blade, fuller, crossguard, grip, pommel.
  const strokes: Stroke[] = []
  strokes.push([
    [0, 2.25],
    [-0.24, -0.4],
    [0.24, -0.4],
    [0, 2.25],
  ]) // blade triangle
  strokes.push(line([0, 2.0], [0, -0.4])) // fuller
  strokes.push([
    [-0.85, -0.42],
    [0.85, -0.42],
    [0.85, -0.72],
    [-0.85, -0.72],
    [-0.85, -0.42],
  ]) // crossguard
  strokes.push(line([-0.14, -0.72], [-0.14, -1.68])) // grip
  strokes.push(line([0.14, -0.72], [0.14, -1.68]))
  strokes.push(line([-0.14, -1.1], [0.14, -1.1])) // rung
  strokes.push(line([-0.14, -1.4], [0.14, -1.4]))
  strokes.push(circle(0, -1.92, 0.28, 40)) // pommel
  return strokes
}

function scales(): Stroke[] {
  // Scales of justice: post, beam, chains, two pans, finial.
  const strokes: Stroke[] = []
  strokes.push(line([0, 2.0], [0, -1.8])) // post
  strokes.push(line([-0.7, -1.8], [0.7, -1.8])) // base
  strokes.push(line([-1.6, 1.5], [1.6, 1.5])) // beam
  strokes.push([
    [-0.18, 2.0],
    [0.18, 2.0],
    [0, 2.35],
    [-0.18, 2.0],
  ]) // finial
  // left chains + pan
  strokes.push(line([-1.6, 1.5], [-1.6, 0.55]))
  strokes.push(line([-1.6, 1.5], [-1.25, 0.6]))
  strokes.push(line([-1.6, 1.5], [-1.95, 0.6]))
  strokes.push(arc(-1.6, 0.6, 0.62, D(200), D(340), 28))
  // right chains + pan
  strokes.push(line([1.6, 1.5], [1.6, 0.55]))
  strokes.push(line([1.6, 1.5], [1.25, 0.6]))
  strokes.push(line([1.6, 1.5], [1.95, 0.6]))
  strokes.push(arc(1.6, 0.6, 0.62, D(200), D(340), 28))
  return strokes
}

function aquila(): Stroke[] {
  // Legionary eagle standard: body, head, spread wings, tail, wreath, pole.
  const strokes: Stroke[] = []
  strokes.push(circle(0, 1.45, 0.24, 28)) // head
  strokes.push(line([0.2, 1.4], [0.55, 1.3])) // beak
  strokes.push(line([0, 1.2], [0, -0.2])) // body
  // wings
  strokes.push(quadEdge([0, 0.95], [-1.1, 1.7], [-2.0, 1.2], 32))
  strokes.push(quadEdge([0, 0.95], [1.1, 1.7], [2.0, 1.2], 32))
  // feather ticks
  for (let i = 1; i <= 4; i++) {
    const t = i / 5
    strokes.push(line([-t * 1.7, 1.35 - t * 0.1], [-t * 1.7, 0.95 - t * 0.1]))
    strokes.push(line([t * 1.7, 1.35 - t * 0.1], [t * 1.7, 0.95 - t * 0.1]))
  }
  // tail
  strokes.push(line([0, -0.2], [-0.4, -1.0]))
  strokes.push(line([0, -0.2], [0, -1.1]))
  strokes.push(line([0, -0.2], [0.4, -1.0]))
  // wreath ring + pole
  strokes.push(circle(0, -1.55, 0.4, 32))
  strokes.push(line([0, -1.95], [0, -2.35]))
  strokes.push(line([-0.35, -2.35], [0.35, -2.35]))
  return strokes
}

const BUILDERS: Record<SymbolId, () => Stroke[]> = {
  cyber: scutum,
  corporate: galea,
  audits: laurel,
  training: gladius,
  loss: scales,
  fraud: aquila,
}

export function getSymbolStrokes(id: SymbolId): Stroke[] {
  return (BUILDERS[id] ?? scutum)()
}

// ---- resampling to evenly spaced particle targets -------------------------

/**
 * Distribute `count` points evenly (by arc length) across every stroke of a
 * symbol. Returns a flat Float32Array of x,y,z target positions (z ~ 0).
 */
export function sampleSymbolPoints(id: SymbolId, count: number): Float32Array {
  const strokes = getSymbolStrokes(id)

  // Build a flat list of segments with cumulative length.
  type Seg = { a: Point; b: Point; len: number; acc: number }
  const segs: Seg[] = []
  let total = 0
  for (const stroke of strokes) {
    for (let i = 0; i < stroke.length - 1; i++) {
      const a = stroke[i]
      const b = stroke[i + 1]
      const len = Math.hypot(b[0] - a[0], b[1] - a[1])
      if (len < 1e-6) continue
      total += len
      segs.push({ a, b, len, acc: total })
    }
  }

  const out = new Float32Array(count * 3)
  if (total === 0 || segs.length === 0) return out

  let si = 0
  for (let i = 0; i < count; i++) {
    // even spacing plus a tiny stagger so particles don't perfectly overlap
    const target = ((i + 0.5) / count) * total
    while (si < segs.length - 1 && segs[si].acc < target) si++
    const seg = segs[si]
    const segStart = seg.acc - seg.len
    const t = seg.len > 0 ? (target - segStart) / seg.len : 0
    out[i * 3] = seg.a[0] + (seg.b[0] - seg.a[0]) * t
    out[i * 3 + 1] = seg.a[1] + (seg.b[1] - seg.a[1]) * t
    out[i * 3 + 2] = (Math.random() - 0.5) * 0.12 // subtle depth
  }
  return out
}

// ---- SVG fallback ---------------------------------------------------------

/** viewBox is centred on the design box; y is flipped for SVG coordinates. */
export function buildSymbolSvg(id: SymbolId): { viewBox: string; polylines: string[] } {
  const strokes = getSymbolStrokes(id)
  const polylines = strokes.map((s) => s.map(([x, y]) => `${x.toFixed(3)},${(-y).toFixed(3)}`).join(" "))
  return { viewBox: "-2.6 -2.8 5.2 5.6", polylines }
}
