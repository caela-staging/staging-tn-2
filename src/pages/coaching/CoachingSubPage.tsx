import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { AnimatedGradientText } from '@/components/AnimatedGradientText';
import { CompassButton } from '@/components/ui/compass-button';
import { ArrowRight, LucideIcon } from 'lucide-react';
import truenorthIcon from '/Images/True North_icon badge black.svg';
import { GlowingShadow } from '@/components/ui/glowing-shadow';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface CoachBio {
  name: string;
  role: string;
  bio: [string, string];
  img: string;
  imgPosition?: string;
}

export interface CoachingSubPageData {
  slug: string;                   // e.g. "csr"
  category: string;               // e.g. "CSR Coaching"
  heroHeadline: string[];         // lines of h1
  heroTagline: string;
  heroImg: string;
  introTitle: string;
  introBody: string[];
  introImg: string;
  introImgAlt: string;
  whatWeCover: string[];
  coaches: CoachBio[];
  ctaHeadline: string;
  ctaBody: string;
  icon: LucideIcon;
  metaDescription: string;
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

// ─── Component ────────────────────────────────────────────────────────────────

export function CoachingSubPage({ data }: { data: CoachingSubPageData }) {
  const Icon = data.icon;

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={data.heroImg}
            alt={data.category}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-background/70" />
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
              to="/coaching"
              className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
            >
              Coaching
            </Link>
            <span className="text-muted-foreground/40">/</span>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">{data.category}</span>
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
            {data.heroTagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <CompassButton href="#intro">Learn More</CompassButton>
            <CompassButton
              to="/connect"
              className="bg-transparent text-primary hover:bg-primary hover:text-[#FCECBB]"
              arrowsClassName="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Book a Discovery Call
            </CompassButton>
          </motion.div>
        </div>
      </section>

      {/* ── INTRO WITH PHOTO ─────────────────────────────────────── */}
      <section id="intro" className="py-24 bg-background bg-topography relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Photo — left */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/20 translate-x-4 translate-y-4" />
              <img
                src={data.introImg}
                alt={data.introImgAlt}
                className="relative z-10 w-full aspect-[4/3] object-cover grayscale hover:grayscale-0 transition-all duration-700"
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
                  {data.category}
                </p>
              </motion.div>

              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl uppercase text-foreground mb-8 leading-none">
                {data.introTitle}
              </motion.h2>

              {data.introBody.map((para, i) => (
                <motion.p key={i} variants={fadeUp} className="text-foreground/80 leading-relaxed text-lg mb-6">
                  {para}
                </motion.p>
              ))}

              <motion.div variants={fadeUp} className="mt-4">
                <CompassButton to="/connect">Book a Discovery Call</CompassButton>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── WHAT WE COVER ─────────────────────────────────────────── */}
      <section className="py-24 bg-foreground relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <div className="hidden md:block text-[22vw] font-heading text-background/[0.03] leading-none absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
            FOCUS
          </div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 max-w-xl"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              What We Cover
            </p>
            <h2 className="font-heading text-4xl md:text-5xl uppercase text-background leading-none">
              Every Session. <AnimatedGradientText>Every Detail.</AnimatedGradientText>
            </h2>
          </motion.div>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            variants={stagger}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {data.whatWeCover.map((item, i) => (
              <motion.li key={i} variants={fadeUp}>
                <GlowingShadow>
                  <div className="flex items-start gap-4 p-5 bg-background/5 border border-background/10 w-full group">
                    <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-background/80 text-sm leading-relaxed">{item}</span>
                  </div>
                </GlowingShadow>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* ── COACH BIOS ────────────────────────────────────────────── */}
      <section className="py-24 bg-background bg-grain border-t border-border/30">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              Your Coaching Team
            </p>
            <h2 className="font-heading text-4xl md:text-5xl uppercase text-foreground leading-none">
              Meet Your <AnimatedGradientText>Coaches</AnimatedGradientText>
            </h2>
          </motion.div>

          <div className="space-y-12">
            {data.coaches.map((coach, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-0 border border-border/40 hover:border-primary/30 transition-colors duration-300 bg-card group`}
              >
                {/* Photo */}
                <div className={`relative overflow-hidden min-h-[260px] md:min-h-[360px] ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img
                    src={coach.img}
                    alt={coach.name}
                    className={`absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ${coach.imgPosition ?? 'object-top'}`}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
                </div>

                {/* Bio */}
                <div className={`flex flex-col justify-center p-8 md:p-12 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="w-10 h-px bg-primary mb-5" />
                  <h3 className="font-heading text-3xl uppercase text-foreground mb-1 leading-none">{coach.name}</h3>
                  <p className="text-primary uppercase tracking-widest text-xs font-semibold mb-6">{coach.role}</p>
                  <p className="text-muted-foreground leading-relaxed mb-4">{coach.bio[0]}</p>
                  <p className="text-muted-foreground leading-relaxed">{coach.bio[1]}</p>
                  <div className="mt-8">
                    <CompassButton to="/connect" className="inline-flex">Book a Call with {coach.name.split(' ')[0]}</CompassButton>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────────── */}
      <section className="py-20 bg-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-topography opacity-10 pointer-events-none" />

        {/* Icon watermark — left */}
        <div className="absolute left-[-4%] top-1/2 -translate-y-1/2 h-[200%] pointer-events-none select-none opacity-[0.06]">
          <img src={truenorthIcon} alt="" className="h-full w-auto" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 flex justify-end">
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
              <CompassButton to="/connect">Book a Discovery Call</CompassButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
