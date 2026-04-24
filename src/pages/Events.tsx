import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CalendarDays, MapPin, Clock, Users, ArrowRight, Compass } from 'lucide-react';
import { AnimatedTabs, Tab } from '@/components/ui/animated-tabs';
import { CompassButton } from '@/components/ui/compass-button';
import { AnimatedGradientText } from '@/components/AnimatedGradientText';
import { TestimonialsStack } from '@/components/TestimonialsStack';
import { CountUpStat } from '@/components/CountUpStat';

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

// ── Event data ────────────────────────────────────────────────────────────────

interface EventData {
  id: string;
  tabLabel: string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  location: string;
  city: string;
  capacity: string;
  spotsLeft: number;
  price: string;
  img: string;
  type: 'Workshop' | 'Summit' | 'Masterclass' | 'Bootcamp';
  description: string;
  highlights: string[];
  registerUrl: string;
}

const events: EventData[] = [
  {
    id: 'apr-18',
    tabLabel: 'Apr 18',
    title: 'CSR Conversion Masterclass',
    subtitle: 'Turn every call into a booked job',
    date: 'April 18, 2026',
    time: '9:00 AM – 4:00 PM',
    location: 'Phoenix Convention Center',
    city: 'Phoenix, AZ',
    capacity: '40 seats',
    spotsLeft: 12,
    price: '$497',
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop',
    type: 'Masterclass',
    description:
      'A full-day deep dive into booking rate optimization. We cover everything from first-call scripting and objection handling to tone coaching and call recording review. Walk away with a complete CSR playbook built for your business.',
    highlights: [
      'Live call recording teardowns with real feedback',
      'Scripting workshop for your specific trade',
      'Objection handling roleplay with coaching',
      'Booking rate benchmarks by trade and market',
    ],
    registerUrl: '/connect',
  },
  {
    id: 'may-09',
    tabLabel: 'May 9',
    title: 'Trades Business Summit',
    subtitle: 'One day. Every growth lever.',
    date: 'May 9, 2026',
    time: '8:00 AM – 5:30 PM',
    location: 'The Renaissance Hotel',
    city: 'Dallas, TX',
    capacity: '120 seats',
    spotsLeft: 34,
    price: '$797',
    img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop',
    type: 'Summit',
    description:
      'The True North Trades Business Summit brings together home service owners from across the country for a single day of high-density, actionable content. No fluff, no vendor pitches — just frameworks that work in the trades.',
    highlights: [
      'Keynote: Building a Business That Runs Without You',
      'Panel: Owners Who Scaled Past $5M and What Changed',
      'Breakouts: CSR, Technician Sales, and Operations tracks',
      'Networking lunch with 100+ trades business owners',
    ],
    registerUrl: '/connect',
  },
  {
    id: 'jun-03',
    tabLabel: 'Jun 3',
    title: 'Technician Sales Bootcamp',
    subtitle: 'Train your team to present, not just fix',
    date: 'June 3–4, 2026',
    time: 'Day 1: 9 AM – 5 PM  |  Day 2: 9 AM – 1 PM',
    location: 'True North Training Center',
    city: 'Scottsdale, AZ',
    capacity: '24 seats',
    spotsLeft: 8,
    price: '$1,197',
    img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop',
    type: 'Bootcamp',
    description:
      'A two-day intensive for service technicians and the owners who want to coach them. We cover the psychology of in-home sales, flat-rate option presentation, and how to create upsell opportunities on every service call without being pushy.',
    highlights: [
      'In-home sales psychology and trust-building',
      'Flat-rate menu presentation framework',
      'Options-based selling for HVAC, plumbing, electrical',
      'Manager toolkit: how to coach techs after training',
    ],
    registerUrl: '/connect',
  },
  {
    id: 'jul-22',
    tabLabel: 'Jul 22',
    title: 'Operations & Scale Workshop',
    subtitle: 'Build the systems that let you step back',
    date: 'July 22, 2026',
    time: '9:00 AM – 3:00 PM',
    location: 'Hilton Garden Inn',
    city: 'Nashville, TN',
    capacity: '30 seats',
    spotsLeft: 19,
    price: '$597',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
    type: 'Workshop',
    description:
      'Built for owners who are stuck doing everything themselves. This workshop walks through the operational frameworks True North uses to help home service companies build dispatch systems, hiring pipelines, performance management, and financial dashboards that run without constant owner involvement.',
    highlights: [
      'Org chart design for your growth stage',
      'Dispatch and scheduling systems that scale',
      'KPI dashboards every owner should be watching',
      'How to hire and retain A-players in the trades',
    ],
    registerUrl: '/connect',
  },
];

// ── Tab content builder ───────────────────────────────────────────────────────

