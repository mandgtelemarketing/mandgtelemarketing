'use client'

import { useEffect, useRef, useState } from 'react'

/*
  The hero's signature moment: a cord switchboard patching a waiting lead
  through to a producer. Everything is a pure function of time, so a frozen
  time gives the reduced-motion still.
*/

const W = 600
const H = 470
const COLS = 6
const LEAD_X = Array.from({ length: COLS }, (_, i) => 80 + i * 88)
const LEAD_ROWS = [
  { lamp: 96, jack: 122 },
  { lamp: 176, jack: 202 },
]
const PROD_X = [150, 300, 450]
const PROD_LAMP_Y = 290
const PROD_JACK_Y = 318
const SHELF_Y = 412
const CORD_COLORS = ['#b5342a', '#2f7f4c', '#a8322a']
const CYCLE = 6.2
const CORDS = 3

type Pt = { x: number; y: number }

const leadJack = (i: number): Pt => ({ x: LEAD_X[i % COLS], y: LEAD_ROWS[Math.floor(i / COLS)].jack })
const leadLamp = (i: number): Pt => ({ x: LEAD_X[i % COLS], y: LEAD_ROWS[Math.floor(i / COLS)].lamp })
const restA = (k: number): Pt => ({ x: 128 + k * 150, y: SHELF_Y })
const restB = (k: number): Pt => ({ x: 176 + k * 150, y: SHELF_Y })

// Deterministic picks so every visitor sees a varied but repeatable board.
const LEAD_ORDER = [3, 8, 0, 10, 5, 1, 7, 11, 2, 9, 4, 6]
const leadFor = (n: number) => LEAD_ORDER[((n % 12) + 12) % 12]
const prodFor = (n: number) => [1, 0, 2, 1, 2, 0][((n % 6) + 6) % 6]

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v))
const ease = (p: number) => 1 - Math.pow(1 - clamp(p), 3)

function travel(from: Pt, to: Pt, p: number): Pt {
  const e = ease(p)
  return { x: from.x + (to.x - from.x) * e, y: from.y + (to.y - from.y) * e - 46 * Math.sin(Math.PI * clamp(p)) }
}

type Cord = { a: Pt; b: Pt; color: string }
type Board = {
  cords: Cord[]
  blinking: number | null
  litLeads: number[]
  greenProds: number[]
  status: { text: string; tone: 'amber' | 'green' }
}

function boardAt(t: number): Board {
  const n = Math.floor(t / CYCLE)
  const local = t - n * CYCLE
  const cords: Cord[] = []
  const litLeads: number[] = []
  const greenProds: number[] = []

  for (let k = 0; k < CORDS; k++) {
    // Latest cycle that used cord k.
    let m = n - (((n - k) % CORDS) + CORDS) % CORDS
    const color = CORD_COLORS[k]
    if (m < 0) {
      cords.push({ a: restA(k), b: restB(k), color })
      continue
    }
    const lt = m === n ? local : CYCLE * (n - m) + local
    const lead = leadFor(m)
    const prod = prodFor(m)
    const prev = m - CORDS
    // At the start of its turn, a cord first comes back from its previous patch.
    const fromA = prev >= 0 ? leadJack(leadFor(prev)) : restA(k)
    const fromB = prev >= 0 ? { x: PROD_X[prodFor(prev)], y: PROD_JACK_Y } : restB(k)
    const back = clamp(lt / 0.7)
    let a = travel(fromA, restA(k), back)
    let b = travel(fromB, restB(k), back)
    if (prev < 0 && lt < 0.7) {
      a = restA(k)
      b = restB(k)
    }
    if (lt >= 0.9) a = travel(restA(k), leadJack(lead), (lt - 0.9) / 0.85)
    if (lt >= 1.95) b = travel(restB(k), { x: PROD_X[prod], y: PROD_JACK_Y }, (lt - 1.95) / 0.95)
    cords.push({ a, b, color })
    if (lt >= 2.9) {
      greenProds.push(prod)
      litLeads.push(lead)
    }
  }

  const lead = leadFor(n)
  let status: Board['status']
  if (local < 1.75) status = { text: `Lead ${lead + 1} waiting`, tone: 'amber' }
  else if (local < 2.9) status = { text: 'Patching through', tone: 'amber' }
  else status = { text: `Live transfer: Producer ${'ABC'[prodFor(n)]}`, tone: 'green' }

  return { cords, blinking: local < 2.9 ? lead : null, litLeads, greenProds, status }
}

