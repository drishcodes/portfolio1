import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiCode, FiAward, FiTrendingUp, FiTarget, FiZap, FiLoader } from 'react-icons/fi'
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si'

// ── static GFG data (scraped from profile) ──────────────────────────
const GFG_DATA = {
  username: 'drishtio1b5',
  solved: 80,
  score: 219,
  streak: 13,
  easy: 35,
  medium: 42,
  hard: 3,
  
  url: 'https://www.geeksforgeeks.org/profile/drishtio1b5',
}

// ── LeetCode username ───────────────────────────────────────────────
const LC_USERNAME = 'driish__'
const LC_URL      = 'https://leetcode.com/u/driish__/'

// ── tiny circular progress SVG ──────────────────────────────────────
function CircleProgress({ value, max, color, size = 80, stroke = 6 }) {
  const r   = (size - stroke) / 2
  const circ = 2 * Math.PI * r
  const pct  = Math.min(value / max, 1)
  return (
    <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
      <circle cx={size/2} cy={size/2} r={r} fill="none"
        stroke="rgba(255,255,255,0.05)" strokeWidth={stroke} />
      <motion.circle cx={size/2} cy={size/2} r={r} fill="none"
        stroke={color} strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circ}
        initial={{ strokeDashoffset: circ }}
        animate={{ strokeDashoffset: circ - pct * circ }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
      />
    </svg>
  )
}

// ── difficulty pill ─────────────────────────────────────────────────
function DiffPill({ label, solved, total, color }) {
  return (
    <div className="flex flex-col items-center gap-1 px-3 py-2 rounded-xl"
      style={{ background: `${color}10`, border: `1px solid ${color}20` }}>
      <span className="font-display text-xl font-bold" style={{ color }}>{solved}</span>
      <span className="font-mono text-[10px] text-slate-600 uppercase tracking-wider">{label}</span>
      {total && <span className="font-mono text-[9px] text-slate-700">/{total}</span>}
    </div>
  )
}

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}>
      {children}
    </motion.div>
  )
}

