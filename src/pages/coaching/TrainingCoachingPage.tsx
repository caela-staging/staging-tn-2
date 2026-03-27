import { GraduationCap } from 'lucide-react';
import { CoachingSubPage, CoachingSubPageData } from './CoachingSubPage';

const data: CoachingSubPageData = {
  slug: 'training',
  category: 'Training Coaching',
  heroHeadline: ['Training', 'Coaching'],
  heroTagline: 'Build a team that knows what to do — and does it without being told.',
  heroImg: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop',
  metaDescription: 'True North training coaching helps home service companies build onboarding programs, develop in-house trainers, and create consistent training systems that reduce turnover and improve team performance.',
  introTitle: 'Stop Training the Same Things Over and Over.',
  introBody: [
    'The fastest-growing home service companies have one thing in common: they\'ve built systems that train people once and retain them long-term. Most companies without a real training program find themselves stuck in a cycle — constantly onboarding, constantly correcting the same mistakes, losing people before they reach full productivity.',
    'True North training coaching helps you build the internal training infrastructure your company needs to grow without chaos. We work with owners, managers, and your best internal talent to design onboarding tracks, role-specific training programs, and the coaching cultures that make learning part of how your team operates every day.',
    'Whether you\'re building your first training manual or trying to scale a program across multiple locations, we bring the structure and expertise that turns institutional knowledge into a teachable, repeatable system.',
  ],
  introImg: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop',
  introImgAlt: 'Team training session in a home service company',
  whatWeCover: [
    'New hire onboarding: first 30/60/90 day training tracks',
    'Role-specific training for CSRs, technicians, and dispatchers',
    'Building internal trainer programs — train your best people to teach',
    'Creating training materials: manuals, videos, and digital SOPs',
    'Call monitoring and in-field ride-along coaching frameworks',
    'Competency assessments and skills gap analysis',
    'Learning management system (LMS) setup and content strategy',
    'Leadership development training for managers and team leads',
    'Reducing turnover through structured career path development',
    'Multi-location training consistency and quality control',
  ],
  coaches: [
    {
      name: 'McKena Harless',
      role: 'Founder & Training Systems Coach',
      bio: [
        'McKena has built training programs from the ground up inside home service companies at every stage of growth. She understands the gap between what owners know and what their teams actually know — and how to close it systematically.',
        'Her training methodology is scalable and designed to create self-sustaining learning cultures that don\'t depend on the owner being in the room. When McKena is done, your best people know how to teach the next generation — and the whole operation gets sharper over time.',
      ],
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
    },
    {
      name: 'Tanya Morrison',
      role: 'Onboarding & Retention Specialist',
      bio: [
        'Tanya spent a decade developing training infrastructure for multi-location service companies. Her background spans LMS implementation, train-the-trainer programs, and the behavioral psychology of how adults learn in high-pressure field environments.',
        'She\'s helped companies cut early-tenure turnover in half by building onboarding experiences that set people up to succeed from day one — instead of throwing them into the deep end. Tanya\'s systems turn chaotic new-hire experiences into structured, confidence-building progressions.',
      ],
      img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1974&auto=format&fit=crop',
    },
  ],
  ctaHeadline: 'Ready to Build a Team That Trains Itself?',
  ctaBody: 'Your best knowledge shouldn\'t live in your head. Let\'s build the training infrastructure that lets your company grow without depending on you.',
  icon: GraduationCap,
};

export function TrainingCoachingPage() {
  return <CoachingSubPage data={data} />;
}
