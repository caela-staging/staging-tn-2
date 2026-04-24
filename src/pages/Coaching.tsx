import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useState, type ElementType } from 'react';
import { motion } from 'motion/react';
import { SpotlightCard } from '@/components/SpotlightCard';
import { PhotoFrame } from '@/components/ui/photo-frame';
import { AnimatedGradientText } from '@/components/AnimatedGradientText';
import { CompassButton } from '@/components/ui/compass-button';
import { StepContactForm } from '@/components/StepContactForm';
import { TestimonialsStack } from '@/components/TestimonialsStack';
import mckenaPhoto from '/Images/IMG_7990.jpeg';
import stackedLogo from '/Images/True North_stacked full logo grey.svg';
import gear1 from '/Images/gear-1.png';
import gear2 from '/Images/gear-2.png';
import gear3 from '/Images/gear-3.png';
import { TrailSection } from '@/components/ui/trail-section';
import { FaqSection } from '@/components/FaqSection';
import { CountUpStat } from '@/components/CountUpStat';
import {
  Settings,
  TrendingUp,
  Target,
  Megaphone,
  ArrowRight,
  CheckCircle2,
  Compass,
} from 'lucide-react';

function GearShape({
  size,
  teeth,
  label,
  num,
  icon: Icon,
  href,
  fillColor,
  strokeColor,
  iconColor,
  spin = 'cw',
}: {
  size: number;
  teeth: number;
  label: string;
  num: string;
  icon: ElementType;
  href: string;
  fillColor: string;
  strokeColor: string;
  iconColor: string;
  spin?: 'cw' | 'ccw';
}) {
  const cx = size / 2, cy = size / 2;
  const outerR = size * 0.44;
  const rootR  = size * 0.33;
  const holeR  = size * 0.13;
  const ta = (Math.PI * 2) / teeth;

  let d = '';
  for (let i = 0; i < teeth; i++) {
    const base = (i / teeth) * Math.PI * 2 - Math.PI / 2;
    const pts = [
      [rootR,  base - ta * 0.43],
      [outerR, base - ta * 0.17],
      [outerR, base + ta * 0.17],
      [rootR,  base + ta * 0.43],
    ].map(([r, a]) => `${(cx + r * Math.cos(a!)).toFixed(1)},${(cy + r * Math.sin(a!)).toFixed(1)}`);
    d += i === 0 ? `M ${pts[0]}` : `L ${pts[0]}`;
    d += ` L ${pts[1]} L ${pts[2]} L ${pts[3]}`;
  }
  d += ' Z';
  d += ` M ${(cx + holeR).toFixed(1)},${cy.toFixed(1)}`;
  for (let j = 1; j <= 32; j++) {
    const a = -(j / 32) * Math.PI * 2;
    d += ` L ${(cx + holeR * Math.cos(a)).toFixed(1)},${(cy + holeR * Math.sin(a)).toFixed(1)}`;
  }
  d += ' Z';

  return (
    <a href={href} className="group relative block cursor-pointer" style={{ width: size, height: size }}>
      <div
        className={`absolute inset-0 transition-transform duration-700 origin-center ${spin === 'cw' ? 'group-hover:rotate-12' : 'group-hover:-rotate-12'}`}
      >
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <path d={d} fillRule="evenodd" fill={fillColor} stroke={strokeColor} strokeWidth="1.5" />
        </svg>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 pointer-events-none">
        <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground/70 transition-colors duration-200">{num}</span>
        <Icon className={`w-5 h-5 transition-transform duration-300 group-hover:scale-110 ${iconColor}`} />
        <span className="font-heading text-[11px] uppercase text-foreground/70 leading-tight text-center px-4 group-hover:text-foreground transition-colors duration-200">{label}</span>
      </div>
    </a>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18 } },
};

const stats = [
  { end: 10, suffix: '+', prefix: '', label: 'Years Coaching the Trades' },
  { end: 500, suffix: '+', prefix: '', label: 'Businesses Transformed' },
  { end: 40, suffix: 'M+', prefix: '$', label: 'Revenue Generated for Clients' },
  { end: 4, suffix: '', prefix: '', label: 'Trade Specialties' },
];

