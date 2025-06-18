export interface Skill {
  id: number;
  name: string;
  svgUrl: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  githubLink?: string;
  date: string;
  duration: string;
  category: string;
  featured: boolean;
  gradient: string;
}

export interface NavItem {
  label: string;
  href: string;
}