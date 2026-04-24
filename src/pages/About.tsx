import { Link } from 'react-router-dom';
import mckenaPhoto from '/Images/IMG_7985 (1).jpeg';
import stackedLogo from '/Images/True North_stacked full logo grey.svg';
import { CountUpStat } from '@/components/CountUpStat';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { motion } from 'motion/react';
import { SpotlightCard } from '@/components/SpotlightCard';
import { PhotoFrame } from '@/components/ui/photo-frame';
import { AnimatedGradientText } from '@/components/AnimatedGradientText';
import { CompassButton } from '@/components/ui/compass-button';
import { StepContactForm } from '@/components/StepContactForm';
import {
  CheckCircle2,
  Shield,
  Target,
  TrendingUp,
  Users,
  Compass,
} from 'lucide-react';
import { TestimonialsStack } from '@/components/TestimonialsStack';

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

const team = [
  {
    name: 'McKena Harless',
    role: 'Founder & Lead Coach',
    img: mckenaPhoto,
    bio: 'McKena spent over a decade working inside home service companies before launching True North Strategies. She\'s seen every growth ceiling a trades business can hit — and she\'s built the frameworks to break through them. Her coaching style is direct, honest, and grounded in what actually works in the field, not on a whiteboard.',
    credentials: ['10+ years in home service operations', 'Coached 200+ trades business owners', 'Specializes in CSR systems and leadership development'],
  },
  {
    name: 'David Chen',
    role: 'Sales & CSR Coach',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
    bio: 'David brings a front-line perspective to every coaching engagement. He\'s spent years inside service dispatch centers and on in-home sales calls — understanding exactly where revenue is won and lost. He builds the scripts, training systems, and accountability structures that stick because they come from real experience.',
    credentials: ['Former CSR manager and in-home sales trainer', 'Driven 30–60% booking rate improvements consistently', 'Expert in flat-rate pricing and in-home presentation'],
  },
  {
    name: 'Marcus Johnson',
    role: 'Business Operations Coach',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop',
    bio: 'Marcus is the operational architect of the True North team. He focuses on the systems and infrastructure that allow trades businesses to scale without chaos — dispatch efficiency, hiring pipelines, performance management, and financial reporting. His clients describe him as the person who finally made their business feel like a real company.',
    credentials: ['Built operational systems for 100+ service companies', 'Specializes in scaling past the $3M ceiling', 'Expert in KPI dashboards and P&L optimization'],
  },
  {
    name: 'Sarah Jenkins',
    role: 'CSR & Customer Experience Coach',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop',
    bio: 'Sarah has coached CSR teams across dozens of home service companies, transforming how front-line staff handle every inbound call. Her training programs are practical, repeatable, and built around real call scenarios. She believes the phone call is the most valuable real estate in any service business — and she proves it.',
    credentials: ['Specialized in inbound call conversion coaching', 'Designed CSR training programs used company-wide', 'Drives average booking rate improvements of 25–40%'],
  },
];

const values = [
  {
    icon: Shield,
    title: 'Honest Over Comfortable',
    body: 'We tell clients what they need to hear, not what feels good. Real growth starts with an accurate picture of where you are.',
  },
  {
    icon: Target,
    title: 'Results Over Theory',
    body: 'Every framework we use has been tested in real trades businesses. We don\'t teach from textbooks — we teach from the field.',
  },
  {
    icon: Users,
    title: 'Partnership Over Prescription',
    body: 'We don\'t hand you a playbook and disappear. We work alongside you, adjust in real time, and stay accountable to your outcomes.',
  },
  {
    icon: TrendingUp,
    title: 'Systems Over Heroics',
    body: 'Sustainable growth isn\'t built on hustle — it\'s built on systems. We help you build a business that runs without depending on any one person.',
  },
];

const turningPoints = [
  'You stop being the bottleneck in your own business',
  'Your team performs consistently — not just when you\'re watching',
  'Revenue becomes predictable instead of seasonal and chaotic',
  'You make decisions from data instead of gut feeling',
  'Hiring stops feeling like gambling and starts feeling like a system',
  'Your customers get the same excellent experience every time',
  'You have time to work on the business, not just in it',
  'Growth compounds — each improvement builds on the last',
];