// ── LeetCode card (live data) ────────────────────────────────────────
function LeetCodeCard() {
  const [data, setData]   = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(`https://leetcode-stats-api.herokuapp.com/${LC_USERNAME}`)
      .then(r => r.json())
      .then(d => {
        if (d.status === 'success') setData(d)
        else setError(true)
      })
      .catch(() => setError(true))
  }, [])

  // fallback static data if API fails
  const fallback = {
    totalSolved: 187, easySolved: 75, mediumSolved: 104, hardSolved: 8,
    totalEasy: 850, totalMedium: 1800, totalHard: 800,
     acceptanceRate: 50.2,
  }
  const d = data || (error ? fallback : null)

  return (
    <FadeIn delay={0.1}>
      <div className="card-glass rounded-2xl overflow-hidden h-full"
        style={{ border: '1px solid rgba(255,185,0,0.15)' }}>

        {/* Header */}
        <div className="relative p-5 pb-0">
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,185,0,0.06) 0%, transparent 80%)' }} />
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #ffa116, #ff6b00)' }}>
                <SiLeetcode size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-display text-lg text-white">LeetCode</h3>
                <a href={LC_URL} target="_blank" rel="noreferrer"
                  className="font-mono text-xs hover:text-yellow-300 transition-colors flex items-center gap-1"
                  style={{ color: 'rgba(255,185,0,0.6)' }}>
                  @{LC_USERNAME} <FiExternalLink size={10} />
                </a>
              </div>
            </div>
            <a href={LC_URL} target="_blank" rel="noreferrer"
              className="text-xs font-mono px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all"
              style={{ border: '1px solid rgba(255,185,0,0.2)', color: 'rgba(255,185,0,0.7)',
                background: 'rgba(255,185,0,0.05)' }}>
              Visit <FiExternalLink size={11} />
            </a>
          </div>
        </div>

        {/* Body */}
        <div className="p-5 pt-3">
          {!d ? (
            <div className="flex flex-col items-center justify-center py-10 gap-3">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}>
                <FiLoader size={24} className="text-yellow-500/50" />
              </motion.div>
              <span className="font-mono text-xs text-slate-600">Fetching live stats…</span>
            </div>
          ) : (
            <>
              {error && (
                <div className="mb-3 px-3 py-1.5 rounded-lg text-center"
                  style={{ background: 'rgba(255,185,0,0.06)', border: '1px solid rgba(255,185,0,0.1)' }}>
                  <span className="font-mono text-xs text-yellow-600/60">Showing cached stats</span>
                </div>
              )}

              {/* Circle + total */}
              <div className="flex items-center gap-5 mb-5">
                <div className="relative flex-shrink-0">
                  <CircleProgress value={d.totalSolved}
                    max={(d.totalEasy || 850) + (d.totalMedium || 1800) + (d.totalHard || 800)}
                    color="#ffa116" size={88} stroke={7} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-display text-xl font-bold text-white leading-none">{d.totalSolved}</span>
                    <span className="font-mono text-[9px] text-slate-600 uppercase">solved</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 flex-1">
                  <DiffPill label="Easy"   solved={d.easySolved}   total={d.totalEasy}   color="#22c55e" />
                </div>
                <div className="flex flex-col gap-1.5 flex-1">
                  <DiffPill label="Medium" solved={d.mediumSolved} total={d.totalMedium} color="#f59e0b" />
                </div>
                <div className="flex flex-col gap-1.5 flex-1">
                  <DiffPill label="Hard"   solved={d.hardSolved}   total={d.totalHard}   color="#ef4444" />
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: <FiTrendingUp size={13} />, label: 'Global Rank',
                    value: d.ranking && d.ranking !== 'N/A' ? `#${Number(d.ranking).toLocaleString()}` : 'N/A',
                    color: '#ffa116' },
                  { icon: <FiTarget size={13} />, label: 'Acceptance',
                    value: `${parseFloat(d.acceptanceRate || 0).toFixed(1)}%`,
                    color: '#63b3ed' },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl p-3 flex items-center gap-2"
                    style={{ background: 'rgba(8,11,18,0.8)', border: '1px solid rgba(255,255,255,0.04)' }}>
                    <span style={{ color: s.color }}>{s.icon}</span>
                    <div>
                      <div className="font-display text-base font-bold text-white leading-none">{s.value}</div>
                      <div className="font-mono text-[10px] text-slate-600 mt-0.5">{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </FadeIn>
  )
}

