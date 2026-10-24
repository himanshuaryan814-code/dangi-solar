import { useEffect, useMemo, useState } from 'react'
import {
  ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, BadgeCheck, CheckCircle2,
  CalendarDays, CircleDollarSign, Factory, Home, Leaf, MapPin, Menu, MessageCircle, Phone, Send,
  ShieldCheck, Sun, Wrench, X, Zap
} from 'lucide-react'
import './styles.css'

const business = {
  name: 'Dangi Solar Solutions',
  address: 'Amar Anaj Mandi, Israna, Panipat, Haryana 132107, India',
  maps: 'https://maps.app.goo.gl/hGQgodMoVz9phy3k6',
  phone: '',
  whatsapp: '',
  email: '',
}
const servicesCallNumber = '9466622220'

const photos = {
  hero: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1900&q=85',
  home: '/residential-rooftop-solar.jpg',
  commercial: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1000&q=82',
  maintenance: 'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?auto=format&fit=crop&w=1000&q=82',
  panels: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=82',
  roof: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=82',
}
type Project = {
  slug: string
  category: 'Residential' | 'Commercial' | 'Industrial'
  title: string
  image: string
  installationYear: number
  capacityKw: number
  location?: string
  note: string
}
const illustrativeProjectNote = 'Illustrative project example — location and installation details to be verified.'
const projects: Project[] = [
  { slug: 'residential-rooftop-solar', category: 'Residential', title: 'Residential Rooftop Solar', image: photos.home, installationYear: 2022, capacityKw: 7, location: 'Panipat, Haryana', note: illustrativeProjectNote },
  { slug: 'commercial-solar-installation', category: 'Commercial', title: 'Commercial Solar Installation', image: photos.commercial, installationYear: 2022, capacityKw: 50, location: 'Panipat Industrial Area, Haryana', note: illustrativeProjectNote },
  { slug: 'industrial-rooftop-solar', category: 'Industrial', title: 'Industrial Rooftop Solar', image: photos.panels, installationYear: 2022, capacityKw: 250, location: 'HSIIDC Industrial Estate, Panipat, Haryana', note: illustrativeProjectNote },
  { slug: 'warehouse-solar-plant', category: 'Commercial', title: 'Warehouse Solar Plant', image: photos.roof, installationYear: 2023, capacityKw: 100, location: 'G.T. Road, Panipat, Haryana', note: illustrativeProjectNote },
  { slug: 'home-solar-system', category: 'Residential', title: 'Home Solar System', image: photos.hero, installationYear: 2021, capacityKw: 3, location: 'Samalkha, Haryana', note: illustrativeProjectNote },
  { slug: 'factory-solar-system', category: 'Industrial', title: 'Factory Solar System', image: photos.maintenance, installationYear: 2024, capacityKw: 500, location: 'Panipat, Haryana', note: illustrativeProjectNote },
  { slug: 'home-solar-installation', category: 'Residential', title: 'Home Solar Installation', image: photos.home, installationYear: 2023, capacityKw: 10, location: 'Israna, Haryana', note: illustrativeProjectNote },
  { slug: 'commercial-rooftop-solar', category: 'Commercial', title: 'Commercial Rooftop Solar', image: photos.commercial, installationYear: 2024, capacityKw: 75, location: 'Samalkha Industrial Area, Haryana', note: illustrativeProjectNote },
  { slug: 'industrial-solar-plant', category: 'Industrial', title: 'Industrial Solar Plant', image: photos.panels, installationYear: 2023, capacityKw: 350, location: 'Madlauda, Haryana', note: illustrativeProjectNote },
]
const testimonials = [
  { name: 'Pinki Malik', text: 'Great experience with fast installation. Would recommend.' },
  { name: 'Satbir Jaglan', text: 'Super fast installation with best service across Panipat.' },
  { name: 'VIRENDER SINGH', text: 'Excellent service from Dangi Solar, very professional team, good quality solar system installed.' },
]
const services = [
  { title: 'Residential Solar', kicker: 'FOR YOUR HOME', icon: <Home />, image: photos.home, description: 'Generate your own electricity with a rooftop system designed for your home.', points: ['Rooftop solar installation', 'System sizing for your needs', 'Guidance on applicable subsidy and approvals'], property: 'Residential', service: 'Residential rooftop solar', cta: 'Get Home Solar Quote' },
  { title: 'Commercial & Industrial', kicker: 'FOR YOUR BUSINESS', icon: <Factory />, image: photos.commercial, description: 'Turn unused rooftop space into a smarter energy investment for your business.', points: ['Commercial rooftop installations', 'Industrial and warehouse systems', 'Site assessment and system planning'], property: 'Commercial', service: 'Commercial solar', cta: 'Get Business Solar Quote' },
  { title: 'Maintenance & Repair', kicker: 'CARE & SUPPORT', icon: <Wrench />, image: photos.maintenance, description: 'Keep your solar system operating efficiently with professional inspection and maintenance.', points: ['Solar system inspection', 'Panel cleaning, where offered', 'Performance and fault checks'], property: 'Residential', service: 'Maintenance and repair', cta: 'Request Maintenance' },
]
const servicesPageDetails = [
  {
    title: 'Residential Solar',
    image: photos.home,
    imageAlt: 'Residential rooftop solar installation',
    description: 'Power your home with clean, affordable rooftop solar energy. We design and install solar systems based on your household electricity consumption, rooftop conditions, and energy requirements.',
    features: [
      'Customized rooftop solar installation',
      'Solar system sizing based on electricity consumption',
      'High-quality solar panels and installation components',
      '25-year solar panel performance warranty; panel performance only, subject to manufacturer terms',
      'PM Surya Ghar Muft Bijli Yojana guidance on eligibility, required documents, application steps, and applicable subsidy procedures',
      'Typical installation within 3–5 working days, subject to site readiness, approvals, stock, and installation conditions',
      'Compatible smart monitoring app included to track system performance and energy generation',
      'Residential system capacity: 1 kW–10 kW',
      'System inspection and installation support',
    ],
    note: '',
    price: '₹65,000',
    service: 'Residential rooftop solar',
  },
  {
    title: 'Commercial & Industrial Solar',
    image: photos.commercial,
    imageAlt: 'Commercial rooftop solar installation',
    description: "Reduce electricity expenses with customized solar installations for commercial buildings, factories, warehouses, and industrial facilities. Our solutions are designed around your property's available rooftop area and energy requirements.",
    features: [
      'Commercial rooftop solar installations',
      'Industrial and warehouse solar systems',
      'Site assessment, system planning, and customized capacity recommendations',
      '25-year solar panel performance warranty, subject to the manufacturer’s terms',
      'Commercial system capacity: 10 kW–500 kW+',
      'Remote SCADA monitoring and performance tracking, where applicable',
      'DISCOM approval, documentation, and grid-connection assistance, where applicable',
      'Priority technical breakdown support, subject to actual service terms',
      'Ongoing maintenance and system performance monitoring support',
    ],
    note: 'ROI is typically estimated within 3–5 years; this is indicative, not guaranteed, and depends on electricity use, tariffs, project costs, generation, and operating conditions.',
    price: '₹3,50,000',
    service: 'Commercial solar',
  },
  {
    title: 'AMC & Maintenance',
    image: photos.maintenance,
    imageAlt: 'Solar panel inspection and maintenance',
    description: 'Keep your solar system operating efficiently with professional inspection and maintenance services designed to help identify issues and maintain system performance.',
    features: ['Solar system inspection', 'Panel cleaning, where offered', 'Performance and fault checks', 'Preventive maintenance support', 'Maintenance recommendations'],
    note: '',
    price: '₹2,500',
    service: 'Maintenance and repair',
  },
]
const homeStatistics = [
  { value: '500+', label: 'Installations Completed', verified: false },
  { value: '3,500 kW', label: 'Total Installed Capacity', verified: false },
  { value: '10+ Years', label: 'Industry Experience', verified: false },
  { value: '99.9%', label: 'Client Satisfaction', verified: false },
]
const serviceProcessSteps = [
  { n: '01', title: 'Free Site Survey', text: 'Our experts visit your site to assess your rooftop, available space, electricity bills, and energy requirements to recommend the right solar system size.' },
  { n: '02', title: 'Custom Proposal', text: 'Receive a detailed, customized proposal with system size, estimated savings, pricing, equipment specifications, and applicable subsidy assistance.' },
  { n: '03', title: 'Installation', text: 'Our qualified installation team installs your solar system safely and efficiently, coordinating applicable DISCOM approvals and commissioning requirements.' },
  { n: '04', title: 'Handover & Support', text: 'We commission your system, explain how to monitor its performance, and provide applicable after-sales support and maintenance guidance.' },
]
const companyLogo = '/Glossy Solar Leaf Emblem.png'
const routeNames: Record<string, string> = { '/': 'Home', '/services': 'Services', '/projects': 'Projects', '/about': 'About', '/contact': 'Contact' }

