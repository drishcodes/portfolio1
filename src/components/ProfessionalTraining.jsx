import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiEye, FiDownload, FiCalendar, FiBookOpen } from 'react-icons/fi'
// import trainingCert from '../assets/certificates/w3grads_certificate.jpg'
// import resume from '../assets/resume.pdf'

// ── Data — add more training items here ─────────────────────────────
const trainings = [
  {
    id: 1,
    title: 'MERN with Gen AI',
    organization: 'W3Grads',
    period: 'Jun 2025 – Jul 2025',
    previewUrl: '#',   // replace with: trainingCert
    downloadUrl: '#',  // replace with: trainingCert  (or a PDF)
    points: [
      'Completed structured course covering basic to advanced MERN Stack concepts and projects',
      'Learned new frameworks like React.js, Express.js and MongoDB database',
      'Built a MERN project on Job Application Tracker and earned certification',
    ],
  },
]

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}>
      {children}
    </motion.div>
  )
}

function TrainingCard({ item, delay }) {
  const [hovered, setHovered] = useState(false)

  return (
    <FadeIn delay={delay}>
      <motion.div
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ y: -4 }}
        className="relative rounded-2xl overflow-hidden transition-shadow duration-300"
        style={{
          background: 'rgba(13,17,30,0.85)',
          border: `1px solid ${hovered ? 'rgba(99,179,237,0.25)' : 'rgba(99,179,237,0.1)'}`,
          boxShadow: hovered
            ? '0 8px 40px rgba(0,0,0,0.35), 0 0 30px rgba(99,179,237,0.06)'
            : '0 4px 20px rgba(0,0,0,0.2)',
          backdropFilter: 'blur(14px)',
        }}
      >
        {/* Top glowing line on hover */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(99,179,237,0.6), rgba(124,58,237,0.4), transparent)' }}
        />

        <div className="p-6">
          {/* Title row */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-3">
            <div>
              <h3 className="font-display text-xl font-bold text-white mb-1">{item.title}</h3>
              <p className="font-body text-slate-400 text-sm">{item.organization}</p>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <a
                href={item.previewUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg font-mono text-xs font-medium
                  transition-all duration-200 hover:scale-105 active:scale-95"
                style={{
                  background: 'rgba(99,179,237,0.12)',
                  border: '1px solid rgba(99,179,237,0.3)',
                  color: '#63b3ed',
                }}
              >
                <FiEye size={12} /> Preview
              </a>
              <a
                href={item.downloadUrl}
                download
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg font-mono text-xs font-medium
                  transition-all duration-200 hover:scale-105 active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,200,100,0.15), rgba(0,180,80,0.1))',
                  border: '1px solid rgba(34,197,94,0.35)',
                  color: '#4ade80',
                }}
              >
                <FiDownload size={12} /> Download
              </a>
            </div>
          </div>

          {/* Period badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg mb-5"
            style={{
              background: 'rgba(99,179,237,0.07)',
              border: '1px solid rgba(99,179,237,0.15)',
            }}>
            <FiCalendar size={11} className="text-blue-400" />
            <span className="font-mono text-xs text-blue-300">{item.period}</span>
          </div>

          {/* Bullet points */}
          <ul className="space-y-2.5">
            {item.points.map((pt, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: delay + 0.15 + i * 0.08 }}
                className="flex items-start gap-3 font-body text-sm text-slate-400 leading-relaxed"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: '#63b3ed', boxShadow: '0 0 6px rgba(99,179,237,0.6)' }} />
                {pt}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </FadeIn>
  )
}

export default function ProfessionalTraining() {
  return (
    <div className="py-10 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-10 rounded-md flex items-center justify-center flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)' }}>
              <FiBookOpen size={16} className="text-white" />
            </div>
            <h2 className="font-display text-2xl font-bold text-white">Professional Training</h2>
          </div>
        </FadeIn>

        {/* Cards */}
        <div className="space-y-4">
          {trainings.map((item, i) => (
            <TrainingCard key={item.id} item={item} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </div>
  )
}