// ── GeeksForGeeks card (static) ─────────────────────────────────────
function GFGCard() {
  const g = GFG_DATA
  const total = g.easy + g.medium + g.hard

  return (
    <FadeIn delay={0.2}>
      <div className="card-glass rounded-2xl overflow-hidden h-full"
        style={{ border: '1px solid rgba(34,197,94,0.15)' }}>

        {/* Header */}
        <div className="relative p-5 pb-0">
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(34,197,94,0.06) 0%, transparent 80%)' }} />
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #2f8d46, #308d46)' }}>
                <SiGeeksforgeeks size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-display text-lg text-white">GeeksforGeeks</h3>
                <a href={g.url} target="_blank" rel="noreferrer"
                  className="font-mono text-xs hover:text-green-300 transition-colors flex items-center gap-1"
                  style={{ color: 'rgba(34,197,94,0.6)' }}>
                  @{g.username} <FiExternalLink size={10} />
                </a>
              </div>
            </div>
            <a href={g.url} target="_blank" rel="noreferrer"
              className="text-xs font-mono px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all"
              style={{ border: '1px solid rgba(34,197,94,0.2)', color: 'rgba(34,197,94,0.7)',
                background: 'rgba(34,197,94,0.05)' }}>
              Visit <FiExternalLink size={11} />
            </a>
          </div>
        </div>

        <div className="p-5 pt-3">
          {/* Circle + difficulty pills */}
          <div className="flex items-center gap-5 mb-5">
            <div className="relative flex-shrink-0">
              <CircleProgress value={g.solved} max={200} color="#22c55e" size={88} stroke={7} />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-display text-xl font-bold text-white leading-none">{g.solved}</span>
                <span className="font-mono text-[9px] text-slate-600 uppercase">solved</span>
              </div>
            </div>
            <div className="flex flex-col gap-1.5 flex-1">
              <DiffPill label="Basic/Easy" solved={g.easy}   color="#22c55e" />
            </div>
            <div className="flex flex-col gap-1.5 flex-1">
              <DiffPill label="Medium"     solved={g.medium} color="#f59e0b" />
            </div>
            <div className="flex flex-col gap-1.5 flex-1">
              <DiffPill label="Hard"       solved={g.hard}   color="#ef4444" />
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: <FiAward size={13} />,      label: 'GFG Score',  value: g.score,  color: '#22c55e' },
              { icon: <FiZap size={13} />,         label: 'Streak',     value: `${g.streak}🔥`, color: '#f59e0b' },
            ].map((s) => (
              <div key={s.label} className="rounded-xl p-3 flex items-center gap-2"
                style={{ background: 'rgba(8,11,18,0.8)', border: '1px solid rgba(255,255,255,0.04)' }}>
                <span style={{ color: s.color }}>{s.icon}</span>
                <div>
                  <div className="font-display text-base font-bold text-white leading-none">{s.value}</div>
                  <div className="font-mono text-[10px] text-slate-600 mt-0.5">{s.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <p className="font-mono text-[10px] text-slate-700 mt-4 text-center">
            Stats updated as of Mar 2026 · <a href={g.url} target="_blank" rel="noreferrer"
              className="text-green-700 hover:text-green-500 transition-colors">View live profile ↗</a>
          </p>
        </div>
      </div>
    </FadeIn>
  )
}

// ── Combined stats banner ───────────────────────────────────────────
function StatsBanner({ lcData }) {
  const lcSolved  = lcData?.totalSolved ?? 211
  const gfgSolved = GFG_DATA.solved
  const total     = lcSolved + gfgSolved

  const items = [
    { icon: <SiLeetcode size={16} />,      label: 'LeetCode Solved',  value: lcSolved,  color: '#ffa116' },
    { icon: <SiGeeksforgeeks size={16} />, label: 'GFG Solved',       value: gfgSolved, color: '#22c55e' },
    { icon: <FiCode size={16} />,          label: 'Total Problems',   value: `${total}+`, color: '#63b3ed' },
    { icon: <FiAward size={16} />,         label: 'Platforms Active', value: 2,          color: '#a78bfa' },
  ]

  return (
    <FadeIn>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {items.map((s, i) => (
          <motion.div key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="card-glass rounded-xl p-4 text-center"
            style={{ border: `1px solid ${s.color}15` }}
          >
            <div className="flex justify-center mb-2" style={{ color: s.color }}>{s.icon}</div>
            <div className="font-display text-2xl font-bold mb-0.5"
              style={{ color: s.color, textShadow: `0 0 20px ${s.color}40` }}>{s.value}</div>
            <div className="font-mono text-[10px] text-slate-600 uppercase tracking-wider">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </FadeIn>
  )
}

// ── Main export ─────────────────────────────────────────────────────
export default function CodingProfiles() {
  const [lcData, setLcData] = useState(null)

  useEffect(() => {
    fetch(`https://leetcode-stats-api.herokuapp.com/${LC_USERNAME}`)
      .then(r => r.json())
      .then(d => { if (d.status === 'success') setLcData(d) })
      .catch(() => {})
  }, [])

  return (
    <div className="py-28 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(99,179,237,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto relative">
        <FadeIn>
          <p className="section-number text-center mb-3">06 — DSA</p>
          <h2 className="section-title text-center">Coding Profiles</h2>
          <div className="line-divider max-w-xs mx-auto mb-4" />
          <p className="section-subtitle text-center">Consistently solving problems across platforms</p>
        </FadeIn>

        <StatsBanner lcData={lcData} />

        <div className="grid md:grid-cols-2 gap-6">
          <LeetCodeCard />
          <GFGCard />
        </div>
      </div>
    </div>
  )
}
