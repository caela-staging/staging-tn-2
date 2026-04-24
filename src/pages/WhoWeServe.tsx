import { Link } from 'react-router-dom';
import { CountUpStat } from '@/components/CountUpStat';
import { motion } from 'motion/react';
import { AnimatedGradientText } from '@/components/AnimatedGradientText';
import { CompassButton } from '@/components/ui/compass-button';
import { ArrowRight, Zap, Droplets, Wind, DoorOpen, Wrench, Shield, Target, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { TestimonialsStack } from '@/components/TestimonialsStack';
import { FindYourTrueNorth } from '@/components/FindYourTrueNorth';
import truenorthIcon from '/Images/True North_icon badge black.svg';
import { FaqSection } from '@/components/FaqSection';
import { PhotoFrame } from '@/components/ui/photo-frame';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const trades = [
  {
    slug: 'hvac',
    anchor: 'trade-hvac',
    label: 'HVAC',
    icon: Wind,
    tagline: 'Heating, Ventilation & Air Conditioning',
    description: 'From booking rates to service agreements, we help HVAC companies build scalable systems that keep technicians busy and customers coming back.',
    color: 'from-sky-500/10 to-transparent',
    img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop',
    challenge: 'Most HVAC companies are leaving revenue on the table — inconsistent booking rates, technicians who skip the service agreement conversation, and seasonal cash flow swings that keep owners up at night.',
    workOn: [
      'Booking rate optimization — converting more inbound calls to confirmed, profitable jobs',
      'Service agreement systems that build recurring, weather-proof revenue',
      'Technician performance coaching to raise average ticket and earn lasting customer trust',
    ],
    stat: { value: '2×', label: 'average improvement in service agreement close rates across HVAC clients' },
  },
  {
    slug: 'plumbing',
    anchor: 'trade-plumbing',
    label: 'Plumbing',
    icon: Droplets,
    tagline: 'Residential & Commercial Plumbing',
    description: 'Increase average ticket, reduce callbacks, and build a plumbing operation that earns trust in every neighborhood you serve.',
    color: 'from-blue-500/10 to-transparent',
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop',
    challenge: 'Plumbing companies too often compete on price alone — undercutting margins, attracting the wrong customers, and burning out technicians who feel like order-takers instead of trusted advisors.',
    workOn: [
      'Average ticket growth through presenting options and premium service positioning',
      'Callback elimination systems that protect your reputation and margin',
      'CSR training to convert more calls, retain more customers, and generate referrals',
    ],
    stat: { value: '38%', label: 'average increase in job average ticket across plumbing clients' },
  },
  {
    slug: 'electrical',
    anchor: 'trade-electrical',
    label: 'Electrical',
    icon: Zap,
    tagline: 'Residential & Commercial Electrical',
    description: 'Turn your electrical company into a revenue-generating machine with coaching built around the unique sales cycle of the trades.',
    color: 'from-yellow-500/10 to-transparent',
    img: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop',
    challenge: "Electrical sales cycles are longer, customers are more skeptical, and price resistance is high. Without the right frameworks, even great electricians lose jobs they should have won.",
    workOn: [
      'Sales frameworks built specifically for the electrical sales cycle — from panel inspections to full rewires',
      'Presenting options strategies that reduce price resistance and close more premium work',
      'Multi-job closing techniques to capture the full scope of what a customer needs',
    ],
    stat: { value: '45%', label: 'average close rate improvement for electrical clients' },
  },
  {
    slug: 'garage-doors',
    anchor: 'trade-garage-doors',
    label: 'Garage Doors',
    icon: DoorOpen,
    tagline: 'Installation, Repair & Replacement',
    description: 'Maximize the high-frequency opportunity of garage door service calls with conversion coaching that turns single visits into long-term relationships.',
    color: 'from-orange-500/10 to-transparent',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop',
    challenge: 'Garage door companies see high call volume but low conversion — technicians fix the broken spring and leave, missing the safety inspection, the maintenance plan, and the upgrade conversation entirely.',
    workOn: [
      'Same-visit conversion coaching to present maintenance plans and replacements with confidence',
      'Safety inspection processes that build trust and surface real revenue opportunities',
      'Technician training that shifts the mindset from repair-and-run to advisor-for-life',
    ],
    stat: { value: '3×', label: 'increase in same-visit upsell conversion for garage door clients' },
  },
  {
    slug: 'other-trades',
    anchor: 'trade-other',
    label: 'Other Trades',
    icon: Wrench,
    tagline: 'Roofing, Pest Control, Restoration & More',
    description: "If you run a home service company and you're ready to grow the right way, True North's frameworks adapt to your trade.",
    color: 'from-primary/10 to-transparent',
    img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop',
    challenge: "Generic business coaching wasn't built for the trades. If you've sat through advice that didn't apply to your business, you already know the cost — wasted time, wasted money, and the same problems still unsolved.",
    workOn: [
      "Custom KPI frameworks built around your trade's specific metrics and sales cycle",
      'Revenue and retention systems adapted from our proven HVAC, plumbing, and electrical playbooks',
      'Leadership and hiring coaching to build the team your growth stage actually requires',
    ],
    stat: { value: '10+', label: 'trade verticals successfully coached using our adaptive frameworks' },
  },
];

const stats = [
  { end: 10, suffix: '+', prefix: '', label: 'Years Coaching the Trades' },
  { end: 500, suffix: '+', prefix: '', label: 'Businesses Transformed' },
  { end: 40, suffix: 'M+', prefix: '$', label: 'Revenue Generated for Clients' },
  { end: 4, suffix: '', prefix: '', label: 'Trade Specialties' },
];

export function WhoWeServe() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[75vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grain">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-[100px] animate-pulse-glow z-0" />
        <div className="absolute bottom-1/4 left-1/4 w-[28rem] h-[28rem] bg-amber-500/10 rounded-full filter blur-[120px] animate-pulse-glow z-0" style={{ animationDelay: '2s' }} />

        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop"
            alt="Home service professionals"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-background/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-6 md:px-12 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-xs font-bold uppercase tracking-widest text-primary mb-6 flex items-center justify-center gap-3"
          >
            <span className="w-8 h-px bg-primary" />
            True North Strategies
            <span className="w-8 h-px bg-primary" />
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-heading text-4xl md:text-6xl lg:text-8xl uppercase text-foreground mb-6 leading-none"
          >
            Who We <br />
            <AnimatedGradientText>Serve</AnimatedGradientText>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-2xl font-script text-primary max-w-2xl mx-auto mb-12"
          >
            We work exclusively with home service contractors — the people who keep America's homes running.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <CompassButton href="#trades">Find Your Trade</CompassButton>
            <CompassButton to="/connect">Book a Discovery Call</CompassButton>
          </motion.div>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────────── */}
      <section className="bg-foreground text-background">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={stagger}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className={`py-8 px-6 flex flex-col items-center justify-center relative border-background/10 ${i % 2 === 0 ? 'border-r' : ''} ${i < 2 ? 'border-b md:border-b-0' : ''} ${i < 3 ? 'md:border-r' : ''}`}
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
              <CountUpStat {...s} className="text-background" />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── INTRO / WHY TRADES-ONLY ───────────────────────────────── */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-topography opacity-[0.30] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left — content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={stagger}
              viewport={{ once: true }}
            >
              <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-3">
                <span className="w-8 h-px bg-primary" />
                Why We're Different
              </motion.p>
              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl uppercase text-foreground mb-8 leading-none">
                Built for the <AnimatedGradientText>Trades</AnimatedGradientText>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-foreground/80 leading-relaxed text-lg mb-6">
                Generic business coaching doesn't work for home service companies. Your sales cycles, seasonality, dispatch logistics, CSR workflows, and customer expectations are unlike any other industry. That's why True North works exclusively with trades businesses.
              </motion.p>
              <motion.p variants={fadeUp} className="text-foreground/80 leading-relaxed text-lg mb-10">
                We understand your metrics, your margins, and your customers — because we've spent over a decade inside these businesses. Every framework we use was built for the trades, not borrowed from somewhere else.
              </motion.p>
              <motion.div variants={fadeUp}>
                <CompassButton to="/coaching">See Our Coaching Programs</CompassButton>
              </motion.div>
            </motion.div>

            {/* Right — photo */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <PhotoFrame
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop"
                alt="Home service technician at work"
                innerClassName="h-[300px] md:h-[600px]"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── WHY IT WORKS ──────────────────────────────────────────── */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl uppercase text-foreground leading-none">
              What Every Trade <AnimatedGradientText>Gets</AnimatedGradientText>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={stagger}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16"
          >
            {[
              {
                icon: Shield,
                title: 'Trade-Specific Frameworks',
                body: 'No copy-paste strategies. Every coaching plan reflects the real rhythms, margins, and customer expectations of your specific trade.',
              },
              {
                icon: Target,
                title: 'Measurable Milestones',
                body: 'We define clear KPIs at the start of every engagement — booking rates, average ticket, conversion percentages — and hold you to them.',
              },
              {
                icon: TrendingUp,
                title: 'Scalable Systems',
                body: 'We help you build the operational infrastructure that lets you grow without burning out — hiring, training, dispatch, and leadership.',
              },
            ].map(({ icon: Icon, title, body }, i) => (
              <motion.div key={i} variants={fadeUp} className="text-center md:text-left group">
                <div className="w-14 h-14 bg-card flex items-center justify-center mb-8 mx-auto md:mx-0 border border-border/50 group-hover:border-primary/50 transition-colors group-hover:shadow-[0_0_15px_rgba(232,96,10,0.3)]">
                  <Icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-heading text-2xl uppercase text-foreground mb-4">{title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TRADE CARDS ───────────────────────────────────────────── */}
      <section id="trades" className="py-24 md:py-32 bg-background relative">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-heading text-4xl md:text-5xl uppercase text-foreground mb-6 leading-none">
              Select Your <AnimatedGradientText>Trade</AnimatedGradientText>
            </h2>
            <p className="text-lg font-script text-primary max-w-xl mx-auto">
              Every trade has its own coaching pathway. Find yours below.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={stagger}
            viewport={{ once: true }}
            className="grid grid-cols-6 gap-3"
          >
            {/* HVAC — featured center icon with concentric rings */}
            <motion.div variants={fadeUp} className="col-span-6 lg:col-span-2">
              <a href="#trade-hvac" className="block h-full group">
                <Card className="relative overflow-hidden bg-card border-primary/40 shadow-[0_0_18px_rgba(232,96,10,0.15)] hover:border-primary/80 hover:shadow-[0_0_28px_rgba(232,96,10,0.35)] transition-all duration-500 hover:-translate-y-1 rounded-none h-full">
                  <CardContent className="relative flex flex-col items-center justify-center text-center p-5 min-h-[260px]">
                    <div className="relative flex items-center justify-center mb-4 w-28 h-28">
                      <span className="absolute w-28 h-28 rounded-full border border-primary/10 block" />
                      <span className="absolute w-20 h-20 rounded-full border border-primary/20 block" />
                      <span className="absolute w-11 h-11 rounded-full bg-primary/10 block" />
                      <Wind className="relative w-7 h-7 text-primary" strokeWidth={1.25} />
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">{trades[0].tagline}</p>
                    <h3 className="font-heading text-2xl uppercase text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{trades[0].label}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed mb-4">{trades[0].description}</p>
                    <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-[10px]">
                      <span>Explore {trades[0].label} Coaching</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </CardContent>
                </Card>
              </a>
            </motion.div>

            {/* Plumbing — double-ring icon frame */}
            <motion.div variants={fadeUp} className="col-span-6 sm:col-span-3 lg:col-span-2">
              <a href="#trade-plumbing" className="block h-full group">
                <Card className="relative overflow-hidden bg-card border-primary/40 shadow-[0_0_18px_rgba(232,96,10,0.15)] hover:border-primary/80 hover:shadow-[0_0_28px_rgba(232,96,10,0.35)] transition-all duration-500 hover:-translate-y-1 rounded-none h-full">
                  <CardContent className="flex flex-col items-center text-center p-5 pt-5">
                    <div className="relative flex aspect-square size-20 rounded-full border border-border/40 items-center justify-center mb-4 before:absolute before:-inset-2 before:rounded-full before:border before:border-border/20">
                      <Droplets className="w-8 h-8 text-primary" strokeWidth={1} />
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">{trades[1].tagline}</p>
                    <h3 className="font-heading text-2xl uppercase text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{trades[1].label}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed mb-4">{trades[1].description}</p>
                    <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-[10px]">
                      <span>Explore {trades[1].label} Coaching</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </CardContent>
                </Card>
              </a>
            </motion.div>

            {/* Electrical — waveform graph + icon */}
            <motion.div variants={fadeUp} className="col-span-6 sm:col-span-3 lg:col-span-2">
              <a href="#trade-electrical" className="block h-full group">
                <Card className="relative overflow-hidden bg-card border-primary/40 shadow-[0_0_18px_rgba(232,96,10,0.15)] hover:border-primary/80 hover:shadow-[0_0_28px_rgba(232,96,10,0.35)] transition-all duration-500 hover:-translate-y-1 rounded-none h-full">
                  <CardContent className="flex flex-col items-center text-center p-5 pt-5">
                    <div className="w-full mb-4 relative">
                      <svg viewBox="0 0 200 60" className="w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M0 30 L25 30 L35 8 L45 52 L55 18 L65 42 L75 30 L90 30 L100 10 L110 50 L120 22 L130 38 L140 30 L155 30 L165 14 L175 46 L185 26 L200 30"
                          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                          className="text-primary/30 group-hover:text-primary/60 transition-colors duration-500"
                        />
                        <path
                          d="M0 30 L25 30 L35 8 L45 52 L55 18 L65 42 L75 30 L90 30 L100 10 L110 50 L120 22 L130 38 L140 30 L155 30 L165 14 L175 46 L185 26 L200 30"
                          stroke="url(#elec-fade)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        />
                        <defs>
                          <linearGradient id="elec-fade" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#E8600A" stopOpacity="0" />
                            <stop offset="0.5" stopColor="#E8600A" stopOpacity="0.8" />
                            <stop offset="1" stopColor="#E8600A" stopOpacity="0.2" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-card border border-border/50 flex items-center justify-center">
                          <Zap className="w-4 h-4 text-primary" strokeWidth={1.25} />
                        </div>
                      </div>
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">{trades[2].tagline}</p>
                    <h3 className="font-heading text-2xl uppercase text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{trades[2].label}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed mb-4">{trades[2].description}</p>
                    <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-[10px]">
                      <span>Explore {trades[2].label} Coaching</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </CardContent>
                </Card>
              </a>
            </motion.div>

            {/* Garage Doors — icon + text left, panel grid right */}
            <motion.div variants={fadeUp} className="col-span-6 lg:col-span-3">
              <a href="#trade-garage-doors" className="block h-full group">
                <Card className="relative overflow-hidden bg-card border-primary/40 shadow-[0_0_18px_rgba(232,96,10,0.15)] hover:border-primary/80 hover:shadow-[0_0_28px_rgba(232,96,10,0.35)] transition-all duration-500 hover:-translate-y-1 rounded-none h-full">
                  <CardContent className="grid sm:grid-cols-2 h-full p-5 gap-4 items-center">
                    <div className="flex flex-col justify-between space-y-4">
                      <div className="relative flex aspect-square size-10 rounded-full border border-border/40 items-center justify-center before:absolute before:-inset-2 before:rounded-full before:border before:border-border/20">
                        <DoorOpen className="w-5 h-5 text-primary" strokeWidth={1} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">{trades[3].tagline}</p>
                        <h3 className="font-heading text-2xl uppercase text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{trades[3].label}</h3>
                        <p className="text-muted-foreground text-xs leading-relaxed mb-3">{trades[3].description}</p>
                        <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-[10px]">
                          <span>Explore {trades[3].label} Coaching</span>
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    {/* Door panel grid decoration */}
                    <div className="relative hidden sm:flex items-center justify-center border-l border-border/30 h-full pl-5 min-h-[160px]">
                      <div className="grid grid-cols-2 gap-2 w-full opacity-25 group-hover:opacity-50 transition-opacity duration-500">
                        {Array.from({ length: 6 }).map((_, i) => (
                          <div key={i} className="h-9 border border-primary/60 rounded-sm" />
                        ))}
                      </div>
                      <DoorOpen className="absolute w-10 h-10 text-primary/40 group-hover:text-primary/70 transition-colors duration-500" strokeWidth={0.75} />
                    </div>
                  </CardContent>
                </Card>
              </a>
            </motion.div>

            {/* Other Trades — icon + text left, trade badge cluster right */}
            <motion.div variants={fadeUp} className="col-span-6 lg:col-span-3">
              <a href="#trade-other" className="block h-full group">
                <Card className="relative overflow-hidden bg-card border-primary/40 shadow-[0_0_18px_rgba(232,96,10,0.15)] hover:border-primary/80 hover:shadow-[0_0_28px_rgba(232,96,10,0.35)] transition-all duration-500 hover:-translate-y-1 rounded-none h-full">
                  <CardContent className="grid sm:grid-cols-2 h-full p-5 gap-4 items-center">
                    <div className="flex flex-col justify-between space-y-4">
                      <div className="relative flex aspect-square size-10 rounded-full border border-border/40 items-center justify-center before:absolute before:-inset-2 before:rounded-full before:border before:border-border/20">
                        <Wrench className="w-5 h-5 text-primary" strokeWidth={1} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">{trades[4].tagline}</p>
                        <h3 className="font-heading text-2xl uppercase text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{trades[4].label}</h3>
                        <p className="text-muted-foreground text-xs leading-relaxed mb-3">{trades[4].description}</p>
                        <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-[10px]">
                          <span>Explore {trades[4].label} Coaching</span>
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    {/* Trade badge cluster */}
                    <div className="relative hidden sm:flex flex-col justify-center border-l border-border/30 h-full pl-5 gap-3 min-h-[160px]">
                      <div className="flex items-center justify-end gap-2">
                        <span className="text-[10px] text-muted-foreground border border-border/40 px-2 py-1">Roofing</span>
                        <div className="w-7 h-7 rounded-full border border-border/40 flex items-center justify-center">
                          <Wind className="w-3 h-3 text-primary/50" strokeWidth={1} />
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full border border-border/40 flex items-center justify-center">
                          <Droplets className="w-3 h-3 text-primary/50" strokeWidth={1} />
                        </div>
                        <span className="text-[10px] text-muted-foreground border border-border/40 px-2 py-1">Pest Control</span>
                      </div>
                      <div className="flex items-center justify-end gap-2">
                        <span className="text-[10px] text-muted-foreground border border-border/40 px-2 py-1">Restoration</span>
                        <div className="w-7 h-7 rounded-full border border-border/40 flex items-center justify-center">
                          <Zap className="w-3 h-3 text-primary/50" strokeWidth={1} />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── TRADE DETAIL SECTIONS ─────────────────────────────── */}
      {trades.map((trade, index) => {
        const Icon = trade.icon;
        const isEven = index % 2 === 0;
        return (
          <section
            key={trade.slug}
            id={trade.anchor}
            className={`scroll-mt-20 py-20 border-b border-border/20 last:border-b-0 ${isEven ? 'bg-card' : 'bg-background'}`}
          >
            <div className="container mx-auto px-6 md:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Content — alternates sides */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={stagger}
                  viewport={{ once: true }}
                  className={isEven ? 'lg:order-1' : 'lg:order-2'}
                >
                  <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 border border-primary/40 bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <p className="text-xs font-bold uppercase tracking-widest text-primary">{trade.tagline}</p>
                  </motion.div>

                  <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl uppercase text-foreground mb-6 leading-none">
                    {trade.label}
                  </motion.h2>

                  <motion.p variants={fadeUp} className="text-foreground/70 text-base leading-relaxed mb-8">
                    {trade.challenge}
                  </motion.p>

                  <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
                    <span className="w-6 h-px bg-primary" />
                    What We Work On
                  </motion.p>

                  <motion.ul variants={fadeUp} className="space-y-3 mb-8">
                    {trade.workOn.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 shrink-0 mt-0.5 border border-primary/50 bg-primary/10 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        </div>
                        <span className="text-foreground/80 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </motion.ul>

                  {/* Stat callout */}
                  <motion.div variants={fadeUp} className="flex items-center gap-6 border border-primary/20 bg-primary/5 px-6 py-4 mb-8">
                    <span className="font-heading text-4xl text-primary shrink-0">{trade.stat.value}</span>
                    <span className="text-muted-foreground text-sm leading-snug">{trade.stat.label}</span>
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <CompassButton to={`/who-we-serve/${trade.slug}`}>
                      Explore {trade.label} Coaching
                    </CompassButton>
                  </motion.div>
                </motion.div>

                {/* Photo */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={isEven ? 'lg:order-2' : 'lg:order-1'}
                >
                  <PhotoFrame
                    src={trade.img}
                    alt={trade.label}
                    innerClassName="h-[280px] md:h-[520px]"
                  />
                </motion.div>

              </div>
            </div>
          </section>
        );
      })}

      <TestimonialsStack />

      <FaqSection
        heading="Who We"
        headingHighlight="Work With"
        subheading="Everything you need to know about whether we're the right fit."
        bgClass="bg-background"
        items={[
          {
            question: 'Which trades do you specialize in?',
            answer: 'We work exclusively with HVAC, plumbing, electrical, and garage door companies. All of our coaching frameworks, scripts, and systems are built specifically for these businesses — not adapted from generic business coaching.',
          },
          {
            question: 'What if my trade isn\'t listed?',
            answer: 'If you\'re in the home service industry, reach out anyway. We\'ve worked with a range of trades beyond our four core specialties, and our frameworks often translate well to other service-based businesses.',
          },
          {
            question: 'Do you work with companies outside the US?',
            answer: 'Our primary focus is North American home service companies, but we do work with select international clients. Contact us and we\'ll let you know if we\'re a good fit for your market.',
          },
          {
            question: 'Is there a minimum revenue requirement?',
            answer: 'We typically work with companies doing $500K or more in annual revenue. Below that threshold, the coaching investment may not deliver the ROI you deserve. We\'ll always be honest about fit on the discovery call.',
          },
          {
            question: 'How is this different from industry associations or trade groups?',
            answer: 'Associations provide community and resources. We provide direct, accountable coaching with measurable outcomes. We\'re in the trenches with you — tracking metrics, adjusting strategy, and holding your team accountable to results.',
          },
        ]}
      />

      {/* ── CTA BANNER ───────────────────────────────────────────── */}
      <section className="py-24 bg-foreground relative overflow-hidden">

        {/* Icon watermark — right */}
        <div className="absolute right-[-4%] top-1/2 -translate-y-1/2 h-[200%] pointer-events-none select-none opacity-[0.06]">
          <img src={truenorthIcon} alt="" className="h-full w-auto" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={stagger}
              viewport={{ once: true }}
            >
              <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-widest text-primary mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-primary" />
                Don't see your trade?
              </motion.p>
              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl uppercase text-background mb-6 leading-none">
                Let's <AnimatedGradientText>Talk</AnimatedGradientText>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-background/70 leading-relaxed text-lg mb-12">
                If you're in the home service industry and serious about growth, we want to hear from you. Our coaching adapts to your trade.
              </motion.p>
              <motion.div variants={fadeUp}>
                <CompassButton to="/connect">Book a Discovery Call</CompassButton>
              </motion.div>
            </motion.div>

            {/* Video placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative aspect-video bg-card/10 border border-primary/30 flex items-center justify-center"
            >
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-background/40 text-sm uppercase tracking-widest font-bold">Video Coming Soon</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FEATURED PARTNER ─────────────────────────────────────── */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[30rem] bg-primary/10 rounded-full filter blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-primary/50 shadow-[0_0_40px_rgba(254,101,42,0.35),0_0_80px_rgba(254,101,42,0.15)]"
          >
            <div className="relative min-h-[400px] overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop"
                alt="HVAC Technician"
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent mix-blend-multiply" />
            </div>
            <div className="bg-card p-6 sm:p-10 md:p-12 lg:p-20 flex flex-col justify-center relative overflow-hidden">
              <div className="text-sm font-bold uppercase tracking-widest text-primary mb-8 flex items-center gap-4 relative z-10">
                <span className="w-12 h-px bg-primary" />
                Featured Partner
              </div>
              <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl uppercase text-foreground mb-8 relative z-10">
                Goettl Air Conditioning & Plumbing
              </h3>
              <blockquote className="text-lg text-foreground/90 italic mb-8 border-l-2 border-primary pl-6 relative z-10">
                "True North Strategies completely transformed our CSR and dispatch operations. The accountability and systems they implemented directly led to our record-breaking quarter."
              </blockquote>
              <div className="grid grid-cols-2 gap-8 mb-12 relative z-10">
                <div>
                  <p className="font-heading text-4xl text-primary mb-2 drop-shadow-[0_0_10px_rgba(254,101,42,0.3)]">+45%</p>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Booking Rate</p>
                </div>
                <div>
                  <p className="font-heading text-4xl text-primary mb-2 drop-shadow-[0_0_10px_rgba(254,101,42,0.3)]">$2.4M</p>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Added Revenue</p>
                </div>
              </div>
              <Link to="/about" className="flex items-center gap-2 text-foreground hover:text-primary font-bold uppercase tracking-wider group relative z-10 transition-colors">
                Read Full Story <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <FindYourTrueNorth />
    </main>
  );
}
