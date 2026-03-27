import { motion } from 'motion/react';
import { CardStack, CardStackItem } from '@/components/ui/card-stack';
import { AnimatedGradientText } from '@/components/AnimatedGradientText';

// ── Shared testimonial pool ───────────────────────────────────────────────────

export interface TestimonialCard extends CardStackItem {
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
    title: 'McKena changed how I lead.',
    description: "I came in thinking I had a revenue problem. Turns out I had a systems problem. True North fixed it — and then some.",
    company: 'Harrell Home Services',
    trade: 'HVAC',
    img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop',
  },
];

// ── Custom testimonial card renderer ─────────────────────────────────────────

function TestimonialCard({ item, active }: { item: TestimonialCard; active: boolean }) {
  return (
    <div
      className="relative h-full w-full flex flex-col justify-between p-8 md:p-10 overflow-hidden"
      style={{ opacity: active ? 1 : 0.85 }}
    >
      {/* Background photo */}
      {item.img && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${item.img})` }}
        />
      )}
      {/* Dark overlay so text is always readable */}
      <div className="absolute inset-0 bg-[#1a1919]/75" />
      {/* Orange gradient tint at top */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-primary/20 to-transparent" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-80" />

      {/* Quote mark */}
      <div className="font-heading text-7xl text-primary/30 leading-none select-none absolute top-4 right-8 z-10">"</div>

      {/* Quote */}
      <blockquote className="font-heading text-xl md:text-2xl uppercase text-white leading-snug relative z-10 pr-8">
        {item.description}
      </blockquote>

      {/* Attribution */}
      <div className="flex items-end justify-between mt-6 relative z-10">
        <div>
          <p className="text-primary font-semibold uppercase tracking-widest text-xs">
            — {item.title}
          </p>
          <p className="text-white/75 text-xs uppercase tracking-wider mt-0.5">
            {item.company}
          </p>
        </div>
        <span className="text-xs font-bold uppercase tracking-widest text-white/90 border border-white/30 px-2 py-1">
          {item.trade}
        </span>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-primary/30" />
    </div>
  );
}

// ── Section wrapper ───────────────────────────────────────────────────────────

interface Props {
  /** Subset of testimonials to show — defaults to all */
  items?: TestimonialCard[];
  /** Dark background variant (for use on light sections) — default false */
  dark?: boolean;
}

export function TestimonialsStack({ items = allTestimonials, dark = false }: Props) {
  return (
    <section className={`py-24 relative overflow-hidden border-t border-border/30 ${dark ? 'bg-foreground' : 'bg-background'}`}>
      {/* Subtle background word */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-heading leading-none pointer-events-none select-none whitespace-nowrap"
        style={{ color: dark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.025)' }}
      >
        RESULTS
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className={`text-xs font-bold uppercase tracking-widest mb-4 flex items-center justify-center gap-3 ${dark ? 'text-primary' : 'text-primary'}`}>
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

        {/* Card Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <CardStack
            items={items}
            cardWidth={560}
            cardHeight={280}
            overlap={0.42}
            spreadDeg={44}
            autoAdvance
            intervalMs={3500}
            pauseOnHover
            showDots
            loop
            renderCard={(item, { active }) => (
              <TestimonialCard item={item as TestimonialCard} active={active} />
            )}
          />
        </motion.div>
      </div>
    </section>
  );
}
