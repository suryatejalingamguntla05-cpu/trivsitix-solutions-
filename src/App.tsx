import { useEffect, useState, type FormEvent } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUp,
  BarChart3,
  BookOpen,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Cloud,
  Cpu,
  Database,
  Factory,
  Globe2,
  GraduationCap,
  HeartPulse,
  Landmark,
  LayoutDashboard,
  Leaf,
  Menu,
  MessageSquareText,
  MonitorSmartphone,
  Phone,
  Rocket,
  Send,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  Wand2,
  Workflow,
  X,
} from 'lucide-react'

type CardItem = { title: string; description: string; icon: typeof Bot }
type Industry = { name: string; icon: typeof HeartPulse; description: string; solution: string }

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'AI Agents', href: '#ai-agents' },
  { label: 'Software', href: '#software' },
  { label: 'Automation', href: '#automation' },
  { label: 'Industries', href: '#industries' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const capabilityItems = [
  { label: 'AI Agents', icon: Bot },
  { label: 'Custom Software', icon: Cpu },
  { label: 'Automation', icon: Workflow },
  { label: 'Data & Analytics', icon: BarChart3 },
  { label: 'Cloud Solutions', icon: Cloud },
  { label: 'AI Integration', icon: BrainCircuit },
]

const agentCards: CardItem[] = [
  {
    title: 'Healthcare Agent',
    description: 'Patient interaction, report assistance, appointment workflows and healthcare automation.',
    icon: HeartPulse,
  },
  {
    title: 'Education Agent',
    description: 'Student support, attendance workflows, academic assistance and institutional automation.',
    icon: GraduationCap,
  },
  {
    title: 'Agriculture Agent',
    description: 'Crop assistance, weather intelligence, farming decisions and agricultural workflows.',
    icon: Leaf,
  },
  {
    title: 'Business Agent',
    description: 'Lead qualification, customer support, sales workflows, CRM automation and business operations.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Finance Agent',
    description: 'Document processing, financial analysis assistance, reporting and workflow automation.',
    icon: Landmark,
  },
  {
    title: 'Cybersecurity Agent',
    description: 'Security analysis, alert triage, phishing analysis and SOC workflow assistance.',
    icon: ShieldCheck,
  },
  {
    title: 'Research Agent',
    description: 'Research discovery, document analysis, summarization and knowledge workflows.',
    icon: BookOpen,
  },
  {
    title: 'Custom Agent',
    description: 'Build an AI agent specifically for a client workflow, operating model and business process.',
    icon: Wand2,
  },
]

const softwareCards: CardItem[] = [
  { title: 'Web Applications', description: 'Modern scalable web platforms.', icon: Globe2 },
  { title: 'Mobile Applications', description: 'Android/iOS-ready application development.', icon: MonitorSmartphone },
  { title: 'Business Software', description: 'Custom systems for business operations.', icon: Building2 },
  { title: 'Dashboards', description: 'Real-time analytics and management dashboards.', icon: LayoutDashboard },
  { title: 'API & Backend', description: 'Secure scalable backend systems and integrations.', icon: Database },
  { title: 'Data & Analytics', description: 'Data processing, visualization and intelligent reporting.', icon: BarChart3 },
  { title: 'Cloud Solutions', description: 'Deployment, infrastructure and cloud integration.', icon: Cloud },
]

const automationServices = [
  'Lead automation',
  'Customer support automation',
  'Document processing',
  'Data entry automation',
  'Email automation',
  'Reporting automation',
  'Call automation',
  'Internal workflow automation',
]

const industries: Industry[] = [
  {
    name: 'Healthcare',
    icon: HeartPulse,
    description: 'Clinical workflows, patient communication and operational efficiency.',
    solution: 'AI support agents, intake automation and healthcare data workflows.',
  },
  {
    name: 'Education',
    icon: GraduationCap,
    description: 'Institutional operations, student support and academic administration.',
    solution: 'Attendance automation, support bots and institutional knowledge tools.',
  },
  {
    name: 'Agriculture',
    icon: Leaf,
    description: 'Field planning, crop data and decision support for growing operations.',
    solution: 'Weather-aware assistants and modern farm workflow automation.',
  },
  {
    name: 'Finance',
    icon: Landmark,
    description: 'Analytical workflows, documentation and process optimization.',
    solution: 'Intelligent reporting, document review and workflow orchestration.',
  },
  {
    name: 'Retail',
    icon: Users,
    description: 'Customer service, operational intelligence and digital commerce support.',
    solution: 'CRM automation, sales support and customer engagement systems.',
  },
  {
    name: 'Manufacturing',
    icon: Factory,
    description: 'Operations visibility, quality tracking and internal workflow support.',
    solution: 'Automation for monitoring, coordination and production reporting.',
  },
  {
    name: 'Real Estate',
    icon: Building2,
    description: 'Lead nurturing, inquiry handling and portfolio operations.',
    solution: 'Sales acceleration, onboarding flows and management dashboards.',
  },
  {
    name: 'Startups',
    icon: Rocket,
    description: 'Lean growth systems, product pipelines and business process automation.',
    solution: 'Scalable MVP products, internal tools and AI-powered operations.',
  },
  {
    name: 'Small Businesses',
    icon: BriefcaseBusiness,
    description: 'Practical digital transformation for day-to-day operations.',
    solution: 'Custom software, workflow automation and support systems.',
  },
  {
    name: 'Enterprises',
    icon: Globe2,
    description: 'Multi-team coordination, reliable execution and strategic transformation.',
    solution: 'Enterprise integrations, AI orchestration and custom software platforms.',
  },
]

const projectCatalog = [
  {
    name: 'College AI Attendance Management System',
    category: 'AI Agent',
    status: 'Case Study',
    accent: 'from-cyan-500/20 to-violet-500/15',
    description:
      'An AI-powered attendance management system designed to automate student attendance follow-ups, parent communication and institutional reporting.',
  },
  {
    name: 'Healthcare AI Agent',
    category: 'AI Agent',
    status: 'Coming Soon',
    accent: 'from-sky-500/15 to-cyan-500/10',
    description: 'Workflow support for patient coordination, hospital communications and intake operations.',
  },
  {
    name: 'Agriculture AI Agent',
    category: 'AI Agent',
    status: 'Coming Soon',
    accent: 'from-emerald-500/15 to-teal-500/10',
    description: 'Farming intelligence tools for decisions, weather awareness and operational planning.',
  },
  {
    name: 'Business Automation Platform',
    category: 'Automation',
    status: 'Coming Soon',
    accent: 'from-violet-500/15 to-indigo-500/10',
    description: 'Connected workflow orchestration and business process automation for growth-stage teams.',
  },
  {
    name: 'Cybersecurity Agent',
    category: 'AI Agent',
    status: 'Coming Soon',
    accent: 'from-red-500/15 to-orange-500/10',
    description: 'Smart alert handling and analyst support for SOC and security operations.',
  },
  {
    name: 'Custom Enterprise Software',
    category: 'Software',
    status: 'Coming Soon',
    accent: 'from-blue-500/15 to-cyan-500/10',
    description: 'Bespoke business applications engineered for complex operational environments.',
  },
]

const technologyCategories = [
  {
    title: 'AI',
    items: ['LLMs', 'AI Agents', 'RAG', 'Machine Learning', 'Computer Vision', 'Speech AI'],
  },
  {
    title: 'Development',
    items: ['React', 'TypeScript', 'Python', 'Node.js', 'REST APIs'],
  },
  {
    title: 'Data',
    items: ['PostgreSQL', 'Vector Databases', 'Data Analytics'],
  },
  {
    title: 'Cloud',
    items: ['Vercel', 'Cloud platforms', 'Docker', 'CI/CD'],
  },
]

const processSteps = [
  { number: '01', title: 'Discover', description: 'Understand the problem and workflow.' },
  { number: '02', title: 'Design', description: 'Design the solution architecture and user experience.' },
  { number: '03', title: 'Build', description: 'Develop the AI/software system.' },
  { number: '04', title: 'Integrate', description: 'Connect APIs, databases and business tools.' },
  { number: '05', title: 'Test', description: 'Validate reliability and user experience.' },
  { number: '06', title: 'Deploy', description: 'Launch the solution.' },
  { number: '07', title: 'Improve', description: 'Monitor, optimize and scale.' },
]

const serviceOptions = [
  { id: 'ai-agent', label: 'AI Agent', value: 'AI Agent' },
  { id: 'software', label: 'Custom Software', value: 'Custom Software' },
  { id: 'automation', label: 'Automation', value: 'Automation' },
  { id: 'web-app', label: 'Web Application', value: 'Web Application' },
  { id: 'mobile-app', label: 'Mobile Application', value: 'Mobile Application' },
  { id: 'data', label: 'Data & Analytics', value: 'Data & Analytics' },
  { id: 'integration', label: 'AI Integration', value: 'AI Integration' },
  { id: 'other', label: 'Other', value: 'Other' },
]

const budgetOptions = ['Under ₹25K', '₹25K–₹50K', '₹50K–₹1L', '₹1L–₹5L', '₹5L+', 'Not decided']
const workflowNodes = ['USER / BUSINESS', 'UNDERSTAND', 'REASON', 'USE TOOLS', 'TAKE ACTION', 'VERIFY', 'RESULT']

function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
}: {
  eyebrow: string
  title: string
  description: string
  align?: 'left' | 'center'
}) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <span className="inline-flex items-center gap-2 rounded-full border border-[#bfe3ff] bg-[#edf6ff] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.24em] text-[#0B6BC7]">
        <Sparkles className="h-3.5 w-3.5" />
        {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl font-semibold tracking-[-0.06em] text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">{description}</p>
    </div>
  )
}

