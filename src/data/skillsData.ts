import { ProfileType } from '../context/ProfileContext';

export interface Skill {
  name: string;
  category: string;
  profiles: ProfileType[];
}

export interface Language {
  name: string;
  flag: string;
  level: number;
}

export const skills: Skill[] = [
  // Programming Languages
  { name: "Python", category: "programming", profiles: ['data-engineering', 'pentesting', 'fullstack'] },
  { name: "JavaScript", category: "programming", profiles: ['fullstack', 'project-manager'] },
  { name: "PHP", category: "programming", profiles: ['fullstack'] },
  { name: "SQL", category: "programming", profiles: ['data-engineering', 'fullstack'] },
  { name: "R", category: "programming", profiles: ['data-engineering'] },
  { name: "HTML/CSS", category: "programming", profiles: ['fullstack'] },
  { name: "Bash/Shell", category: "programming", profiles: ['pentesting', 'data-engineering'] },
  
  // Frameworks & Libraries
  { name: "React", category: "frameworks", profiles: ['fullstack'] },
  { name: "Vue.js", category: "frameworks", profiles: ['fullstack'] },
  { name: "Laravel", category: "frameworks", profiles: ['fullstack'] },
  { name: "FastAPI", category: "frameworks", profiles: ['data-engineering', 'fullstack'] },
  { name: "PyTorch", category: "frameworks", profiles: ['data-engineering'] },
  { name: "TensorFlow", category: "frameworks", profiles: ['data-engineering'] },
  { name: "Bootstrap", category: "frameworks", profiles: ['fullstack'] },
  { name: "TailwindCSS", category: "frameworks", profiles: ['fullstack'] },
  
  // Data & Big Data
  { name: "Apache Spark", category: "data", profiles: ['data-engineering'] },
  { name: "Hadoop", category: "data", profiles: ['data-engineering'] },
  { name: "Airflow", category: "data", profiles: ['data-engineering'] },
  { name: "Kafka", category: "data", profiles: ['data-engineering'] },
  { name: "Redis", category: "data", profiles: ['data-engineering', 'fullstack'] },
  { name: "Firebase", category: "data", profiles: ['fullstack'] },
  { name: "PostgreSQL", category: "data", profiles: ['data-engineering', 'fullstack'] },
  { name: "MongoDB", category: "data", profiles: ['data-engineering', 'fullstack'] },
  { name: "MySQL", category: "data", profiles: ['fullstack'] },
  
  // AI & Data Science
  { name: "Machine Learning", category: "ai", profiles: ['data-engineering'] },
  { name: "Deep Learning", category: "ai", profiles: ['data-engineering'] },
  { name: "Computer Vision", category: "ai", profiles: ['data-engineering'] },
  { name: "NLP", category: "ai", profiles: ['data-engineering'] },
  { name: "XAI (Explainable AI)", category: "ai", profiles: ['data-engineering'] },
  { name: "Grad-CAM", category: "ai", profiles: ['data-engineering'] },
  { name: "ResNet", category: "ai", profiles: ['data-engineering'] },
  
  // Visualization & BI
  { name: "Tableau", category: "visualization", profiles: ['data-engineering', 'project-manager'] },
  { name: "Power BI", category: "visualization", profiles: ['data-engineering', 'project-manager'] },
  { name: "D3.js", category: "visualization", profiles: ['data-engineering', 'fullstack'] },
  { name: "Matplotlib", category: "visualization", profiles: ['data-engineering'] },
  { name: "Plotly", category: "visualization", profiles: ['data-engineering'] },
  
  // DevOps & Tools
  { name: "Docker", category: "devops", profiles: ['data-engineering', 'fullstack', 'pentesting'] },
  { name: "Kubernetes", category: "devops", profiles: ['data-engineering', 'fullstack'] },
  { name: "Git", category: "devops", profiles: ['data-engineering', 'fullstack', 'pentesting', 'project-manager'] },
  { name: "CI/CD", category: "devops", profiles: ['data-engineering', 'fullstack', 'project-manager'] },
  { name: "AWS", category: "devops", profiles: ['data-engineering', 'fullstack'] },
  { name: "Linux", category: "devops", profiles: ['data-engineering', 'pentesting', 'fullstack'] },
  
  // Security & Pentesting
  { name: "Penetration Testing", category: "security", profiles: ['pentesting'] },
  { name: "Kali Linux", category: "security", profiles: ['pentesting'] },
  { name: "Nmap", category: "security", profiles: ['pentesting'] },
  { name: "Metasploit", category: "security", profiles: ['pentesting'] },
  { name: "Burp Suite", category: "security", profiles: ['pentesting'] },
  { name: "OWASP", category: "security", profiles: ['pentesting', 'fullstack'] },
  { name: "Wireshark", category: "security", profiles: ['pentesting'] },
  { name: "Nikto", category: "security", profiles: ['pentesting'] },
  { name: "John the Ripper", category: "security", profiles: ['pentesting'] },
  
  // Project Management
  { name: "Agile/Scrum", category: "management", profiles: ['project-manager', 'fullstack'] },
  { name: "Jira", category: "management", profiles: ['project-manager', 'fullstack'] },
  { name: "Confluence", category: "management", profiles: ['project-manager'] },
  { name: "Trello", category: "management", profiles: ['project-manager'] },
  { name: "MS Project", category: "management", profiles: ['project-manager'] },
  { name: "Gantt Charts", category: "management", profiles: ['project-manager'] },
  { name: "Risk Management", category: "management", profiles: ['project-manager'] },
  
  // CMS & Others
  { name: "WordPress", category: "cms", profiles: ['fullstack'] },
  { name: "Elementor", category: "cms", profiles: ['fullstack'] },
  { name: "Drupal", category: "cms", profiles: ['fullstack'] },
  { name: "Celery", category: "tools", profiles: ['data-engineering', 'fullstack'] },
  { name: "Vite", category: "tools", profiles: ['fullstack'] },
  { name: "Cornerstone.js", category: "tools", profiles: ['data-engineering'] },
];

export const languages: Language[] = [
  { name: "Français", flag: "🇫🇷", level: 100 },
  { name: "Anglais", flag: "🇬🇧", level: 85 },
  { name: "Arabe", flag: "🇲🇦", level: 95 },
];

export const categoryNames = {
  programming: "Langages de programmation",
  frameworks: "Frameworks & Libraries",
  data: "Technologies Big Data",
  ai: "IA & Data Science",
  visualization: "Visualisation & BI",
  devops: "DevOps & Cloud",
  security: "Cybersécurité & Pentesting",
  management: "Gestion de Projet",
  cms: "CMS & Web",
  tools: "Outils spécialisés"
};