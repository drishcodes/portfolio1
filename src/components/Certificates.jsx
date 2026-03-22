import React, { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiX, FiZoomIn, FiAward, FiCalendar, FiExternalLink } from 'react-icons/fi'
import w3gradsImg from '../assets/certificates/w3grads_certificate.jpg'
import socialImg from '../assets/certificates/Social_Network_page-0001.jpg'
import networkImg from '../assets/certificates/fundamentals of network communication_page-0001.jpg'

const certificates = [
  {
    id: 1,
    title: 'Full Stack (MERN) with Gen AI',
    issuer: 'W3Grads × The Angaar Batch',
    period: 'Jun – Jul 2025',
    desc: "FLAMES '25 Summer Training Program — intensive course on Full Stack MERN with Gen AI and Industrial Practices.",
    image: w3gradsImg,
    isPdf: false,
    accent: '#63b3ed',
    badge: "FLAMES '25",
    gradient: 'from-blue-500/15 to-cyan-500/5',
  },
  {
    id: 2,
    title: 'Social Networks',
    issuer: 'NPTEL / IIT Madras',
    period: 'Jan – Apr 2025',
    desc: '12-week SWAYAM online course. Score: 57% (Assignments: 25/25, Exam: 32.15/75). Government of India funded.',
    image: socialImg,
    isPdf: false,
    accent: '#f472b6',
    badge: 'NPTEL',
    gradient: 'from-pink-500/15 to-rose-500/5',
  },
  {
    id: 3,
    title: 'Fundamentals of Network Communication',
    issuer: 'University of Colorado via Coursera',
    period: 'Sep 2024',
    desc: 'Online course authorized by University of Colorado System — networking fundamentals and protocols.',
    image: networkImg,
    isPdf: false,
    accent: '#a78bfa',
    badge: 'Coursera',
    gradient: 'from-purple-500/15 to-violet-500/5',
  },
]

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

function CertModal({ cert, onClose }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(4,6,10,0.92)', backdropFilter: 'blur(16px)' }}
      onClick={onClose}
    >
      <motion.div initial={{ scale: 0.85, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.85 }}
        transition={{ type: 'spring', damping: 22, stiffness: 220 }}
        onClick={(e) => e.stopPropagation()} className="max-w-3xl w-full"
      >
        <button onClick={onClose}
          className="mb-3 ml-auto flex items-center gap-2 text-slate-500 hover:text-slate-200 transition-colors font-mono text-xs">
          <FiX size={14} /> Close
        </button>
        <div className="card-glass rounded-2xl overflow-hidden">
          <div className={`aspect-[1.41/1] relative flex items-center justify-center bg-gradient-to-br ${cert.gradient} overflow-hidden`}
            style={{ background: cert.image ? undefined : 'rgba(13,17,25,0.9)' }}>
            {cert.image
              ? <img src={cert.image} alt={cert.title} className="w-full h-full object-contain" />
              : (
                <div className="text-center p-10">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ border: `2px solid ${cert.accent}30`, background: `${cert.accent}08` }}>
                    <FiAward size={26} style={{ color: cert.accent }} />
                  </div>
                  <h3 className="font-display text-2xl text-white mb-2">{cert.title}</h3>
                  <p className="font-body text-slate-400 mb-1 text-sm">{cert.issuer}</p>
                  <p className="font-mono text-xs text-slate-600 mb-6">{cert.period}</p>
                  <p className="font-mono text-xs text-slate-500 mb-4">PDF Certificate — click below to open</p>
                  <a href={`/src/assets/certificates/${cert.id === 2 ? 'nptel_social_networks.pdf' : 'coursera_network.pdf'}`}
                    target="_blank" rel="noreferrer" className="btn-outline text-xs px-4 py-2 inline-flex items-center gap-1.5">
                    <FiExternalLink size={12} /> Open PDF
                  </a>
                </div>
              )}
          </div>
          <div className="p-5 flex items-center justify-between" style={{ borderTop: `1px solid ${cert.accent}15` }}>
            <div>
              <h4 className="font-display text-lg text-white">{cert.title}</h4>
              <p className="font-body text-sm text-slate-400">{cert.issuer}</p>
            </div>
            <span className="font-mono text-xs text-slate-600 flex items-center gap-1">
              <FiCalendar size={11} /> {cert.period}
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function CertCard({ cert, delay }) {
  const [modal, setModal] = useState(false)
  const [hovered, setHovered] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <>
      <motion.div ref={ref}
        initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay }}
        whileHover={{ y: -7 }}
        onHoverStart={() => setHovered(true)} onHoverEnd={() => setHovered(false)}
        onClick={() => setModal(true)}
        className="card-glass rounded-xl overflow-hidden cursor-pointer group"
      >
        <div className={`h-44 relative flex items-center justify-center bg-gradient-to-br ${cert.gradient} overflow-hidden`}>
          {cert.image
            ? <img src={cert.image} alt={cert.title} className="w-full h-full object-cover" />
            : (
              <div className="text-center">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-2"
                  style={{ border: `1px solid ${cert.accent}25`, background: `${cert.accent}08` }}>
                  <FiAward size={20} style={{ color: cert.accent }} />
                </div>
                <p className="font-mono text-xs text-slate-600">PDF Certificate</p>
              </div>
            )}

          <AnimatePresence>
            {hovered && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center"
                style={{ background: 'rgba(8,11,18,0.75)', backdropFilter: 'blur(4px)' }}>
                <div className="text-white flex items-center gap-2 font-body text-sm font-medium">
                  <FiZoomIn size={15} /> View Certificate
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Badge */}
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-mono"
            style={{ background: `${cert.accent}15`, border: `1px solid ${cert.accent}25`, color: cert.accent }}>
            {cert.badge}
          </div>

          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-px"
            style={{ background: `linear-gradient(90deg, transparent, ${cert.accent}50, transparent)` }} />
        </div>

        <div className="p-4">
          <h3 className="font-display text-base text-white mb-1 group-hover:text-blue-200 transition-colors line-clamp-1">{cert.title}</h3>
          <p className="font-body text-sm text-slate-500 mb-1">{cert.issuer}</p>
          <p className="font-mono text-xs text-slate-600 flex items-center gap-1"><FiCalendar size={10} /> {cert.period}</p>
        </div>
      </motion.div>
      <AnimatePresence>{modal && <CertModal cert={cert} onClose={() => setModal(false)} />}</AnimatePresence>
    </>
  )
}

export default function Certificates() {
  return (
    <div className="py-28 px-6" style={{ background: 'rgba(8,11,18,0.6)' }}>
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="section-number text-center mb-3">04 — Credentials</p>
          <h2 className="section-title text-center">Certifications</h2>
          <div className="line-divider max-w-xs mx-auto mb-12" />
        </FadeIn>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => <CertCard key={cert.id} cert={cert} delay={i * 0.1} />)}
        </div>
      </div>
    </div>
  )
}