function LogoMark() {
  return (
    <img
      src="/trivistix-logo.svg"
      alt="Trivistix Solutions logo"
      className="h-16 w-auto sm:h-20 lg:h-24"
    />
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [activeIndustry, setActiveIndustry] = useState(industries[0].name)
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'AI Agent',
    budget: '₹50K–₹1L',
    projectDescription: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [toastVisible, setToastVisible] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const onScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const nextProgress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0
      setScrollProgress(nextProgress)
      setShowBackToTop(window.scrollY > 420)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!toastVisible) return

    const timer = window.setTimeout(() => setToastVisible(false), 3200)
    return () => window.clearTimeout(timer)
  }, [toastVisible])

  const reveal = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0.55, delay },
        }

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }))

    if (error) {
      setError('')
    }

    if (isSubmitted) {
      setIsSubmitted(false)
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!formData.name.trim() || !formData.email.trim() || !formData.projectDescription.trim()) {
      setError('Please complete your name, email, and project description.')
      return
    }

    setIsSubmitting(true)
    setError('')

    window.setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setToastVisible(true)
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        service: 'AI Agent',
        budget: '₹50K–₹1L',
        projectDescription: '',
      })
    }, 700)
  }

  const currentIndustry = industries.find((industry) => industry.name === activeIndustry) ?? industries[0]
  const contactEmail = String(import.meta.env.VITE_CONTACT_EMAIL ?? 'trivistixsolutions@gmail.com')
  const phoneNumber = String(import.meta.env.VITE_PHONE_NUMBER ?? '+919381202530')
  const linkedInUrl = String(import.meta.env.VITE_LINKEDIN_URL ?? 'https://www.linkedin.com/in/trivistix-solutions-2b5a38422/')
  const instagramUrl = String(import.meta.env.VITE_INSTAGRAM_URL ?? 'https://www.instagram.com/trivistixsolutions/')

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 h-1 bg-slate-950/80">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500"
          style={{ scaleX: scrollProgress / 100, transformOrigin: 'left' }}
        />
      </div>

      <div className="min-h-screen bg-black text-slate-100 selection:bg-cyan-400/30">
        <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <a href="#home" className="flex items-center text-white" aria-label="Trivistix home">
              <LogoMark />
            </a>

            <nav className="hidden items-center gap-7 text-sm text-slate-300 lg:flex">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="transition hover:text-cyan-300">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden lg:block">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-5 py-2.5 text-sm font-medium text-cyan-200 transition hover:border-cyan-300/70 hover:bg-cyan-500/15"
              >
                Build With Us
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <button
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900 p-2 text-slate-200 lg:hidden"
              onClick={() => setMenuOpen((current) => !current)}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="border-t border-slate-800 bg-slate-950 lg:hidden"
              >
                <div className="mx-auto max-w-7xl space-y-3 px-4 py-4">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-200"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                  <a
                    href="#contact"
                    className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-2.5 text-sm font-medium text-cyan-100"
                    onClick={() => setMenuOpen(false)}
                  >
                    Build With Us
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        <main>
          <section id="home" className="relative isolate overflow-hidden bg-black">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.18),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.12),_transparent_30%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.04)_1px,transparent_1px)] [background-size:72px_72px] opacity-30" />

            <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-28 lg:pt-20">
              <motion.div {...reveal(0.05)} className="flex flex-col justify-center">
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#bfe3ff] bg-[#edf6ff] px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.26em] text-[#0B6BC7]">
                  <Sparkles className="h-3.5 w-3.5" />
                  AI Agents. Software. Automation.
                </span>

                <h1 className="mt-6 max-w-xl text-4xl font-semibold tracking-[-0.08em] text-white sm:text-5xl lg:text-7xl">
                  AI Agents. Intelligent Software. Real-World Automation.
                </h1>

                <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                  Trivistix Solutions builds intelligent AI agents, custom software and automation systems that help organizations work smarter, faster and more efficiently.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0B6BC7] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(11,107,199,0.25)] transition hover:bg-[#0a5ab1]"
                  >
                    Build Your Solution
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#software"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400/60 hover:bg-slate-800"
                  >
                    Explore Our Technology
                  </a>
                </div>

                <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-cyan-300" />
                    AI-first strategy
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-cyan-300" />
                    Built for business workflows
                  </div>
                </div>
              </motion.div>

              <motion.div {...reveal(0.12)} className="relative flex items-center justify-center">
                <div className="relative h-[430px] w-full max-w-[520px]">
                  <div className="absolute inset-12 rounded-full bg-[radial-gradient(circle,_rgba(34,211,238,0.18),_transparent_55%)] blur-3xl" />
                  <div className="absolute inset-0 rounded-[2rem] border border-white/10 bg-slate-950/60 shadow-[0_0_80px_rgba(14,116,144,0.15)] backdrop-blur-sm" />
                  <div className="absolute inset-6 rounded-[1.5rem] border border-cyan-400/15 bg-[linear-gradient(135deg,rgba(15,23,42,0.9),rgba(12,18,33,0.7),rgba(15,23,42,0.9))]" />

                  {[
                    { label: 'AI AGENTS', top: '12%', left: '50%', translateX: '-50%' },
                    { label: 'REASON', top: '30%', left: '18%' },
                    { label: 'ACT', top: '36%', left: '76%' },
                    { label: 'AUTOMATE', top: '60%', left: '22%' },
                    { label: 'RESULTS', top: '66%', left: '72%' },
                  ].map((node) => (
                    <motion.div
                      key={node.label}
                      animate={prefersReducedMotion ? undefined : { y: [0, -8, 0] }}
                      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
                      className="absolute"
                      style={{ top: node.top, left: node.left, transform: `translateX(${node.translateX ?? '0'})` }}
                    >
                      <div className="rounded-full border border-cyan-300/40 bg-slate-950/80 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-100 shadow-[0_0_20px_rgba(34,211,238,0.1)]">
                        {node.label}
                      </div>
                    </motion.div>
                  ))}

                  <div className="absolute left-[50%] top-[18%] h-[160px] w-px -translate-x-1/2 bg-gradient-to-b from-cyan-400/80 via-sky-400/60 to-transparent" />
                  <div className="absolute left-[20%] top-[34%] h-px w-[24%] bg-gradient-to-r from-cyan-400/80 to-sky-400/40" />
                  <div className="absolute right-[20%] top-[34%] h-px w-[24%] bg-gradient-to-l from-violet-400/80 to-cyan-400/40" />
                  <div className="absolute left-[28%] top-[64%] h-px w-[22%] bg-gradient-to-r from-cyan-400/80 to-violet-400/40" />
                  <div className="absolute right-[24%] top-[64%] h-px w-[22%] bg-gradient-to-l from-cyan-400/80 to-violet-400/40" />

                  <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/40 bg-[radial-gradient(circle,_rgba(34,211,238,0.2),_rgba(15,23,42,0.2)_55%)] blur-sm" />
                  <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-300/70 bg-slate-950/80 text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.25)]">
                    <BrainCircuit className="h-6 w-6" />
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          <section className="px-4 pb-8 sm:px-6 lg:px-8">
            <motion.div
              {...reveal(0.15)}
              className="mx-auto grid max-w-7xl gap-3 rounded-2xl border border-white/10 bg-slate-950/75 p-3 shadow-[0_0_30px_rgba(15,23,42,0.3)] backdrop-blur-md md:grid-cols-3 xl:grid-cols-6"
            >
              {capabilityItems.map(({ icon: Icon, label }, index) => (
                <motion.div
                  key={label}
                  initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  whileHover={prefersReducedMotion ? undefined : { y: -4 }}
                  className="flex items-center justify-center gap-3 rounded-xl border border-white/5 bg-white/5 px-4 py-4 text-center text-sm font-medium text-slate-200"
                >
                  <Icon className="h-4 w-4 text-cyan-300" />
                  <span>{label}</span>
                </motion.div>
              ))}
            </motion.div>
          </section>

          <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <motion.div {...reveal(0.05)}>
                <SectionHeader
                  eyebrow="About Trivistix"
                  title="Technology Built Around Real Problems"
                  description="Trivistix Solutions combines artificial intelligence, software engineering and automation to create practical technology solutions for real-world problems."
                />

                <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
                  We don't build technology just for demonstration. We build systems designed to reduce repetitive work, improve decision making, automate workflows, connect business processes and increase productivity across organizations.
                </p>

                <ul className="mt-8 space-y-4 text-slate-200">
                  {[
                    'Reduce repetitive work',
                    'Improve decision making',
                    'Automate workflows',
                    'Connect business processes',
                    'Increase productivity',
                    'Create scalable digital products',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 text-cyan-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#projects"
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/5 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300/70 hover:bg-cyan-500/10"
                >
                  Discover Trivistix
                  <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>

              <motion.div
                {...reveal(0.12)}
                className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(15,23,42,0.9),rgba(3,7,18,0.84))] p-6 shadow-[0_0_80px_rgba(14,116,144,0.15)]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.16),_transparent_38%),radial-gradient(circle_at_bottom_left,_rgba(168,85,247,0.14),_transparent_32%)]" />
                <div className="relative space-y-6">
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div>
                      <div className="text-sm text-slate-200">Business focus</div>
                      <div className="mt-2 text-xl font-semibold text-white">AI + Software + Automation</div>
                    </div>
                    <div className="rounded-2xl border border-cyan-400/40 bg-cyan-500/10 p-2 text-cyan-200">
                      <BrainCircuit className="h-7 w-7" />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    {[
                      { label: 'AI Agents', value: 'Intelligent execution' },
                      { label: 'Software', value: 'Custom products' },
                      { label: 'Automation', value: 'Operational leverage' },
                      { label: 'Data', value: 'Smart decisions' },
                    ].map((item) => (
                      <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                        <div className="text-xs uppercase tracking-[0.2em] text-slate-200">{item.label}</div>
                        <div className="mt-3 text-lg font-medium text-white">{item.value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/5 p-5">
                    <div className="flex items-center gap-2 text-cyan-200">
                      <Sparkles className="h-4 w-4" />
                      Strategic positioning
                    </div>
                    <p className="mt-3 text-base leading-7 text-slate-200">
                      AI Agents. Intelligent Software. Real-World Automation.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          <section id="ai-agents" className="bg-black py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <motion.div {...reveal(0.08)}>
                <SectionHeader
                  eyebrow="AI agents"
                  title="AI Agents That Work"
                  description="AI agents are intelligent software systems capable of understanding information, reasoning about tasks, using tools and executing workflows."
                  align="center"
                />
              </motion.div>

              <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {agentCards.map(({ title, description, icon: Icon }, index) => (
                  <motion.article
                    key={title}
                    {...reveal(index * 0.04 + 0.1)}
                    whileHover={prefersReducedMotion ? undefined : { y: -6 }}
                    className="group rounded-[1.6rem] border border-white/10 bg-slate-900/70 p-6 shadow-[0_0_32px_rgba(15,23,42,0.2)]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/35 bg-cyan-500/10 text-cyan-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-200">{description}</p>
                    <a
                      href="#contact"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-200 transition group-hover:text-cyan-100"
                    >
                      Explore Agent
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          <section id="workflow" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <motion.div {...reveal(0.05)}>
              <SectionHeader
                eyebrow="How it works"
                title="How AI Agents Work"
                description="Agents connect to business systems, reason over information and complete tasks with clear verification and traceability."
                align="center"
              />
            </motion.div>

            <div className="mt-12">
              <div className="hidden items-center justify-between gap-4 md:flex">
                {workflowNodes.map((node, index) => (
                  <div key={node} className="flex flex-1 items-center justify-center">
                    <div className="flex flex-col items-center gap-3">
                      <div className="rounded-full border border-cyan-400/40 bg-slate-950/80 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-100">
                        {node}
                      </div>
                      {index < workflowNodes.length - 1 && <ArrowRight className="h-4 w-4 text-cyan-300" />}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-4 md:hidden">
                {workflowNodes.map((node, index) => (
                  <div key={node} className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-500/10 text-cyan-200">
                      {index + 1}
                    </div>
                    <div className="rounded-full border border-white/10 bg-slate-900/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-200">
                      {node}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 rounded-[2rem] border border-white/10 bg-slate-950/70 p-6">
              <div className="grid gap-6 md:grid-cols-3">
                {['APIs', 'Databases', 'CRMs', 'Communication systems', 'Business software', 'Documents', 'Internal tools'].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-medium text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="software" className="bg-black py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <motion.div {...reveal(0.08)}>
                <SectionHeader
                  eyebrow="Software"
                  title="Software Solutions Built for Your Business"
                  description="Custom technology systems that support operations, growth and decision-making across your organization."
                  align="center"
                />
              </motion.div>

              <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {softwareCards.map(({ title, description, icon: Icon }, index) => (
                  <motion.article
                    key={title}
                    {...reveal(index * 0.05 + 0.08)}
                    whileHover={prefersReducedMotion ? undefined : { y: -6 }}
                    className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-500/10 text-cyan-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-200">{description}</p>
                  </motion.article>
                ))}
              </div>

              <div className="mt-10 text-center">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300/70"
                >
                  Start a Software Project
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </section>

          <section id="automation" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <motion.div {...reveal(0.06)}>
                <SectionHeader
                  eyebrow="Automation"
                  title="Turn Repetitive Work Into Automated Workflows"
                  description="Business automation reduces manual effort, speeds up operations and creates more reliable execution across teams and systems."
                />
                <p className="mt-6 text-base leading-8 text-slate-200">
                  From intake to reporting, Trivistix helps organizations convert manual routines into connected automated processes that save time and reduce operational friction.
                </p>
              </motion.div>

              <motion.div {...reveal(0.12)} className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_0_45px_rgba(59,130,246,0.08)]">
                <div className="grid gap-3 md:grid-cols-7">
                  {['INPUT', 'AI UNDERSTANDS', 'DECISION', 'AUTOMATION', 'ACTION', 'REPORT'].map((step, index) => (
                    <div key={step} className="flex items-center gap-2">
                      <div className="rounded-full border border-cyan-400/35 bg-cyan-500/10 px-2 py-2 text-center text-[9px] font-semibold uppercase tracking-[0.2em] text-cyan-100">
                        {step}
                      </div>
                      {index < 5 && <ArrowRight className="hidden h-4 w-4 text-cyan-300 md:block" />}
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {automationServices.map((service) => (
                    <div key={service} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-slate-200">
                      <CheckCircle2 className="h-4 w-4 text-cyan-300" />
                      {service}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          <section id="industries" className="bg-black py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <motion.div {...reveal(0.06)}>
                <SectionHeader
                  eyebrow="Industries"
                  title="Solutions Across High-Impact Sectors"
                  description="Trivistix can design custom technology systems for organizations in education, healthcare, agriculture, finance and beyond."
                  align="center"
                />
              </motion.div>

              <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="grid gap-3 sm:grid-cols-2">
                  {industries.map(({ name, icon: Icon }) => (
                    <button
                      key={name}
                      type="button"
                      className={`rounded-2xl border p-4 text-left transition ${
                        activeIndustry === name
                          ? 'border-cyan-400/50 bg-cyan-500/10 text-white shadow-[0_0_35px_rgba(34,211,238,0.12)]'
                          : 'border-white/10 bg-slate-900/70 text-slate-200 hover:border-white/20'
                      }`}
                      onClick={() => setActiveIndustry(name)}
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/35 bg-cyan-500/10 text-cyan-200">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="text-lg font-medium">{name}</div>
                      </div>
                    </button>
                  ))}
                </div>

                <motion.div key={currentIndustry.name} {...reveal(0.12)} className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/35 bg-cyan-500/10 text-cyan-200">
                      <currentIndustry.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.2em] text-slate-200">Industry</div>
                      <h3 className="mt-2 text-2xl font-semibold text-white">{currentIndustry.name}</h3>
                    </div>
                  </div>

                  <p className="mt-6 text-base leading-8 text-slate-200">{currentIndustry.description}</p>
                  <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-500/5 p-4 text-base text-cyan-100">
                    {currentIndustry.solution}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          <section id="projects" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <motion.div {...reveal(0.06)}>
              <SectionHeader
                eyebrow="Projects"
                title="Builds That Show Real Product Thinking"
                description="Pilot projects, system prototypes and future-ready product directions designed to solve operational problems and improve workflows."
              />
            </motion.div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {projectCatalog.map(({ name, category, status, description, accent }, index) => (
                <motion.article
                  key={name}
                  {...reveal(index * 0.06 + 0.08)}
                  className={`rounded-[1.75rem] border border-white/10 bg-gradient-to-br ${accent} p-[1px]`}
                >
                  <div className="h-full rounded-[1.7rem] border border-white/10 bg-slate-950/80 p-6">
                    <div className="flex items-center justify-between gap-4">
                      <div className="text-xs uppercase tracking-[0.25em] text-cyan-200">{category}</div>
                      <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-200">
                        {status}
                      </span>
                    </div>

                    <h3 className="mt-5 text-2xl font-semibold text-white">{name}</h3>
                    <p className="mt-4 text-base leading-7 text-slate-200">{description}</p>

                    {status === 'Case Study' && (
                      <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                        <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-slate-200">
                          <span>Architecture</span>
                          <span>AI Workflow</span>
                        </div>
                        <div className="mt-4 space-y-2 text-[11px] text-slate-200">
                          <div className="flex items-center gap-3">
                            <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
                            COLLEGE DATA
                          </div>
                          <div className="ml-3 h-3 w-px bg-gradient-to-b from-cyan-400 to-transparent" />
                          <div className="flex items-center gap-3">
                            <span className="h-2.5 w-2.5 rounded-full bg-sky-300" />
                            ATTENDANCE MANAGEMENT
                          </div>
                          <div className="ml-3 h-3 w-px bg-gradient-to-b from-sky-400 to-transparent" />
                          <div className="flex items-center gap-3">
                            <span className="h-2.5 w-2.5 rounded-full bg-violet-300" />
                            AI AGENT
                          </div>
                          <div className="ml-3 h-3 w-px bg-gradient-to-b from-violet-400 to-transparent" />
                          <div className="flex items-center gap-3">
                            <span className="h-2.5 w-2.5 rounded-full bg-indigo-300" />
                            VOICE / TELEPHONY
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="mt-6 flex items-center justify-between">
                      <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-cyan-400/35 bg-cyan-500/5 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:border-cyan-300/70">
                        {status === 'Case Study' ? 'View Case Study' : 'Request Update'}
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          <section id="why" className="bg-black py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <motion.div {...reveal(0.08)}>
                <SectionHeader
                  eyebrow="Why Trivistix"
                  title="Why Trivistix?"
                  description="We design systems around real operational challenges, human workflows and scalable architecture."
                  align="center"
                />
              </motion.div>

              <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {[
                  { title: 'AI-First Thinking', description: 'We design systems around intelligent automation.', icon: BrainCircuit },
                  { title: 'Problem Driven', description: 'Technology starts with the actual problem.', icon: MessageSquareText },
                  { title: 'Custom Built', description: 'Solutions are designed around each organization’s workflow.', icon: Wand2 },
                  { title: 'Scalable Architecture', description: 'Build today. Scale tomorrow.', icon: TrendingUp },
                  { title: 'Human-Centered', description: 'AI should make people’s work easier, not harder.', icon: Users },
                  { title: 'Future Ready', description: 'Designed for rapidly evolving AI capabilities.', icon: Rocket },
                ].map(({ title, description, icon: Icon }, index) => (
                  <motion.article
                    key={title}
                    {...reveal(index * 0.05 + 0.1)}
                    whileHover={prefersReducedMotion ? undefined : { y: -6 }}
                    className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/35 bg-cyan-500/10 text-cyan-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-200">{description}</p>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          <section id="technology" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <motion.div {...reveal(0.08)}>
              <SectionHeader
                eyebrow="Technology"
                title="Technology Ecosystem"
                description="A flexible stack built for AI, software, data and cloud orchestration across modern organizations."
                align="center"
              />
            </motion.div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {technologyCategories.map(({ title, items }, index) => (
                <motion.div
                  key={title}
                  {...reveal(index * 0.06 + 0.08)}
                  className="rounded-[1.7rem] border border-white/10 bg-slate-900/70 p-6"
                >
                  <div className="text-xs uppercase tracking-[0.24em] text-cyan-200">{title}</div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section id="process" className="bg-black py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <motion.div {...reveal(0.08)}>
                <SectionHeader
                  eyebrow="Process"
                  title="From Problem to Product"
                  description="Our approach brings clarity, speed and measurable structure from the first conversation to deployment and optimization."
                  align="center"
                />
              </motion.div>

              <div className="mt-12 relative">
                <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-400/70 via-sky-400/40 to-transparent md:left-1/2 md:block" />
                <div className="space-y-6 md:space-y-8">
                  {processSteps.map(({ number, title, description }, index) => (
                    <motion.div
                      key={number}
                      {...reveal(index * 0.04 + 0.08)}
                      className="relative grid gap-4 md:grid-cols-[1fr_4rem_1fr] md:items-center"
                    >
                      {index % 2 === 0 ? (
                        <>
                          <div className="md:col-start-1 md:text-right">
                            <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-5 md:ml-auto md:max-w-[420px]">
                              <div className="text-xs uppercase tracking-[0.22em] text-cyan-200">{number}</div>
                              <h3 className="mt-3 text-xl font-semibold text-white">{title}</h3>
                              <p className="mt-2 text-sm leading-7 text-slate-200">{description}</p>
                            </div>
                          </div>
                          <div className="hidden md:flex md:col-start-2 md:justify-center">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/50 bg-slate-950/90 text-xs font-semibold text-cyan-200">
                              {number}
                            </div>
                          </div>
                          <div className="md:col-start-3" />
                        </>
                      ) : (
                        <>
                          <div className="md:col-start-1" />
                          <div className="hidden md:flex md:col-start-2 md:justify-center">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/50 bg-slate-950/90 text-xs font-semibold text-cyan-200">
                              {number}
                            </div>
                          </div>
                          <div className="md:col-start-3">
                            <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-5 md:max-w-[420px]">
                              <div className="text-xs uppercase tracking-[0.22em] text-cyan-200">{number}</div>
                              <h3 className="mt-3 text-xl font-semibold text-white">{title}</h3>
                              <p className="mt-2 text-sm leading-7 text-slate-200">{description}</p>
                            </div>
                          </div>
                        </>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="cta" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <motion.div
              {...reveal(0.08)}
              className="rounded-[2rem] border border-cyan-400/30 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_32%),linear-gradient(135deg,rgba(15,23,42,0.96),rgba(10,15,30,0.95))] p-8 shadow-[0_0_60px_rgba(34,211,238,0.12)] sm:p-10 lg:p-12"
            >
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <div className="text-xs uppercase tracking-[0.28em] text-cyan-200">Start a conversation</div>
                  <h2 className="mt-4 text-3xl font-semibold tracking-[-0.06em] text-white sm:text-4xl lg:text-5xl">
                    Have a Problem Worth Automating?
                  </h2>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-200">
                    Tell us what takes too much time, costs too much effort, or should work smarter. We'll explore how AI, software and automation can solve it.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_45px_rgba(56,189,248,0.35)]"
                  >
                    Start a Conversation
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#software"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-white/10"
                  >
                    Explore Solutions
                  </a>
                </div>
              </div>
            </motion.div>
          </section>

          <section id="contact" className="mx-auto max-w-7xl px-4 pb-20 pt-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <motion.div {...reveal(0.08)}>
                <SectionHeader
                  eyebrow="Contact"
                  title="Tell us what you want to build."
                  description="Share the workflow, challenge or opportunity and we’ll help map the right AI, software or automation solution."
                />

                <div className="mt-8 space-y-5 text-slate-200">
                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 h-5 w-5 text-cyan-300" />
                    <div>
                      <div className="text-sm uppercase tracking-[0.2em] text-slate-200">Phone</div>
                      <div className="mt-1 text-base text-slate-100">{phoneNumber}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Send className="mt-1 h-5 w-5 text-cyan-300" />
                    <div>
                      <div className="text-sm uppercase tracking-[0.2em] text-slate-200">Email</div>
                      <div className="mt-1 text-base text-slate-100">{contactEmail}</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.form
                {...reveal(0.12)}
                onSubmit={handleSubmit}
                className="rounded-[2rem] border border-white/10 bg-slate-950/75 p-6 shadow-[0_0_40px_rgba(14,116,144,0.12)]"
              >
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="space-y-2 text-sm text-slate-200">
                    <span>Name</span>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(event) => updateField('name', event.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none transition focus:border-cyan-400/60"
                      placeholder="Your full name"
                    />
                  </label>

                  <label className="space-y-2 text-sm text-slate-200">
                    <span>Company</span>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(event) => updateField('company', event.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none transition focus:border-cyan-400/60"
                      placeholder="Organization name"
                    />
                  </label>

                  <label className="space-y-2 text-sm text-slate-200">
                    <span>Email</span>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(event) => updateField('email', event.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none transition focus:border-cyan-400/60"
                      placeholder="you@company.com"
                    />
                  </label>

                  <label className="space-y-2 text-sm text-slate-200">
                    <span>Phone</span>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(event) => updateField('phone', event.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none transition focus:border-cyan-400/60"
                      placeholder="Your contact number"
                    />
                  </label>

                  <label className="space-y-2 text-sm text-slate-200">
                    <span>Service</span>
                    <select
                      value={formData.service}
                      onChange={(event) => updateField('service', event.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none transition focus:border-cyan-400/60"
                    >
                      {serviceOptions.map((option) => (
                        <option key={option.id} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="space-y-2 text-sm text-slate-200">
                    <span>Budget Range</span>
                    <select
                      value={formData.budget}
                      onChange={(event) => updateField('budget', event.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none transition focus:border-cyan-400/60"
                    >
                      {budgetOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <label className="mt-5 block space-y-2 text-sm text-slate-200">
                  <span>Project Description</span>
                  <textarea
                    rows={6}
                    value={formData.projectDescription}
                    onChange={(event) => updateField('projectDescription', event.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none transition focus:border-cyan-400/60"
                    placeholder="Tell us about your workflow, challenge and goals."
                  />
                </label>

                {error && (
                  <div className="mt-4 rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                    {error}
                  </div>
                )}

                {isSubmitted && (
                  <div className="mt-4 rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-4 py-3 text-sm text-cyan-100">
                    Thanks for your request. We’ll review the details and follow up soon.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_18px_45px_rgba(56,189,248,0.35)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? 'Sending...' : 'Send Project Request'}
                  {!isSubmitting && <ArrowRight className="h-4 w-4" />}
                </button>
              </motion.form>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/10 bg-slate-950/90">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.9fr_0.9fr_0.9fr] lg:px-8">
            <div>
              <LogoMark />
              <p className="mt-5 max-w-xs text-base leading-7 text-slate-200">
                AI Agents. Intelligent Software. Real-World Automation.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">Company</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-200">
                {['About', 'Projects', 'Careers', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#about" className="transition hover:text-cyan-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">Solutions</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-200">
                {['AI Agents', 'Software', 'Automation', 'Data & Analytics'].map((item) => (
                  <li key={item}>
                    <a href="#software" className="transition hover:text-cyan-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">Connect</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-200">
                {[
                  { label: 'LinkedIn', href: linkedInUrl },
                  { label: 'Instagram', href: instagramUrl },
                  { label: 'Email', href: `mailto:${contactEmail}` },
                ].map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="transition hover:text-cyan-200"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 text-sm text-slate-200 sm:px-6 lg:px-8">
              <span>© 2026 Trivistix Solutions. All rights reserved.</span>
              <span>Built for intelligent growth.</span>
            </div>
          </div>
        </footer>

        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              type="button"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              onClick={() => window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' })}
              className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/50 bg-slate-950/90 text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.12)]"
              aria-label="Back to top"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {toastVisible && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full border border-cyan-400/30 bg-slate-950/90 px-4 py-2 text-sm text-cyan-100 shadow-[0_0_35px_rgba(34,211,238,0.18)]"
            >
              Project request prepared for follow-up.
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

export default App
