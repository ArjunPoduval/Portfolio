export interface Experience {
  squad: string;
  description: string;
  tags: string[];
  badge?: 'solo' | 'current';
}

export interface SkillGroup {
  category: string;
  icon: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}
