import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { motion } from 'motion/react';
import { SpotlightCard } from '@/components/SpotlightCard';
import { AnimatedGradientText } from '@/components/AnimatedGradientText';
import { CompassButton } from '@/components/ui/compass-button';
import { TestimonialsStack } from '@/components/TestimonialsStack';
import mckenaPhoto from '/Images/IMG_7990.jpeg';
import { ProcessTimeline } from '@/components/ui/process-timeline';
import {
  Shield,
  Users,
  TrendingUp,
  Target,
  Megaphone,
  ArrowRight,
  CheckCircle2,
  Compass,
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18 } },
};

const departments = [
  { label: 'CSR', icon: Users, id: 'csr' },
  { label: 'Business', icon: TrendingUp, id: 'business' },
  { label: 'Sales', icon: Target, id: 'sales' },
  { label: 'Training', icon: Shield, id: 'training' },
  { label: 'Marketing', icon: Megaphone, id: 'marketing' },
];

const coachSections = [
  {
    id: 'csr',
    label: 'CSR',
    title: 'CSR Coaches',
    body: 'Our Customer Service Representatives coaching program transforms how your front-line team handles every call. From booking rates to customer satisfaction scores, we build the habits and scripts that turn prospects into loyal customers. Our CSR coaches bring real-world trades experience — they\'ve sat in the seat your team sits in every day.',
    bullets: ['Proven call scripts for higher booking rates', 'Live call reviews and real-time feedback', 'KPI dashboards built for CSR performance'],
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop',
    imgAlt: 'CSR coaching session',
    flip: false,
  },
  {
    id: 'business',
    label: 'Business',
    title: 'Business Coaches',
    body: 'Running a home service company requires a different playbook than most industries. Our business coaches specialize exclusively in the trades — helping owners build scalable operations, improve margins, and create the systems that support long-term growth without burning out.',
    bullets: ['P&L analysis tailored to home service benchmarks', 'Operational systems and SOPs that actually stick', 'Leadership development for owner and management'],
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
    imgAlt: 'Business coaching session',
    flip: true,
  },
  {
    id: 'sales',
    label: 'Sales',
    title: 'Sales Coaches',
    body: 'In-home sales is a craft. Our sales coaches train technicians and comfort advisors to lead with value, build trust on the doorstep, and close at the point of decision — without pressure tactics that damage your reputation. Every framework is field-tested in HVAC, plumbing, and electrical environments.',
    bullets: ['In-home presentation frameworks that convert', 'Objection handling rooted in honesty', 'Average ticket growth without upsell gimmicks'],
    img: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2026&auto=format&fit=crop',
    imgAlt: 'Sales training session',
    flip: false,
  },
  {
    id: 'training',
    label: 'Training',
    title: 'Training Coaches',
    body: 'Great teams are built, not hired. Our training coaches help you design onboarding programs, ongoing education, and performance standards that elevate every role in your company. Whether you\'re scaling fast or stabilizing a rocky team, we build the infrastructure for consistent excellence.',
    bullets: ['Custom onboarding programs for technicians and CSRs', 'Role-specific scorecards and accountability systems', 'Ongoing training calendars that keep teams sharp'],
    img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop',
    imgAlt: 'Training coaching session',
    flip: true,
  },
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
            className="font-heading text-5xl md:text-7xl lg:text-8xl uppercase text-foreground mb-6 leading-none"
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
            <CompassButton href="#departments">Explore Coaching</CompassButton>
            <CompassButton to="/connect" className="bg-transparent text-primary hover:bg-primary hover:text-[#FCECBB]" arrowsClassName="opacity-0 group-hover:opacity-100 transition-opacity duration-300">Book a Call</CompassButton>
          </motion.div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────── */}
      <section className="py-20 bg-foreground relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">The Process</p>
            <h2 className="font-heading text-4xl md:text-5xl uppercase text-background leading-none">
              How We Work
            </h2>
          </motion.div>
          <ProcessTimeline
            columns={3}
            steps={[
              {
                number: '01',
                title: 'Discovery Call',
                body: 'An honest, no-pressure conversation about where your business is and where you want it to go.',
              },
              {
                number: '02',
                title: 'Custom Roadmap',
                body: 'We build a coaching plan tailored to your trade, your team, and your specific growth goals.',
              },
              {
                number: '03',
                title: 'Execute & Grow',
                body: 'We work alongside you — in the trenches, holding you accountable every step of the way.',
              },
            ]}
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </section>


      {/* ── DEPARTMENT ICONS ─────────────────────────────────────── */}
      <section id="departments" className="py-20 bg-background bg-grain border-y border-border/30">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl uppercase text-foreground mb-4">
              Department <AnimatedGradientText>Coaching</AnimatedGradientText>
            </h2>
            <p className="text-lg font-script text-primary max-w-xl mx-auto">
              Five disciplines. One integrated system. Built for home service companies.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={stagger}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 md:gap-10"
          >
            {departments.map(({ label, icon: Icon, id }) => (
              <motion.a
                key={id}
                href={`#${id}`}
                variants={fadeUp}
                className="group flex flex-col items-center gap-3"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 bg-card border border-border/50 group-hover:border-primary/60 flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(232,96,10,0.25)] relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                  <Icon className="w-8 h-8 md:w-10 md:h-10 text-primary relative z-10 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="font-heading text-sm uppercase tracking-widest text-foreground group-hover:text-primary transition-colors duration-300">
                  {label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── INDIVIDUAL COACH SECTIONS ────────────────────────────── */}
      {coachSections.map(({ id, label, title, body, bullets, img, imgAlt, flip }) => (
        <section
          key={id}
          id={id}
          className="py-24 bg-background relative overflow-hidden border-b border-border/20"
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
                <div className={`absolute inset-0 bg-primary/15 ${flip ? '-translate-x-4' : 'translate-x-4'} translate-y-4`} />
                <img
                  src={img}
                  alt={imgAlt}
                  className="relative z-10 w-full aspect-[3/2] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
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
        <div className="absolute inset-0 bg-topography opacity-10 pointer-events-none" />
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
              className="w-full h-[480px] overflow-hidden"
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

      {/* ── CASE STUDY ───────────────────────────────────────────── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-border/50 shadow-2xl"
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

            <div className="bg-card p-12 md:p-20 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full filter blur-[40px]" />
              <div className="text-sm font-bold uppercase tracking-widest text-primary mb-8 flex items-center gap-4 relative z-10">
                <span className="w-12 h-px bg-primary" />
                Case Study
              </div>
              <h3 className="font-heading text-4xl md:text-5xl uppercase text-foreground mb-8 relative z-10">
                Goettl Air Conditioning & Plumbing
              </h3>
              <blockquote className="text-lg text-foreground/90 italic mb-12 border-l-2 border-primary pl-6 relative z-10">
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
              <Button
                asChild
                variant="link"
                className="text-foreground hover:text-primary p-0 h-auto font-bold uppercase tracking-wider justify-start group relative z-10"
              >
                <Link to="/about" className="flex items-center gap-2">
                  Read Full Story
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHY TRUE NORTH ───────────────────────────────────────── */}
      <section className="py-24 bg-background bg-topography relative overflow-hidden border-t border-border/30">
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
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-3">{stat}</p>
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

      {/* ── CTA FORM ─────────────────────────────────────────────── */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40rem] h-[20rem] bg-primary/10 rounded-full filter blur-[100px] z-0" />

        <div className="container relative z-10 mx-auto px-6 md:px-12 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl uppercase text-foreground mb-6 tracking-normal">
              Find Your <AnimatedGradientText>True North</AnimatedGradientText>
            </h2>
            <p className="text-2xl font-script text-primary">
              Ready to stop guessing? Let's talk about where your business is headed.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
            <form className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="firstName" className="text-foreground uppercase tracking-wider text-xs font-bold">First Name</Label>
                  <Input id="firstName" placeholder="John" className="bg-background/50 border-border/50 text-foreground rounded-none focus-visible:ring-primary focus-visible:border-primary h-12 transition-colors" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="lastName" className="text-foreground uppercase tracking-wider text-xs font-bold">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" className="bg-background/50 border-border/50 text-foreground rounded-none focus-visible:ring-primary focus-visible:border-primary h-12 transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-foreground uppercase tracking-wider text-xs font-bold">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="bg-background/50 border-border/50 text-foreground rounded-none focus-visible:ring-primary focus-visible:border-primary h-12 transition-colors" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="phone" className="text-foreground uppercase tracking-wider text-xs font-bold">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="(555) 123-4567" className="bg-background/50 border-border/50 text-foreground rounded-none focus-visible:ring-primary focus-visible:border-primary h-12 transition-colors" />
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="trade" className="text-foreground uppercase tracking-wider text-xs font-bold">Primary Trade</Label>
                <select
                  id="trade"
                  className="flex h-12 w-full bg-background/50 border border-border/50 px-3 py-2 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 rounded-none transition-colors"
                >
                  <option value="" disabled>Select your trade...</option>
                  <option value="hvac">HVAC</option>
                  <option value="plumbing">Plumbing</option>
                  <option value="electrical">Electrical</option>
                  <option value="garage">Garage Doors</option>
                  <option value="other">Other Home Service</option>
                </select>
              </div>

              <div className="space-y-3">
                <Label htmlFor="coaching" className="text-foreground uppercase tracking-wider text-xs font-bold">Coaching Area of Interest</Label>
                <select
                  id="coaching"
                  className="flex h-12 w-full bg-background/50 border border-border/50 px-3 py-2 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 rounded-none transition-colors"
                >
                  <option value="" disabled>Select a department...</option>
                  <option value="csr">CSR Coaching</option>
                  <option value="business">Business Coaching</option>
                  <option value="sales">Sales Coaching</option>
                  <option value="training">Training Coaching</option>
                  <option value="marketing">Marketing Coaching</option>
                  <option value="all">All Departments</option>
                </select>
              </div>

              <div className="space-y-3">
                <Label htmlFor="goals" className="text-foreground uppercase tracking-wider text-xs font-bold">What are your biggest challenges?</Label>
                <Textarea
                  id="goals"
                  placeholder="Tell us about your current roadblocks..."
                  className="bg-background/50 border-border/50 text-foreground rounded-none focus-visible:ring-primary focus-visible:border-primary min-h-[150px] resize-none transition-colors"
                />
              </div>

              <CompassButton type="submit" className="w-full">Connect Today</CompassButton>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
