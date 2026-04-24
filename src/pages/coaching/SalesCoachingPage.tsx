import { TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { CoachingSubPage, CoachingSubPageData } from './CoachingSubPage';
import { AnimatedGradientText } from '@/components/AnimatedGradientText';
import { CompassButton } from '@/components/ui/compass-button';

const data: CoachingSubPageData = {
  slug: 'sales',
  category: 'Sales Coaching',
  heroHeadline: ['Sales', 'Coaching'],
  heroTagline: 'Close more jobs. Raise your tickets. Build a team that sells with confidence.',
  heroImg: 'https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=2070&auto=format&fit=crop',
  metaDescription: 'True North sales coaching trains home service technicians and comfort advisors to present options confidently, overcome objections, and close higher-ticket jobs — without pressure tactics.',
  introTitle: 'Your Technicians Are Your Best Salespeople. Are They Trained Like It?',
  introBody: [
    'In home service, every job is a sales opportunity. A technician who only does what they\'re dispatched to do and leaves is costing your company real money — not because they\'re bad at their work, but because nobody ever taught them how to present options, build trust, and let the customer make an informed decision.',
    'True North sales coaching teaches your techs and comfort advisors the skills that lead to higher average tickets, more agreements sold, and better customer satisfaction — all without pressure tactics or scripts that feel fake. We build real sales ability based on honest conversation, complete option presentation, and genuine confidence.',
    'We also work with your leadership team on the sales management side: tracking close rates, reviewing calls, and building the culture of accountability that keeps performance high long after the coaching ends.',
  ],
  introImg: 'https://images.unsplash.com/photo-1551135049-8a33b5883817?q=80&w=2070&auto=format&fit=crop',
  introImgAlt: 'Technician presenting options to a homeowner',
  whatWeCover: [],
  coaches: [
    {
      name: 'McKena Harless',
      role: 'Founder & Lead Sales Coach',
      bio: [
        'McKena has coached hundreds of technicians and comfort advisors across the home service industry. Her approach to sales training is centered on one idea: you don\'t have to be a "salesperson" to sell well. The most effective technician-salespeople are the ones who genuinely help customers make the right decision.',
        'McKena\'s training builds exactly that kind of confident, ethical selling — rooted in honesty, complete options presentation, and the trust that comes from being straightforward with a homeowner. Her techs don\'t feel like they\'re selling. Their customers don\'t feel sold to.',
      ],
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
    },
    {
      name: 'David Chen',
      role: 'In-Field Sales & Technician Coach',
      bio: [
        'David brings a rare combination to sales coaching: he\'s been a top-performing technician, a sales manager, and a trainer. He knows what it feels like to be in a crawl space and then have to transition into a kitchen table conversation with a homeowner.',
        'His coaching is practical, non-intimidating, and built around the real scenarios your techs face every day — because he\'s been there himself. David\'s ride-along sessions are where the biggest breakthroughs happen, turning reluctant techs into confident, high-performing salespeople.',
      ],
      img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1974&auto=format&fit=crop',
    },
  ],
  ctaHeadline: 'Ready to Raise Your Average Ticket?',
  ctaBody: 'Better sales training doesn\'t just increase revenue — it improves customer satisfaction and builds a team your business can depend on. Let\'s talk.',
  icon: TrendingUp,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

function SalesWhatWeCoverSection() {
  return (
    <section className="py-24 bg-card border-t border-border/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text — left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={stagger}
            viewport={{ once: true }}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-background border border-border/50 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary">
                What We Cover
              </p>
            </motion.div>

            <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl uppercase text-foreground mb-8 leading-none">
              Raise Your <AnimatedGradientText>Average Ticket.</AnimatedGradientText>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-foreground/80 leading-relaxed text-lg mb-6">
              Sales coaching at True North starts with the moment a technician walks into a home. We build the skills your team needs to present options honestly, handle objections without pressure, and close higher-ticket jobs — all while delivering an exceptional customer experience.
            </motion.p>

            <motion.p variants={fadeUp} className="text-foreground/80 leading-relaxed text-lg mb-6">
              From good-better-best presentations and service agreement sales to ride-along coaching and close rate tracking — every session is designed to move the numbers that matter most to your business.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-4">
              <CompassButton to="/connect">Book a Discovery Call</CompassButton>
            </motion.div>
          </motion.div>

          {/* Photo — right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <span className="absolute -top-1 -left-1 w-6 h-6 border-t-[3px] border-l-[3px] border-primary z-20 pointer-events-none" />
            <span className="absolute -top-1 -right-1 w-6 h-6 border-t-[3px] border-r-[3px] border-primary z-20 pointer-events-none" />
            <span className="absolute -bottom-1 -left-1 w-6 h-6 border-b-[3px] border-l-[3px] border-primary z-20 pointer-events-none" />
            <span className="absolute -bottom-1 -right-1 w-6 h-6 border-b-[3px] border-r-[3px] border-primary z-20 pointer-events-none" />
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop"
              alt="Sales coaching for home service technicians"
              className="relative z-10 w-full aspect-[4/3] object-cover"
              style={{ marginTop: '15px', marginBottom: '15px' }}
              referrerPolicy="no-referrer"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export function SalesCoachingPage() {
  return <CoachingSubPage data={data} whatWeCoverOverride={<SalesWhatWeCoverSection />} />;
}
