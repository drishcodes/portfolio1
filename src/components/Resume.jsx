import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiDownload, FiExternalLink, FiFileText } from 'react-icons/fi'
import resume from '../assets/resume.pdf'

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}>
      {children}
    </motion.div>
  )
}

export default function Resume() {
  return (
    <div className="py-28 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <p className="section-number text-center mb-3">05 — Resume</p>
          <h2 className="section-title">Hire Me</h2>
          <div className="line-divider max-w-xs mx-auto mb-12" />
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="card-glass rounded-2xl p-10 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99,179,237,0.06) 0%, transparent 70%)' }} />

            <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity }}
              className="w-20 h-20 mx-auto mb-8 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(124,58,237,0.15))',
                border: '1px solid rgba(99,179,237,0.15)', boxShadow: '0 0 30px rgba(99,179,237,0.1)' }}>
              <FiFileText size={30} className="text-blue-300" />
            </motion.div>

            <h3 className="font-display text-2xl text-white mb-2">Drishti Chauhan</h3>
            <p className="font-body text-slate-400 mb-1 text-sm">Full Stack Developer · MERN Stack · Gen AI</p>
            <p className="font-mono text-xs text-slate-600 mb-10">B.Tech CSE @ LPU · CGPA 8.68</p>

            <div className="grid grid-cols-3 gap-4 mb-10">
              {[{ v: '3+', l: 'Projects', c: '#63b3ed' }, { v: '200+', l: 'DSA Solved', c: '#a78bfa' }, { v: '3', l: 'Certifications', c: '#06b6d4' }].map((s) => (
                <div key={s.l} className="rounded-xl p-4"
                  style={{ background: 'rgba(8,11,18,0.8)', border: '1px solid rgba(99,179,237,0.08)' }}>
                  <div className="font-display text-2xl font-bold mb-1" style={{ color: s.c, textShadow: `0 0 15px ${s.c}40` }}>{s.v}</div>
                  <div className="font-mono text-xs text-slate-600">{s.l}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={resume} download="Drishti_Chauhan_Resume.pdf"
                className="btn-primary flex items-center justify-center gap-2 text-sm px-8 py-3.5">
                <FiDownload size={16} /> Download Resume
              </a>
              <a href={resume} target="_blank" rel="noreferrer"
                className="btn-outline flex items-center justify-center gap-2 text-sm px-8 py-3.5">
                <FiExternalLink size={16} /> View Resume
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
