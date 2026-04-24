import { Droplets } from 'lucide-react';
import { TradePage, TradePageData } from '../TradePage';

const data: TradePageData = {
  trade: 'Plumbing',
  slug: 'plumbing',
  tagline: 'Coaching built for plumbers who are ready to stop trading time for money.',
  heroHeadline: ['Plumbing', 'Coaching'],
  heroImg: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop',
  icon: Droplets,
  overviewTitle: 'Are You Capturing Plumbing\'s Full Potential?',
  overviewImg: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=2069&auto=format&fit=crop',
  overviewBody: [
    'Plumbing companies have a unique advantage: high urgency, high trust, and recurring opportunity. When a pipe bursts or a water heater fails, homeowners call fast and buy now. The businesses that win in plumbing aren\'t just skilled with a wrench — they\'re skilled at converting that urgency into long-term relationships.',
    'True North coaches plumbing companies to capture the full value of every call — from the first booking through drain maintenance agreements and repiping referrals. We know the metrics that drive plumbing profitability and we hold you to them.',
  ],
  steps: [
    {
      number: '01',
      title: 'Revenue Audit',
      body: 'We start by analyzing your current booking rates, average ticket, close rates, and service mix to find your highest-impact opportunities.',
    },
    {
      number: '02',
      title: 'Plumbing-Specific Plan',
      body: 'We build a coaching plan aligned to your revenue mix — emergency service, drain cleaning, water heaters, repiping — with clear targets for each category.',
    },
    {
      number: '03',
      title: 'Consistent Coaching',
      body: 'Regular sessions with your team, live call reviews, and technician training keep momentum building and results compounding over time.',
    },
  ],
  before: [
    'High-urgency calls converting at low rates because of poor CSR scripts',
    'Technicians only fixing what\'s asked without presenting additional findings',
    'No maintenance agreement program creating repeat business',
    'Dispatch inefficiency causing missed calls and unhappy customers',
    'Owner handling too many jobs personally, limiting growth',
    'Inconsistent pricing leading to low average tickets',
  ],
  after: [
    'CSRs converting urgent calls at industry-leading rates',
    'Technicians presenting full diagnostic findings with confidence',
    'Active drain and plumbing maintenance agreement program',
    'Streamlined dispatch that maximizes daily revenue per truck',
    'Owner freed from the field to focus on growth and leadership',
    'Consistent flat-rate pricing driving higher average ticket',
  ],
  benefitsTitle: 'What Plumbing Coaching Covers',
  benefitsBody:
    'Plumbing has some of the highest revenue-per-call potential of any home service trade. Our coaching is designed to help you capture that potential consistently — not just on the best days, but every day.',
  benefits: [
    'CSR scripts designed for high-urgency emergency plumbing calls',
    'Technician training on presenting full diagnostic findings and options',
    'Flat-rate pricing strategy and menu presentation coaching',
    'Drain maintenance agreement program design and sales training',
    'Water heater and repiping sales process development',
    'Dispatch and call capacity optimization',
    'Hiring and onboarding systems for licensed plumbers',
    'Financial benchmarking against top-performing plumbing companies',
  ],
  pitchSection: {
    heading1: 'The Plumbing Business You Knew You Could',
    heading1Highlight: 'Build',
    body1: "We work with plumbing business owners who are past the startup hustle — and ready to build something that lasts. Whether you're hovering at $2M or pushing toward $8M, we help you create the structure, strategy, and support to get there. You're not here for fluff. Neither are we.",
    listHeading1: "We've helped plumbing companies:",
    list1: [
      'Double their average ticket by fixing pricing, packaging, and in-home presentation',
      'Build drain maintenance agreement programs that drive predictable recurring revenue',
      'Implement systems that get the owner out of the truck and into the business',
      'Create hiring pipelines that attract licensed plumbers in a tight labor market',
      'Hit 80%+ CSR booking rates from calls that used to convert at half that',
    ],
    heading2: 'What the Clarity Call Is',
    heading2Highlight: '(And Why You Want One)',
    body2: "Not a sales call. It's a real conversation with the sharpest coaching braintrust in the trades. We've worked with hundreds of plumbing companies. Our team can spot operational breakdowns, financial blind spots, and sales leaks from a mile away. Within 30 minutes, we'll help you identify your biggest change-making lever — the one move that starts to shift everything.",
    listHeading2: "You'll walk away with:",
    list2: [
      "A sharper understanding of what's holding you back",
      'A fresh perspective on how to lead your business forward',
      'Specific, grounded next steps you can act on immediately',
    ],
    closingLine: 'Your "aha" moment is waiting. Book your call.',
    sidebarHeadline: 'Book a Discovery Call',
    sidebarBody: "This is a real conversation — not a pitch. You'll work directly with one of our senior plumbing coaches to map out exactly where your business is leaking revenue, time, and momentum. In 30 minutes, you'll leave with a clearer picture of your biggest lever and a plan to pull it. No pressure. No fluff. Just clarity.",
    sidebarCtaLabel: 'Book Your Discovery Call',
  },
  coaches: [
    {
      name: 'McKena Harless',
      role: 'Founder & Lead Coach',
      bio: 'McKena has spent over a decade coaching home service companies across every major trade. Her work with plumbing companies focuses on building the systems and leadership structures that allow owners to scale beyond their own labor — turning skilled trades businesses into real companies with real teams and real margins.',
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
    },
    {
      name: 'Sarah Jenkins',
      role: 'CSR & Customer Experience Coach',
      bio: 'Sarah has coached CSR teams across dozens of plumbing companies, with a focus on converting high-urgency inbound calls at rates that dramatically improve overall revenue. She specializes in building CSR training programs, call scripting, and performance management systems that stick.',
      img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop',
    },
  ],
  ctaHeadline: 'Your Next Level Is One Conversation Away',
  ctaBody:
    'The plumbing industry rewards the businesses that are best organized, not just best at the craft. Let\'s build the structure that turns your skills into a scalable company.',
};

export function PlumbingPage() {
  return <TradePage data={data} />;
}
