import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FaqSection } from '@/components/FaqSection';
import { PhotoFrame } from '@/components/ui/photo-frame';
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
  LucideIcon,
} from 'lucide-react';
import { TrailSection } from '@/components/ui/trail-section';
import { TestimonialsStack } from '@/components/TestimonialsStack';
import { FindYourTrueNorth } from '@/components/FindYourTrueNorth';
import { CountUpStat } from '@/components/CountUpStat';
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

export interface TradePitchSection {
  heading1: string;
  heading1Highlight?: string;
  body1: string;
  listHeading1: string;
  list1: string[];
  heading2: string;
  heading2Highlight?: string;
  body2: string;
  listHeading2: string;
  list2: string[];
  closingLine: string;
  sidebarHeadline: string;
  sidebarBody: string;
  sidebarCtaLabel: string;
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
  benefitsImg?: string;
  pitchSection?: TradePitchSection;
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

const stats = [
  { end: 10, suffix: '+', prefix: '', label: 'Years Coaching the Trades' },
  { end: 500, suffix: '+', prefix: '', label: 'Businesses Transformed' },
  { end: 40, suffix: 'M+', prefix: '$', label: 'Revenue Generated for Clients' },
  { end: 4, suffix: '', prefix: '', label: 'Trade Specialties' },
];

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
            <CompassButton href="#form">Book a Discovery Call</CompassButton>
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

      {/* ── OVERVIEW TEXT BLOCK ───────────────────────────────────── */}
      <section id="overview" className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-topography opacity-[0.30] pointer-events-none" />
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
              <PhotoFrame
                src={data.overviewImg}
                alt={`${data.trade} coaching`}
                innerClassName="aspect-square"
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
      <TrailSection steps={data.steps} />

      {/* ── BEFORE / AFTER ────────────────────────────────────────── */}
      <section className="py-24 bg-card relative overflow-hidden border-b border-border/20">
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
              <div className="bg-background border border-border/40 p-8 h-full">
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
              <div className="bg-background border border-primary/30 p-8 h-full shadow-[0_0_30px_rgba(232,96,10,0.08)]">
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

            {/* Photo — left */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <PhotoFrame
                src={data.benefitsImg ?? data.overviewImg}
                alt={`${data.trade} coaching`}
                innerClassName="aspect-square"
              />
            </motion.div>

            {/* Content — right */}
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
              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl uppercase text-foreground mb-6 leading-none">
                {data.benefitsTitle}
              </motion.h2>
              <motion.p variants={fadeUp} className="text-foreground/80 leading-relaxed text-lg mb-8">
                {data.benefitsBody}
              </motion.p>
              <motion.ul variants={stagger} className="space-y-3">
                {data.benefits.map((b, i) => (
                  <motion.li
                    key={i}
                    variants={fadeUp}
                    className="flex items-start gap-3 group"
                  >
                    <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-foreground/80 text-sm leading-relaxed">{b}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── PITCH SECTION (optional) ──────────────────────────────── */}
      {data.pitchSection && (
        <section className="py-24 bg-card border-t border-border/20 relative overflow-hidden">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-y-12 lg:gap-x-16 items-start">

              {/* Main content — 2 cols */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className=""
              >
                <h2 className="font-heading text-3xl md:text-4xl uppercase text-foreground mb-6 leading-tight">
                  {data.pitchSection.heading1}{data.pitchSection.heading1Highlight && <> <AnimatedGradientText>{data.pitchSection.heading1Highlight}</AnimatedGradientText></>}
                </h2>
                <p className="text-foreground/80 leading-relaxed text-lg mb-6">
                  {data.pitchSection.body1}
                </p>
                <p className="font-bold text-foreground mb-4 text-sm uppercase tracking-wide">
                  {data.pitchSection.listHeading1}
                </p>
                <ul className="space-y-3 mb-12">
                  {data.pitchSection.list1.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-[0.45rem]" />
                      <span className="text-foreground/80 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <h2 className="font-heading text-3xl md:text-4xl uppercase text-foreground mb-6 leading-tight">
                  {data.pitchSection.heading2}{data.pitchSection.heading2Highlight && <> <AnimatedGradientText>{data.pitchSection.heading2Highlight}</AnimatedGradientText></>}
                </h2>
                <p className="text-foreground/80 leading-relaxed text-lg mb-6">
                  {data.pitchSection.body2}
                </p>
                <p className="font-bold text-foreground mb-4 text-sm uppercase tracking-wide">
                  {data.pitchSection.listHeading2}
                </p>
                <ul className="space-y-3 mb-8">
                  {data.pitchSection.list2.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-[0.45rem]" />
                      <span className="text-foreground/80 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-foreground/60 italic text-base">
                  {data.pitchSection.closingLine}
                </p>
              </motion.div>

              {/* Sidebar — 1 col */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className=""
              >
                <div className="sticky top-28 bg-foreground p-8 md:p-10">
                  <h3 className="font-script text-2xl italic text-primary mb-6 leading-tight">
                    {data.pitchSection.sidebarHeadline}
                  </h3>
                  <p className="text-background/75 leading-relaxed text-sm mb-8">
                    {data.pitchSection.sidebarBody}
                  </p>
                  <CompassButton href="#form">
                    {data.pitchSection.sidebarCtaLabel}
                  </CompassButton>
                </div>
              </motion.div>

            </div>
          </div>
        </section>
      )}

      <FaqSection
        heading="Questions About"
        headingHighlight="Working Together"
        subheading="Straight answers before you take the next step."
        bgClass="bg-background"
        items={[
          {
            question: 'Do you only work with companies in this trade?',
            answer: 'We work exclusively with home service companies — HVAC, plumbing, electrical, and garage doors. This focus means every framework we use was built for businesses like yours, not adapted from generic coaching.',
          },
          {
            question: 'What size company do you typically work with?',
            answer: 'We work with home service companies ranging from $500K to $10M+ in annual revenue. Whether you\'re scaling past your first million or optimizing an established operation, we have the right approach.',
          },
          {
            question: 'Do you work with both residential and commercial contractors?',
            answer: 'Primarily residential service companies, though many of our clients do a mix of both. Our frameworks are strongest for companies running a residential service model with dispatch, CSRs, and recurring customer relationships.',
          },
          {
            question: 'How long before I see results?',
            answer: 'Most clients see measurable changes within 60–90 days. Significant revenue impact typically follows within 6 months — the timeline depends on your starting point and how quickly your team adopts new systems.',
          },
          {
            question: 'What if I\'ve never worked with a business coach before?',
            answer: 'Most of our clients haven\'t. The discovery call is designed to walk you through exactly what the process looks like — no jargon, no pressure. We\'ll tell you honestly whether it\'s the right fit.',
          },
        ]}
      />

      {/* ── CTA BLOCK ─────────────────────────────────────────────── */}
      <section className="py-20 bg-foreground relative overflow-hidden">
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

      <TestimonialsStack />

      <FindYourTrueNorth />
    </main>
  );
}
