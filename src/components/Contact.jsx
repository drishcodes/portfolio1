import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiSend, FiCheck, FiInfo } from 'react-icons/fi'

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

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Opens user's email client pre-filled — email goes to drishti20901@gmail.com
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)
    window.open(`mailto:drishti20901@gmail.com?subject=${subject}&body=${body}`, '_blank')
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 5000)
  }

  const socials = [
    { icon: <FiGithub size={18} />, label: 'GitHub', href: 'https://github.com/drishcodes', value: 'github.com/drishcodes', color: '#888' },
    { icon: <FiLinkedin size={18} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/drishti-chauhan/', value: 'linkedin.com/in/drishti-chauhan', color: '#0a66c2' },
    { icon: <FiMail size={18} />, label: 'Email', href: 'mailto:drishti20901@gmail.com', value: 'drishti20901@gmail.com', color: '#63b3ed' },
  ]

  const inputClass = `w-full rounded-lg px-4 py-3 font-body text-sm text-slate-200 placeholder-slate-600
    focus:outline-none transition-all duration-200`
  const inputStyle = {
    background: 'rgba(8,11,18,0.8)',
    border: '1px solid rgba(99,179,237,0.1)',
  }
  const inputFocusStyle = 'focus:border-blue-400/40 focus:ring-2 focus:ring-blue-400/10'

  return (
    <div className="py-28 px-6 relative" style={{ background: 'rgba(8,11,18,0.5)' }}>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(99,179,237,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto relative">
        <FadeIn>
          <p className="section-number text-center mb-3">05 — Contact</p>
          <h2 className="section-title text-center">Get In Touch</h2>
          <div className="line-divider max-w-xs mx-auto mb-4" />
          <p className="section-subtitle text-center">Open to internships, freelance work, and collaborations</p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left */}
          <FadeIn delay={0.1}>
            <div className="space-y-5">
              <div className="card-glass rounded-xl p-6">
                <h3 className="font-display text-xl text-white mb-3 italic">"Let's build something amazing together."</h3>
                <p className="font-body text-slate-400 text-sm leading-relaxed">
                  I'm currently open to internships, freelance opportunities, and collaborative projects.
                  
                </p>
              </div>

              

              {socials.map((s, i) => (
                <motion.a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 card-glass rounded-xl p-4 group transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-slate-400 group-hover:text-blue-300 transition-colors"
                    style={{ background: 'rgba(99,179,237,0.06)', border: '1px solid rgba(99,179,237,0.1)' }}>
                    {s.icon}
                  </div>
                  <div>
                    <p className="font-mono text-xs text-slate-600 uppercase tracking-wider">{s.label}</p>
                    <p className="font-body text-sm text-slate-400 group-hover:text-slate-200 transition-colors">{s.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </FadeIn>

          {/* Right — form */}
          <FadeIn delay={0.2}>
            <div className="card-glass rounded-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="font-mono text-xs text-slate-500 uppercase tracking-wider block mb-2">Your Name</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required
                    placeholder="Jane Smith"
                    className={`${inputClass} ${inputFocusStyle}`} style={inputStyle} />
                </div>
                <div>
                  <label className="font-mono text-xs text-slate-500 uppercase tracking-wider block mb-2">Your Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required
                    placeholder="jane@example.com"
                    className={`${inputClass} ${inputFocusStyle}`} style={inputStyle} />
                </div>
                <div>
                  <label className="font-mono text-xs text-slate-500 uppercase tracking-wider block mb-2">Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                    placeholder="Tell me about your project or say hi..."
                    className={`${inputClass} ${inputFocusStyle} resize-none`} style={inputStyle} />
                </div>

                <motion.button type="submit" whileTap={{ scale: 0.97 }}
                  className={`w-full py-3.5 rounded-lg font-body font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                    sent ? 'bg-emerald-500/20 border border-emerald-500/30 text-emerald-400' : 'btn-primary'
                  }`}
                >
                  {sent ? <><FiCheck size={16} /> Email client opened!</> : <><FiSend size={16} /> Send Message</>}
                </motion.button>

                {sent && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="font-mono text-xs text-emerald-400/70 text-center">
                    ✓ Your email client has opened with the message pre-filled. Just hit Send!
                  </motion.p>
                )}
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  )
}
