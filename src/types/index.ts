export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: "web" | "mobile" | "other";
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface TechStack {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "tools" | "design";
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavItem {
  name: string;
  href: string;
}