function getFileBasePath() {
  if (window.location.protocol !== 'file:') return ''
  return decodeURIComponent(window.location.pathname).replace(/\/index\.html?$/i, '').replace(/\/+$/, '')
}

function normalizeRouteFromLocation() {
  const fullPath = decodeURIComponent(window.location.pathname)
  const fileBasePath = getFileBasePath()

  if (fileBasePath && fullPath.startsWith(fileBasePath)) {
    return `${fullPath.slice(fileBasePath.length) || '/'}${window.location.hash}`
  }

  return `${fullPath}${window.location.hash}`
}

function normalizeRouteLink(to: string) {
  if (window.location.protocol === 'file:' && to.startsWith('/')) return to.slice(1)
  return to
}

function navigate(to: string) {
  const normalizedTo = normalizeRouteLink(to)
  const currentRoute = normalizeRouteFromLocation()
  if (currentRoute === normalizedTo) {
    const hash = normalizedTo.split('#')[1]
    if (hash) window.setTimeout(() => document.getElementById(decodeURIComponent(hash))?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0)
    else window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  window.history.pushState({}, '', normalizedTo)
  window.dispatchEvent(new PopStateEvent('popstate'))
}

function RouteLink({ to, className, children, onClick, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { to: string }) {
  const href = normalizeRouteLink(to)
  return <a href={href} className={className} onClick={event => {
    onClick?.(event)
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    event.preventDefault()
    navigate(to)
  }} {...props}>{children}</a>
}

function App() {
  const [route, setRoute] = useState(() => normalizeRouteFromLocation())
  const [menuOpen, setMenuOpen] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [loaderFading, setLoaderFading] = useState(false)
  const [loaderVisible, setLoaderVisible] = useState(true)

  useEffect(() => {
    const updateRoute = () => {
      setRoute(normalizeRouteFromLocation())
      setMenuOpen(false)
    }
    window.addEventListener('popstate', updateRoute)
    return () => window.removeEventListener('popstate', updateRoute)
  }, [])

  useEffect(() => {
    const hash = route.split('#')[1]
    if (hash) {
      window.setTimeout(() => document.getElementById(decodeURIComponent(hash))?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0)
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [route])

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const startedAt = performance.now()
    let animationFrame = 0
    let fadeTimer = 0
    let fallbackTimer = 0
    let finished = false
    const finish = () => {
      if (finished) return
      finished = true
      window.clearTimeout(fallbackTimer)
      setLoadingProgress(100)
      setLoaderFading(true)
      fadeTimer = window.setTimeout(() => {
        setLoaderVisible(false)
        document.body.style.overflow = previousOverflow
      }, 450)
    }
    const update = (now: number) => {
      if (finished) return
      const progress = Math.max(0, Math.min(90, Math.round(((now - startedAt) / 1750) * 90)))
      setLoadingProgress(progress)
      if (progress >= 90 && document.readyState === 'complete') return finish()
      animationFrame = window.requestAnimationFrame(update)
    }
    animationFrame = window.requestAnimationFrame(update)
    fallbackTimer = window.setTimeout(finish, 6000)
    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.clearTimeout(fadeTimer)
      window.clearTimeout(fallbackTimer)
      document.body.style.overflow = previousOverflow
    }
  }, [])

  const path = route.split('#')[0].replace(/\/$/, '') || '/'
  const activePath = path.startsWith('/projects/') ? '/projects' : path
  const currentProject = path.startsWith('/projects/') ? projects.find(project => project.slug === path.slice('/projects/'.length)) : undefined
  const routeTitle = routeNames[activePath]
  const whatsappUrl = business.whatsapp ? `https://wa.me/${business.whatsapp}` : ''

  return <>
    {loaderVisible && <div className={`site-loader${loaderFading ? ' site-loader-fading' : ''}`} role="status" aria-live="polite" aria-label={`Loading website, ${loadingProgress}%`}>
      <div className="site-loader-content"><img className="site-loader-logo" src={companyLogo} alt="Dangi Solar Solutions logo" /><strong className="site-loader-name">DANGI SOLAR SOLUTIONS</strong><span className="site-loader-tagline">Powering a Brighter, Greener Future</span><div className="site-loader-progress" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={loadingProgress}><span style={{ width: `${loadingProgress}%` }} /></div><span className="site-loader-percentage">{loadingProgress}%</span></div>
    </div>}
    <header className="header">
      <RouteLink to="/" className="brand" onClick={() => setMenuOpen(false)} aria-label="Dangi Solar Solutions home"><span className="brand-mark"><img src={companyLogo} alt="" /></span><span><strong>DANGI SOLAR</strong><small>SOLUTIONS</small></span></RouteLink>
      <button className="mobile-menu" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(open => !open)}>{menuOpen ? <X /> : <Menu />}</button>
      <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
        {Object.entries(routeNames).map(([to, label]) => <RouteLink key={to} to={to} className={activePath === to ? 'active' : undefined} aria-current={activePath === to ? 'page' : undefined} onClick={() => setMenuOpen(false)}>{label}</RouteLink>)}
      </nav>
      <RouteLink to="/contact#quote-form" className="btn btn-orange header-cta">Get Free Quote <ArrowUpRight size={17} /></RouteLink>
    </header>
    <main key={path}>
      {path === '/' && <HomePage />}
      {path === '/services' && <ServicesPage />}
      {path === '/projects' && <ProjectsPage />}
      {currentProject && <ProjectDetail project={currentProject} />}
      {path === '/about' && <AboutPage />}
      {path === '/contact' && <ContactPage />}
      {(!routeTitle || (path.startsWith('/projects/') && !currentProject)) && <NotFound />}
    </main>
    <Footer />
    {whatsappUrl ? <a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle /></a> : <RouteLink to="/contact#quote-form" className="whatsapp-float whatsapp-disabled" title="WhatsApp number needs to be configured" aria-label="WhatsApp contact not configured"><MessageCircle /></RouteLink>}
  </>
}

