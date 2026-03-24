import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiStar, FiCode, FiAward, FiZap, FiTrendingUp } from 'react-icons/fi'
import { SiHackerrank } from 'react-icons/si'

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

// Animated star row
function StarRow({ count = 5, color = '#ffd700', delay = 0 }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div key={i}
          initial={{ opacity: 0, scale: 0, rotate: -30 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: delay + i * 0.1, type: 'spring', stiffness: 260, damping: 15 }}
        >
          <FiStar size={18}
            fill={i < count ? color : 'none'}
            stroke={i < count ? color : 'rgba(255,255,255,0.1)'}
            style={i < count ? { filter: `drop-shadow(0 0 6px ${color}90)` } : {}}
          />
        </motion.div>
      ))}
    </div>
  )
}

// Animated count-up number
function CountUp({ target, suffix = '', delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [display, setDisplay] = useState(0)

  React.useEffect(() => {
    if (!inView) return
    let start = 0
    const end = parseInt(target)
    const duration = 1400
    const step = Math.ceil(end / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= end) { setDisplay(end); clearInterval(timer) }
      else setDisplay(start)
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])

  return <span ref={ref}>{display}{suffix}</span>
}

const achievements = [
  {
    id: 1,
    icon: <SiHackerrank size={28} />,
    iconBg: 'linear-gradient(135deg, #00ea64, #00b050)',
    iconGlow: 'rgba(0,234,100,0.3)',
    badge: 'HackerRank',
    badgeColor: '#00ea64',
    badgeBg: 'rgba(0,234,100,0.08)',
    badgeBorder: 'rgba(0,234,100,0.2)',
    title: '3 Skill Badges',
    subtitle: 'HackerRank ',
    desc: 'Achieved the highest 5-star rating on HackerRank\'s Java track by solving progressively challenging problems covering OOP, data structures, generics, and concurrency.',
    desc:'Earned three skill badges on HackerRank, demonstrating proficiency across multiple domains of problem-solving and programming. Validated strong understanding of core concepts through hands-on coding challenges and assessments. Showcases consistency, technical competence, and the ability to apply knowledge in practical scenarios.',
    stars: 5,
    starColor: '#ffd700',
    accent: '#00ea64',
    border: 'rgba(0,234,100,0.15)',
    glow: 'rgba(0,234,100,0.05)',
    tag: 'Badges',
    tagIcon: '☕',
    stat: null,
    link: 'https://www.hackerrank.com/',
  },
  {
    id: 2,
    icon: <SiHackerrank size={28} />,
    iconBg: 'linear-gradient(135deg, #00ea64, #00b050)',
    iconGlow: 'rgba(0,234,100,0.3)',
    badge: 'HackerRank',
    badgeColor: '#00ea64',
    badgeBg: 'rgba(0,234,100,0.08)',
    badgeBorder: 'rgba(0,234,100,0.2)',
    title: '4★ in Problem Solving',
    subtitle: 'HackerRank · Problem Solving',
    desc: 'Earned the top 5-star badge in Problem Solving on HackerRank by tackling algorithms and data structure challenges across Algorithms, Data Structures, and Mathematics domains.',
    stars: 4,
    starColor: '#ffd700',
    accent: '#f59e0b',
    border: 'rgba(245,158,11,0.15)',
    glow: 'rgba(245,158,11,0.04)',
    tag: 'DSA',
    tagIcon: '🧩',
    stat: null,
    link: 'https://www.hackerrank.com/',
  },
  {
    id: 3,
    icon: <FiCode size={28} />,
    iconBg: 'linear-gradient(135deg, #3b82f6, #7c3aed)',
    iconGlow: 'rgba(99,179,237,0.3)',
    badge: 'Multi-Platform',
    badgeColor: '#63b3ed',
    badgeBg: 'rgba(99,179,237,0.08)',
    badgeBorder: 'rgba(99,179,237,0.2)',
    title: '200+ Coding Problems',
    subtitle: 'LeetCode · GFG · HackerRank',
    desc: 'Consistently solved 200+ coding problems across LeetCode, GeeksForGeeks, and HackerRank, sharpening skills in arrays, trees, graphs, dynamic programming, and system design patterns.',
    stars: null,
    accent: '#63b3ed',
    border: 'rgba(99,179,237,0.15)',
    glow: 'rgba(99,179,237,0.04)',
    tag: 'Problems',
    tagIcon: '💡',
    stat: { value: '200', suffix: '+', label: 'Problems Solved' },
    link: null,
  },
]

// Tilt card effect
function TiltCard({ children, border, glow, accent }) {
  const ref = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) / (rect.width / 2)
    const dy = (e.clientY - cy) / (rect.height / 2)
    setTilt({ x: dy * -8, y: dx * 8 })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false) }}
      animate={{ rotateX: tilt.x, rotateY: tilt.y }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000,
        border: `1px solid ${border}`,
        background: `rgba(13,17,25,0.8)`,
        boxShadow: hovered ? `0 20px 60px rgba(0,0,0,0.4), 0 0 40px ${glow}` : `0 4px 24px rgba(0,0,0,0.2)`,
        backdropFilter: 'blur(16px)',
      }}
      className="rounded-2xl overflow-hidden cursor-default transition-shadow duration-300"
    >
      {/* Glow top edge on hover */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
      />
      {children}
    </motion.div>
  )
}

