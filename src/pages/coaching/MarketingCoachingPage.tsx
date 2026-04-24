import { Megaphone, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { CoachingSubPage, CoachingSubPageData } from './CoachingSubPage';
import { AnimatedGradientText } from '@/components/AnimatedGradientText';
import { CompassButton } from '@/components/ui/compass-button';

const data: CoachingSubPageData = {
  slug: 'marketing',
  category: 'Marketing Coaching',
  heroHeadline: ['Marketing', 'Coaching'],
  heroTagline: 'Stop guessing at marketing. Start investing in what actually drives calls.',
  heroImg: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=2073&auto=format&fit=crop',
  metaDescription: 'True North marketing coaching helps home service companies build demand-generation strategies, optimize ad spend, and create brand consistency that drives consistent call volume year-round.',
  introTitle: <span>Make Your Marketing <AnimatedGradientText>Work.</AnimatedGradientText></span>,
  introBody: [
    'Most home service companies spend on marketing without a strategy — boosting posts, running ads with no tracking, and changing direction every quarter based on gut feel. The result is unpredictable call volume, wasted budget, and no clear picture of what\'s actually working.',
    'True North marketing coaching helps you build a demand-generation strategy grounded in data, aligned to your trade\'s seasonal demand cycles, and designed to fill your board — not just generate impressions.',
  ],
  introImg: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
  introImgAlt: 'Marketing strategy session for a home service company',
  whatWeCover: [],
  coaches: [
    {
      name: 'McKena Harless',
      role: 'Founder & Marketing Strategy Coach',
      bio: [
        'McKena has helped dozens of home service companies untangle their marketing spend and build demand-generation systems that actually work. Her approach starts with one question: what does a booked job cost you, and how do we lower that number?',
        'From there, she builds marketing strategies that are trade-specific, seasonally calibrated, and measurable — so you always know where your calls are coming from and what they\'re worth. No more guessing, no more agency dependency, no more wasted budget.',
      ],
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
    },
    {
      name: 'Rachel Torres',
      role: 'Digital Marketing & Brand Coach',
      bio: [
        'Rachel spent eight years managing digital marketing for home service brands before moving into coaching. She specializes in the full demand-generation stack — paid search, local SEO, reputation management, and the brand positioning that makes customers choose you over the competitor above you in the results.',
        'Her coaching is data-driven, jargon-free, and focused on the metrics that actually matter to a service business. Rachel makes marketing make sense — for owners who want to understand their numbers, not just hand them off and hope for the best.',
      ],
      img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1974&auto=format&fit=crop',
    },
  ],
  ctaHeadline: 'Ready to Make Every Marketing Dollar Count?',
  ctaBody: 'You shouldn\'t need a marketing degree to know if your campaigns are working. Let\'s build a strategy you understand, control, and can actually measure.',
  icon: Megaphone,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

function MarketingMissionSection() {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-6 md:px-12">

        {/* Text — top, left-aligned */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={stagger}
          viewport={{ once: true }}
          className="mb-10"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-background border border-border/50 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-primary" />
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary">
              Our Mission
            </p>
          </motion.div>

          <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-4xl uppercase text-foreground mb-4 leading-none">
            Increase <AnimatedGradientText>ROAS.</AnimatedGradientText>{' '}
            Lower <AnimatedGradientText>CAC.</AnimatedGradientText>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-foreground/70 leading-relaxed text-base mb-8">
            Return on ad spend and cost per acquisition are the north star of everything we do in marketing coaching. Most home service companies advertise without ever measuring either — True North changes that by building the systems and measurement frameworks that move these numbers in the right direction.
          </motion.p>

          <motion.div variants={fadeUp}>
            <CompassButton to="/connect">Book a Discovery Call</CompassButton>
          </motion.div>
        </motion.div>

        {/* Graph — full width below */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <span className="absolute -top-1 -left-1 w-6 h-6 border-t-[3px] border-l-[3px] border-primary z-20 pointer-events-none" />
          <span className="absolute -top-1 -right-1 w-6 h-6 border-t-[3px] border-r-[3px] border-primary z-20 pointer-events-none" />
          <span className="absolute -bottom-1 -left-1 w-6 h-6 border-b-[3px] border-l-[3px] border-primary z-20 pointer-events-none" />
          <span className="absolute -bottom-1 -right-1 w-6 h-6 border-b-[3px] border-r-[3px] border-primary z-20 pointer-events-none" />
          <img
            src="/Images/graph.png"
            alt="Chart showing how operational efficiency increases return on ad spend (ROAS) and lowers cost per acquisition (CAC) for home service companies"
            className="relative z-10 w-full h-auto"
          />
        </motion.div>

      </div>
    </section>
  );
}

export function MarketingCoachingPage() {
  return <CoachingSubPage data={data} whatWeCoverOverride={<MarketingMissionSection />} />;
}