function HomePage() {
  const [bill, setBill] = useState(5000)
  const [tariff, setTariff] = useState(8)
  const [consumption, setConsumption] = useState('')
  const [roof, setRoof] = useState('Medium')
  const [selfUse, setSelfUse] = useState(0.8)
  const calc = useMemo(() => {
    const use = Math.max(0, Number(consumption) || bill / Math.max(1, tariff))
    const roofLimit = roof === 'Small' ? 3 : roof === 'Large' ? 15 : 7
    const capacity = Math.max(0, Math.min(roofLimit, use / 120, 20))
    const generation = capacity * 120
    const savings = Math.min(generation, use) * tariff * selfUse
    return { capacity, generation, savings, annual: savings * 12, remaining: Math.max(0, bill - savings) }
  }, [bill, tariff, consumption, roof, selfUse])
  const money = (value: number) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(Math.max(0, value))
  return <>
    <section className="hero">
      <video className="hero-video" src="/9790190-uhd_3840_2160_30fps.mp4" poster={photos.hero} autoPlay muted loop playsInline preload="metadata" />
      <div className="hero-shade" /><div className="hero-content"><span className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> Trusted Solar Solutions Across Haryana</span><h1>Power Your Home with <em>Clean, Affordable</em> Solar Energy.</h1><p>Smart rooftop solar solutions for homes and businesses across Haryana.</p><div className="hero-actions"><RouteLink to="/contact#quote-form" className="btn btn-orange">Get Free Solar Quote <ArrowRight size={18} /></RouteLink><RouteLink to="/projects" className="btn btn-glass">Explore Our Projects <ArrowDown size={17} /></RouteLink></div><div className="hero-proof"><div><strong>500+</strong><span>Installations</span></div><div><strong>3,500 kW</strong><span>Installed capacity</span></div><div><strong>Since 2014</strong><span>Serving Haryana</span></div></div></div>
      <div className="hero-tag"><span className="tag-icon"><Zap size={18} /></span><span><strong>Make sunshine work for you</strong><small>Explore a smarter energy future</small></span></div>
    </section>
    <section className="section container"><SectionHeading eyebrow="WHAT WE OFFER" title={<>Solar solutions for <em>every need.</em></>} description="Reliable solar systems designed around your property and energy requirements." /><div className="service-grid">{services.map(service => <ServiceCard key={service.title} service={service} compact />)}</div><div className="center-action"><RouteLink to="/services" className="btn btn-blue">Explore All Services <ArrowRight size={17} /></RouteLink></div></section>
    <section className="home-statistics" aria-label="Company statistics">
      <div className="container home-statistics-grid">
        {homeStatistics.map(statistic => <div className="home-statistic" key={statistic.label}>
          <strong>{statistic.value}</strong>
          <span>{statistic.label}</span>
        </div>)}
      </div>
      {homeStatistics.some(statistic => !statistic.verified) && <p className="home-statistics-note">Figures supplied for this site; confirm with the owner before public use.</p>}
    </section>
    <section className="trusted-section">
      <div className="trusted-inner container">
        <div className="trusted-photo">
          <img src="/Joyful%20Family%20Portrait%20on%20the%20Living%20Room%20Rug.png" alt="Indian family smiling together at home" loading="lazy" />
          <div className="trusted-savings-badge"><span>Average monthly savings</span><strong>₹3,500 – ₹8,000</strong><small>Estimated, not guaranteed</small></div>
        </div>
        <div className="trusted-copy">
          <span className="eyebrow">WHY CHOOSE US</span>
          <h2>Trusted by 500+ <em>Haryana Families</em></h2>
          <p className="trusted-intro">We're not just installers — we're your long-term solar partners.</p>
          <div className="trust-benefits">
            <article className="trust-benefit"><CheckCircle2 aria-hidden="true" /><div><h3>Certified Installers</h3><p>MNRE-approved technicians with years of hands-on experience in residential and commercial solar.</p></div></article>
            <article className="trust-benefit"><CheckCircle2 aria-hidden="true" /><div><h3>10+ Years in Haryana</h3><p>Deep local knowledge of Haryana's climate, grid conditions, and government subsidy programs.</p></div></article>
            <article className="trust-benefit"><CheckCircle2 aria-hidden="true" /><div><h3>After-Sales Support</h3><p>Dedicated support team for maintenance, monitoring, and any issues — long after installation day.</p></div></article>
            <article className="trust-benefit"><CheckCircle2 aria-hidden="true" /><div><h3>Subsidy Assistance</h3><p>We help you understand applicable government subsidy requirements so you can explore available benefits with confidence.</p></div></article>
          </div>
          <p className="trusted-verification">Owner verification required before publishing the 500+ family figure, experience, MNRE credentials, support and subsidy claims. Savings are an estimate only; actual savings vary by system and usage.</p>
          <RouteLink to="/about" className="btn btn-blue">About Our Company <ArrowRight size={17} /></RouteLink>
        </div>
      </div>
    </section>
    <section className="section container" id="calculator"><SectionHeading eyebrow="SMARTER ENERGY STARTS HERE" title={<>Calculate your <em>solar savings.</em></>} description="Adjust the details below for a transparent, indicative estimate." /><div className="calculator-card"><div className="calculator-inputs"><div className="calc-top"><span className="calc-icon"><CircleDollarSign /></span><div><h3>Your energy profile</h3><p>Tell us about your current electricity use.</p></div></div><label>Monthly electricity bill <strong>{money(bill)}</strong><input type="range" min="1000" max="30000" step="500" value={bill} onChange={event => setBill(Number(event.target.value))} /><span className="range-labels"><span>₹1,000</span><span>₹30,000+</span></span></label><div className="field-row"><label>Rooftop space<select value={roof} onChange={event => setRoof(event.target.value)}><option>Small</option><option>Medium</option><option>Large</option></select></label><label>Tariff (₹ / kWh)<input type="number" min="1" max="50" value={tariff} onChange={event => setTariff(Math.max(1, Number(event.target.value) || 1))} /></label></div><label>Actual monthly use (kWh)<input type="number" min="0" placeholder="Optional" value={consumption} onChange={event => setConsumption(event.target.value)} /></label><label>Estimated self-consumption <strong>{Math.round(selfUse * 100)}%</strong><input type="range" min="0.4" max="1" step="0.05" value={selfUse} onChange={event => setSelfUse(Number(event.target.value))} /><span className="hint">The share of solar generation assumed to offset billed electricity.</span></label></div><div className="calculator-results"><span className="result-kicker"><CircleDollarSign size={17} /> YOUR INDICATIVE ESTIMATE</span><p className="result-label">Potential monthly bill savings</p><strong className="result-number">{money(calc.savings)}</strong><span className="result-period">per month · estimated</span><div className="result-divider" /><ResultLine label="Suggested system size" value={`${calc.capacity.toFixed(1)} kW`} /><ResultLine label="Estimated monthly generation" value={`${Math.round(calc.generation)} kWh`} /><ResultLine label="Estimated annual savings" value={money(calc.annual)} /><ResultLine label="Remaining bill estimate" value={money(calc.remaining)} /><RouteLink to="/contact#quote-form" className="btn btn-orange btn-full">Get My Free Solar Assessment <ArrowRight size={17} /></RouteLink><p className="calc-disclaimer">Planning assumptions: 120 kWh per kW per month, an editable tariff and self-consumption factor, and a simplified roof-size cap. Not a quote or guaranteed saving. Final results depend on site conditions, shading, utility rules and system design.</p></div></div></section>
    <Testimonials />
    <HomeQuoteSection />
  </>
}