function cordPath(a: Pt, b: Pt) {
  const ay = a.y + 24
  const by = b.y + 24
  const sag = 70 + Math.abs(b.x - a.x) * 0.32 + Math.abs(b.y - a.y) * 0.15
  return `M${a.x} ${ay} C ${a.x} ${ay + sag}, ${b.x} ${by + sag}, ${b.x} ${by}`
}

function Plug({ p }: { p: Pt }) {
  return (
    <g transform={`translate(${p.x} ${p.y})`}>
      <rect x={-3} y={-2} width={6} height={9} rx={2} fill="url(#brassV)" />
      <rect x={-6.5} y={6} width={13} height={19} rx={3} fill="#1b1a17" stroke="#3a362f" />
      <rect x={-5.5} y={8} width={3} height={15} rx={1.5} fill="rgb(255 255 255 / 0.12)" />
    </g>
  )
}

function Jack({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r={12.5} fill="url(#brassR)" />
      <circle cx={x} cy={y} r={12.5} fill="none" stroke="rgb(0 0 0 / 0.45)" />
      <circle cx={x} cy={y} r={5.5} fill="#050505" />
    </g>
  )
}

function Lamp({ x, y, on, blink }: { x: number; y: number; on?: 'amber' | 'green'; blink?: boolean }) {
  const fill = on === 'green' ? 'url(#lampG)' : on === 'amber' ? 'url(#lampA)' : 'url(#lampOff)'
  return (
    <g className={blink ? 'sb-blink' : undefined}>
      {on && <circle cx={x} cy={y} r={15} fill={on === 'green' ? 'rgb(79 214 130 / 0.22)' : 'rgb(255 180 58 / 0.25)'} filter="url(#glow)" />}
      <circle cx={x} cy={y} r={8} fill="#2b2823" />
      <circle cx={x} cy={y} r={6.5} fill={fill} />
    </g>
  )
}

