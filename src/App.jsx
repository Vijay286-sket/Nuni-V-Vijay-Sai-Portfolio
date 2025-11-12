import { useMemo, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FiGithub, FiLinkedin, FiDownload, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import emailjs from '@emailjs/browser'

const Section = ({ id, children }) => (
  <section id={id} className="section py-20 sm:py-28">{children}</section>
)

function ResumeButton({ variant = 'primary', children = 'Download Resume' }) {
  const candidates = [
    '/assets/Nuni_V_Vijay_Sai_Resume.pdf',
    '/assets/NUNI%20V%20VIJAY%20SAI%20AI%20resume.pdf',
  ]
  const handleClick = async (e) => {
    e.preventDefault()
    let found = ''
    for (const p of candidates) {
      try {
        const res = await fetch(p, { method: 'GET', cache: 'no-store' })
        if (res.ok) { found = p; break }
      } catch {}
    }
    if (!found) {
      alert('Resume file not found. Please place it in public/assets (e.g., Nuni_V_Vijay_Sai_Resume.pdf).')
      return
    }
    try {
      const res = await fetch(found, { method: 'GET', cache: 'no-store' })
      if (!res.ok) throw new Error('fetch failed')
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'Nuni_V_Vijay_Sai_Resume.pdf'
      document.body.appendChild(a)
      a.click()
      a.remove()
      URL.revokeObjectURL(url)
    } catch (err) {
      // Fallback: open in new tab letting the browser download/view
      window.open(found, '_blank')
    }
  }
  const cls = variant === 'primary' ? 'btn-primary' : 'btn-ghost'
  return (
    <button onClick={handleClick} className={cls}>
      <FiDownload /> {children}
    </button>
  )
}

function GradientBackdrop() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 600], [1, 0.8])
  return (
    <motion.div
      aria-hidden
      style={{ opacity }}
      className="pointer-events-none fixed inset-0 -z-10 bg-grid-radial"
    >
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-100px,rgba(34,211,238,0.25),transparent)]" />
      <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_20%,rgba(34,211,238,0.08),transparent_30%,rgba(16,185,129,0.08),transparent_60%)]" />
    </motion.div>
  )
}

