import { Settings } from 'lucide-react';
import { motion } from 'motion/react';
import { CoachingSubPage, CoachingSubPageData } from './CoachingSubPage';
import { AnimatedGradientText } from '@/components/AnimatedGradientText';
import { CompassButton } from '@/components/ui/compass-button';

const data: CoachingSubPageData = {
  slug: 'operations',
  category: 'Operations Coaching',
  heroHeadline: ['Operations', 'Coaching'],
  heroTagline: 'Build systems that run without you — and a team that can execute them.',
  heroImg: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
  metaDescription: 'True North operations coaching helps home service companies build the SOPs, dispatch systems, and management structures that create consistent performance and sustainable growth.',
  introTitle: 'A Business That Runs on Systems — Not Just You.',
  introBody: [
    'Most home service owners are the best operator in their company — and that\'s the problem. When every decision runs through you, your business can\'t scale. Growth stalls, burnout sets in, and you\'re stuck fixing things instead of building them.',
    'True North operations coaching helps you build the systems, processes, and team structures that let your business run at a high level — whether you\'re in the office or not. From dispatch efficiency to job costing to management accountability, we build the operational foundation that turns a busy company into a scalable one.',
    'We work directly with owners and operations managers to document workflows, establish KPIs, and implement the accountability structures that keep your team performing consistently — without you having to micromanage every detail.',
  ],
  introImg: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
  introImgAlt: 'Operations manager reviewing workflow systems',
  whatWeCover: [],
  coaches: [
    {
      name: 'McKena Harless',
      role: 'Founder & Operations Strategy Coach',
      bio: [
        'McKena built her coaching practice on one core belief: a great home service company is an engineering problem, not just a people problem. Systems create consistency, and consistency creates profit. Her operations coaching is built on that foundation.',
        'She has helped dozens of trades companies untangle chaotic operations, reduce cost-per-job, and build the management infrastructure that lets owners step back from the day-to-day without everything falling apart.',
      ],
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
    },
    {
      name: 'James Whitfield',
      role: 'Field Operations & Systems Coach',
      bio: [
        'James spent fifteen years in field operations for one of the largest HVAC service companies in the Southwest before moving into coaching. He\'s dispatched thousands of calls, managed fleets, and built the back-office systems that made a chaotic operation predictable.',
        'His coaching is grounded in what actually works at the field level — not theory. James helps operations managers and service coordinators build repeatable systems that protect margin, reduce callbacks, and make your best practices the standard.',
      ],
      img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop',
    },
  ],
  ctaHeadline: 'Ready to Build a Business That Runs Without You?',
  ctaBody: 'The best time to build systems is before you need them. Let\'s map out what\'s missing in your operation and build the infrastructure for real, scalable growth.',
  icon: Settings,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

function OperationsWhatWeCoverSection() {
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
                <Settings className="w-6 h-6 text-primary" />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary">
                What We Cover
              </p>
            </motion.div>

            <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl uppercase text-foreground mb-8 leading-none">
              Build Systems. <AnimatedGradientText>Scale Confidently.</AnimatedGradientText>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-foreground/80 leading-relaxed text-lg mb-6">
              Operations coaching at True North starts with the foundation every scaling company needs: clear SOPs, smart dispatch logic, and a management structure that holds your team accountable — without you in the middle of every decision.
            </motion.p>

            <motion.p variants={fadeUp} className="text-foreground/80 leading-relaxed text-lg mb-6">
              From job costing and gross margin analysis to tech stack optimization and KPI dashboards — we build the operational infrastructure that turns a chaotic company into a predictable, profitable one.
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
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
              alt="Operations team building systems for a home service company"
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

export function OperationsCoachingPage() {
  return <CoachingSubPage data={data} whatWeCoverOverride={<OperationsWhatWeCoverSection />} />;
}