const departments = [
  { label: 'Marketing', icon: Megaphone, id: 'marketing' },
  { label: 'Sales', icon: Target, id: 'sales' },
  { label: 'Operations', icon: Settings, id: 'operations' },
];

const coachSections = [
  {
    id: 'marketing',
    label: 'Marketing',
    title: 'Marketing Coaches',
    body: 'Your brand is your reputation at scale. Our marketing coaches help home service companies build a local presence that drives inbound calls, earns trust before the first contact, and keeps your pipeline full year-round — without wasting budget on tactics that don\'t work for the trades.',
    bullets: ['Local SEO and Google Business Profile strategy', 'Brand messaging that resonates with homeowners', 'Seasonal campaign planning tied to your trade'],
    img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop',
    imgAlt: 'Marketing coaching session',
    flip: false,
  },
  {
    id: 'sales',
    label: 'Sales',
    title: 'Sales Coaches',
    body: 'In-home sales is a craft. Our sales coaches train technicians and comfort advisors to lead with value, build trust on the doorstep, and close at the point of decision — without pressure tactics that damage your reputation. Every framework is field-tested in HVAC, plumbing, and electrical environments.',
    bullets: ['In-home presentation frameworks that convert', 'Objection handling rooted in honesty', 'Average ticket growth without upsell gimmicks'],
    img: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2026&auto=format&fit=crop',
    imgAlt: 'Sales training session',
    flip: true,
  },
  {
    id: 'operations',
    label: 'Operations',
    title: 'Operations Coaches',
    body: 'A business that runs on you isn\'t a business — it\'s a job. Our operations coaches help home service companies build the SOPs, dispatch systems, and management structures that create consistent performance and give owners their time back.',
    bullets: ['SOPs and workflows for every key role and process', 'Dispatch efficiency and capacity planning', 'Management accountability systems and KPI dashboards'],
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
    imgAlt: 'Operations coaching session',
    flip: false,
  },
];

const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    body: 'We start with an honest conversation about where your business is and where you want it to go. No pitch, no pressure — just clarity.',
  },
  {
    number: '02',
    title: 'Custom Roadmap',
    body: 'We build a coaching plan designed around your specific trade, team size, and goals — not a generic playbook pulled off a shelf.',
  },
  {
    number: '03',
    title: 'Active Partnership',
    body: 'We work alongside you every step of the way. Regular sessions, real accountability, and measurable milestones to keep momentum.',
  },
];

const testimonials = [
  {
    quote: 'True North didn\'t just give us strategies — they rolled up their sleeves and worked with us. Our booking rate jumped 40% in 90 days.',
    name: 'James Harrell',
    company: 'Harrell Home Services',
  },
  {
    quote: 'The CSR coaching alone was worth every penny. My team answered the same way they always had — now they convert.',
    name: 'Sandra Kim',
    company: 'PrecisionAir HVAC',
  },
  {
    quote: 'McKena and her coaches understand this industry in a way nobody else does. They\'ve lived it. That makes all the difference.',
    name: 'Tony Delgado',
    company: 'Delgado Plumbing & Drain',
  },
];

