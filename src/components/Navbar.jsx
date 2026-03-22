import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    const id = href.replace('#', '')
    setActive(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={scrolled ? {
        background: 'rgba(8,11,18,0.85)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(99,179,237,0.1)',
        padding: '12px 0'
      } : { padding: '20px 0' }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <button onClick={() => handleNav('#home')} className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-sm flex items-center justify-center text-xs font-bold text-white font-mono"
            style={{ background: 'linear-gradient(135deg, #3b82f6, #7c3aed)' }}>DC</div>
          <span className="font-body text-slate-400 text-sm font-light tracking-widest uppercase hidden sm:block">Portfolio</span>
        </button>

        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => handleNav(link.href)}
                className={`font-body text-sm tracking-wide transition-all duration-300 relative group ${
                  active === link.href.replace('#', '') ? 'text-blue-300' : 'text-slate-500 hover:text-slate-200'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${
                  active === link.href.replace('#', '')
                    ? 'w-full bg-blue-400'
                    : 'w-0 group-hover:w-full bg-slate-400'
                }`} />
              </button>
            </li>
          ))}
        </ul>

        <button className="md:hidden flex flex-col gap-1.5 p-1" onClick={() => setMenuOpen(!menuOpen)}>
          <motion.span animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} className="block w-5 h-px bg-slate-300" />
          <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="block w-5 h-px bg-slate-300" />
          <motion.span animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className="block w-5 h-px bg-slate-300" />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
            style={{ background: 'rgba(8,11,18,0.97)', borderBottom: '1px solid rgba(99,179,237,0.1)' }}
          >
            <ul className="flex flex-col px-6 py-5 gap-4">
              {navLinks.map((link, i) => (
                <motion.li key={link.label} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                  <button onClick={() => handleNav(link.href)} className="text-slate-300 hover:text-blue-300 font-body text-base transition-colors">
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
