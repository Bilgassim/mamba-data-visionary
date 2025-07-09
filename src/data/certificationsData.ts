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
    name: "Apache Spark",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Apache_Spark_logo.svg/1200px-Apache_Spark_logo.svg.png",
    issuer: "LinkedIn Learning",
    date: "Avril 2025",
    content: "Traitement de données massives avec Spark Core, Spark SQL, et Spark Streaming",
    profiles: ['data-engineering']
  },
  {
    id: 2,
    name: "Apache Airflow",
    logo: "https://airflow.apache.org/docs/apache-airflow/stable/_images/pin_large.png",
    issuer: "LinkedIn Learning",
    date: "Mars 2025",
    content: "Orchestration de workflows et gestion de pipelines de données",
    profiles: ['data-engineering']
  },
  {
    id: 3,
    name: "Hadoop Ecosystem",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Hadoop_logo.svg/1280px-Hadoop_logo.svg.png",
    issuer: "LinkedIn Learning",
    date: "Février 2025",
    content: "HDFS, MapReduce, et écosystème Hadoop complet",
    profiles: ['data-engineering']
  },
  {
    id: 4,
    name: "Python Data Science",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
    issuer: "DataCamp",
    date: "Janvier 2025",
    content: "NumPy, Pandas, Matplotlib, et analyse de données avancée",
    profiles: ['data-engineering']
  },
  {
    id: 5,
    name: "AWS Data Engineering",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png",
    issuer: "AWS",
    date: "Décembre 2024",
    content: "Services AWS pour l'ingénierie des données: S3, Redshift, EMR",
    profiles: ['data-engineering']
  },
  {
    id: 6,
    name: "Tableau Desktop",
    logo: "https://logos-world.net/wp-content/uploads/2021/10/Tableau-Symbol.png",
    issuer: "Tableau",
    date: "Novembre 2024",
    content: "Visualisation de données et dashboards interactifs",
    profiles: ['data-engineering', 'project-manager']
  },
  {
    id: 7,
    name: "React Developer",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    issuer: "Meta",
    date: "Octobre 2024",
    content: "Développement d'applications React modernes avec hooks et Context API",
    profiles: ['fullstack']
  },
  {
    id: 8,
    name: "Laravel Certified",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png",
    issuer: "Laravel",
    date: "Septembre 2024",
    content: "Développement d'applications web PHP avec Laravel framework",
    profiles: ['fullstack']
  },
  {
    id: 9,
    name: "CEH (Certified Ethical Hacker)",
    logo: "https://www.eccouncil.org/wp-content/uploads/2016/02/CEH-logo-1.png",
    issuer: "EC-Council",
    date: "Août 2024",
    content: "Tests de pénétration éthique et sécurité des systèmes d'information",
    profiles: ['pentesting']
  },
  {
    id: 10,
    name: "CISSP Associate",
    logo: "https://www.isc2.org/-/media/ISC2/Certifications/CISSP/CISSP-Logo.ashx",
    issuer: "ISC2",
    date: "Juillet 2024",
    content: "Sécurité des systèmes d'information et gestion des risques",
    profiles: ['pentesting']
  },
  {
    id: 11,
    name: "PMP (Project Management Professional)",
    logo: "https://www.pmi.org/-/media/pmi/images/public/pdf/certifications/pmp-credential-logo.png",
    issuer: "PMI",
    date: "Juin 2024",
    content: "Gestion de projet professionnelle et leadership d'équipe",
    profiles: ['project-manager']
  },
  {
    id: 12,
    name: "Scrum Master Certified",
    logo: "https://www.scrum.org/themes/scrumorg/logo.png",
    issuer: "Scrum Alliance",
    date: "Mai 2024",
    content: "Méthodologies agiles et gestion d'équipes Scrum",
    profiles: ['project-manager']
  }
];