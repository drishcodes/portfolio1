import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}>
      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <div className="py-28 px-6 relative overflow-hidden">
      {/* BG accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="section-number text-center mb-3">01 — About</p>
          <h2 className="section-title text-center">Who I Am</h2>
          <div className="line-divider max-w-xs mx-auto mb-12" />
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <FadeIn delay={0.1}>
            <div className="card-glass card-glow rounded-lg p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full rounded-l-lg"
                style={{ background: 'linear-gradient(to bottom, #63b3ed, #7c3aed)' }} />

              <h3 className="font-display text-2xl text-white mb-5 italic pl-4">
                "Building the future,<br/>one commit at a time."
              </h3>

              <div className="space-y-4 text-slate-400 font-body leading-relaxed text-sm pl-4">
                <p>I'm a <span className="text-blue-300 font-medium">Computer Science Engineering</span> student
                  at Lovely Professional University, <span className="text-white font-semibold"></span>.
                  I specialise in the <span className="text-blue-300 font-medium">MERN Stack</span> and love
                  building full-stack applications from scratch.</p>
                <p>My journey spans from Zomato-like food platforms to <span className="text-blue-300 font-medium">AI-powered
                  wellness applications</span> with real-time responses. I'm deeply curious about how Generative AI
                  can supercharge traditional web experiences.</p>
                <p>When I'm not coding, I'm solving DSA problems, exploring new frameworks,
                  or building AI pipelines for text analysis and content generation.</p>
              </div>

              {/* Education */}
              <div className="mt-8 pl-4">
                <p className="font-mono text-xs text-slate-600 uppercase tracking-widest mb-4">Education</p>
                <div className="space-y-3">
                  {[
                    { title: 'B.Tech CSE — LPU', sub: '2023–Present | CGPA: 8.68', current: true },
                    { title: 'Intermediate — APS Meerut', sub: '2022–2023 | 93.2%', current: false },
                    { title: 'Matriculation — APS Lucknow', sub: '2019–2020 | 93.4%', current: false },
                  ].map((e, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${
                        e.current
                          ? 'bg-blue-400 shadow-[0_0_8px_rgba(99,179,237,0.6)]'
                          : 'bg-slate-700'
                      }`} />
                      <div>
                        <p className={`font-body text-sm font-medium ${e.current ? 'text-slate-200' : 'text-slate-500'}`}>{e.title}</p>
                        <p className="font-mono text-xs text-slate-600">{e.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          <div className="space-y-5">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { v: '8.68', l: 'CGPA at LPU', color: '#63b3ed' },
                { v: '200+', l: 'DSA Problems', color: '#a78bfa' },
                { v: '3+', l: 'Projects Built', color: '#06b6d4' },
                { v: '3', l: 'Certifications', color: '#f472b6' },
              ].map((s, i) => (
                <FadeIn key={s.l} delay={0.15 + i * 0.07}>
                  <div className="card-glass rounded-lg p-5 text-center group hover:scale-105 transition-transform duration-300">
                    <div className="font-display text-3xl font-bold mb-1" style={{ color: s.color,
                      textShadow: `0 0 20px ${s.color}50` }}>{s.v}</div>
                    <div className="font-body text-xs text-slate-500">{s.l}</div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.45}>
              <div className="card-glass rounded-lg p-6">
                <p className="font-mono text-xs text-slate-600 uppercase tracking-widest mb-4">Interests & Focus Areas</p>
                <div className="flex flex-wrap gap-2">
                  {['Full Stack Dev', 'Generative AI', 'MERN Stack', 'REST APIs', 'System Design',
                    'Problem Solving', 'Open Source', 'Clean Code', 'CI/CD', 'Cloud Deploy'].map((tag) => (
                    <span key={tag} className="tag-pill">{tag}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  )
}