function HomeQuoteSection() {
  const [form, setForm] = useState({ name: '', phone: '', service: 'Residential Solar', location: '', bill: '' })
  const [formError, setFormError] = useState('')
  const [formNotice, setFormNotice] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submitInquiry = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (isSubmitting) return
    setFormError('')
    setFormNotice('')

    if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\D/g, ''))) {
      setFormError('Enter a valid 10-digit Indian phone number.')
      return
    }

    setIsSubmitting(true)
    try {
      const body = [
        'Solar quote request — Dangi Solar Solutions',
        `Name: ${form.name}`,
        `Phone: ${form.phone}`,
        `System type: ${form.service}`,
        `Location: ${form.location || 'Not provided'}`,
        `Monthly electricity bill: ${form.bill ? `₹${form.bill}` : 'Not provided'}`,
      ].join('\n')

      if (business.email) {
        window.location.href = `mailto:${business.email}?subject=${encodeURIComponent('Free Solar Quote Request')}&body=${encodeURIComponent(body)}`
        setFormNotice('Your email app should open with the inquiry drafted. Please send the email to complete the request.')
      } else {
        const blob = new Blob([body], { type: 'text/plain;charset=utf-8' })
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = 'dangi-solar-inquiry.txt'
        link.click()
        URL.revokeObjectURL(url)
        setFormNotice('Your inquiry details were downloaded as a text file. This website has no lead database or configured company email, so the request has not been sent. Please contact the business directly to submit it.')
      }
    } catch (error) {
      console.error('Unable to prepare solar inquiry:', error)
      setFormError('We could not prepare your inquiry. Please try again or contact the business directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return <section className="home-quote-section"><div className="container home-quote-grid"><div className="home-quote-copy"><span className="eyebrow">YOUR SOLAR JOURNEY STARTS HERE</span><h2>Ready to Switch to <em>Solar?</em></h2><p>Get a free consultation and custom quote for your home or business. No obligation — just honest advice.</p><ul className="home-quote-benefits"><li><CheckCircle2 aria-hidden="true" />Free site survey and system design</li><li><CheckCircle2 aria-hidden="true" />Transparent pricing — no hidden costs</li><li><CheckCircle2 aria-hidden="true" />Guidance on applicable government subsidies</li><li><CheckCircle2 aria-hidden="true" />Installation in as little as 3–5 working days, where feasible</li></ul></div><form className="home-quote-form" onSubmit={submitInquiry}><div className="home-quote-form-heading"><span className="form-icon"><Send /></span><h3>Get Your Free Quote</h3></div><label>Full Name *<input required autoComplete="name" value={form.name} onChange={event => setForm({ ...form, name: event.target.value })} placeholder="Your full name" /></label><label>Phone Number *<input required type="tel" inputMode="numeric" autoComplete="tel" maxLength={10} value={form.phone} onChange={event => setForm({ ...form, phone: event.target.value.replace(/\D/g, '').slice(0, 10) })} placeholder="10-digit mobile number" /></label><label>Select System Type<select value={form.service} onChange={event => setForm({ ...form, service: event.target.value })}><option>Residential Solar</option><option>Commercial &amp; Industrial Solar</option><option>AMC &amp; Maintenance</option></select></label><label>Location (optional)<input value={form.location} onChange={event => setForm({ ...form, location: event.target.value })} placeholder="City or area" /></label><label>Monthly Electricity Bill (optional)<input type="number" min="0" value={form.bill} onChange={event => setForm({ ...form, bill: event.target.value })} placeholder="₹ e.g. 5000" /></label>{formError && <p className="form-alert error" role="alert">{formError}</p>}{formNotice && <p className="form-alert success" role="status">{formNotice}</p>}<button className="btn btn-orange btn-full home-quote-submit" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Preparing your inquiry…' : <>Request Free Quote <ArrowRight size={17} /></>}</button><p className="home-quote-response-time">We’ll get back to you within 24 hours.</p><p className="home-quote-disclaimer">This demo form does not send or store enquiries automatically. Your inquiry is downloaded unless a company email is configured.</p></form></div></section>
}

