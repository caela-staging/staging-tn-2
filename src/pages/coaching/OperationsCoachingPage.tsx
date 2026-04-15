import { Settings } from 'lucide-react';
import { CoachingSubPage, CoachingSubPageData } from './CoachingSubPage';

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
  whatWeCover: [
    'Standard operating procedures (SOPs) for every key role and process',
    'Dispatch efficiency: scheduling logic, call-to-truck ratios, and capacity planning',
    'Job costing and gross margin analysis by trade and service type',
    'Management structure: roles, accountability, and performance reviews',
    'Tech stack review: ServiceTitan, Housecall Pro, and field software optimization',
    'On-call and after-hours systems that don\'t burn your team out',
    'Inventory and parts management for service and install departments',
    'Fleet and vehicle management standards',
    'Hiring and onboarding frameworks built for the trades',
    'KPI dashboards for operations managers and service coordinators',
  ],
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

export function OperationsCoachingPage() {
  return <CoachingSubPage data={data} />;
}
