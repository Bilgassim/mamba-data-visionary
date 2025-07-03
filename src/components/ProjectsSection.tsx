
import React from 'react';
import ProjectCardWithTabs from './projects/ProjectCardWithTabs';
import TimelineProjectCard from './projects/TimelineProjectCard';
import SimpleProjectCard from './projects/SimpleProjectCard';
import { 
  ensaoProjectData, 
  solidarityWorldData, 
  cabinetMedicalData, 
  renalDetectionData 
} from './projects/projectsData';
import { 
  sincoshopContent, 
  darijaQuestContent, 
  mambaAcademyContent, 
  eMarketingContent,
  ecommerceContent 
} from './projects/simpleProjectsData';

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-container scroll-animation">
      <h2 className="section-title">Expériences & Projets</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* ENSAO AI Project */}
        <ProjectCardWithTabs {...ensaoProjectData} />
        
        {/* Solidarity World Project */}
        <TimelineProjectCard {...solidarityWorldData} />

        {/* Cabinet medical */}
        <ProjectCardWithTabs {...cabinetMedicalData} />

        {/* Sincoshop */}
        <SimpleProjectCard
          title="Sincoshop"
          description="Système de gestion de stock et ventes"
          borderColor="border-t-portfolio-orange"
          gradientColor="from-portfolio-orange/5"
          content={sincoshopContent}
          buttonColor="text-orange-600"
        />

        {/* Détection automatique des calculs rénaux */}
        <ProjectCardWithTabs {...renalDetectionData} />

        {/* DarijaQuest */}
        <SimpleProjectCard
          title="DarijaQuest"
          description="Plateforme d'apprentissage du Darija en ligne"
          borderColor="border-t-portfolio-green"
          gradientColor="from-portfolio-green/5"
          content={darijaQuestContent}
          buttonColor="text-green-600"
        />

        {/* Mamba Academy */}
        <SimpleProjectCard
          title="Mamba Academy"
          description="Site vitrine pour centre de formations bureautiques"
          borderColor="border-t-portfolio-orange"
          gradientColor="from-portfolio-orange/5"
          content={mambaAcademyContent}
          buttonColor="text-orange-600"
        />

        {/* Site e-marketing */}
        <SimpleProjectCard
          title="Site E-Marketing"
          description="Site vitrine pour entreprise de marketing digital"
          borderColor="border-t-purple-500"
          gradientColor="from-purple-500/5"
          content={eMarketingContent}
          buttonColor="text-purple-600"
        />

        {/* Boutique e-commerce */}
        <SimpleProjectCard
          title="Boutique E-commerce"
          description="Site vitrine avec fonctionnalités de vente en ligne"
          borderColor="border-t-portfolio-blue"
          gradientColor="from-portfolio-blue/5"
          content={ecommerceContent}
          buttonColor="text-blue-600"
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
