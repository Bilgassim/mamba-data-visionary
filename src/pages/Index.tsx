import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import CertificationsSection from '@/components/CertificationsSection';
import SkillsSection from '@/components/SkillsSection';
import EducationSection from '@/components/EducationSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import AgentChatWidget from '@/components/AgentChatWidget';
import LoadingPage from '@/components/LoadingPage';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  // Gérer la fin du chargement
  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Petit délai pour une transition plus fluide
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  // Scroll animation handler - seulement après le chargement
  useEffect(() => {
    if (!showContent) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const scrollElements = document.querySelectorAll('.scroll-animation');
    scrollElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      scrollElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, [showContent]);

  // Exemple : Charger des données asynchrones
  useEffect(() => {
    const loadUserData = async () => {
      try {
        // Simuler un appel API ou chargement de données
        // await fetch('/api/user-data');
        // await loadProjects();
        // await loadCertifications();
        
        console.log('Données du portfolio chargées');
      } catch (error) {
        console.error('Erreur lors du chargement des données:', error);
      }
    };

    // Charger les données en arrière-plan pendant l'animation de chargement
    loadUserData();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Page de chargement - nouvelle version avec durée automatique */}
      {isLoading && (
        <LoadingPage 
          onLoadingComplete={handleLoadingComplete}
          minDuration={10000} // 10 secondes
          message="Chargement du portfolio de Mohamed Boulkassoum..."
          autoProgress={true}
          showCode={true}
          customLogo="MB"
          tasks={[
            "Initialisation de l'environnement de développement...",
            "Chargement des projets et réalisations...",
            "Connexion aux bases de données...",
            "Configuration des services cloud...",
            "Synchronisation des certifications...",
            "Préparation de l'interface utilisateur...",
            "Validation des données...",
            "Finalisation du chargement..."
          ]}
        />
      )}
      
      {/* Contenu principal avec animation d'apparition */}
      <div className={`transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar />
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificationsSection />
        <EducationSection />
        <AboutSection />
        <ContactSection />
        <Footer />
        <AgentChatWidget />
      </div>
    </div>
  );
};

export default Index;