import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiExternalLink } from 'react-icons/fi'
import resume from '../assets/resume.pdf'
import profilePhoto from '../assets/certificates/IMG_20231029_105124475_HDR.jpg' // ← rename your photo to profile.jpg → src/assets/profile.jpg

/* ─────────────────────────────────────────
   ProfilePhoto sub-component
───────────────────────────────────────── */
function ProfilePhoto() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.82, x: 40 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      style={{ position: 'relative', width: 'clamp(260px, 30vw, 400px)',
  height: 'clamp(260px, 30vw, 400px)', flexShrink: 0 }}
    >
      {/* Rotating conic-gradient border ring */}
      <div style={{
        position: 'absolute', inset: -5, borderRadius: '50%',
        background: 'conic-gradient(from 180deg, #6ee7f7, #a78bfa, #f472b6, #6ee7f7)',
        animation: 'ph-spin 6s linear infinite',
        WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2px))',
        mask:       'radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2px))',
      }} />

      {/* Inner counter-rotating ring */}
      <div style={{
        position: 'absolute', inset: 6, borderRadius: '50%',
        background: 'conic-gradient(from 0deg, rgba(110,231,247,0.22), rgba(167,139,250,0.22), rgba(110,231,247,0.22))',
        animation: 'ph-spin 10s linear infinite reverse',
        WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1px))',
        mask:       'radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1px))',
      }} />

      {/* Dashed outer orbit */}
      <div style={{
        position: 'absolute', inset: -22, borderRadius: '50%',
        border: '1px dashed rgba(110,231,247,0.14)',
        animation: 'ph-spin 20s linear infinite',
        pointerEvents: 'none',
      }} />

      {/* Ambient glow behind the circle */}
      <div style={{
        position: 'absolute', inset: 0, borderRadius: '50%',
        boxShadow: '0 0 70px 12px rgba(110,231,247,0.07), 0 0 30px 4px rgba(167,139,250,0.07)',
        pointerEvents: 'none',
      }} />

      {/* Photo circle */}
      <div style={{
        position: 'relative', width: '100%', height: '100%',
        borderRadius: '50%', overflow: 'hidden',
        background: '#0d1b2a',
        boxShadow: '0 0 0 2px rgba(110,231,247,0.1), 0 16px 60px rgba(0,0,0,0.65)',
      }}>
        <img
          src={profilePhoto}
          alt="Drishti Chauhan"
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 30%',  /* keeps face visible */
            display: 'block',
            filter: 'brightness(0.97) saturate(1.05)',
            transition: 'transform 0.55s cubic-bezier(0.22,1,0.36,1)',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        />
        {/* Subtle top-right glare */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse at 72% 12%, rgba(110,231,247,0.09), transparent 58%)',
        }} />
      </div>

      {/* Green availability dot */}
      <div style={{
        position: 'absolute', bottom: 16, right: 16,
        width: 20, height: 20, borderRadius: '50%',
        background: '#10b981', border: '3px solid #0a1628',
        zIndex: 10,
      }}>
        <span style={{
          position: 'absolute', inset: 0, borderRadius: '50%',
          background: '#10b981', animation: 'ph-pulse 2.2s ease-out infinite',
        }} />
      </div>

      <style>{`
        @keyframes ph-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes ph-pulse {
          0%   { transform: scale(1);   opacity: 0.75; }
          100% { transform: scale(2.8); opacity: 0; }
        }
      `}</style>
    </motion.div>
  )
}

