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
    name: "AWS Cloud Quest: Cloud Practitioner",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    issuer: "Amazon Web Services (AWS)",
    date: "août 2025",
    content: "Certification AWS Cloud Practitioner - Identifiant: 6a641eaf-c32f-4b41-b487-038a5d8b578f",
    profiles: ['data-engineering', 'fullstack']
  },
  {
    id: 2,
    name: "L'essentiel d'Amazon Web Services",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    issuer: "LinkedIn",
    date: "août 2025",
    content: "Cloud Computing et services AWS fondamentaux",
    profiles: ['data-engineering', 'fullstack']
  },
  {
    id: 3,
    name: "Gérer des plannings de projet",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    issuer: "LinkedIn",
    date: "juil. 2025",
    content: "Méthodes et outils pour planification et suivi de projet",
    profiles: ['project-manager']
  },
  {
    id: 4,
    name: "L'essentiel de TypeScript",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    issuer: "LinkedIn",
    date: "juil. 2025",
    content: "Bases de TypeScript, typage, interfaces et tooling",
    profiles: ['fullstack']
  },
  {
    id: 5,
    name: "L'essentiel de Power BI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    issuer: "LinkedIn",
    date: "juin 2025",
    content: "Modélisation, DAX de base et visualisations Power BI",
    profiles: ['data-engineering', 'project-manager']
  },
  {
    id: 6,
    name: "Power BI : Créer et partager son premier tableau de bord",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    issuer: "LinkedIn",
    date: "juin 2025",
    content: "Création de dashboards et partage sécurisé avec filtres Power BI",
    profiles: ['data-engineering', 'project-manager']
  },
  {
    id: 7,
    name: "Améliorer sa communication",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    issuer: "LinkedIn",
    date: "mai 2025",
    content: "Communication interpersonnelle et professionnelle",
    profiles: ['project-manager']
  },
  {
    id: 8,
    name: "Entrepreneur : Les compétences essentielles pour réussir",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    issuer: "LinkedIn",
    date: "mai 2025",
    content: "Compétences clés en entrepreneuriat et création d'entreprise",
    profiles: ['project-manager']
  },
  {
    id: 9,
    name: "Excel : Le VBA pour les débutants",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    issuer: "LinkedIn",
    date: "mai 2025",
    content: "Automatisation avec VBA, macros et formulaires Excel",
    profiles: ['data-engineering', 'project-manager']
  },
  {
    id: 10,
    name: "Garder son calme face à l'agressivité",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    issuer: "LinkedIn",
    date: "mai 2025",
    content: "Gestion des situations difficiles et assertivité professionnelle",
    profiles: ['project-manager']
  },
  {
    id: 11,
    name: "Identifier les biais cognitifs pour améliorer vos décisions",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    issuer: "LinkedIn",
    date: "mai 2025",
    content: "Prise de décision et formation sur les biais inconscients",
    profiles: ['project-manager']
  },
  {
    id: 12,
    name: "L&D : Créer son académie de formation interne",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    issuer: "LinkedIn",
    date: "mai 2025",
    content: "Stratégie d'apprentissage et de développement en entreprise",
    profiles: ['project-manager']
  },
  {
    id: 13,
    name: "L'essentiel de Canva",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    issuer: "LinkedIn",
    date: "mai 2025",
    content: "Fondamentaux de la conception graphique avec Canva",
    profiles: ['fullstack', 'project-manager']
  },
  {
    id: 14,
    name: "L'essentiel de PowerPoint (365/2024)",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    issuer: "LinkedIn",
    date: "mai 2025",
    content: "Présentation efficace et bonnes pratiques PowerPoint",
    profiles: ['project-manager']
  },
  {
    id: 15,
    name: "Les fondements de la négociation",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    issuer: "LinkedIn",
    date: "mai 2025",
    content: "Techniques de négociation et persuasion professionnelle",
    profiles: ['project-manager']
  },
  {
    id: 16,
    name: "Les fondements de la vente",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    issuer: "LinkedIn",
    date: "mai 2025",
    content: "Processus de vente et relation client efficace",
    profiles: ['project-manager']
  },
  {
    id: 17,
    name: "Les fondements du graphisme",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    issuer: "LinkedIn",
    date: "mai 2025",
    content: "Principes de design graphique et composition visuelle",
    profiles: ['fullstack', 'project-manager']
  },
  {
    id: 18,
    name: "Maîtrise de Word Office",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    issuer: "LinkedIn",
    date: "mai 2025",
    content: "Rédaction de rapports avancée avec Microsoft Word - ID: 0d75a01b6ee0f841ac627314f815a9707d017118967675d0ca4ef7614eb8036c",
    profiles: ['project-manager']
  },
  {
    id: 19,
    name: "Se faire respecter",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    issuer: "LinkedIn",
    date: "mai 2025",
    content: "Relations interpersonnelles et assertivité en milieu professionnel",
    profiles: ['project-manager']
  },
  {
    id: 20,
    name: "Fondements de l'ingénierie des données",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    issuer: "LinkedIn",
    date: "avr. 2025",
    content: "Principes, pipelines et écosystème data engineering - ID: af8fd16a690ea24c924e3981350bb8d167db1c29116c6325c7298d9018491ed4",
    profiles: ['data-engineering']
  },
  {
    id: 21,
    name: "Optimiser son profil LinkedIn",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    issuer: "LinkedIn",
    date: "avr. 2025",
    content: "Optimisation du profil et visibilité professionnelle - ID: e6ead529bcfc8d87c783fe0e99d6368a8f2f8ffe9078de0c84e2b0a7525a2d0e",
    profiles: ['project-manager']
  },
  {
    id: 22,
    name: "Applied ChatGPT for Cybersecurity",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Infosec_Institute_logo.png",
    issuer: "Infosec",
    date: "mars 2025",
    content: "Usage de l'IA générative pour la cybersécurité - ID: DK4GDU4DOGAC",
    profiles: ['pentesting']
  },
  {
    id: 23,
    name: "Blockchain Security",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Infosec_Institute_logo.png",
    issuer: "Infosec",
    date: "mars 2025",
    content: "Sécurité des systèmes blockchain et crypto - ID: K3XVNXR6B34F",
    profiles: ['pentesting']
  },
  {
    id: 24,
    name: "Metasploit for Beginners: Ethical Penetration Testing",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Coursera_logo.svg",
    issuer: "Coursera Project Network",
    date: "mars 2025",
    content: "Initiation à Metasploit et pentest éthique - ID: WZVVR5HYOTO3",
    profiles: ['pentesting']
  },
  {
    id: 25,
    name: "Python for Data Visualization: Matplotlib & Seaborn",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Coursera_logo.svg",
    issuer: "Coursera Project Network",
    date: "mars 2025",
    content: "Visualisation de données avec Matplotlib et Seaborn - ID: 5HY0CIH64EGI",
    profiles: ['data-engineering']
  },
  {
    id: 26,
    name: "Talend Data Integration Certification Preparation training",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Talend_logo.svg",
    issuer: "Talend",
    date: "mars 2025",
    content: "Préparation à la certification Talend DI - ID: LLQZOVX2SZFA",
    profiles: ['data-engineering']
  },
  {
    id: 27,
    name: "Titanic Survival Prediction Using Machine Learning",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Coursera_logo.svg",
    issuer: "Coursera Project Network",
    date: "mars 2025",
    content: "Classification et feature engineering sur dataset Titanic - ID: 7KCC566WM71J",
    profiles: ['data-engineering']
  },
  {
    id: 28,
    name: "Vulnerability Scanning with Nmap: Network Scanning",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Coursera_logo.svg",
    issuer: "Coursera Project Network",
    date: "mars 2025",
    content: "Découverte d'hôtes et audit réseau avec Nmap - ID: YGHOVUCH8C9Q",
    profiles: ['pentesting']
  },
  {
    id: 29,
    name: "Agile with Atlassian Jira",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/db/Atlassian-logo.svg",
    issuer: "Atlassian",
    date: "sept. 2024",
    content: "Gestion agile des projets avec Jira - ID: K14E1LH31JAV",
    profiles: ['project-manager']
  },
  {
    id: 30,
    name: "Introduction to ES6+",
    logo: "https://scrimba.com/favicon.ico",
    issuer: "Scrimba",
    date: "août 2024",
    content: "Nouvelles fonctionnalités ES6+ et bonnes pratiques JavaScript - ID: XPHDT2JNSQ85",
    profiles: ['fullstack']
  },
  {
    id: 31,
    name: "Introduction to Agile Development and Scrum (with Honors)",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    issuer: "IBM",
    date: "juil. 2024",
    content: "Scrum, méthodologies Agile, Kanban et planification de sprints - ID: 9UJ3N59X6M7D",
    profiles: ['project-manager']
  },
  {
    id: 32,
    name: "Itronix Solutions Training Certificate",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Certificate_icon.svg",
    issuer: "ITRONIX SOLUTIONS",
    date: "juil. 2024",
    content: "Certification de formation technique - ID: #00052804",
    profiles: ['fullstack']
  },
  {
    id: 33,
    name: "Scrum Fundamentals Certified (SFC)",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/58/Scrum.org_logo.png",
    issuer: "Vabro.ai and VMEdu.com",
    date: "juil. 2024",
    content: "Fondamentaux Scrum et Kanban - ID: 1040379",
    profiles: ['project-manager']
  },
  {
    id: 34,
    name: "CCNA: Introduction to Networks",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg",
    issuer: "Cisco Networking Academy",
    date: "juin 2024",
    content: "Fondamentaux des réseaux Cisco - ID: 93febfa9-2aa3-424a-97a6-cb49aef552f6",
    profiles: ['pentesting', 'fullstack']
  },
  {
    id: 35,
    name: "Mastering Laravel Framework and PHP",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
    issuer: "Board Infinity",
    date: "avr. 2024",
    content: "Laravel moderne, écosystème PHP et bonnes pratiques - ID: V488M8LXDVM7",
    profiles: ['fullstack']
  },
  {
    id: 36,
    name: "Laravel Additional Security",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Infosec_Institute_logo.png",
    issuer: "Infosec",
    date: "mars 2024",
    content: "Bonnes pratiques de sécurité applicative Laravel - ID: 5AJ4EAJ8EEDT",
    profiles: ['fullstack', 'pentesting']
  },
  {
    id: 37,
    name: "Managing as a Coach",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/University_of_California_Davis_wordmark.svg",
    issuer: "University of California, Davis",
    date: "mars 2024",
    content: "Leadership, coaching et intelligence émotionnelle - ID: LP377PS0PYPY",
    profiles: ['project-manager']
  }
];