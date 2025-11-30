import { Experience, Education, Project, Skill } from './types';

export const NAV_CATEGORIES = [
  "UI DESIGN",
  "ILLUSTRATION",
  "SOCIAL MEDIA",
  "MOTION DESIGN",
  "3D",
  "GAME DESIGN",
  "GRAPHIC DESIGN",
  "INTERACTIVE DESIGN"
];

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    period: 'Sept 2023 - Present',
    role: 'FREELANCE',
    company: 'Upian, Brave Paris, Lacoste, Shay',
    description: 'Art Direction, Motion Design, and UI projects for various high-profile clients.'
  },
  {
    id: '2',
    period: 'Jan 2023 - Aug 2023',
    role: 'MOTION DESIGNER',
    company: 'Lacoste S.A.',
    description: 'In-store experience design and motion graphics.'
  },
  {
    id: '3',
    period: 'Sept 2021 - Dec 2022',
    role: 'UI DESIGNER - ILLUSTRATOR',
    company: 'Spintank',
    description: 'Digital communication and interface design.'
  },
  {
    id: '4',
    period: 'June 2020 - Sept 2020',
    role: 'MOTION DESIGNER',
    company: 'Baracuda',
    description: 'Video editing and motion graphics.'
  }
];

export const EDUCATION: Education[] = [
  {
    id: '1',
    period: '2021 - 2023',
    school: 'GOBELINS Paris (75020)',
    degree: 'Expertise in Interactive Digital Creation, Lead Creative'
  },
  {
    id: '2',
    period: '2018 - 2021',
    school: 'ESAIG Estienne (75013)',
    degree: 'DNMADE Digital Specialization, Motion Option'
  }
];

export const SKILLS: Skill[] = [
  { name: 'DIGITAL ILLUSTRATION', type: 'design' },
  { name: 'BLENDER', type: 'software' },
  { name: 'STORYBOARD', type: 'design' },
  { name: 'ADOBE SUITE', type: 'software' },
  { name: 'FIGMA', type: 'software' },
  { name: 'ANIMATION', type: 'design' },
];

export const PROJECTS: Project[] = [
  { id: '1', title: 'Psy Apo', category: 'Animation', imageUrl: 'https://picsum.photos/400/300?random=1' },
  { id: '2', title: 'Night Walk', category: 'Illustration', imageUrl: 'https://picsum.photos/400/300?random=2' },
  { id: '3', title: 'Color Blast', category: 'Motion', imageUrl: 'https://picsum.photos/400/300?random=3' },
  { id: '4', title: 'Urban Flow', category: 'UI Design', imageUrl: 'https://picsum.photos/400/300?random=4' },
  { id: '5', title: 'Character Study', category: 'Concept Art', imageUrl: 'https://picsum.photos/400/300?random=5' },
  { id: '6', title: 'Brand ID', category: 'Branding', imageUrl: 'https://picsum.photos/400/300?random=6' },
];