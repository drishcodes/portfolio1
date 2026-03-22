import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaJava, FaGitAlt, FaGithub, FaDocker } from 'react-icons/fa'
import { SiMongodb, SiMysql, SiExpress, SiTailwindcss, SiPhp, SiCplusplus, SiVite, SiJsonwebtokens, SiNotion, SiGithubactions } from 'react-icons/si'
import { VscCode } from 'react-icons/vsc'

const skillGroups = [
  {
    label: 'Languages',
    num: '01',
    color: '#63b3ed',
    skills: [
      { name: 'HTML5', icon: <FaHtml5 />, level: 95, color: '#e34f26' },
      { name: 'CSS3', icon: <FaCss3Alt />, level: 90, color: '#1572b6' },
      { name: 'JavaScript', icon: <FaJs />, level: 88, color: '#f7df1e' },
      { name: 'Python', icon: <FaPython />, level: 75, color: '#3776ab' },
      { name: 'Java', icon: <FaJava />, level: 72, color: '#007396' },
      { name: 'C/C++', icon: <SiCplusplus />, level: 78, color: '#00599c' },
      { name: 'PHP', icon: <SiPhp />, level: 65, color: '#777bb4' },
    ],
  },
  {
    label: 'Frameworks',
    num: '02',
    color: '#a78bfa',
    skills: [
      { name: 'React.js', icon: <FaReact />, level: 90, color: '#61dafb' },
      { name: 'Node.js', icon: <FaNodeJs />, level: 85, color: '#68a063' },
      { name: 'Express.js', icon: <SiExpress />, level: 83, color: '#888' },
      { name: 'Tailwind', icon: <SiTailwindcss />, level: 88, color: '#38bdf8' },
      { name: 'Vite', icon: <SiVite />, level: 80, color: '#646cff' },
    ],
  },
  {
    label: 'Tools & DB',
    num: '03',
    color: '#06b6d4',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb />, level: 82, color: '#47a248' },
      { name: 'MySQL', icon: <SiMysql />, level: 78, color: '#4479a1' },
      { name: 'Git', icon: <FaGitAlt />, level: 88, color: '#f05032' },
      { name: 'GitHub', icon: <FaGithub />, level: 88, color: '#888' },
      { name: 'Docker', icon: <FaDocker />, level: 60, color: '#2496ed' },
      { name: 'VS Code', icon: <VscCode />, level: 95, color: '#007acc' },
      { name: 'CI/CD', icon: <SiGithubactions />, level: 65, color: '#2088ff' },
      { name: 'JWT', icon: <SiJsonwebtokens />, level: 75, color: '#d63aff' },
      { name: 'Notion', icon: <SiNotion />, level: 85, color: '#888' },
    ],
  },
]

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}>
      {children}
    </motion.div>
  )
}

function SkillCard({ skill, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -5, scale: 1.06 }}
      className="card-glass rounded-lg p-4 flex flex-col items-center gap-2 group cursor-default"
    >
      <div className="text-2xl transition-transform duration-300 group-hover:scale-110" style={{ color: skill.color, filter: `drop-shadow(0 0 8px ${skill.color}60)` }}>
        {skill.icon}
      </div>
      <span className="font-mono text-[10px] text-slate-500 group-hover:text-slate-300 transition-colors text-center leading-tight">{skill.name}</span>
      <div className="skill-bar-track w-full">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: delay + 0.3, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})` }}
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <div className="py-28 px-6 relative" style={{ background: 'rgba(8,11,18,0.6)' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(99,179,237,0.03) 0%, transparent 80%)' }} />

      <div className="max-w-6xl mx-auto relative">
        <FadeIn>
          <p className="section-number text-center mb-3">02 — Skills</p>
          <h2 className="section-title text-center">Tech Stack</h2>
          <div className="line-divider max-w-xs mx-auto mb-12" />
        </FadeIn>

        <div className="space-y-14">
          {skillGroups.map((group, gi) => (
            <FadeIn key={group.label} delay={gi * 0.1}>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-mono text-xs" style={{ color: group.color }}>{group.num}</span>
                  <h3 className="font-body font-medium text-slate-300 text-sm tracking-widest uppercase">{group.label}</h3>
                  <div className="flex-1 h-px" style={{ background: `linear-gradient(90deg, ${group.color}40, transparent)` }} />
                </div>
                <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 gap-3">
                  {group.skills.map((skill, i) => (
                    <SkillCard key={skill.name} skill={skill} delay={i * 0.04} />
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  )
}
