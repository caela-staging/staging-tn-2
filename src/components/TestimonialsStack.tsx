import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatedGradientText } from '@/components/AnimatedGradientText';

// ── Testimonial data ──────────────────────────────────────────────────────────

export interface TestimonialCard {
  id: number;
  title: string;
  description: string;
  company: string;
  trade: string;
  img?: string;
}

export const allTestimonials: TestimonialCard[] = [
  {
    id: 1,
    title: 'Brian Kowalski',
    description: 'We went from a 52% booking rate to 83% in three months. The CSR coaching alone was worth ten times what we paid.',
    company: 'Kowalski Heating & Cooling',
    trade: 'HVAC',
    img: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Denise Morales',
    description: 'True North helped us build our service agreement program from scratch. We now have over 1,200 active agreements generating recurring revenue every month.',
    company: 'Comfort Masters HVAC',
    trade: 'HVAC',
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Tommy Reyes',
    description: "Our average plumbing ticket went from $290 to $580 in four months. We were leaving half our revenue in every home we walked out of.",
    company: 'Reyes Plumbing & Drain',
    trade: 'Plumbing',
    img: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Angela Frost',
    description: 'The maintenance agreement program True North helped us build now generates over $30K per month in recurring revenue. It changed everything.',
    company: 'Frost Flow Plumbing',
    trade: 'Plumbing',
    img: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=2073&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Rafael Sanchez',
    description: 'We tripled our panel upgrade revenue in six months by implementing the home safety inspection process True North built for us.',
    company: 'Sanchez Electric',
    trade: 'Electrical',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Jason Whitfield',
    description: "We were doing 40 calls a week and leaving most of the revenue behind. True North's conversion coaching added $180K in annual revenue without one extra call.",
    company: 'Whitfield Door Solutions',
    trade: 'Garage Doors',
    img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop',
  },
  {
    id: 7,
    title: 'Scott Templeton',
    description: 'Our average ticket went from $380 to $740 in one season. The technician coaching on options presentation was a total game changer.',
    company: 'Templeton Air Services',
    trade: 'HVAC',
    img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 8,
    title: 'Marcus Harrell',
    description: "I came in thinking I had a revenue problem. Turns out I had a systems problem. True North fixed it — and then some.",
    company: 'Harrell Home Services',
    trade: 'HVAC',
    img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop',
  },
];

// ── Component ─────────────────────────────────────────────────────────────────

interface Props {
  items?: TestimonialCard[];
  dark?: boolean;
}

export function TestimonialsStack({ items = allTestimonials, dark = false }: Props) {
  const [active, setActive] = useState(0);
  const len = items.length;

  const prev = () => setActive((a) => (a - 1 + len) % len);
  const next = () => setActive((a) => (a + 1) % len);

  // Returns -1 (prev), 0 (active), 1 (next), or null (hidden)
  const getOffset = (i: number): -1 | 0 | 1 | null => {
    const diff = ((i - active) % len + len) % len;
    if (diff === 0) return 0;
    if (diff === 1) return 1;
    if (diff === len - 1) return -1;
    return null;
  };

  return (
    <section className={`py-24 relative overflow-hidden border-t border-border/30 ${dark ? 'bg-foreground' : 'bg-background'}`}>

      {/* Heading */}
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
            From Our Partners
            <span className="w-8 h-px bg-primary" />
          </p>
          <h2 className={`font-heading text-4xl md:text-5xl uppercase leading-none ${dark ? 'text-background' : 'text-foreground'}`}>
            Heard From{' '}
            <AnimatedGradientText>The Field</AnimatedGradientText>
          </h2>
          <p className="text-lg font-script text-primary mt-4 max-w-md mx-auto">
            Real results from real trades businesses.
          </p>
        </motion.div>
      </div>

      {/* Carousel */}
      <div
        className="relative w-full"
        style={{ height: 420, perspective: '1800px', perspectiveOrigin: '50% 50%' }}
      >
        {/* Soft glow behind center */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[380px] rounded-full bg-primary/10 blur-[90px] pointer-events-none" />

        {items.map((item, i) => {
          const offset = getOffset(i);
          if (offset === null) return null;

          const isActive = offset === 0;

          return (
            <motion.div
              key={item.id}
              onClick={() => !isActive && setActive(i)}
              animate={{
                x: offset * 480,
                rotateY: offset * -18,
                scale: isActive ? 1 : 0.82,
                opacity: isActive ? 1 : 0.65,
              }}
              transition={{ type: 'spring', stiffness: 280, damping: 30 }}
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                marginLeft: -260,
                marginTop: -175,
                width: 520,
                height: 350,
                transformStyle: 'preserve-3d',
                zIndex: isActive ? 10 : 5,
                cursor: isActive ? 'default' : 'pointer',
                boxShadow: isActive
                  ? '0 25px 50px -12px rgba(0,0,0,0.5), 0 0 40px rgba(254,101,42,0.55), 0 0 0 1px rgba(254,101,42,0.7)'
                  : '0 10px 30px rgba(0,0,0,0.3), 0 0 18px rgba(254,101,42,0.25), 0 0 0 1px rgba(254,101,42,0.35)',
              }}
              className="overflow-hidden rounded-xl"
            >
              {/* Background image */}
              {item.img && (
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  draggable={false}
                />
              )}

              {/* Overlays */}
              <div className="absolute inset-0 bg-black/70" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

              {/* Trade badge — top right */}
              <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest bg-black/50 text-white/90 px-2 py-1">
                {item.trade}
              </span>

              {/* Quote */}
              <div className="absolute inset-0 flex items-center justify-center px-8">
                <p className={`text-white leading-relaxed text-center font-bold transition-all duration-300 ${isActive ? 'text-base opacity-90' : 'text-xs opacity-0'}`}>
                  "{item.description}"
                </p>
              </div>

              {/* Name + company */}
              <div className="absolute bottom-0 left-0 right-0 px-6 pb-5">
                <h3 className="font-heading text-xl uppercase text-white leading-none">{item.title}</h3>
                <p className="text-[#FE652A] text-xs mt-1 uppercase tracking-wider font-semibold">{item.company}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation arrows */}
      <div className="flex items-center justify-center gap-5 mt-8">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="w-10 h-10 border border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          aria-label="Next testimonial"
          className="w-10 h-10 border border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

    </section>
  );
}