function ServicesPage() {
  return <><PageIntro eyebrow="OUR SERVICES" title={<>Solar solutions for <em>every need.</em></>} description="Explore solar installation, system planning and care for homes and businesses across Haryana." /><section className="services-showcase">{servicesPageDetails.map((service, index) => <article className={`service-feature${index % 2 ? ' service-feature-reversed' : ''}`} key={service.title}><div className="service-feature-inner container"><div className="service-feature-image"><img src={service.image} alt={service.imageAlt} loading="lazy" /></div><div className="service-feature-content"><span className="eyebrow">{index === 0 ? 'FOR YOUR HOME' : index === 1 ? 'FOR YOUR BUSINESS' : 'CARE & SUPPORT'}</span><h2>{service.title}</h2><p className="service-feature-description">{service.description}</p><ul className="service-feature-list">{service.features.map(feature => <li key={feature}><CheckCircle2 aria-hidden="true" />{feature}</li>)}</ul>{service.note && <p className="service-feature-note">{service.note}</p>}<div className="service-feature-bottom"><div className="service-feature-price"><span>Starting from</span><strong>{service.price}</strong></div><RouteLink to={`/contact?service=${encodeURIComponent(service.service)}#quote-form`} className="btn btn-blue">Get a Quote <ArrowRight size={17} /></RouteLink></div></div></div></article>)}</section><section className="how-it-works-section"><div className="container"><div className="section-heading centered"><h2>How It Works</h2><p>From your first call to your first unit of solar energy generated — here's our simple 4-step process.</p></div><div className="how-it-works-grid">{serviceProcessSteps.map(step => <article className="how-it-works-card" key={step.n}><span className="how-it-works-number">{step.n}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></div></section><section className="services-final-cta"><div className="container services-final-cta-content"><h2>Ready to Go Solar?</h2><p>Get your free site survey and custom quote — no obligation, no pressure.</p><div className="services-final-cta-actions"><RouteLink to="/contact#quote-form" className="btn services-cta-quote">Get Free Quote <ArrowRight size={17} /></RouteLink><a className="btn services-cta-call" href={`tel:${servicesCallNumber}`}><Phone size={17} />Call Us Now</a></div></div></section></>
}

