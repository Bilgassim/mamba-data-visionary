import { ProfileType } from '../context/ProfileContext';

export interface Certification {
  id: number;
  name: string;
  logo: string;
  issuer: string;
  date: string;
  content: string;
  profiles: ProfileType[];
}

export const certifications: Certification[] = [
  {
    id: 1,
    name: "L'essentiel d'Amazon Web Services",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    issuer: "LinkedIn Learning",
    date: "août 2025",
    content: "Cloud Computing et services AWS fondamentaux",
    profiles: ['data-engineering', 'fullstack']
  },
  {
    id: 2,
    name: "Gérer des plannings de projet",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    issuer: "LinkedIn Learning",
    date: "juil. 2025",
    content: "Méthodes et outils pour planification et suivi de projet",
    profiles: ['project-manager']
  },
  {
    id: 3,
    name: "L'essentiel de TypeScript",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    issuer: "LinkedIn Learning",
    date: "juil. 2025",
    content: "Bases de TypeScript, typage, interfaces et tooling",
    profiles: ['fullstack']
  },
  {
    id: 4,
    name: "L'essentiel de Power BI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    issuer: "LinkedIn Learning",
    date: "juin 2025",
    content: "Modélisation, DAX de base et visualisations",
    profiles: ['data-engineering', 'project-manager']
  },
  {
    id: 5,
    name: "Power BI : Créer et partager son premier tableau de bord",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    issuer: "LinkedIn Learning",
    date: "juin 2025",
    content: "Création de dashboards et partage sécurisé",
    profiles: ['data-engineering', 'project-manager']
  },
  {
    id: 6,
    name: "Améliorer sa communication",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    issuer: "LinkedIn Learning",
    date: "mai 2025",
    content: "Communication interpersonnelle et professionnelle",
    profiles: ['project-manager']
  },
  {
    id: 7,
    name: "Entrepreneur : Les compétences essentielles pour réussir",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    issuer: "LinkedIn Learning",
    date: "mai 2025",
    content: "Compétences clés en entrepreneuriat",
    profiles: ['project-manager']
  },
  {
    id: 8,
    name: "Excel : Le VBA pour les débutants",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    issuer: "LinkedIn Learning",
    date: "mai 2025",
    content: "Automatisation avec VBA, macros et formulaires",
    profiles: ['data-engineering', 'project-manager']
  },
  {
    id: 9,
    name: "Garder son calme face à l'agressivité",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    issuer: "LinkedIn Learning",
    date: "mai 2025",
    content: "Gestion des situations difficiles et assertivité",
    profiles: ['project-manager']
  },
  {
    id: 10,
    name: "Identifier les biais cognitifs pour améliorer vos décisions",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    issuer: "LinkedIn Learning",
    date: "mai 2025",
    content: "Prise de décision et biais inconscients",
    profiles: ['project-manager']
  },
  {
    id: 11,
    name: "L&D : Créer son académie de formation interne",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    issuer: "LinkedIn Learning",
    date: "mai 2025",
    content: "Stratégie d’apprentissage et de développement",
    profiles: ['project-manager']
  },
  {
    id: 12,
    name: "L'essentiel de Canva",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    issuer: "LinkedIn Learning",
    date: "mai 2025",
    content: "Fondamentaux de la conception avec Canva",
    profiles: ['fullstack', 'project-manager']
  },
  {
    id: 13,
    name: "L'essentiel de PowerPoint (365/2024)",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    issuer: "LinkedIn Learning",
    date: "mai 2025",
    content: "Présentation efficace et bonnes pratiques",
    profiles: ['project-manager']
  },
  {
    id: 14,
    name: "Les fondements de la négociation",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    issuer: "LinkedIn Learning",
    date: "mai 2025",
    content: "Techniques de négociation et persuasion",
    profiles: ['project-manager']
  },
  {
    id: 15,
    name: "Les fondements de la vente",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    issuer: "LinkedIn Learning",
    date: "mai 2025",
    content: "Processus de vente et relation client",
    profiles: ['project-manager']
  },
  {
    id: 16,
    name: "Les fondements du graphisme",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    issuer: "LinkedIn Learning",
    date: "mai 2025",
    content: "Principes de design graphique",
    profiles: ['fullstack', 'project-manager']
  },
  {
    id: 17,
    name: "Maîtrise de Word Office",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    issuer: "LinkedIn Learning",
    date: "mai 2025",
    content: "Rédaction de rapports avancée avec Word",
    profiles: ['project-manager']
  },
  {
    id: 18,
    name: "Se faire respecter",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    issuer: "LinkedIn Learning",
    date: "mai 2025",
    content: "Relations interpersonnelles et assertivité",
    profiles: ['project-manager']
  },
  {
    id: 19,
    name: "Fondements de l’ingénierie des données",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    issuer: "LinkedIn Learning",
    date: "avr. 2025",
    content: "Principes, pipelines et écosystème data",
    profiles: ['data-engineering']
  },
  {
    id: 20,
    name: "Optimiser son profil LinkedIn",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    issuer: "LinkedIn Learning",
    date: "avr. 2025",
    content: "Optimisation du profil et visibilité",
    profiles: ['project-manager']
  },
  {
    id: 21,
    name: "Applied ChatGPT for Cybersecurity",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Infosec_Institute_logo.png",
    issuer: "Infosec",
    date: "mars 2025",
    content: "Usage de l'IA générative pour la cybersécurité",
    profiles: ['pentesting']
  },
  {
    id: 22,
    name: "Blockchain Security",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Infosec_Institute_logo.png",
    issuer: "Infosec",
    date: "mars 2025",
    content: "Sécurité des systèmes blockchain",
    profiles: ['pentesting']
  },
  {
    id: 23,
    name: "Metasploit for Beginners: Ethical Penetration Testing",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Coursera_logo.svg",
    issuer: "Coursera Project Network",
    date: "mars 2025",
    content: "Initiation à Metasploit et pentest éthique",
    profiles: ['pentesting']
  },
  {
    id: 24,
    name: "Python for Data Visualization: Matplotlib & Seaborn",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Coursera_logo.svg",
    issuer: "Coursera Project Network",
    date: "mars 2025",
    content: "Visualisation de données avec Matplotlib et Seaborn",
    profiles: ['data-engineering']
  },
  {
    id: 25,
    name: "Talend Data Integration Certification Preparation training",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Talend_logo.svg",
    issuer: "Talend",
    date: "mars 2025",
    content: "Préparation à la certification Talend DI",
    profiles: ['data-engineering']
  },
  {
    id: 26,
    name: "Titanic Survival Prediction Using Machine Learning",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Coursera_logo.svg",
    issuer: "Coursera Project Network",
    date: "mars 2025",
    content: "Classification et feature engineering sur Titanic",
    profiles: ['data-engineering']
  },
  {
    id: 27,
    name: "Vulnerability Scanning with Nmap: Network Scanning",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Coursera_logo.svg",
    issuer: "Coursera Project Network",
    date: "mars 2025",
    content: "Découverte d'hôtes et audit réseau avec Nmap",
    profiles: ['pentesting']
  },
  {
    id: 28,
    name: "Agile with Atlassian Jira",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/db/Atlassian-logo.svg",
    issuer: "Atlassian",
    date: "sept. 2024",
    content: "Gestion agile des projets avec Jira",
    profiles: ['project-manager']
  },
  {
    id: 29,
    name: "Introduction to ES6+",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    issuer: "Scrimba",
    date: "août 2024",
    content: "Nouvelles fonctionnalités ES6+ et bonnes pratiques",
    profiles: ['fullstack']
  },
  {
    id: 30,
    name: "Introduction to Agile Development and Scrum (with Honors)",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    issuer: "IBM",
    date: "juil. 2024",
    content: "Scrum, Kanban, planification de sprints",
    profiles: ['project-manager']
  },
  {
    id: 31,
    name: "Itronix Solutions Training Certificate",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Certificate_icon.svg",
    issuer: "ITRONIX SOLUTIONS",
    date: "juil. 2024",
    content: "Certification de formation (ID #00052804)",
    profiles: ['fullstack']
  },
  {
    id: 32,
    name: "Scrum Fundamentals Certified (SFC)",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/58/Scrum.org_logo.png",
    issuer: "VMEdu / Vabro.ai",
    date: "juil. 2024",
    content: "Fondamentaux Scrum et Kanban",
    profiles: ['project-manager']
  },
  {
    id: 33,
    name: "Mastering Laravel Framework and PHP",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
    issuer: "Board Infinity",
    date: "avr. 2024",
    content: "Laravel moderne, écosystème PHP et bonnes pratiques",
    profiles: ['fullstack']
  },
  {
    id: 34,
    name: "Laravel Additional Security",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
    issuer: "Infosec",
    date: "mars 2024",
    content: "Bonnes pratiques de sécurité applicative Laravel",
    profiles: ['fullstack', 'pentesting']
  },
  {
    id: 35,
    name: "Managing as a Coach",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/University_of_California_Davis_wordmark.svg",
    issuer: "University of California, Davis",
    date: "mars 2024",
    content: "Leadership, coaching et intelligence émotionnelle",
    profiles: ['project-manager']
  }
];