function EventTabContent({ event }: { event: EventData }) {
  const urgency = event.spotsLeft <= 10;

  return (
    <div className="grid md:grid-cols-2 gap-0 h-full">
      {/* Left — image */}
      <div className="relative overflow-hidden min-h-[260px] md:min-h-full">
        <img
          src={event.img}
          alt={event.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/20 to-transparent" />
        {/* Type badge */}
        <span className="absolute top-4 left-4 text-xs font-bold uppercase tracking-widest bg-primary text-primary-foreground px-3 py-1">
          {event.type}
        </span>
        {/* Urgency badge */}
        {urgency && (
          <span className="absolute top-4 right-4 text-xs font-bold uppercase tracking-widest bg-destructive text-white px-3 py-1 animate-pulse">
            {event.spotsLeft} spots left
          </span>
        )}
      </div>

      {/* Right — details */}
      <div className="p-8 md:p-10 flex flex-col justify-between">
        <div>
          <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">{event.subtitle}</p>
          <h3 className="font-heading text-3xl md:text-4xl uppercase text-foreground leading-tight mb-4">
            {event.title}
          </h3>

          {/* Meta */}
          <div className="space-y-2 mb-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CalendarDays className="w-4 h-4 text-primary flex-shrink-0" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4 text-primary flex-shrink-0" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
              <span>{event.location}, {event.city}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="w-4 h-4 text-primary flex-shrink-0" />
              <span>{event.capacity} · <span className={urgency ? 'text-destructive font-semibold' : 'text-foreground'}>{event.spotsLeft} spots remaining</span></span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            {event.description}
          </p>

          {/* Highlights */}
          <ul className="space-y-2 mb-6">
            {event.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4 flex-wrap">
          <CompassButton to={event.registerUrl}>Reserve Your Seat — {event.price}</CompassButton>
          <span className="text-xs text-muted-foreground uppercase tracking-widest">
            Or <Link to="/connect" className="text-primary hover:underline">contact us</Link> for group rates
          </span>
        </div>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export function Events() {
  const tabs: Tab[] = events.map((e) => ({
    id: e.id,
    label: e.tabLabel,
    content: <EventTabContent event={e} />,
  }));

  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-background/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

        <div className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary text-xs font-bold uppercase tracking-widest mb-6 flex items-center justify-center gap-3"
          >
            <span className="w-8 h-px bg-primary" />
            Live Training &amp; Events
            <span className="w-8 h-px bg-primary" />
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-3xl sm:text-5xl md:text-7xl lg:text-8xl uppercase text-[#FCECBB] leading-none mb-6"
          >
            Where Growth<br />
            <AnimatedGradientText>Happens Live</AnimatedGradientText>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-script text-primary text-2xl max-w-xl mx-auto"
          >
            Workshops, summits, and bootcamps built specifically for home service business owners ready to grow.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center mt-8"
          >
            <CompassButton to="/connect">Book a Discovery Call</CompassButton>
          </motion.div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
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

      {/* ── Upcoming Events ── */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              2026 Schedule
            </p>
            <h2 className="font-heading text-4xl md:text-5xl uppercase text-foreground leading-none">
              Upcoming <AnimatedGradientText>Events</AnimatedGradientText>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-lg">
              Select a date below to see full event details, location, and registration.
            </p>
          </motion.div>

          {/* Animated Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <AnimatedTabs tabs={tabs} />
          </motion.div>
        </div>
      </section>

      {/* ── Why Attend ── */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-4 flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-primary" />
              Why Show Up In Person
              <span className="w-8 h-px bg-primary" />
            </p>
            <h2 className="font-heading text-4xl md:text-5xl uppercase text-foreground leading-none">
              More Than a <AnimatedGradientText>Seminar</AnimatedGradientText>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: '01',
                title: 'Built for the Trades',
                body: 'Every session, every example, every framework is built specifically for home service companies. No generic business content — just what works in your world.',
              },
              {
                number: '02',
                title: 'You Leave with a Plan',
                body: 'True North events aren\'t motivational. They\'re operational. You leave with specific changes to implement on Monday morning, not just inspiration.',
              },
              {
                number: '03',
                title: 'The Room Is the Value',
                body: 'The owners in the room are as valuable as the content on stage. Every True North event is a curated group of serious operators who are building real businesses.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-background border border-border/40 hover:border-primary/40 transition-colors duration-300 p-8"
              >
                <span className="font-heading text-6xl text-primary/40 leading-none block mb-4">{item.number}</span>
                <h3 className="font-heading text-2xl uppercase text-foreground mb-3">{item.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <TestimonialsStack />

      {/* ── CTA ── */}
      <div className="h-px bg-gradient-to-r from-transparent via-[rgba(254,101,42,0.5)] to-transparent" />
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-topography opacity-[0.30] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Compass className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="font-heading text-4xl md:text-5xl uppercase text-foreground leading-none mb-4">
              Not Sure Which Event<br />Is Right for You?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-lg">
              Book a quick discovery call and we'll point you to the event that fits your business stage and goals.
            </p>
            <CompassButton to="/connect">Book a Discovery Call</CompassButton>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