function ProjectsPage() {
  const [filter, setFilter] = useState('All Projects')
  const filtered = projects.filter(project => filter === 'All Projects' || project.category === filter)
  return <><PageIntro eyebrow="OUR WORK" title={<>Solar projects <em>across Haryana.</em></>} description="These gallery images are illustrative examples, not verified completed installations by Dangi Solar Solutions." /><section className="section projects-section"><div className="container"><ProjectFilters filter={filter} setFilter={setFilter} /><div className="project-grid">{filtered.map(project => <ProjectCard key={project.slug} project={project} />)}</div></div></section></>
}

function ProjectDetail({ project }: { project: Project }) {
  return <><PageIntro eyebrow={`${project.category.toUpperCase()} SOLAR · ILLUSTRATIVE EXAMPLE`} title={<>{project.title}</>} description={project.note} /><section className="section container project-detail"><img src={project.image} alt={`${project.category} solar illustrative example`} /><div><span className="eyebrow">PROJECT INFORMATION</span><h2>{project.title}</h2><p>This gallery entry is an illustrative example, not a verified completed company project. The installation year, system capacity and location shown are sample values; verify all project details before publication.</p><div className="project-facts"><p><strong>Category</strong><span>{project.category}</span></p><p><strong>Installation Year</strong><span>{project.installationYear} (illustrative)</span></p><p><strong>System Capacity</strong><span>{project.capacityKw} kW (illustrative)</span></p><p><strong>Location</strong><span>{project.location ? `${project.location} (illustrative)` : 'Not provided'}</span></p></div><RouteLink to="/contact#quote-form" className="btn btn-orange">Request a Similar Solar Installation <ArrowRight size={17} /></RouteLink><RouteLink to="/projects" className="back-link"><ArrowLeft size={16} /> Back to Projects</RouteLink></div></section></>
}

