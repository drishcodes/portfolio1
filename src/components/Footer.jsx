import React from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiHeart } from 'react-icons/fi'

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  return (
    <footer className="px-6 py-10 relative overflow-hidden"
      style={{ borderTop: '1px solid rgba(99,179,237,0.07)', background: 'rgba(8,11,18,0.8)' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 100% at 50% 100%, rgba(99,179,237,0.03) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 relative">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-sm flex items-center justify-center text-xs font-bold text-white font-mono"
            style={{ background: 'linear-gradient(135deg, #3b82f6, #7c3aed)' }}>DC</div>
          <span className="font-body text-slate-600 text-sm">
            Made with <FiHeart size={11} className="inline text-pink-500" /> by Drishti Chauhan
          </span>
        </div>

        <p className="font-mono text-xs text-slate-700 order-3 sm:order-2">
          © {new Date().getFullYear()} Drishti Chauhan
        </p>

        <div className="flex items-center gap-4 order-2 sm:order-3">
          {[
            { icon: <FiGithub size={15} />, href: 'https://github.com/drishcodes' },
            { icon: <FiLinkedin size={15} />, href: 'https://www.linkedin.com/in/drishti-chauhan/' },
            { icon: <FiMail size={15} />, href: 'mailto:drishti20901@gmail.com' },
          ].map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noreferrer"
              className="text-slate-600 hover:text-blue-400 transition-colors duration-200">{s.icon}</a>
          ))}
          <div className="w-px h-4 bg-slate-800" />
          <motion.button onClick={scrollTop} whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-600 hover:text-blue-400 transition-all"
            style={{ border: '1px solid rgba(99,179,237,0.1)', background: 'rgba(99,179,237,0.04)' }}>
            <FiArrowUp size={13} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