export default function Achievements() {
  return (
    <div className="py-28 px-6 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-[-10%] w-80 h-80 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.05) 0%, transparent 70%)' }} />
        <div className="absolute bottom-1/4 right-[-5%] w-72 h-72 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(0,234,100,0.04) 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <FadeIn>
          <p className="section-number text-center mb-3">07 — Highlights</p>
          <h2 className="section-title text-center">Achievements</h2>
          <div className="line-divider max-w-xs mx-auto mb-4" />
          <p className="section-subtitle text-center">
            Milestones earned through consistent practice and dedication
          </p>
        </FadeIn>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {achievements.map((a, i) => (
            <FadeIn key={a.id} delay={i * 0.12}>
              <TiltCard border={a.border} glow={a.iconGlow} accent={a.accent}>
                <div className="p-6 relative">
                  {/* Top row: icon + badge */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                      style={{ background: a.iconBg, boxShadow: `0 0 20px ${a.iconGlow}` }}>
                      {a.icon}
                    </div>
                    <span className="font-mono text-[10px] px-2.5 py-1 rounded-full"
                      style={{ background: a.badgeBg, border: `1px solid ${a.badgeBorder}`, color: a.badgeColor }}>
                      {a.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold text-white mb-1 leading-tight">{a.title}</h3>
                  <p className="font-mono text-xs mb-4" style={{ color: `${a.accent}80` }}>{a.subtitle}</p>

                  {/* Stars OR count-up stat */}
                  <div className="mb-4">
                    {a.stars !== null ? (
                      <div className="flex items-center gap-3">
                        <StarRow count={a.stars} color={a.starColor} delay={i * 0.1} />
                        <span className="font-mono text-xs text-slate-600">Gold Badge</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <span className="font-display text-4xl font-bold"
                          style={{ color: a.accent, textShadow: `0 0 24px ${a.accent}60` }}>
                          <CountUp target={200} suffix="+" delay={0.3} />
                        </span>
                        <div>
                          <div className="font-mono text-xs text-slate-500">Problems</div>
                          <div className="font-mono text-xs text-slate-600">Solved</div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="font-body text-sm text-slate-500 leading-relaxed mb-5">{a.desc}</p>

                  {/* Footer: tag + optional link */}
                  <div className="flex items-center justify-between">
                    <span className="tag-pill text-xs flex items-center gap-1.5">
                      <span>{a.tagIcon}</span>{a.tag}
                    </span>
                    {a.link && (
                      <a href={a.link} target="_blank" rel="noreferrer"
                        className="font-mono text-[10px] flex items-center gap-1 transition-colors hover:opacity-80"
                        style={{ color: a.badgeColor }}>
                        HackerRank ↗
                      </a>
                    )}
                  </div>
                </div>
              </TiltCard>
            </FadeIn>
          ))}
        </div>

        
      </div>
    </div>
  )
}
