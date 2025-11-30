export interface Experience {
  id: string;
  period: string;
  role: string;
  company: string;
  description?: string;
}

export interface Education {
  id: string;
  period: string;
  school: string;
  degree: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface Skill {
  name: string;
  type: 'design' | 'software';
}