import React, { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiGithub, FiX, FiMaximize2 } from 'react-icons/fi'

const projects = [
  {
    id: 1,
    title: 'FoodFit AI',
    description: 'An intelligent web platform that suggests foods based on user mood, replaces ingredients for dietary preferences, and provides an AI chatbot for real-time nutrition assistance.',
    longDescription: 'Built an intelligent web platform that suggests foods based on the user\'s mood, replaces ingredients according to medical or dietary preferences, and provides an interactive AI chatbot for real-time assistance. Designed end-to-end user flows achieving <300ms average response latency and 100% mobile-responsive UI coverage.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST APIs'],
    github: 'https://github.com/drishcodes',
    image: null,
    gradient: 'from-blue-500/20 via-cyan-500/10 to-transparent',
    accent: '#63b3ed',
    period: 'Aug – Sep 2025',
    icon: '🍎',
  },
  {
    id: 2,
    title: 'Admission-Saathi',
    description: 'A smart college admission platform simplifying the entire process — from college search to application submission and progress tracking with OTP authentication.',
    longDescription: 'Built a platform to simplify the college admission process by helping students search colleges, submit applications, and track their progress. Engineered OTP-based authentication, supporting 100% validated submissions and responsive access across all devices.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/drishcodes',
    image: null,
    gradient: 'from-purple-500/20 via-violet-500/10 to-transparent',
    accent: '#a78bfa',
    period: 'Mar – Apr 2025',
    icon: '🎓',
  },
  {
    id: 3,
    title: 'Flavor Fiesta',
    description: 'A Zomato-inspired food ordering platform enabling users to discover restaurants, explore menus, check supply chain details, and place orders with <300ms latency.',
    longDescription: 'Built a food-ordering platform similar to Zomato, enabling users to discover restaurants, explore menus, and track real-time supply chain details. Delivered ~40% improvement in user navigation efficiency and low-latency data rendering.',
    tags: ['MySQL', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/drishcodes',
    image: null,
    gradient: 'from-cyan-500/20 via-teal-500/10 to-transparent',
    accent: '#06b6d4',
    period: 'Feb – Mar 2025',
    icon: '🍕',
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

function ProjectModal({ project, onClose }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(4,6,10,0.9)', backdropFilter: 'blur(12px)' }}
      onClick={onClose}
    >
      <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="max-w-2xl w-full card-glass rounded-xl overflow-hidden"
      >
        {/* Header gradient */}
        <div className={`h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}>
          <span className="text-7xl opacity-30">{project.icon}</span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-5xl mb-1">{project.icon}</div>
              <span className="font-mono text-xs text-slate-500">{project.period}</span>
            </div>
          </div>
          <button onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-colors"
            style={{ background: 'rgba(0,0,0,0.4)' }}>
            <FiX size={16} />
          </button>
        </div>

        <div className="p-6">
          <h3 className="font-display text-2xl text-white mb-3">{project.title}</h3>
          <p className="font-body text-slate-400 text-sm leading-relaxed mb-5">{project.longDescription}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((t) => (
              <span key={t} className="tag-pill">{t}</span>
            ))}
          </div>
          <a href={project.github} target="_blank" rel="noreferrer"
            className="btn-outline inline-flex items-center gap-2 text-sm py-2 px-4">
            <FiGithub size={14} /> View on GitHub
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

function ProjectCard({ project, delay }) {
  const [hovered, setHovered] = useState(false)
  const [modal, setModal] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay }}
        whileHover={{ y: -8 }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        onClick={() => setModal(true)}
        className="card-glass card-glow rounded-xl overflow-hidden cursor-pointer group"
      >
        {/* Preview area */}
        <div className={`h-44 relative flex items-center justify-center bg-gradient-to-br ${project.gradient} overflow-hidden`}>
          <motion.span
            animate={hovered ? { scale: 1.15 } : { scale: 1 }}
            transition={{ duration: 0.3 }}
            className="text-6xl opacity-40"
          >{project.icon}</motion.span>

          {/* Period */}
          <div className="absolute bottom-3 right-3 px-2 py-1 rounded-md text-xs font-mono text-slate-500"
            style={{ background: 'rgba(8,11,18,0.7)' }}>{project.period}</div>

          {/* Hover overlay */}
          <AnimatePresence>
            {hovered && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center"
                style={{ background: 'rgba(8,11,18,0.7)', backdropFilter: 'blur(4px)' }}>
                <div className="flex items-center gap-2 text-white font-body font-medium text-sm">
                  <FiMaximize2 size={15} /> View Details
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Accent line top */}
          <div className="absolute top-0 left-0 right-0 h-px"
            style={{ background: `linear-gradient(90deg, transparent, ${project.accent}60, transparent)` }} />
        </div>

        <div className="p-5">
          <h3 className="font-display text-xl text-white mb-2 group-hover:text-blue-200 transition-colors">{project.title}</h3>
          <p className="font-body text-sm text-slate-500 mb-4 leading-relaxed line-clamp-2">{project.description}</p>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.slice(0, 4).map((t) => (
              <span key={t} className="tag-pill text-[10px]">{t}</span>
            ))}
            {project.tags.length > 4 && <span className="tag-pill text-[10px]">+{project.tags.length - 4}</span>}
          </div>

          <div onClick={(e) => e.stopPropagation()}>
            <a href={project.github} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-lg
                text-slate-400 hover:text-blue-300 transition-all duration-200"
              style={{ border: '1px solid rgba(99,179,237,0.12)', background: 'rgba(99,179,237,0.04)' }}
            >
              <FiGithub size={12} /> GitHub
            </a>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>{modal && <ProjectModal project={project} onClose={() => setModal(false)} />}</AnimatePresence>
    </>
  )
}

export default function Projects() {
  return (
    <div className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="section-number text-center mb-3">03 — Work</p>
          <h2 className="section-title text-center">Projects</h2>
          <div className="line-divider max-w-xs mx-auto mb-12" />
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => <ProjectCard key={p.id} project={p} delay={i * 0.1} />)}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-12 text-center">
            <a href="https://github.com/drishcodes" target="_blank" rel="noreferrer"
              className="btn-outline inline-flex items-center gap-2 text-sm">
              <FiGithub size={15} /> More on GitHub
            </a>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
