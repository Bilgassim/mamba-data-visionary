
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string[];
}

const educations: Education[] = [
  {
    id: 1,
    degree: "Diplôme d'Ingénieur en Management des SI",
    institution: "École Nationale des Sciences Appliquées",
    location: "Oujda, Maroc",
    period: "2021-2026",
    description: [
      "Spécialisation en Data Engineering et Business Intelligence",
      "Projets en IA et traitement d'images médicales",
      "Formation approfondie en gestion de projets IT"
    ]
  },
  {
    id: 2,
    degree: "Baccalauréat Scientifique",
    institution: "Lycée Mohammed VI",
    location: "Oujda, Maroc",
    period: "2020-2021",
    description: [
      "Mention Très Bien",
      "Option Sciences Mathématiques"
    ]
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="section-container bg-gray-50 scroll-animation">
      <h2 className="section-title">Formation</h2>
      
      <div className="max-w-3xl mx-auto">
        <Card className="border-none shadow-lg">
          <CardContent className="p-0">
            <div className="relative">
              {educations.map((edu, index) => (
                <div key={edu.id} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="py-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                      <h3 className="text-xl font-semibold">{edu.degree}</h3>
                      <span className="text-portfolio-blue-dark bg-blue-50 px-3 py-1 rounded-full text-sm sm:ml-2">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-portfolio-gray-dark mb-2">{edu.institution}, {edu.location}</p>
                    <ul className="list-disc list-inside text-portfolio-gray pl-2 space-y-1">
                      {edu.description.map((desc, idx) => (
                        <li key={idx} className="text-sm">{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EducationSection;
