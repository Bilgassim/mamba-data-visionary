
import React from 'react';
import { Hammer, Target, User } from 'lucide-react';

const AboutSection = () => {
  const strengths = [
    {
      icon: <Hammer className="force-icon" />,
      title: "Travailleur acharné",
      description: "Déterminé à donner le meilleur dans chaque projet avec une éthique de travail sans compromis."
    },
    {
      icon: <Target className="force-icon" />,
      title: "Leader",
      description: "Capable de motiver et diriger des équipes vers un objectif commun avec vision et empathie."
    },
    {
      icon: <User className="force-icon" />,
      title: "Adaptable",
      description: "Flexibilité face aux défis et capacité à apprendre rapidement dans des environnements changeants."
    }
  ];

  return (
    <section id="about" className="section-container scroll-animation">
      <h2 className="section-title">Philosophie & Forces</h2>
      
      <div className="max-w-4xl mx-auto mb-12">
        <blockquote className="text-2xl md:text-3xl text-center text-portfolio-gray-dark italic border-l-4 border-portfolio-blue pl-4 py-2">
          "Chaque jour est une opportunité de progresser."
        </blockquote>
        <p className="text-center mt-4 text-portfolio-gray">Inspiré par la Mamba Mentality</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {strengths.map((strength, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-portfolio-blue transition-transform hover:-translate-y-1 duration-300"
          >
            <div className="flex justify-center">
              {strength.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{strength.title}</h3>
            <p className="text-portfolio-gray-dark">{strength.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
