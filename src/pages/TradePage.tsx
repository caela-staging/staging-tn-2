import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { motion } from 'motion/react';
import { AnimatedGradientText } from '@/components/AnimatedGradientText';
import { CompassButton } from '@/components/ui/compass-button';
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  Navigation,
  LucideIcon,
} from 'lucide-react';
import { TestimonialsStack } from '@/components/TestimonialsStack';
import { FindYourTrueNorth } from '@/components/FindYourTrueNorth';
import truenorthIcon from '/Images/True North_icon badge black.svg';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface TradeStep {
  number: string;
  title: string;
  body: string;
}

export interface TradeCoach {
  name: string;
  role: string;
  bio: string;
  img: string;
}

export interface TradePageData {
  trade: string;                  // e.g. "HVAC"
  slug: string;                   // e.g. "hvac"
  tagline: string;                // script font sub-headline
  heroHeadline: string[];         // lines of the hero h1
  heroImg: string;
  overviewTitle: string;
  overviewImg: string;
  overviewBody: string[];         // paragraphs
  icon: LucideIcon;
  steps: TradeStep[];
  before: string[];               // pain points
  after: string[];                // outcomes
  benefitsTitle: string;
  benefitsBody: string;
  benefits: string[];
  coaches: TradeCoach[];
  ctaHeadline: string;
  ctaBody: string;
}

// ─── Animation variants ───────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

// ─── TradePage Component ──────────────────────────────────────────────────────