export function Coaching() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const prev = () =>
    setActiveTestimonial((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () =>
    setActiveTestimonial((i) => (i + 1) % testimonials.length);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grain">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-[100px] animate-pulse-glow z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-amber-500/10 rounded-full filter blur-[120px] animate-pulse-glow z-0" style={{ animationDelay: '2s' }} />

        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2232&auto=format&fit=crop"
            alt="Coaching hero"
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
            className="text-sm font-semibold uppercase tracking-widest text-primary mb-6"
          >
            True North Strategies
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-heading text-3xl sm:text-5xl md:text-7xl lg:text-8xl uppercase text-foreground mb-6 leading-none"
          >
            Coaching <br />
            <AnimatedGradientText>That Moves You</AnimatedGradientText>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-2xl font-script text-primary max-w-2xl mx-auto mb-12"
          >
            Real coaching for real trades businesses — built on honesty, accountability, and results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <CompassButton to="/connect">Book a Discovery Call</CompassButton>
          </motion.div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────── */}
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

      {/* ── DEPARTMENT COACHING INTRO ────────────────────────────── */}
      <section id="departments" className="py-24 bg-background relative overflow-hidden border-y border-border/30">
        <div className="absolute inset-0 bg-topography opacity-[0.30] pointer-events-none z-0" />
        <div className="container relative z-10 mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

            {/* Left: text + accordion + CTAs */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={stagger}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div variants={fadeUp}>
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-3">
                  <span className="w-8 h-px bg-primary" />
                  True North Strategies
                </p>
                <h2 className="font-heading text-4xl md:text-5xl uppercase text-foreground mb-4 leading-none">
                  Department <AnimatedGradientText>Coaching</AnimatedGradientText>
                </h2>
                <p className="text-lg font-script text-primary mb-4">
                  Three disciplines. One integrated system.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Marketing, Sales, and Operations — when all three move together, home service businesses don't just grow. They scale with confidence.
                </p>
              </motion.div>

              {/* Department feature cards */}
              <motion.div variants={fadeUp} className="space-y-3">
                {[
                  {
                    id: 'mkt',
                    href: '#marketing',
                    label: 'Marketing',
                    icon: Megaphone,
                    summary: 'Build a local presence that drives inbound calls and keeps your pipeline full — without wasting budget on tactics that don\'t work for the trades.',
                  },
                  {
                    id: 'sls',
                    href: '#sales',
                    label: 'Sales',
                    icon: Target,
                    summary: 'Train your team to close at the point of decision — with integrity, not pressure. Field-tested in HVAC, plumbing, and electrical.',
                  },
                  {
                    id: 'ops',
                    href: '#operations',
                    label: 'Operations',
                    icon: Settings,
                    summary: 'Build the SOPs and systems that create consistent performance and give owners their time back.',
                  },
                ].map(({ id, label, icon: Icon, summary }) => (
                  <div
                    key={id}
                    className="relative flex items-center gap-5 px-5 py-4 rounded-xl border border-border/30 bg-card"
                    style={{ boxShadow: '0 0 24px 4px rgba(254,101,42,0.18)' }}
                  >
                    <div className="p-3 rounded-lg shrink-0 bg-muted">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-heading text-sm uppercase tracking-wide text-foreground mb-1">{label}</p>
                      <p className="text-muted-foreground text-xs leading-relaxed">{summary}</p>
                    </div>
                  </div>
                ))}
              </motion.div>

            </motion.div>

            {/* Right: gear diagram */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-center"
            >
              {/* Mobile: simple 3-card row */}
              <div className="grid grid-cols-3 gap-3 w-full md:hidden">
                {[
                  { href: '#marketing', img: gear1, label: 'Marketing', icon: Megaphone },
                  { href: '#sales', img: gear2, label: 'Sales', icon: Target },
                  { href: '#operations', img: gear3, label: 'Operations', icon: Settings },
                ].map(({ href, img, label, icon: Icon }) => (
                  <a key={href} href={href} className="flex flex-col items-center gap-2 p-4 border border-primary/40 bg-card hover:border-primary hover:bg-primary/5 transition-all duration-300 group">
                    <Icon className="w-6 h-6 text-primary" />
                    <span className="font-heading text-xs uppercase text-foreground text-center group-hover:text-primary transition-colors">{label}</span>
                  </a>
                ))}
              </div>

              {/* Desktop: interlocking gear diagram */}
              <div className="relative hidden md:block" style={{ width: 590, height: 470 }}>
                {/* 01 Marketing — large, top-left */}
                <a href="#marketing" className="absolute group block" style={{ top: 5, left: 5, width: 340, height: 340 }}>
                  <img
                    src={gear1}
                    alt="Marketing"
                    className="w-full h-full object-contain transition-transform duration-700 origin-center group-hover:rotate-12"
                  />
                </a>

                {/* 02 Sales — medium, top-right, interlocking with Marketing */}
                <a href="#sales" className="absolute group block" style={{ top: 38, left: 309, width: 275, height: 275 }}>
                  <img
                    src={gear2}
                    alt="Sales"
                    className="w-full h-full object-contain transition-transform duration-700 origin-center group-hover:-rotate-12"
                  />
                </a>

                {/* 03 Operations — small, bottom-center, interlocking with both */}
                <a href="#operations" className="absolute group block" style={{ top: 255, left: 234, width: 210, height: 210 }}>
                  <img
                    src={gear3}
                    alt="Operations"
                    className="w-full h-full object-contain transition-transform duration-700 origin-center group-hover:rotate-12"
                  />
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────── */}
      <TrailSection />

      {/* ── INDIVIDUAL COACH SECTIONS ────────────────────────────── */}
      {coachSections.map(({ id, label, title, body, bullets, img, imgAlt, flip }, idx) => (
        <section
          key={id}
          id={id}
          className={`py-24 relative overflow-hidden border-b border-border/20 ${idx % 2 === 0 ? 'bg-card' : 'bg-background'}`}
        >
          <div className="container mx-auto px-6 md:px-12">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${flip ? 'lg:[&>*:first-child]:order-2' : ''}`}>
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: flip ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <PhotoFrame
                  src={img}
                  alt={imgAlt}
                  innerClassName="aspect-[3/2]"
                />
              </motion.div>

              {/* Text */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={stagger}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <motion.div variants={fadeUp}>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3 flex items-center gap-3">
                    <span className="w-8 h-px bg-primary" />
                    {label} Coaching
                  </p>
                  <h3 className="font-heading text-4xl md:text-5xl uppercase text-foreground leading-none mb-5">
                    {title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{body}</p>
                </motion.div>

                <motion.ul variants={stagger} className="space-y-4">
                  {bullets.map((b, i) => (
                    <motion.li variants={fadeUp} key={i} className="flex items-start gap-3">
                      <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <span className="text-foreground text-sm">{b}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.div variants={fadeUp}>
                  <CompassButton to="/connect">{label} Department</CompassButton>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      <TestimonialsStack />

      {/* ── GET CONNECTED CTA BANNER ──────────────────────────────── */}
      <section className="py-24 bg-foreground relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-primary/10 rounded-full filter blur-[100px]" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={stagger}
              viewport={{ once: true }}
            >
              <motion.div variants={fadeUp}>
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-3">
                  <span className="w-8 h-px bg-primary" />
                  Ready to grow?
                </p>
                <h2 className="font-heading text-5xl md:text-6xl uppercase text-background mb-6 leading-none">
                  Get Connected <br />
                  <AnimatedGradientText>With Your Coach</AnimatedGradientText>
                </h2>
                <p className="text-background/70 leading-relaxed mb-10 max-w-md">
                  Stop guessing at what's holding your business back. Our coaches will identify the gaps, build the plan, and stay with you until you see real results.
                </p>
              </motion.div>
              <motion.div variants={fadeUp}>
                <CompassButton to="/connect">Connect Today</CompassButton>
              </motion.div>
            </motion.div>

            {/* Coach photo */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="w-full h-[280px] sm:h-[380px] md:h-[480px] overflow-hidden"
            >
              <img
                src={mckenaPhoto}
                alt="McKena Harless — Founder & Lead Coach"
                className="w-full h-full object-cover object-[center_50%]"
              />
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

      {/* ── WHY TRUE NORTH ───────────────────────────────────────── */}
      <section className="py-24 bg-background relative overflow-hidden border-t border-border/30">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full filter blur-[80px] animate-float z-0" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4 flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-primary" />
              The True North Difference
              <span className="w-8 h-px bg-primary" />
            </p>
            <h2 className="font-heading text-4xl md:text-5xl uppercase text-foreground leading-none mb-6">
              Why Top Trade Contractors <br className="hidden md:block" />
              Choose <AnimatedGradientText>True North</AnimatedGradientText>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              You didn't build your business on guesswork — don't coach with it either. We bring trade-specific expertise, real accountability, and results you can measure on your P&L.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border/40">
            {[
              {
                icon: CheckCircle2,
                title: 'We Only Work With The Trades',
                body: 'No tech startups. No retail. No corporate clients. Every framework, script, and strategy we\'ve built was designed for HVAC, plumbing, electrical, and garage door companies — and nothing else.',
                stat: '100% Trade Focused',
              },
              {
                icon: Target,
                title: 'Results You Can See on a P&L',
                body: 'We track booking rates, average tickets, close ratios, and revenue per tech — not vague "wins." Every engagement is tied to numbers that move your bottom line.',
                stat: '$40M+ Revenue Generated',
              },
              {
                icon: TrendingUp,
                title: 'Your Coach. Not a Consultant.',
                body: 'Consultants drop off a binder and disappear. We stay — with weekly check-ins, live call reviews, and real accountability that keeps you moving when motivation fades.',
                stat: '500+ Businesses Coached',
              },
            ].map(({ icon: Icon, title, body, stat }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="group relative p-10 md:p-12 border-t-[3px] border-t-transparent hover:border-t-primary transition-all duration-300 hover:shadow-[inset_0_0_40px_rgba(254,101,42,0.05)] cursor-default"
                style={{ borderRight: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}
              >
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-6 border border-primary/20 group-hover:border-primary/50 transition-colors group-hover:shadow-[0_0_15px_rgba(232,96,10,0.3)]">
                  <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-3">{stat}</p>
                <h3 className="font-heading text-2xl uppercase text-foreground mb-4 leading-tight">{title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{body}</p>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <CompassButton to="/connect">See If You Qualify</CompassButton>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <FaqSection
        heading="Frequently Asked"
        headingHighlight="Questions"
        subheading="Everything you want to know before taking the next step."
        bgClass="bg-card"
        items={[
          {
            question: 'How long does a typical coaching engagement last?',
            answer: 'Most clients engage for 6–12 months. Some ongoing relationships run longer. We don\'t lock you into long contracts — we earn your commitment through results.',
          },
          {
            question: 'Do you only work with certain trades?',
            answer: 'We specialize exclusively in HVAC, plumbing, electrical, and garage door companies. This focus means our frameworks are built for your business — not adapted from generic coaching material.',
          },
          {
            question: 'What\'s the difference between your coaching departments?',
            answer: 'Each department (Marketing, Sales, Operations) focuses on a specific team or function. Most clients start with one or two areas, then expand as they grow.',
          },
          {
            question: 'How quickly will I see results?',
            answer: 'Most clients notice measurable changes within 60–90 days. Significant revenue impact typically shows within 6 months — depending on where you\'re starting from and how consistently the team engages.',
          },
          {
            question: 'Do you offer group coaching or only one-on-one?',
            answer: 'Both. We offer 1-on-1 coaching for owners and managers, and group training sessions for front-line teams like CSRs and sales techs.',
          },
          {
            question: 'What if I\'ve tried coaching before and it didn\'t work?',
            answer: 'We hear this often. Most generic coaching fails because it\'s not built for the trades. Our frameworks are designed specifically for home service businesses — we know the metrics, the seasonality, and the operational challenges you face.',
          },
        ]}
      />

      {/* ── CTA FORM ─────────────────────────────────────────────── */}
      <section className="py-32 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-topography opacity-[0.30] pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40rem] h-[20rem] bg-primary/10 rounded-full filter blur-[100px] z-0" />

        <div className="container relative z-10 mx-auto px-6 md:px-12 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* Left: pitch text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-4xl md:text-5xl uppercase text-foreground mb-6 leading-none">
                Ready to Find Your <AnimatedGradientText>True North?</AnimatedGradientText>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Stop guessing and start scaling. Our discovery call is 30 minutes of honest conversation about where your business is and where it needs to go.
              </p>
              <ul className="space-y-4">
                {[
                  'No sales pitch — just real strategy',
                  'Built for trades businesses doing $1M+',
                  'Limited spots available each quarter',
                  '100% free discovery call',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="text-primary font-bold flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right: form card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 md:p-10 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
              <img src={stackedLogo} alt="" className="absolute right-0 top-1/2 -translate-y-1/2 h-[85%] w-auto opacity-[0.12] pointer-events-none select-none" />
              <StepContactForm
                buttonLabel="Connect Today"
                showCoachingArea
                coachingOptions={[
                  { value: 'marketing',  label: 'Marketing Coaching' },
                  { value: 'sales',      label: 'Sales Coaching' },
                  { value: 'operations', label: 'Operations Coaching' },
                  { value: 'all',        label: 'All Departments' },
                ]}
              />
            </motion.div>

          </div>
        </div>
      </section>
    </main>
  );
}