export function Switchboard() {
  const [t, setT] = useState(CYCLE * 2 + 3.4)
  const ref = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    let visible = true
    let last = performance.now()
    let time = 0.2
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting))
    if (ref.current) io.observe(ref.current)
    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now
      if (visible && !document.hidden) {
        time += dt
        setT(time)
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
    }
  }, [])

  const board = boardAt(t)

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${W} ${H}`}
      className="h-auto w-full drop-shadow-[0_30px_40px_rgba(0,0,0,0.6)]"
      role="img"
      aria-label="A switchboard patching a waiting lead through to a producer as a live transfer."
    >
      <defs>
        <linearGradient id="oak" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#9a6233" />
          <stop offset="0.5" stopColor="#6a3d1d" />
          <stop offset="1" stopColor="#40230f" />
        </linearGradient>
        <pattern id="grain" width="600" height="8" patternUnits="userSpaceOnUse">
          <path d="M0 2 Q150 0 300 3 T600 2" stroke="rgb(0 0 0 / 0.18)" fill="none" />
          <path d="M0 6 Q200 8 400 5 T600 6" stroke="rgb(255 255 255 / 0.05)" fill="none" />
        </pattern>
        <linearGradient id="bakelite" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1d1b18" />
          <stop offset="1" stopColor="#100f0d" />
        </linearGradient>
        <linearGradient id="brassH" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f0d48a" />
          <stop offset="0.5" stopColor="#c9a14b" />
          <stop offset="1" stopColor="#7d5f25" />
        </linearGradient>
        <linearGradient id="brassV" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#7d5f25" />
          <stop offset="0.45" stopColor="#f0d48a" />
          <stop offset="1" stopColor="#8e6d2a" />
        </linearGradient>
        <radialGradient id="brassR" cx="0.38" cy="0.32" r="0.75">
          <stop offset="0" stopColor="#f6e2a6" />
          <stop offset="0.55" stopColor="#c9a14b" />
          <stop offset="1" stopColor="#6e5320" />
        </radialGradient>
        <radialGradient id="lampOff" cx="0.35" cy="0.3" r="0.8">
          <stop offset="0" stopColor="#4d4840" />
          <stop offset="1" stopColor="#171614" />
        </radialGradient>
        <radialGradient id="lampA" cx="0.35" cy="0.3" r="0.8">
          <stop offset="0" stopColor="#fff4d6" />
          <stop offset="0.45" stopColor="#ffb43a" />
          <stop offset="1" stopColor="#a35d00" />
        </radialGradient>
        <radialGradient id="lampG" cx="0.35" cy="0.3" r="0.8">
          <stop offset="0" stopColor="#e9fff1" />
          <stop offset="0.45" stopColor="#4fd682" />
          <stop offset="1" stopColor="#16703a" />
        </radialGradient>
        <filter id="glow" x="-1" y="-1" width="3" height="3">
          <feGaussianBlur stdDeviation="5" />
        </filter>
        <filter id="cordShadow" x="-0.2" y="-0.2" width="1.4" height="1.4">
          <feDropShadow dx="0" dy="6" stdDeviation="4" floodOpacity="0.55" />
        </filter>
        <clipPath id="inner">
          <rect x="18" y="18" width={W - 36} height={H - 36} rx="6" />
        </clipPath>
      </defs>

      {/* Oak cabinet frame */}
      <rect width={W} height={H} rx="14" fill="url(#oak)" />
      <rect width={W} height={H} rx="14" fill="url(#grain)" />
      <rect x="18" y="18" width={W - 36} height={H - 36} rx="6" fill="url(#bakelite)" stroke="#000" strokeOpacity="0.6" />

      {/* Header plate with live status */}
      <g>
        <rect x="40" y="36" width="520" height="30" rx="4" fill="url(#brassH)" />
        <text x="58" y="56" fill="#2a2214" fontSize="12.5" fontWeight="800" letterSpacing="2.4" fontFamily="var(--font-heading)">
          INCOMING LEADS
        </text>
        <g transform="translate(332 44)">
          <rect width="214" height="15" rx="2" fill="#eee5cd" />
          <circle cx="11" cy="7.5" r="4.5" fill={board.status.tone === 'green' ? '#2fb466' : '#e08a00'} />
          <text x="22" y="11.6" fill="#22201b" fontSize="10.5" fontWeight="700" letterSpacing="0.8" fontFamily="var(--font-heading)">
            {board.status.text.toUpperCase()}
          </text>
        </g>
      </g>

      {/* Lead lamps and jacks */}
      {Array.from({ length: COLS * 2 }, (_, i) => {
        const l = leadLamp(i)
        const j = leadJack(i)
        const waiting = board.blinking === i
        const lit = board.litLeads.includes(i)
        return (
          <g key={i}>
            <Lamp x={l.x} y={l.y} on={waiting || lit ? 'amber' : undefined} blink={waiting} />
            <Jack x={j.x} y={j.y} />
          </g>
        )
      })}
      <g>
        {[0, 1].map((r) => (
          <g key={r}>
            <rect x="52" y={LEAD_ROWS[r].jack + 18} width="496" height="13" rx="1.5" fill="#e6dcc2" opacity="0.92" />
            {LEAD_X.map((x, c) => (
              <text key={c} x={x} y={LEAD_ROWS[r].jack + 28} textAnchor="middle" fill="#3a352b" fontSize="9" fontWeight="700" fontFamily="var(--font-heading)">
                {r * COLS + c + 1}
              </text>
            ))}
          </g>
        ))}
      </g>

      {/* Producer section */}
      <rect x="40" y="252" width="520" height="2" fill="#000" opacity="0.6" />
      <rect x="40" y="254" width="520" height="1" fill="#fff" opacity="0.05" />
      <text x="58" y="276" fill="#c9a14b" fontSize="12" fontWeight="800" letterSpacing="2.4" fontFamily="var(--font-heading)">
        YOUR PRODUCERS
      </text>
      {PROD_X.map((x, i) => (
        <g key={x}>
          <Lamp x={x} y={PROD_LAMP_Y} on={board.greenProds.includes(i) ? 'green' : undefined} />
          <Jack x={x} y={PROD_JACK_Y} />
          <rect x={x - 46} y={PROD_JACK_Y + 20} width="92" height="16" rx="1.5" fill="#eee5cd" />
          <text x={x} y={PROD_JACK_Y + 32} textAnchor="middle" fill="#22201b" fontSize="10" fontWeight="800" letterSpacing="1.4" fontFamily="var(--font-heading)">
            PRODUCER {'ABC'[i]}
          </text>
        </g>
      ))}

      {/* Cord shelf */}
      <rect x="18" y="384" width={W - 36} height="68" fill="#0c0b0a" />
      <rect x="18" y="384" width={W - 36} height="3" fill="url(#brassH)" opacity="0.8" />

      {/* Cords, drawn last so they hang over the panel */}
      <g clipPath="url(#inner)">
        {board.cords.map((c, k) => {
          const d = cordPath(c.a, c.b)
          return (
            <g key={k} filter="url(#cordShadow)">
              <path d={d} stroke="#0a0908" strokeWidth="7.5" fill="none" strokeLinecap="round" />
              <path d={d} stroke={c.color} strokeWidth="5" fill="none" strokeLinecap="round" />
              <path d={d} stroke="rgb(255 255 255 / 0.22)" strokeWidth="1.4" fill="none" strokeDasharray="3 4" />
              <Plug p={c.a} />
              <Plug p={c.b} />
            </g>
          )
        })}
      </g>
    </svg>
  )
}
