
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { skills, languages, categoryNames } from '../data/skillsData';
import { useProfile } from '../context/ProfileContext';

const SkillsSection = () => {
  const { selectedProfile } = useProfile();
  
  const filteredSkills = skills.filter(skill => 
    skill.profiles.includes(selectedProfile)
  );
  
  const categoriesWithSkills = Object.entries(categoryNames)
    .map(([id, name]) => ({ id, name }))
    .filter(category => 
      filteredSkills.some(skill => skill.category === category.id)
    );

  return (
    <section id="skills" className="section-container scroll-animation">
      <h2 className="section-title">Compétences</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Technical Skills */}
        <div className="lg:col-span-2 space-y-8">
          {categoriesWithSkills.map((category) => (
            <div key={category.id}>
              <h3 className="text-xl font-medium mb-4">{category.name}</h3>
              <div className="flex flex-wrap">
                {filteredSkills
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
