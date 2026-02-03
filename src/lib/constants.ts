import type { Project, TechStack, SocialLink, NavItem } from "@/types";

export const PERSONAL_INFO = {
  name: "Coinangel",
  title: "Frontend Developer",
  email: "coinangel@example.com",
  bio: "사용자 경험을 최우선으로 생각하는 프론트엔드 개발자입니다. 모던 웹 기술과 세련된 인터랙션으로 기억에 남는 디지털 경험을 만들어갑니다.",
  shortBio: "Building memorable digital experiences with modern web technologies.",
};

export const NAV_ITEMS: NavItem[] = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/coinangel",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/coinangel",
    icon: "linkedin",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/coinangel",
    icon: "twitter",
  },
];

export const TECH_STACK: TechStack[] = [
  { name: "React", icon: "react", category: "frontend" },
  { name: "Next.js", icon: "nextjs", category: "frontend" },
  { name: "TypeScript", icon: "typescript", category: "frontend" },
  { name: "Tailwind CSS", icon: "tailwind", category: "frontend" },
  { name: "JavaScript", icon: "javascript", category: "frontend" },
  { name: "HTML5", icon: "html", category: "frontend" },
  { name: "CSS3", icon: "css", category: "frontend" },
  { name: "Node.js", icon: "nodejs", category: "backend" },
  { name: "Git", icon: "git", category: "tools" },
  { name: "Figma", icon: "figma", category: "design" },
  { name: "Vercel", icon: "vercel", category: "tools" },
  { name: "VS Code", icon: "vscode", category: "tools" },
];

export const PROJECTS: Project[] = [
  {
    id: "project-1",
    title: "E-Commerce Platform",
    description:
      "Next.js와 Stripe를 활용한 현대적인 이커머스 플랫폼. 서버 컴포넌트와 스트리밍 SSR로 최적화된 성능을 제공합니다.",
    image: "/images/projects/ecommerce.jpg",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    category: "web",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/coinangel/ecommerce",
    featured: true,
  },
  {
    id: "project-2",
    title: "Task Management App",
    description:
      "드래그앤드롭 칸반 보드와 실시간 협업 기능을 갖춘 태스크 관리 애플리케이션. WebSocket 기반 실시간 동기화.",
    image: "/images/projects/taskapp.jpg",
    tags: ["React", "DnD-kit", "Supabase", "Framer Motion"],
    category: "web",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/coinangel/taskapp",
    featured: true,
  },
  {
    id: "project-3",
    title: "Weather Dashboard",
    description:
      "실시간 날씨 데이터와 7일 예보를 제공하는 대시보드. 아름다운 데이터 시각화와 위치 기반 서비스.",
    image: "/images/projects/weather.jpg",
    tags: ["React", "Chart.js", "OpenWeather API", "Geolocation"],
    category: "web",
    githubUrl: "https://github.com/coinangel/weather",
  },
  {
    id: "project-4",
    title: "Mobile Fitness App",
    description:
      "React Native로 개발한 피트니스 트래킹 앱. 운동 기록, 통계 분석, 목표 설정 기능 제공.",
    image: "/images/projects/fitness.jpg",
    tags: ["React Native", "Expo", "Firebase", "Redux"],
    category: "mobile",
    githubUrl: "https://github.com/coinangel/fitness",
  },
];
