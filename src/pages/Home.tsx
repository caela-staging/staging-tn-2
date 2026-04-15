import { Link } from 'react-router-dom';
import { Shield, Target, Users, TrendingUp, Compass, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { motion, animate, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { SpotlightCard } from '@/components/SpotlightCard';
import { TestimonialsStack } from '@/components/TestimonialsStack';
import { Magnetic } from '@/components/Magnetic';
import { AnimatedGradientText } from '@/components/AnimatedGradientText';
import { AnimatedHeroSection } from '@/components/ui/animated-hero-section-1';
import { CompassButton } from '@/components/ui/compass-button';
import { StepContactForm } from '@/components/StepContactForm';
import { EtheralShadow } from '@/components/ui/etheral-shadow';
import truenorthBadge from '/Images/True North_text badge grey.svg';
import mckenaPhoto from '/Images/IMG_7990.jpeg';
import coachVideo from '/Images/kling_20260327_作品_consultant_2907_0.mp4';

const stats = [
  { end: 10, suffix: '+', prefix: '', label: 'Years Coaching the Trades' },
  { end: 500, suffix: '+', prefix: '', label: 'Businesses Transformed' },
  { end: 40, suffix: 'M+', prefix: '$', label: 'Revenue Generated for Clients' },
  { end: 4, suffix: '', prefix: '', label: 'Trade Specialties' },
];

function CountUpStat({ end, suffix, prefix, label, white = false }: { end: number; suffix: string; prefix: string; label: string; white?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, end, {
      duration: 2,
      ease: 'easeOut',
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, end]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center gap-2">
      <span className="font-heading text-3xl md:text-4xl text-primary leading-none">
        {prefix}{value}{suffix}
      </span>
      <span className={`text-[10px] font-bold uppercase tracking-wider leading-tight ${white ? 'text-white/60' : 'text-muted-foreground'}`}>
        {label}
      </span>
    </div>
  );
}

function CoachVideo({ src, className }: { src: string; className: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasEnded = useRef(false);
  const [colorized, setColorized] = useState(false);

  const handleLoadedMetadata = () => {
    const v = videoRef.current;
    if (!v) return;
    if (hasEnded.current) {
      // Already finished — show last frame, stay paused and colored
      v.currentTime = v.duration;
      setColorized(true);
      return;
    }
    v.currentTime = Math.max(0, v.duration - 3);
    v.play();
  };

  const handleEnded = () => {
    const v = videoRef.current;
    if (!v) return;
    hasEnded.current = true;
    v.pause();
    v.currentTime = v.duration;
    setColorized(true);
  };

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      playsInline
      onLoadedMetadata={handleLoadedMetadata}
      onEnded={handleEnded}
      className={`${className} ${colorized ? '!grayscale-0' : ''}`}
    />
  );
}

const videoSlides = [
  { name: 'James R.', company: 'Precision Air & Heat', trade: 'HVAC', quote: '"Revenue up 40% in our first year. The systems they built changed everything."' },
  { name: 'Maria T.', company: 'AllFlow Plumbing', trade: 'Plumbing', quote: '"Our CSR team went from booking 50% of calls to over 80%. Night and day."' },
  { name: 'Derek S.', company: 'Voltline Electric', trade: 'Electrical', quote: '"I finally feel like a business owner instead of just the best tech on the truck."' },
  { name: 'Amanda C.', company: 'LiftRight Garage Doors', trade: 'Garage Doors', quote: '"True North gave us a real roadmap. We hit $2M for the first time last year."' },
];

function VideoCarousel() {
  const [active, setActive] = useState(0);
  const count = videoSlides.length;

  return (
    <section className="py-24 bg-foreground relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      {/* Gradient spotlight behind video cards */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70rem] h-[30rem] bg-gradient-to-r from-primary/30 via-amber-400/20 to-primary/30 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50rem] h-[20rem] bg-primary/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4 flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-primary" />
            Client Stories
            <span className="w-8 h-px bg-primary" />
          </p>
          <h2 className="font-heading text-4xl md:text-5xl uppercase text-background leading-none">
            Real Results. <AnimatedGradientText>Real Contractors.</AnimatedGradientText>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {videoSlides.map((slide, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setActive(i)}
              className={`cursor-pointer group relative flex flex-col border transition-all duration-300 ${
                active === i ? 'border-primary shadow-[0_0_24px_rgba(254,101,42,0.25)]' : 'border-background/10 hover:border-primary/40'
              }`}
            >
              {/* YouTube-style placeholder */}
              <div className="relative aspect-video bg-[#0f0f0f] flex items-center justify-center overflow-hidden">
                {/* Fake thumbnail bars */}
                <div className="absolute inset-0 flex flex-col justify-end p-3 gap-1.5">
                  <div className="h-2 w-3/4 bg-white/10 rounded-sm" />
                  <div className="h-2 w-1/2 bg-white/6 rounded-sm" />
                </div>
                {/* YouTube play button */}
                <div className={`relative z-10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${active === i ? 'scale-110' : ''}`}>
                  <svg viewBox="0 0 68 48" className="w-14 h-10">
                    <path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="#FF0000" fillOpacity={active === i ? '1' : '0.85'} />
                    <path d="M45 24 27 14v20" fill="white" />
                  </svg>
                </div>
              </div>

              {/* Info */}
              <div className="p-5 flex flex-col gap-2 bg-background/5">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">{slide.trade}</span>
                <p className="text-background font-heading text-lg uppercase leading-none">{slide.name}</p>
                <p className="text-background/50 text-xs uppercase tracking-wide">{slide.company}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured quote for active slide */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-background/80 text-xl font-script leading-relaxed">{videoSlides[active].quote}</p>
          <p className="text-primary text-xs uppercase tracking-widest font-bold mt-4">
            — {videoSlides[active].name}, {videoSlides[active].company}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export function Home() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <AnimatedHeroSection
        backgroundImageUrl="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
        align="left"
        title={
          <>
            Guiding Your Business <br />
            <AnimatedGradientText>The Authentic Way</AnimatedGradientText>
          </>
        }
        description={<span className="font-script text-primary text-2xl">Business coaching built for <span className="text-foreground">home service</span> contractors who refuse to settle.</span>}
      >
        {/* Buttons + Stats locked to same width */}
        <div className="flex flex-col gap-16 w-fit">
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <CompassButton to="/coaching">Discover Coaching</CompassButton>
            <CompassButton to="/connect" className="bg-transparent text-primary hover:bg-primary hover:text-[#FCECBB]" arrowsClassName="opacity-0 group-hover:opacity-100 transition-opacity duration-300">Book a Discovery Call</CompassButton>
          </div>

          {/* Stats Ticker */}
          <div className="flex justify-between w-full">
            {stats.map((stat, i) => (
              <div key={stat.label} className={`flex-1 min-w-0 ${i > 0 ? 'border-l border-white/20 pl-3' : ''}`}>
                <CountUpStat {...stat} white />
              </div>
            ))}
          </div>
        </div>
      </AnimatedHeroSection>

      {/* Connect With Your Coach Section */}
      <section className="py-24 md:py-32 bg-card bg-topography relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative max-w-[calc(100%-50px)]"
            >
              {/* Corner bracket accents */}
              <span className="absolute -top-1 -left-1 w-6 h-6 border-t-[3px] border-l-[3px] border-primary z-20 pointer-events-none" />
              <span className="absolute -top-1 -right-1 w-6 h-6 border-t-[3px] border-r-[3px] border-primary z-20 pointer-events-none" />
              <span className="absolute -bottom-1 -left-1 w-6 h-6 border-b-[3px] border-l-[3px] border-primary z-20 pointer-events-none" />
              <span className="absolute -bottom-1 -right-1 w-6 h-6 border-b-[3px] border-r-[3px] border-primary z-20 pointer-events-none" />
              <CoachVideo
                src={coachVideo}
                className="relative z-10 w-full h-[488px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <motion.div variants={fadeUpVariant}>
                <h2 className="font-heading text-4xl md:text-5xl uppercase text-foreground mb-6 leading-none tracking-normal">
                  Connect With <br/>Your Coach
                </h2>
                <p className="text-2xl font-script text-primary mb-6">
                  We don't just give advice; we partner with you to build a resilient, profitable home service business.
                </p>
              </motion.div>

              <motion.ul variants={staggerContainer} className="space-y-6">
                {[
                  "Tailored strategies for HVAC, Plumbing, and Electrical",
                  "Proven frameworks to increase revenue and margin",
                  "Leadership development for you and your management team",
                  "No-nonsense accountability to keep you on track"
                ].map((prop, idx) => (
                  <motion.li variants={fadeUpVariant} key={idx} className="flex items-start gap-4">
                    <Shield className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <span className="text-foreground text-lg">{prop}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div variants={fadeUpVariant}>
                <CompassButton to="/connect">Book a Discovery Call</CompassButton>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet the Coaches */}
      <section className="py-24 bg-background bg-grain relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-heading text-4xl md:text-5xl uppercase text-foreground mb-6 tracking-normal">
              Built For The <AnimatedGradientText>Trades</AnimatedGradientText>
            </h2>
            <p className="text-2xl font-script text-primary max-w-2xl mx-auto mb-12">
              We specialize exclusively in the home service industry. We know your metrics, your challenges, and your customers.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { name: "HVAC", icon: "❄️", to: "/who-we-serve/hvac" },
              { name: "Plumbing", icon: "💧", to: "/who-we-serve/plumbing" },
              { name: "Electrical", icon: "⚡", to: "/who-we-serve/electrical" },
              { name: "Garage Doors", icon: "🚪", to: "/who-we-serve/garage-doors" }
            ].map((industry, i) => (
              <motion.div variants={fadeUpVariant} key={i}>
                <SpotlightCard className="rounded-none bg-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(232,96,10,0.15)]">
                  <Link to={industry.to} className="group block relative p-12 text-center overflow-hidden h-full w-full">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                    <div className="relative z-10">
                      <div className="text-5xl mb-6 grayscale group-hover:grayscale-0 transition-all group-hover:scale-110 duration-300">{industry.icon}</div>
                      <h3 className="font-heading text-3xl uppercase text-foreground mb-4">{industry.name}</h3>
                      <div className="h-0 overflow-hidden group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <p className="text-sm text-muted-foreground mt-4">
                          Tailored coaching programs designed specifically for {industry.name.toLowerCase()} businesses.
                        </p>
                      </div>
                    </div>
                  </Link>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background border-border/30 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
          >
            <div>
              <h2 className="font-heading text-4xl md:text-5xl uppercase text-foreground leading-none tracking-normal">
                The True North <AnimatedGradientText>Team</AnimatedGradientText>
              </h2>
            </div>
            <Magnetic>
              <CompassButton to="/coaching">Meet All Coaches</CompassButton>
            </Magnetic>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { name: "McKena Harless", role: "Founder & Lead Coach", img: mckenaPhoto },
              { name: "David Chen", role: "Sales Coaching", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" },
              { name: "Marcus Johnson", role: "Business Coaching", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop" }
            ].map((coach, i) => (
              <motion.div variants={fadeUpVariant} key={i}>
                <SpotlightCard className="group relative overflow-hidden bg-card border-border/30 hover:-translate-y-2 transition-transform duration-500 hover:shadow-[0_10px_40px_rgba(232,96,10,0.15)] rounded-none">
                  <div className="aspect-square overflow-hidden">
                    <img src={coach.img} alt={coach.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" referrerPolicy="no-referrer" />
                  </div>
                  <div className="p-8 relative z-10 bg-gradient-to-t from-card via-card/80 to-transparent -mt-20 pt-24">
                    <h4 className="font-heading text-3xl uppercase text-foreground mb-2">{coach.name}</h4>
                    <p className="text-primary uppercase tracking-widest text-sm font-semibold">{coach.role}</p>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Logo Feature / Quote */}
      <section className="py-32 bg-background relative overflow-hidden flex items-center justify-center min-h-[60vh]">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[26vw] h-[26vw] opacity-10"
        >
          <img src={truenorthBadge} alt="" className="w-full h-full object-contain dark:invert" />
        </motion.div>
        <div className="container relative z-10 mx-auto px-6 md:px-12 text-center max-w-3xl">
          <motion.blockquote
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-heading text-2xl md:text-3xl uppercase text-foreground leading-snug mb-6 tracking-normal"
          >
            "We guide home service businesses toward their True North — authentically, honestly, and without shortcuts."
          </motion.blockquote>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-primary uppercase tracking-widest font-semibold text-sm"
          >
            — McKena Harless
          </motion.p>
        </div>
      </section>

      {/* Credentials / Values Block */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border/40"
          >
            {[
              { num: '01', icon: <CheckCircle2 className="w-5 h-5 text-primary" />, title: 'Authentic & Honest', body: "We don't sugarcoat the truth. We provide clear, direct feedback and actionable strategies that actually work in the real world of home services." },
              { num: '02', icon: <Target className="w-5 h-5 text-primary" />, title: 'Dedicated to Your Success', body: "Your wins are our wins. We measure our success entirely by the growth, profitability, and stability of the businesses we partner with." },
              { num: '03', icon: <TrendingUp className="w-5 h-5 text-primary" />, title: 'Active Partner', body: "We don't just hand you a binder and walk away. We are in the trenches with you, helping implement systems and holding your team accountable." },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUpVariant}
                className="group relative overflow-hidden p-10 md:p-12 border-t-[3px] border-t-transparent hover:border-t-primary transition-all duration-300 hover:shadow-[inset_0_0_40px_rgba(254,101,42,0.06)] cursor-default"
                style={{ borderRight: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}
              >
                {/* Big background number */}
                <span className="absolute -top-4 right-4 font-heading text-[8rem] leading-none text-foreground/[0.04] group-hover:text-primary/10 transition-colors duration-500 select-none pointer-events-none">
                  {item.num}
                </span>

                {/* Icon + title */}
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  {item.icon}
                  <h3 className="font-heading text-2xl uppercase text-foreground tracking-normal">{item.title}</h3>
                </div>

                {/* Description — slides up on hover */}
                <div className="relative z-10 overflow-hidden">
                  <p className="text-muted-foreground leading-relaxed translate-y-2 group-hover:translate-y-0 opacity-70 group-hover:opacity-100 transition-all duration-400">
                    {item.body}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-24 bg-card relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
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
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent mix-blend-multiply"></div>
            </div>
            <div className="bg-card p-12 md:p-20 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[40px]"></div>
              <div className="text-sm font-bold uppercase tracking-widest text-primary mb-8 flex items-center gap-4 relative z-10">
                <span className="w-12 h-px bg-primary"></span>
                Featured Partner
              </div>
              <h3 className="font-heading text-5xl uppercase text-foreground mb-8 relative z-10">Goettl Air Conditioning & Plumbing</h3>
              <blockquote className="text-xl text-foreground/90 italic mb-12 border-l-2 border-primary pl-6 relative z-10">
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

      {/* Video Testimonial Carousel */}
      <VideoCarousel />

      {/* Testimonials */}
      <TestimonialsStack />

      {/* CTA Form Section */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40rem] h-[20rem] bg-primary/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] z-0" />

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
              <StepContactForm buttonLabel="Book a Discovery Call" />
            </motion.div>

          </div>
        </div>
      </section>
    </main>
  );
}