export function About() {

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grain">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-[100px] animate-pulse-glow z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-amber-500/10 rounded-full filter blur-[120px] animate-pulse-glow z-0" style={{ animationDelay: '2s' }} />

        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
            alt="The True North team"
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
            Our Story
            <span className="w-8 h-px bg-primary" />
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-heading text-3xl sm:text-5xl md:text-7xl lg:text-8xl uppercase text-foreground mb-6 leading-none"
          >
            About <br />
            <AnimatedGradientText>True North</AnimatedGradientText>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-3xl font-script text-primary max-w-2xl mx-auto mb-12 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          >
            A team of coaches who have lived the trades — and built the playbook to prove it.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <CompassButton to="/connect">Book a Discovery Call</CompassButton>
            <CompassButton href="#team" className="bg-transparent text-primary hover:bg-primary hover:text-[#FCECBB]" arrowsClassName="opacity-0 group-hover:opacity-100 transition-opacity duration-300">Meet the Team</CompassButton>
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

      {/* ── PHILOSOPHY / MISSION ──────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-topography opacity-[0.30] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <PhotoFrame
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2232&auto=format&fit=crop"
                alt="True North coaching session"
                innerClassName="aspect-square"
              />
            </motion.div>

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
                  Our Philosophy
                </p>
                <h2 className="font-heading text-4xl md:text-5xl uppercase text-foreground leading-none mb-6">
                  We Don't Do <AnimatedGradientText>Generic</AnimatedGradientText>
                </h2>
              </motion.div>

              <motion.p variants={fadeUp} className="text-foreground/80 leading-relaxed text-lg">
                True North Strategies was built on a single conviction: home service companies deserve coaches who actually understand their world. Not consultants who adapt corporate playbooks for the trades. Coaches who have been in dispatch centers, on service calls, and in the financial trenches of a $2M HVAC company trying to figure out why the margins aren't there.
              </motion.p>
              <motion.p variants={fadeUp} className="text-foreground/80 leading-relaxed text-lg">
                We built our methodology inside real trades businesses — refining what works, discarding what doesn't, and building systems that hold up under the pressure of a busy season. Every framework we teach has been field-tested. Every result we promise is one we've already delivered.
              </motion.p>
              <motion.p variants={fadeUp} className="text-foreground/80 leading-relaxed text-lg">
                Our name says it all. True North isn't a destination — it's a direction. We help home service owners find theirs, and we walk alongside them every step of the way.
              </motion.p>

              <motion.div variants={fadeUp}>
                <CompassButton to="/connect">Book a Discovery Call</CompassButton>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── TEAM TEASER ──────────────────────────────────────────── */}
      <section id="team" className="py-24 bg-card bg-grain relative border-t border-border/30 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full filter blur-[120px]" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

            {/* Left: content + CTA */}
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
                  The People Behind the Work
                </p>
                <h2 className="font-heading text-4xl md:text-5xl uppercase text-foreground leading-none mb-6">
                  Meet Your <AnimatedGradientText>Coaches</AnimatedGradientText>
                </h2>
              </motion.div>

              <motion.p variants={fadeUp} className="text-2xl font-script text-primary leading-relaxed">
                Every coach on this team has lived the trades — we're not theorists.
              </motion.p>

              <motion.p variants={fadeUp} className="text-foreground/80 leading-relaxed text-lg">
                Our coaches have worked dispatch boards, handled service calls, and built systems inside real home service companies. When they coach you, they're not guessing — they've already solved the problem you're facing.
              </motion.p>

              <motion.ul variants={stagger} className="space-y-3">
                {['Founder-led, trades-only coaching team', 'Every coach has field experience, not just certifications', 'Specialists in CSR, sales, operations, and leadership'].map((item) => (
                  <motion.li key={item} variants={fadeUp} className="flex items-center gap-3 text-sm text-foreground/70">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div variants={fadeUp}>
                <CompassButton to="/coaching">Meet Your Coaches</CompassButton>
              </motion.div>
            </motion.div>

            {/* Right: team photos — grid on mobile, stacked on desktop */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Mobile: 2×2 grid */}
              <div className="grid grid-cols-2 gap-3 lg:hidden">
                {team.map((member, i) => (
                  <div key={i} className="relative overflow-hidden border border-border/40 group">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-2">
                      <p className="font-heading text-xs uppercase text-foreground leading-none">{member.name}</p>
                      <p className="text-primary text-[9px] uppercase tracking-widest mt-0.5">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop: stacked/overlapping layout */}
              <div className="relative h-[640px] hidden lg:block">
                {team.map((member, i) => {
                  const positions = [
                    'left-10 top-0 w-64 h-80',
                    'left-[270px] top-6 w-64 h-80',
                    'left-14 top-64 w-64 h-80',
                    'left-[265px] top-[268px] w-64 h-80',
                  ];
                  const rotations = ['-rotate-2', 'rotate-3', 'rotate-1', '-rotate-1'];
                  const zIndexes = ['z-[1]', 'z-[2]', 'z-[3]', 'z-[4]'];
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className={`absolute ${positions[i]} ${rotations[i]} ${zIndexes[i]} overflow-hidden border-2 border-border/40 hover:border-primary/60 hover:z-[50] transition-all duration-500 group shadow-xl`}
                    >
                      <img
                        src={member.img}
                        alt={member.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <p className="font-heading text-sm uppercase text-foreground leading-none">{member.name}</p>
                        <p className="text-primary text-[10px] uppercase tracking-widest mt-0.5">{member.role}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── VALUES / VALUE PROPOSITION ────────────────────────────── */}
      <section className="py-24 bg-foreground relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4 flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-primary" />
              What We Stand For
              <span className="w-8 h-px bg-primary" />
            </p>
            <h2 className="font-heading text-4xl md:text-5xl uppercase text-background leading-none">
              How We <AnimatedGradientText>Operate</AnimatedGradientText>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={stagger}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map(({ icon: Icon, title, body }, i) => (
              <motion.div key={i} variants={fadeUp}>
                <SpotlightCard className="p-8 bg-background/5 border border-background/10 hover:border-primary/40 transition-all duration-300 rounded-none hover:shadow-[0_0_25px_rgba(232,96,10,0.12)] h-full group">
                  <div className="w-12 h-12 bg-background/10 border border-background/10 group-hover:border-primary/40 flex items-center justify-center mb-6 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h4 className="font-heading text-xl uppercase text-background mb-4 leading-tight">{title}</h4>
                  <p className="text-background/60 text-sm leading-relaxed">{body}</p>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TURNING POINT ─────────────────────────────────────────── */}
      <section className="py-24 bg-background relative overflow-hidden border-t border-border/30">
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
                The Turning Point
              </motion.p>
              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl uppercase text-foreground leading-none mb-6">
                This Is What <AnimatedGradientText>Changes</AnimatedGradientText>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-foreground/80 leading-relaxed text-lg mb-10">
                Our clients don't just grow revenue — they change how they operate, how they lead, and how they live. These are the shifts we see happen consistently when a home service owner commits to the process.
              </motion.p>
              <motion.div variants={fadeUp}>
                <CompassButton to="/connect">Book a Discovery Call</CompassButton>
              </motion.div>
            </motion.div>

            <motion.ul
              initial="hidden"
              whileInView="visible"
              variants={stagger}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {turningPoints.map((point, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp}
                  className="flex items-start gap-4 p-4 bg-card border border-border/40 hover:border-primary/40 transition-colors duration-300 group"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-foreground text-sm leading-relaxed">{point}</span>
                </motion.li>
              ))}
            </motion.ul>

          </div>
        </div>
      </section>

      {/* ── WHY TRUE NORTH VS OTHERS ──────────────────────────────── */}
      <section className="py-24 bg-card relative overflow-hidden border-t border-border/30">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl uppercase text-foreground leading-none">
              Why <AnimatedGradientText>True North</AnimatedGradientText>
            </h2>
            <p className="text-lg font-script text-primary mt-4 max-w-lg mx-auto">
              There are a lot of coaches. Here's what makes this one different.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={stagger}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border/40 divide-y md:divide-y-0 md:divide-x divide-border/40"
          >
            {[
              {
                icon: Compass,
                label: 'Trades-Only Focus',
                contrast: 'Generic coaches serve every industry and adapt their material to yours.',
                ours: 'Every True North framework was built specifically for home service companies — HVAC, plumbing, electrical, and garage doors.',
              },
              {
                icon: Shield,
                label: 'Coaches Who\'ve Done It',
                contrast: 'Many coaches teach from courses and certifications.',
                ours: 'Our coaches have worked inside the businesses they coach — dispatch boards, service calls, CSR floors. They\'ve lived the work.',
              },
              {
                icon: TrendingUp,
                label: 'Outcomes, Not Hours',
                contrast: 'Some coaching programs sell you a block of hours and call it done.',
                ours: 'We define measurable outcomes at the start of every engagement and stay accountable to them. Your results are our report card.',
              },
            ].map(({ icon: Icon, label, contrast, ours }, i) => (
              <motion.div key={i} variants={fadeUp} className="p-10 group hover:bg-primary/5 transition-colors duration-300">
                <div className="w-12 h-12 bg-card border border-border/50 group-hover:border-primary/50 flex items-center justify-center mb-6 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h4 className="font-heading text-2xl uppercase text-foreground mb-6">{label}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-through decoration-muted-foreground/40">{contrast}</p>
                <p className="text-foreground text-sm leading-relaxed font-medium">{ours}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <TestimonialsStack />

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
              <StepContactForm buttonLabel="Book a Discovery Call" />
            </motion.div>

          </div>
        </div>
      </section>

    </main>
  );
}
