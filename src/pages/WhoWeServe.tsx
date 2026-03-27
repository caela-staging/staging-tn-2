import { Link } from 'react-router-dom';
import { CountUpStat } from '@/components/CountUpStat';
import { motion } from 'motion/react';
import { SpotlightCard } from '@/components/SpotlightCard';
import { AnimatedGradientText } from '@/components/AnimatedGradientText';
import { CompassButton } from '@/components/ui/compass-button';
import { ArrowRight, Zap, Droplets, Wind, DoorOpen, Wrench, Shield, Target, TrendingUp } from 'lucide-react';
import { TestimonialsStack } from '@/components/TestimonialsStack';
import { FindYourTrueNorth } from '@/components/FindYourTrueNorth';
import truenorthIcon from '/Images/True North_icon badge black.svg';

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
    label: 'HVAC',
    icon: Wind,
    tagline: 'Heating, Ventilation & Air Conditioning',
    description: 'From booking rates to service agreements, we help HVAC companies build scalable systems that keep technicians busy and customers coming back.',
    color: 'from-sky-500/10 to-transparent',
    img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop',
  },
  {
    slug: 'plumbing',
    label: 'Plumbing',
    icon: Droplets,
    tagline: 'Residential & Commercial Plumbing',
    description: 'Increase average ticket, reduce callbacks, and build a plumbing operation that earns trust in every neighborhood you serve.',
    color: 'from-blue-500/10 to-transparent',
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop',
  },
  {
    slug: 'electrical',
    label: 'Electrical',
    icon: Zap,
    tagline: 'Residential & Commercial Electrical',
    description: 'Turn your electrical company into a revenue-generating machine with coaching built around the unique sales cycle of the trades.',
    color: 'from-yellow-500/10 to-transparent',
    img: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop',
  },
  {
    slug: 'garage-doors',
    label: 'Garage Doors',
    icon: DoorOpen,
    tagline: 'Installation, Repair & Replacement',
    description: 'Maximize the high-frequency opportunity of garage door service calls with conversion coaching that turns single visits into long-term relationships.',
    color: 'from-orange-500/10 to-transparent',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop',
  },
  {
    slug: 'other-trades',
    label: 'Other Trades',
    icon: Wrench,
    tagline: 'Roofing, Pest Control, Restoration & More',
    description: "If you run a home service company and you're ready to grow the right way, True North's frameworks adapt to your trade.",
    color: 'from-primary/10 to-transparent',
    img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop',
  },
];

const stats = [
  { end: 10, suffix: '+', prefix: '', label: 'Years in the Trades' },
  { end: 500, suffix: '+', prefix: '', label: 'Businesses Coached' },
  { end: 40, suffix: 'M+', prefix: '$', label: 'Revenue Generated' },
  { end: 5, suffix: '', prefix: '', label: 'Trade Specialties' },
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
            <CompassButton to="/connect" className="bg-transparent text-primary hover:bg-primary hover:text-[#FCECBB]" arrowsClassName="opacity-0 group-hover:opacity-100 transition-opacity duration-300">Book a Discovery Call</CompassButton>
          </motion.div>
        </div>
      </section>

      {/* ── INTRO / WHY TRADES-ONLY ───────────────────────────────── */}
      <section className="py-24 bg-background bg-topography relative overflow-hidden">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2 text-[18vw] font-heading text-foreground/[0.02] leading-none pointer-events-none select-none"
        >
          TRADES
        </motion.div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={stagger}
              viewport={{ once: true }}
            >
              <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-widest text-primary mb-4 flex items-center justify-center gap-3">
                <span className="w-8 h-px bg-primary" />
                Why We're Different
                <span className="w-8 h-px bg-primary" />
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
          </div>
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
              className={`py-8 px-6 flex flex-col items-center justify-center relative ${i < 3 ? 'border-r border-background/10' : ''}`}
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
              <CountUpStat {...s} className="text-background" />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── TRADE CARDS ───────────────────────────────────────────── */}
      <section id="trades" className="py-24 md:py-32 bg-background bg-grain relative">
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
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6"
          >
            {trades.map((trade) => {
              const Icon = trade.icon;
              return (
                <motion.div key={trade.slug} variants={fadeUp}>
                  <SpotlightCard className="group relative overflow-hidden bg-card border-border/40 hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(232,96,10,0.15)] rounded-none h-full">
                    <Link to={`/who-we-serve/${trade.slug}`} className="block h-full">
                      {/* Image */}
                      <div className="relative h-52 overflow-hidden">
                        <img
                          src={trade.img}
                          alt={trade.label}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                          referrerPolicy="no-referrer"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${trade.color} via-transparent to-transparent opacity-60`} />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                        <div className="absolute top-4 right-4 w-10 h-10 bg-card/80 backdrop-blur-sm border border-border/50 flex items-center justify-center group-hover:border-primary/50 transition-colors duration-300">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-8">
                        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">{trade.tagline}</p>
                        <h3 className="font-heading text-3xl uppercase text-foreground mb-4 group-hover:text-primary transition-colors duration-300">{trade.label}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">{trade.description}</p>
                        <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-xs">
                          <span>Explore {trade.label} Coaching</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                      </div>
                    </Link>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── WHY IT WORKS ──────────────────────────────────────────── */}
      <section className="py-24 bg-background border-t border-border/30">
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

      <TestimonialsStack />

      {/* ── CTA BANNER ───────────────────────────────────────────── */}
      <section className="py-24 bg-foreground relative overflow-hidden">
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
        </div>
      </section>

      <FindYourTrueNorth />
    </main>
  );
}