/* ─────────────────────────────────────────
   Hero
───────────────────────────────────────── */
export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      {/* Ambient orbs */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(99,179,237,0.08) 0%, transparent 70%)' }} />
      <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)' }} />

      {/* Decorative floating shapes */}
      <div className="absolute top-[15%] right-[8%] w-24 h-24 rounded-full border border-blue-400/10 animate-float-slow pointer-events-none" />
      <div className="absolute bottom-[20%] left-[6%] w-16 h-16 rounded-sm border border-purple-400/10 animate-float-med pointer-events-none" style={{ animationDelay: '1s' }} />
      <div className="absolute top-[40%] right-[12%] w-2 h-2 rounded-full bg-cyan-400/40 animate-pulse-glow pointer-events-none" />
      <div className="absolute top-[30%] left-[10%] w-1.5 h-1.5 rounded-full bg-blue-400/50 animate-pulse-glow pointer-events-none" style={{ animationDelay: '1.5s' }} />

      {/* ── Two-column layout: text left, photo right ── */}
      <div className="max-w-6xl mx-auto px-6 py-24 relative z-10 w-full
                      flex flex-col-reverse md:flex-row
                      items-center justify-center
                      gap-14 md:gap-20">

        {/* ── LEFT: all text content ── */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1 min-w-0">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-400/20 bg-blue-400/5 mb-8"
          >
            <span className="glow-dot animate-pulse-glow" />
            <span className="font-mono text-xs text-blue-300/70 tracking-widest uppercase">Available for opportunities</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="font-display text-6xl md:text-7xl lg:text-8xl font-bold mb-5 leading-[1.05]"
          >
            <span className="text-white">Drishti</span>
            <br />
            <span className="text-gradient italic">Chauhan</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}
            className="h-10 mb-5 flex items-center"
          >
            <span className="font-mono text-lg text-slate-400">
              <span className="text-blue-400/60 mr-2">{'>'}</span>
              <TypeAnimation
                sequence={['Full Stack Developer', 2000, 'MERN Stack Developer', 2000, 'React Developer', 2000, 'Gen AI Enthusiast', 2000]}
                wrapper="span" speed={55} repeat={Infinity} className="text-blue-300"
              />
              <span className="text-blue-400/60 ml-1 animate-pulse">_</span>
            </span>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            className="font-body text-slate-400 max-w-xl mb-10 leading-relaxed text-base"
          >
            B.Tech CSE student at LPU, passionate about building intelligent web applications.
            Exploring the intersection of full-stack development and Generative AI.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
            className="flex gap-8 mb-10"
          >
            {[['8.68', 'CGPA'], ['200+', 'DSA'], ['3+', 'Projects']].map(([v, l]) => (
              <div key={l} className="text-center md:text-left">
                <div className="font-display text-2xl font-bold text-gradient">{v}</div>
                <div className="font-mono text-xs text-slate-500 uppercase tracking-wider">{l}</div>
              </div>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start mb-10"
          >
            <a href={resume} download="Drishti_Chauhan_Resume.pdf" className="btn-primary flex items-center gap-2 text-sm">
              <FiDownload size={15} /> Download Resume
            </a>
            <a href={resume} target="_blank" rel="noreferrer" className="btn-outline flex items-center gap-2 text-sm">
              <FiExternalLink size={15} /> View Resume
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
            className="flex gap-4"
          >
            {[
              { icon: <FiGithub size={18} />, href: 'https://github.com/drishcodes', label: 'GitHub' },
              { icon: <FiLinkedin size={18} />, href: 'https://www.linkedin.com/in/drishti-chauhan/', label: 'LinkedIn' },
              { icon: <FiMail size={18} />, href: 'mailto:drishti20901@gmail.com', label: 'Email' },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                className="w-11 h-11 rounded-sm flex items-center justify-center
                  text-slate-500 hover:text-blue-300 transition-all duration-300 hover:-translate-y-1"
                style={{ border: '1px solid rgba(99,179,237,0.12)', background: 'rgba(99,179,237,0.04)' }}
              >
                {s.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: profile photo ── */}
        <ProfilePhoto />

      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}
          className="w-px h-10 rounded-full"
          style={{ background: 'linear-gradient(to bottom, rgba(99,179,237,0.5), transparent)' }}
        />
      </motion.div>
    </div>
  )
}