function Nav() {
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact', label: 'Contact' },
  ]
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-slate-800/80">
      <div className="section flex h-16 items-center justify-between">
        <a href="#home" className="font-extrabold tracking-tight text-xl">NVVS<span className="text-cyan-400">.</span></a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          {links.map(l => (
            <a key={l.href} href={l.href} className="hover:text-white transition-colors">{l.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a className="btn-ghost" href="https://github.com/Vijay286-sket" target="_blank" rel="noreferrer"><FiGithub /> GitHub</a>
          <a className="btn-ghost" href="https://www.linkedin.com/in/nuni-v-vijay-sai" target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</a>
          <ResumeButton variant="primary">Resume</ResumeButton>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  const words = useMemo(() => [
    'AI Engineer',
    'Machine Learning & Generative AI Enthusiast',
  ], [])
  const [idx, setIdx] = useState(0)
  useState(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % words.length), 3000)
    return () => clearInterval(t)
  }, [])
  return (
    <Section id="home">
      <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 p-10 sm:p-16">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
            >
              AI Engineer | Machine Learning & Generative AI Enthusiast
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-5 text-lg sm:text-xl text-slate-300 max-w-3xl"
            >
              Turning data into intelligent, business-driven solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <ResumeButton variant="primary">Download Resume</ResumeButton>
              <a className="btn-ghost" href="https://github.com/Vijay286-sket" target="_blank" rel="noreferrer"><FiGithub /> GitHub</a>
              <a className="btn-ghost" href="https://www.linkedin.com/in/nuni-v-vijay-sai" target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-cyan-400/25 via-cyan-400/10 to-emerald-400/20 blur-lg" aria-hidden />
              <img
                src="/assets/profile.jpg"
                alt="Nuni V Vijay Sai"
                className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-2xl object-cover border border-slate-700 shadow-glow"
              />
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {['Python','PyTorch','TensorFlow','Scikit-Learn','XGBoost','YOLO','OpenCV','AWS'].map(s => (
            <div key={s} className="card p-4 text-center text-sm font-medium text-slate-300 hover:text-white">{s}</div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}

function About() {
  return (
    <Section id="about">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl sm:text-3xl font-bold">About</h2>
          <p className="mt-4 text-slate-300">
            I’m Nuni V Vijay Sai, a Computer Science graduate from Lovely Professional University specializing in Data Science & Machine Learning. I build intelligent systems powered by ML, Generative AI, and advanced analytics to solve real-world business challenges.
          </p>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold text-slate-200">Quick Links</h3>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            <a className="hover:text-white text-slate-300" href="#projects">Featured Projects</a>
            <a className="hover:text-white text-slate-300" href="#skills">Skills</a>
            <a className="hover:text-white text-slate-300" href="#contact">Contact</a>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}

function Skills() {
  const groups = [
    { title: 'Programming', items: ['Python','Java','SQL'] },
    { title: 'ML & DL', items: ['PyTorch','TensorFlow','Scikit-Learn','XGBoost'] },
    { title: 'Computer Vision', items: ['YOLO','OpenCV','Object Detection','OCR'] },
    { title: 'Generative AI', items: ['Transformers','Hugging Face','RAG','Prompt Engineering'] },
    { title: 'Cloud', items: ['AWS (S3, Lambda)','Databricks','Azure (basic)'] },
    { title: 'Tools', items: ['Streamlit','Flask','FastAPI','Docker','Git','MLflow'] },
  ]
  return (
    <Section id="skills">
      <h2 className="text-2xl sm:text-3xl font-bold">Skills</h2>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {groups.map(g => (
          <motion.div key={g.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="card p-6">
            <h3 className="font-semibold text-slate-200">{g.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map(i => (
                <span key={i} className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700 hover:border-cyan-500/60 hover:text-white transition">{i}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

function Projects() {
  const items = [
    {
      title: 'AI-Powered Ad Optimization',
      desc: 'CTR prediction with XGBoost, LinUCB + Thompson Sampling for adaptive bidding. Streamlit dashboard, MLflow tracking, Dockerized deployment.',
      link: 'https://github.com/Vijay286-sket/AI-Powered-ad-optimization-with-predictive-models-and-adaptive-bidding-strategies',
      emoji: '🧠',
    },
    {
      title: 'AI-Powered Logistics Optimization & ROI Simulation',
      desc: 'YOLO-based detection, ROI models, route optimization. Achieved 12–15% operational cost reduction.',
      link: 'https://github.com/Vijay286-sket/AI-powered-Logistics-optimization-with-ROI-simulation',
      emoji: '🚛',
    },
  ]
  return (
    <Section id="projects">
      <h2 className="text-2xl sm:text-3xl font-bold">Projects</h2>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {items.map(p => (
          <motion.a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card p-6 hover:shadow-glow"
          >
            <div className="text-2xl">{p.emoji}</div>
            <h3 className="mt-2 text-lg font-semibold text-white">{p.title}</h3>
            <p className="mt-2 text-slate-300 text-sm">{p.desc}</p>
            <span className="mt-4 inline-flex text-cyan-400 text-sm">View on GitHub →</span>
          </motion.a>
        ))}
      </div>
    </Section>
  )
}

function Experience() {
  return (
    <Section id="experience">
      <h2 className="text-2xl sm:text-3xl font-bold">Experience</h2>
      <div className="mt-8 space-y-4">
        <div className="card p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">Data Analyst Intern – UpGrad</h3>
            <span className="text-sm text-slate-400">Jan 2025 – May 2025</span>
          </div>
          <ul className="mt-3 list-disc pl-5 text-slate-300 text-sm space-y-1">
            <li>Built predictive models (XGBoost, LSTM) and automated data pipelines with Python & SQL.</li>
            <li>Designed adaptive bidding systems and Streamlit dashboards.</li>
          </ul>
        </div>
      </div>
    </Section>
  )
}

function Education() {
  return (
    <Section id="education">
      <h2 className="text-2xl sm:text-3xl font-bold">Education</h2>
      <div className="mt-8 card p-6">
        <h3 className="text-lg font-semibold text-white">B.Tech in Computer Science (Data Science & ML), Lovely Professional University</h3>
        <p className="mt-2 text-slate-300 text-sm">CGPA: 7.98 / 10</p>
      </div>
    </Section>
  )
}

function Certifications() {
  const list = [
    'Machine Learning Specialization – Stanford (Coursera)',
    'Complete MLOps 2025 – Udemy',
    'Runner-Up, University Entrepreneurship Day',
    '99.21 Percentile – Naukri Young Turks 2025',
  ]
  return (
    <Section id="certifications">
      <h2 className="text-2xl sm:text-3xl font-bold">Certifications & Achievements</h2>
      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        {list.map(item => (
          <div key={item} className="card p-5 text-sm text-slate-300">{item}</div>
        ))}
      </div>
    </Section>
  )
}

function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const send = async (e) => {
    e.preventDefault()
    const service = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const template = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const pub = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    if (!service || !template || !pub) {
      setStatus('Set EmailJS keys to enable form.')
      return
    }
    setLoading(true)
    try {
      await emailjs.sendForm(service, template, formRef.current, pub)
      setStatus('Message sent!')
      formRef.current.reset()
    } catch (err) {
      setStatus('Failed. Try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Section id="contact">
      <h2 className="text-2xl sm:text-3xl font-bold">Contact</h2>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="card p-6 space-y-3 text-slate-300 text-sm">
          <div className="flex items-center gap-3"><FiMail className="text-cyan-400" /> <a href="mailto:nunivijay46@gmail.com" className="hover:text-white">nunivijay46@gmail.com</a></div>
          <div className="flex items-center gap-3"><FiPhone className="text-cyan-400" /> <a href="tel:+916362348934" className="hover:text-white">+91 6362348934</a></div>
          <div className="flex items-center gap-3"><FiMapPin className="text-cyan-400" /> <span>Bengaluru, Karnataka</span></div>
        </div>
        <form ref={formRef} onSubmit={send} className="card p-6 space-y-4">
          <input name="from_name" required placeholder="Your name" className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-3 outline-none focus:border-cyan-400/70" />
          <input type="email" name="reply_to" required placeholder="Your email" className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-3 outline-none focus:border-cyan-400/70" />
          <textarea name="message" required placeholder="Message" rows="5" className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-3 outline-none focus:border-cyan-400/70" />
          <button disabled={loading} className="btn-primary">{loading ? 'Sending...' : 'Send Message'}</button>
          {status && <p className="text-sm text-slate-400">{status}</p>}
        </form>
      </div>
    </Section>
  )
}

export default function App() {
  return (
    <div>
      <GradientBackdrop />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Contact />
      <footer className="section py-12 text-center text-xs text-slate-500">© {new Date().getFullYear()} Nuni V Vijay Sai. All rights reserved.</footer>
    </div>
  )
}
