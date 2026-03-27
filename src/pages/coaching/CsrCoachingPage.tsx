import { Phone } from 'lucide-react';
import { CoachingSubPage, CoachingSubPageData } from './CoachingSubPage';

const data: CoachingSubPageData = {
  slug: 'csr',
  category: 'CSR Coaching',
  heroHeadline: ['CSR', 'Coaching'],
  heroTagline: 'Turn every inbound call into a booked job — and a loyal customer.',
  heroImg: 'https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=2073&auto=format&fit=crop',
  metaDescription: 'True North CSR coaching helps home service companies boost call booking rates, improve customer experience, and convert more inbound calls into scheduled jobs.',
  introTitle: 'Your Phones Are Your Front Line. Are They Performing?',
  introBody: [
    'Most home service companies spend thousands on marketing to make the phone ring — then lose 30–50% of those calls to poor booking performance. A CSR who doesn\'t convert isn\'t just losing a job; they\'re burning your entire advertising budget one unanswered objection at a time.',
    'True North CSR coaching is built specifically for the home service industry. We train your customer service team on real call scenarios, proven scripts, and the soft skills that turn a hesitant caller into a booked appointment. Our coaches have been on the phones themselves — they know exactly where calls break down and how to fix it.',
    'Whether you\'re onboarding new CSRs or sharpening a seasoned team, we build a coaching program around your call data, your market, and your goals.',
  ],
  introImg: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop',
  introImgAlt: 'Customer service representative on a call',
  whatWeCover: [
    'Inbound call handling: greeting, tone, pace, and professionalism',
    'Booking scripts tailored to your trade and market',
    'Overcoming price objections and caller hesitation',
    'Upselling service agreements on every booking call',
    'Outbound follow-up calls and reschedule recovery',
    'Live call monitoring and real-time coaching feedback',
    'CSR performance metrics: booking rate, average handle time, cancellation rate',
    'Onboarding frameworks for new CSRs to get up to speed fast',
    'Empathy and emotional intelligence training for difficult callers',
    'Dispatch communication and internal handoff procedures',
  ],
  coaches: [
    {
      name: 'McKena Harless',
      role: 'Founder & Lead CSR Coach',
      bio: [
        'McKena built her reputation coaching CSR teams inside real home service companies — not in a classroom. She\'s worked with operations ranging from single-truck startups to 50-person call centers, developing the call frameworks and training systems that consistently push booking rates above 80%.',
        'Her coaching style is direct, practical, and grounded in what actually happens when the phone rings. She doesn\'t teach theory — she builds the habits, scripts, and accountability structures that create lasting performance improvements in your team.',
      ],
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
    },
    {
      name: 'Sarah Calloway',
      role: 'CSR Trainer & Call Quality Specialist',
      bio: [
        'Sarah spent eight years managing customer service teams across HVAC and plumbing companies before joining True North. She specializes in call quality programs — building the scoring rubrics, listen-and-coach sessions, and accountability structures that turn average CSRs into consistent top performers.',
        'Her trainees consistently outperform industry benchmarks within 90 days. Sarah brings a calm, methodical approach to training that works for brand-new hires and seasoned reps alike — meeting each person where they are and building from there.',
      ],
      img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop',
      imgPosition: 'object-[center_60%]',
    },
  ],
  ctaHeadline: 'Ready to Stop Losing Calls You Already Paid For?',
  ctaBody: 'Every unanswered objection is revenue walking out the door. Let\'s build a CSR team that converts — consistently.',
  icon: Phone,
};

export function CsrCoachingPage() {
  return <CoachingSubPage data={data} />;
}