function AboutPage() {
  return <><PageIntro eyebrow="ABOUT DANGI SOLAR SOLUTIONS" title={<>Haryana's solar partner <em>since 2014.</em></>} description="Helping homes and businesses explore dependable solar energy solutions." /><section className="about-section"><div className="container about-grid"><div className="about-image"><img src={photos.roof} alt="Illustrative rooftop solar installation" loading="lazy" /><div className="about-stamp"><Sun /><strong>Since 2014</strong><span>Solar solutions</span></div></div><div className="about-copy"><span className="eyebrow">OUR STORY</span><h2>Powering a brighter, <em>greener future.</em></h2><p>Dangi Solar Solutions helps homes and businesses explore dependable solar energy solutions, from rooftop installations to commercial systems and maintenance.</p><div className="about-metrics"><div><strong>500+</strong><span>Installations*</span></div><div><strong>3,500 kW</strong><span>Installed capacity*</span></div><div><strong>10+ yrs</strong><span>Experience*</span></div></div><small className="verification-note">*Business figures supplied for this site; confirm with the owner before public use.</small><RouteLink to="/contact" className="btn btn-blue">Talk to Our Team <ArrowRight size={17} /></RouteLink></div></div></section><section className="section container values-section"><SectionHeading eyebrow="OUR PRINCIPLES" title={<>What <em>drives us.</em></>} /><div className="values-grid"><Value icon={<ShieldCheck />} title="Quality First" text="Reliable equipment and careful installation planning." /><Value icon={<MessageCircle />} title="Customer Focus" text="Clear communication and solutions designed around your needs." /><Value icon={<Leaf />} title="Clean Energy" text="Helping homes and businesses explore cleaner electricity." /><Value icon={<Wrench />} title="Professional Service" text="Installation, guidance and maintenance support where offered." /></div></section><section className="section certifications"><div className="container"><SectionHeading eyebrow="TRUST & COMPLIANCE" title={<>Certifications <em>& approvals.</em></>} description="Credentials shown in reference material require owner verification before public claims." /><div className="cert-grid">{['MNRE Empanelled', 'DHBVN Approved', 'UHBVN Approved', 'ISO 9001:2015', 'PM Surya Ghar', 'NABCB Accredited'].map(name => <article className="cert-card" key={name}><span><BadgeCheck /></span><strong>{name}</strong><small>Verify current status</small></article>)}</div></div></section><section className="centered page-cta"><h2>Ready to explore solar?</h2><RouteLink to="/contact" className="btn btn-orange">Talk to Our Team <ArrowRight size={17} /></RouteLink></section></>
}

function ContactPage() {
  const requestedService = new URLSearchParams(window.location.search).get('service')
  const availableServices = ['Residential rooftop solar', 'Commercial solar', 'Industrial solar', 'Maintenance and repair', 'Not sure — need guidance']
  const initialService = requestedService && availableServices.includes(requestedService) ? requestedService : 'Residential rooftop solar'
  const [form, setForm] = useState({ name: '', mobile: '', property: 'Residential', location: '', bill: '5000', email: '', consumption: '', service: initialService, contactTime: '', message: '' })
  const [formError, setFormError] = useState('')
  const [formNotice, setFormNotice] = useState('')
  const submitQuote = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFormError('')
    setFormNotice('')
    if (!/^[6-9]\d{9}$/.test(form.mobile.replace(/\D/g, ''))) {
      setFormError('Enter a valid 10-digit Indian mobile number.')
      return
    }
    const body = ['Solar quote request — Dangi Solar Solutions', `Name: ${form.name}`, `Mobile: ${form.mobile}`, `Property: ${form.property}`, `Location: ${form.location}`, `Monthly bill: ₹${form.bill}`, `Email: ${form.email || 'Not provided'}`, `Consumption: ${form.consumption || 'Not provided'}`, `Interested service: ${form.service}`, `Preferred contact time: ${form.contactTime || 'Not specified'}`, `Message: ${form.message || '—'}`].join('\n')
    if (!business.email) {
      const blob = new Blob([body], { type: 'text/plain;charset=utf-8' })
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'dangi-solar-inquiry.txt'
      link.click()
      URL.revokeObjectURL(url)
      setFormNotice('Your inquiry details were downloaded as a text file. This website has no lead database or configured company email yet, so the request has not been sent. Please contact the business directly to submit it.')
      return
    }
    window.location.href = `mailto:${business.email}?subject=${encodeURIComponent('Free Solar Quote Request')}&body=${encodeURIComponent(body)}`
    setFormNotice('Your email app should open with the inquiry drafted. Please send the email to complete the request.')
  }
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(`${business.name}, ${business.address}`)}&output=embed`
  return <><PageIntro eyebrow="LET'S TALK SOLAR" title={<>Let's build something <em>better together.</em></>} description="Tell us a little about your property. Explore a solar solution for your home or business." /><section className="contact-section"><div className="container contact-grid"><div className="contact-copy"><span className="eyebrow eyebrow-light">GET IN TOUCH</span><h2>Start with a <em>conversation.</em></h2><p>Share your requirements to explore suitable options.</p><div className="contact-detail"><span><MapPin /></span><div><strong>Visit our location</strong><a href={business.maps} target="_blank" rel="noreferrer">{business.address} <ArrowUpRight size={14} /></a></div></div><div className="contact-detail"><span><ShieldCheck /></span><div><strong>No-pressure first step</strong><small>Share your requirements to explore suitable options.</small></div></div><div className="contact-map"><a href={business.maps} target="_blank" rel="noreferrer"><MapPin size={18} /> Open location in Google Maps <ArrowUpRight size={16} /></a></div></div>
    <form id="quote-form" className="quote-form" onSubmit={submitQuote}><div className="form-heading"><span className="form-icon"><Send /></span><div><h3>Get your free solar quote</h3><p>Fill in the details and prepare your inquiry.</p></div></div>
      <div className="field-row"><label>Full name *<input required value={form.name} onChange={event => setForm({ ...form, name: event.target.value })} placeholder="Your full name" /></label><label>Mobile number *<input required inputMode="numeric" maxLength={10} value={form.mobile} onChange={event => setForm({ ...form, mobile: event.target.value.replace(/\D/g, '').slice(0, 10) })} placeholder="10-digit mobile number" /></label></div>
      <div className="field-row"><label>Property type *<select required value={form.property} onChange={event => setForm({ ...form, property: event.target.value })}><option>Residential</option><option>Commercial</option><option>Industrial</option></select></label><label>City / location *<input required value={form.location} onChange={event => setForm({ ...form, location: event.target.value })} placeholder="e.g. Israna, Panipat" /></label></div>
      <div className="field-row"><label>Monthly electricity bill (₹) *<input required type="number" min="0" value={form.bill} onChange={event => setForm({ ...form, bill: event.target.value })} /></label><label>Monthly use (kWh)<input type="number" min="0" value={form.consumption} onChange={event => setForm({ ...form, consumption: event.target.value })} placeholder="Optional" /></label></div>
      <div className="field-row"><label>Email address<input type="email" value={form.email} onChange={event => setForm({ ...form, email: event.target.value })} placeholder="you@example.com" /></label><label>Interested service<select value={form.service} onChange={event => setForm({ ...form, service: event.target.value })}><option>Residential rooftop solar</option><option>Commercial solar</option><option>Industrial solar</option><option>Maintenance and repair</option><option>Not sure — need guidance</option></select></label></div>
      <label>Preferred contact time<input value={form.contactTime} onChange={event => setForm({ ...form, contactTime: event.target.value })} placeholder="e.g. Weekdays after 4 PM (optional)" /></label>
      <label>Additional message<textarea rows={3} value={form.message} onChange={event => setForm({ ...form, message: event.target.value })} placeholder="Anything else we should know? (optional)" /></label>
      {formError && <p className="form-alert error" role="alert">{formError}</p>}{formNotice && <p className="form-alert success" role="status">{formNotice}</p>}
      <p className="privacy-note">Your details are used to prepare this inquiry. This demo site does not transmit data to a server or store it in a lead database.</p><button className="btn btn-orange btn-full" type="submit">Prepare My Free Quote <ArrowRight size={17} /></button>
    </form></div></section><section className="contact-location"><div className="container"><div className="contact-location-heading"><span className="eyebrow">VISIT OUR LOCATION</span><h2>Find Us on the Map</h2><p>Visit Dangi Solar Solutions in Israna, Panipat, Haryana, and get directions to our location.</p></div><div className="contact-map-frame"><iframe src={mapEmbedUrl} title="Dangi Solar Solutions location in Israna, Panipat, Haryana" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" /></div><div className="contact-map-actions"><a className="btn btn-blue" href={business.maps} target="_blank" rel="noreferrer">Get Directions <ArrowUpRight size={17} /></a><a className="contact-map-secondary" href={business.maps} target="_blank" rel="noreferrer">Open in Google Maps <ArrowUpRight size={15} /></a></div></div></section></>
}

function ServiceCard({ service, compact = false }: { service: typeof services[number]; compact?: boolean }) {
  return <article className="service-card"><div className="service-image"><img src={service.image} alt={service.title} loading="lazy" /><span className="service-icon">{service.icon}</span></div><div className="service-copy"><span className="card-kicker">{service.kicker}</span><h3>{service.title}</h3><p>{service.description}</p>{!compact && <ul>{service.points.map(point => <li key={point}>{point}</li>)}</ul>}<RouteLink className="text-link" to={compact ? '/services' : '/contact#quote-form'}>{compact ? 'Explore service' : service.cta} <ArrowRight size={16} /></RouteLink></div></article>
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: React.ReactNode; description?: string }) {
  return <div className="section-heading centered"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{description && <p>{description}</p>}</div>
}
function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: React.ReactNode; description: string }) {
  return <section className="page-intro"><div className="container"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{description}</p></div></section>
}
function ProjectFilters({ filter, setFilter }: { filter: string; setFilter: (value: string) => void }) {
  return <div className="filter-row" role="group" aria-label="Filter projects">{['All Projects', 'Residential', 'Commercial', 'Industrial'].map(category => <button key={category} className={filter === category ? 'filter active' : 'filter'} onClick={() => setFilter(category)}>{category}</button>)}</div>
}
function ProjectCard({ project }: { project: Project }) {
  return <RouteLink to={`/projects/${project.slug}`} className="project-card"><div className="project-image"><img src={project.image} alt={`${project.category} solar illustrative example`} loading="lazy" /><span>{project.category}</span></div><div className="project-copy"><h3>{project.title}</h3><div className="project-meta"><p><CalendarDays size={14} aria-hidden="true" /><span>Installation Year: <strong>{project.installationYear}</strong></span></p><p><Zap size={14} aria-hidden="true" /><span>System Capacity: <strong>{project.capacityKw} kW</strong></span></p><p><MapPin size={14} aria-hidden="true" /><span>{project.location}</span></p></div><small>{project.note}</small></div></RouteLink>
}
function ResultLine({ label, value }: { label: string; value: string }) {
  return <div className="result-line"><span>{label}</span><strong>{value}</strong></div>
}
function Testimonials() {
  return <section className="section container testimonials"><SectionHeading eyebrow="CUSTOMER EXPERIENCES" title={<>Real Stories from Haryana Families</>} /><div className="testimonial-grid">{testimonials.map(testimonial => <article className="testimonial" key={testimonial.name}><div className="quote-mark">“</div><div className="stars" aria-label="5 out of 5 stars">★★★★★</div><p>{testimonial.text}</p><div className="reviewer"><span className="review-avatar">{testimonial.name.charAt(0)}</span><div><strong>{testimonial.name}</strong><small>Customer review supplied by business</small></div><CheckCircle2 size={18} /></div></article>)}</div><p className="review-note">Review text supplied by the business; verify against original review listings before publication.</p></section>
}
function Value({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return <article><span>{icon}</span><h3>{title}</h3><p>{text}</p></article>
}
function NotFound() {
  return <section className="not-found container"><span className="eyebrow">404 · PAGE NOT FOUND</span><h1>We couldn't find <em>that page.</em></h1><p>The link may be out of date, or the page may have moved.</p><RouteLink to="/" className="btn btn-orange">Back to Home <ArrowRight size={17} /></RouteLink></section>
}
function Footer() {
  return <footer className="footer"><div className="container footer-grid"><div className="footer-brand"><RouteLink className="brand brand-footer" to="/"><span className="brand-mark"><img src={companyLogo} alt="" /></span><span><strong>DANGI SOLAR</strong><small>SOLUTIONS</small></span></RouteLink><p>Solar solutions for homes and businesses across Haryana.</p><span className="footer-since">Serving Haryana since 2014</span></div><div><h4>Quick links</h4><RouteLink to="/">Home</RouteLink><RouteLink to="/services">Services</RouteLink><RouteLink to="/projects">Projects</RouteLink><RouteLink to="/about">About</RouteLink><RouteLink to="/contact">Contact</RouteLink></div><div><h4>Our services</h4><RouteLink to="/services">Residential Solar</RouteLink><RouteLink to="/services">Commercial & Industrial</RouteLink><RouteLink to="/services">Maintenance & Repair</RouteLink><RouteLink to="/#calculator">Solar Savings Calculator</RouteLink></div><div><h4>Contact</h4><p className="footer-address"><MapPin size={16} />{business.address}</p><a className="footer-map" href={business.maps} target="_blank" rel="noreferrer">Open Google Maps <ArrowUpRight size={14} /></a>{business.phone && <a href={`tel:${business.phone}`}><Phone size={15} /> {business.phone}</a>}{business.email && <a href={`mailto:${business.email}`}>{business.email}</a>}</div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Dangi Solar Solutions. All rights reserved.</span><RouteLink to="/contact">Privacy & inquiries</RouteLink><span className="footer-credit">Built &amp; Designed by JBD TECH</span></div></footer>
}

export default App
