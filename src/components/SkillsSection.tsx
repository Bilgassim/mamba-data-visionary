
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  category: string;
  level?: number;
}

interface Language {
  name: string;
  flag: string;
  level: number;
}

const skills: Skill[] = [
  // Programming Languages
  { name: "Python", category: "programming" },
  { name: "JavaScript", category: "programming" },
  { name: "PHP", category: "programming" },
  { name: "SQL", category: "programming" },
  { name: "R", category: "programming" },
  { name: "HTML/CSS", category: "programming" },
  
  // Frameworks & Libraries
  { name: "React", category: "frameworks" },
  { name: "Vue.js", category: "frameworks" },
  { name: "Laravel", category: "frameworks" },
  { name: "FastAPI", category: "frameworks" },
  { name: "PyTorch", category: "frameworks" },
  { name: "TensorFlow", category: "frameworks" },
  { name: "Bootstrap", category: "frameworks" },
  { name: "TailwindCSS", category: "frameworks" },
  
  // Data & Big Data
  { name: "Spark", category: "data" },
  { name: "Hadoop", category: "data" },
  { name: "Airflow", category: "data" },
  { name: "Kafka", category: "data" },
  { name: "Redis", category: "data" },
  { name: "Firebase", category: "data" },
  { name: "PostgreSQL", category: "data" },
  { name: "MongoDB", category: "data" },
  
  // AI & Data Science
  { name: "Machine Learning", category: "ai" },
  { name: "Deep Learning", category: "ai" },
  { name: "Computer Vision", category: "ai" },
  { name: "NLP", category: "ai" },
  { name: "XAI (Explainable AI)", category: "ai" },
  { name: "Grad-CAM", category: "ai" },
  { name: "ResNet", category: "ai" },
  
  // Visualization & BI
  { name: "Tableau", category: "visualization" },
  { name: "Power BI", category: "visualization" },
  { name: "D3.js", category: "visualization" },
  { name: "Matplotlib", category: "visualization" },
  { name: "Plotly", category: "visualization" },
  
  // DevOps & Tools
  { name: "Docker", category: "devops" },
  { name: "Kubernetes", category: "devops" },
  { name: "Git", category: "devops" },
  { name: "CI/CD", category: "devops" },
  { name: "AWS", category: "devops" },
  { name: "Linux", category: "devops" },
  
  // Security & Pentesting
  { name: "Penetration Testing", category: "security" },
  { name: "Kali Linux", category: "security" },
  { name: "Nmap", category: "security" },
  { name: "Metasploit", category: "security" },
  { name: "Burp Suite", category: "security" },
  { name: "OWASP", category: "security" },
  
  // Project Management
  { name: "Agile/Scrum", category: "management" },
  { name: "Jira", category: "management" },
  { name: "Confluence", category: "management" },
  { name: "Trello", category: "management" },
  { name: "MS Project", category: "management" },
  
  // CMS & Others
  { name: "WordPress", category: "cms" },
  { name: "Elementor", category: "cms" },
  { name: "Drupal", category: "cms" },
  { name: "Celery", category: "tools" },
  { name: "Vite", category: "tools" },
  { name: "Cornerstone.js", category: "tools" },
];

const languages: Language[] = [
  { name: "Français", flag: "🇫🇷", level: 100 },
  { name: "Anglais", flag: "🇬🇧", level: 85 },
  { name: "Arabe", flag: "🇲🇦", level: 95 },
];

const SkillsSection = () => {
  const categories = [
    { id: "programming", name: "Langages de programmation" },
    { id: "frameworks", name: "Frameworks & Libraries" },
    { id: "data", name: "Technologies Big Data" },
    { id: "ai", name: "IA & Data Science" },
    { id: "visualization", name: "Visualisation & BI" },
    { id: "devops", name: "DevOps & Cloud" },
    { id: "security", name: "Cybersécurité & Pentesting" },
    { id: "management", name: "Gestion de Projet" },
    { id: "cms", name: "CMS & Web" },
    { id: "tools", name: "Outils spécialisés" },
  ];

  return (
    <section id="skills" className="section-container scroll-animation">
      <h2 className="section-title">Compétences</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Technical Skills */}
        <div className="lg:col-span-2 space-y-8">
          {categories.map((category) => (
            <div key={category.id}>
              <h3 className="text-xl font-medium mb-4">{category.name}</h3>
              <div className="flex flex-wrap">
                {skills
                  .filter((skill) => skill.category === category.id)
                  .map((skill) => (
                    <div key={skill.name} className="skill-badge">
                      {skill.name}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Languages */}
        <div>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-medium mb-6">Langues</h3>
              <div className="space-y-6">
                {languages.map((lang) => (
                  <div key={lang.name} className="space-y-2">
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <span className="mr-2 text-xl">{lang.flag}</span>
                        <span>{lang.name}</span>
                      </div>
                      <span className="text-sm text-portfolio-blue-dark">{lang.level}%</span>
                    </div>
                    <Progress value={lang.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