export function TradePage({ data }: { data: TradePageData }) {
  const Icon = data.icon;

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grain">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-[100px] animate-pulse-glow z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-amber-500/10 rounded-full filter blur-[120px] animate-pulse-glow z-0" style={{ animationDelay: '2s' }} />

        <div className="absolute inset-0 z-0">
          <img
            src={data.heroImg}
            alt={`${data.trade} coaching`}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-background/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <Link
              to="/who-we-serve"
              className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
            >
              Who We Serve
            </Link>
            <span className="text-muted-foreground/40">/</span>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">{data.trade}</span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-heading text-4xl md:text-6xl lg:text-8xl uppercase text-foreground mb-6 leading-none"
          >
            {data.heroHeadline.map((line, i) =>
              i === data.heroHeadline.length - 1 ? (
                <AnimatedGradientText key={i}>{line}</AnimatedGradientText>
              ) : (
                <span key={i}>{line}<br /></span>
              )
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-2xl font-script text-primary max-w-2xl mx-auto mb-12"
          >
            {data.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <CompassButton href="#overview">See How It Works</CompassButton>
            <CompassButton href="#form" className="bg-transparent text-primary hover:bg-primary hover:text-[#FCECBB]" arrowsClassName="opacity-0 group-hover:opacity-100 transition-opacity duration-300">Book a Discovery Call</CompassButton>
          </motion.div>
        </div>
      </section>

      {/* ── OVERVIEW TEXT BLOCK ───────────────────────────────────── */}
      <section id="overview" className="py-24 bg-background bg-topography relative overflow-hidden">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="hidden md:block absolute top-1/2 left-0 -translate-y-1/2 text-[16vw] font-heading text-foreground/[0.02] leading-none pointer-events-none select-none"
        >
          {data.trade.toUpperCase()}
        </motion.div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Image — left */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/20 translate-x-4 translate-y-4" />
              <img
                src={data.overviewImg}
                alt={`${data.trade} coaching`}
                className="relative z-10 w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Text — right */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={stagger}
              viewport={{ once: true }}
            >
              <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-card border border-border/50 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary">
                  {data.trade} Coaching
                </p>
              </motion.div>

              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl uppercase text-foreground mb-8 leading-none">
                {data.overviewTitle}
              </motion.h2>

              {data.overviewBody.map((para, i) => (
                <motion.p key={i} variants={fadeUp} className="text-foreground/80 leading-relaxed text-lg mb-6">
                  {para}
                </motion.p>
              ))}

              <motion.div variants={fadeUp} className="mt-10">
                <CompassButton href="#form">Book a Discovery Call</CompassButton>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── THREE-STEP PROCESS ────────────────────────────────────── */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
              The Process
            </p>
            <h2 className="font-heading text-4xl md:text-5xl uppercase text-foreground leading-none">
              How We Work
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Horizontal line spanning center of columns */}
            <div className="absolute top-[11px] left-[16.67%] right-[16.67%] h-px bg-primary" />

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={stagger}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3"
            >
              {data.steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  variants={fadeUp}
                  className="flex flex-col items-center text-center px-8"
                >
                  {/* Compass icon sitting on the line */}
                  <Navigation className="w-6 h-6 text-primary fill-primary mb-8 relative z-10" />

                  <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
                    Step {step.number}
                  </p>
                  <h4 className="font-heading text-2xl uppercase text-foreground mb-4 leading-none">
                    {step.title}
                  </h4>
                  <p className="text-foreground/60 leading-relaxed text-sm max-w-xs">
                    {step.body}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BEFORE / AFTER ────────────────────────────────────────── */}
      <section className="py-24 bg-background bg-grain relative overflow-hidden border-b border-border/20">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl uppercase text-foreground leading-none">
              Before <span className="text-muted-foreground/50">&</span>{' '}
              <AnimatedGradientText>After</AnimatedGradientText>
            </h2>
            <p className="text-lg font-script text-primary mt-4">
              This is what changes when you work with True North.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={stagger}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {/* Before */}
            <motion.div variants={fadeUp}>
              <div className="bg-card border border-border/40 p-8 h-full">
                <p className="font-heading text-xl uppercase text-muted-foreground mb-6 flex items-center gap-3">
                  <span className="w-6 h-px bg-muted-foreground/50" />
                  Before
                </p>
                <ul className="space-y-4">
                  {data.before.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-destructive/60 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* After */}
            <motion.div variants={fadeUp}>
              <div className="bg-card border border-primary/30 p-8 h-full shadow-[0_0_30px_rgba(232,96,10,0.08)]">
                <p className="font-heading text-xl uppercase text-primary mb-6 flex items-center gap-3">
                  <span className="w-6 h-px bg-primary" />
                  After True North
                </p>
                <ul className="space-y-4">
                  {data.after.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── COACHING BENEFITS ─────────────────────────────────────── */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={stagger}
              viewport={{ once: true }}
            >
              <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-3">
                <span className="w-8 h-px bg-primary" />
                What You Get
              </motion.p>
              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl uppercase text-foreground mb-8 leading-none">
                {data.benefitsTitle}
              </motion.h2>
              <motion.p variants={fadeUp} className="text-foreground/80 leading-relaxed text-lg">
                {data.benefitsBody}
              </motion.p>
            </motion.div>

            <motion.ul
              initial="hidden"
              whileInView="visible"
              variants={stagger}
              viewport={{ once: true }}
              className="space-y-4 pt-2"
            >
              {data.benefits.map((b, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp}
                  className="flex items-start gap-4 p-4 bg-card border border-border/40 hover:border-primary/40 transition-colors duration-300 group"
                >
                  <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform duration-300" />
                  <span className="text-foreground text-sm leading-relaxed">{b}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* ── CTA BLOCK ─────────────────────────────────────────────── */}
      <section className="py-20 bg-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-topography opacity-10 pointer-events-none" />

        {/* Icon watermark — right */}
        <div className="absolute right-[-4%] top-1/2 -translate-y-1/2 h-[200%] pointer-events-none select-none opacity-[0.06]">
          <img src={truenorthIcon} alt="" className="h-full w-auto" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={stagger}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl uppercase text-background mb-6 leading-none">
              {data.ctaHeadline.split(' ').slice(0, -1).join(' ')}{' '}
              <AnimatedGradientText>{data.ctaHeadline.split(' ').slice(-1)}</AnimatedGradientText>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-background/70 leading-relaxed mb-10">
              {data.ctaBody}
            </motion.p>
            <motion.div variants={fadeUp}>
              <CompassButton href="#form">Book a Discovery Call</CompassButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <TestimonialsStack />

      <FindYourTrueNorth />
    </main>
  );
}
