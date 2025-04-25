
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
  { name: "Python", category: "programming" },
  { name: "SQL", category: "programming" },
  { name: "R", category: "programming" },
  { name: "JavaScript", category: "programming" },
  { name: "Spark", category: "data" },
  { name: "Hadoop", category: "data" },
  { name: "Airflow", category: "data" },
  { name: "Kafka", category: "data" },
  { name: "Machine Learning", category: "data-science" },
  { name: "Deep Learning", category: "data-science" },
  { name: "Data Visualization", category: "data-science" },
  { name: "Tableau", category: "visualization" },
  { name: "Power BI", category: "visualization" },
  { name: "Excel", category: "tools" },
  { name: "Git", category: "tools" },
  { name: "Docker", category: "tools" },
];

const languages: Language[] = [
  { name: "Français", flag: "🇫🇷", level: 100 },
  { name: "Anglais", flag: "🇬🇧", level: 85 },
  { name: "Arabe", flag: "🇲🇦", level: 95 },
];

const SkillsSection = () => {
  const categories = [
    { id: "programming", name: "Langages de programmation" },
    { id: "data", name: "Technologies Big Data" },
    { id: "data-science", name: "Data Science & ML" },
    { id: "visualization", name: "Visualisation" },
    { id: "tools", name: "Outils & Plateformes" },
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
