/**
 * 🏠 Page Index - Page principale du portfolio
 * 
 * Cette page orchestre l'affichage de toutes les sections :
 * 1. ⏳ Page de chargement avec animations (LoadingPage)
 * 2. 🧭 Barre de navigation (Navbar) 
 * 3. 🏠 Section héro avec photo et infos (HeroSection)
 * 4. 🚀 Projets filtrés par profil (ProjectsSection)
 * 5. 💪 Compétences techniques (SkillsSection)
 * 6. 🏆 Certifications (CertificationsSection)
 * 7. 🎓 Formation académique (EducationSection)
 * 8. 👤 À propos (AboutSection)
 * 9. 📞 Contact (ContactSection)
 * 10. 🦶 Pied de page (Footer)
 * 11. 🤖 Widget chatbot (AgentChatWidget)
 * 
 * 🔄 Le contenu s'adapte automatiquement selon le profil sélectionné
 */
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
import CustomCursor from '@/components/CustomCursor';

const Index = () => {
  // 🔄 États pour gérer l'affichage et les transitions
  const [isLoading, setIsLoading] = useState(true);     // Contrôle l'affichage de la page de chargement
  const [showContent, setShowContent] = useState(false); // Contrôle l'affichage du contenu principal

  // 🎬 Gère la fin du chargement avec transition fluide
  const handleLoadingComplete = () => {
    setIsLoading(false);                    // Cache la page de chargement
    setTimeout(() => {                      // Délai pour transition plus fluide
      setShowContent(true);                 // Affiche le contenu principal
    }, 100);
  };

  // 👁️ Observateur d'intersection pour animations au scroll (seulement après chargement)
  useEffect(() => {
    if (!showContent) return;              // Ne démarre qu'après l'affichage du contenu

    // 🔍 Observe les éléments avec la classe 'scroll-animation'
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {        // Si l'élément entre dans la vue
          entry.target.classList.add('active'); // Ajoute la classe 'active' pour déclencher l'animation
        }
      });
    }, { threshold: 0.1 });               // Se déclenche quand 10% de l'élément est visible

    // 📝 Sélectionne tous les éléments à animer
    const scrollElements = document.querySelectorAll('.scroll-animation');
    scrollElements.forEach((el) => {
      observer.observe(el);                // Commence à observer chaque élément
    });

    // 🧹 Nettoyage : arrête l'observation quand le composant se démonte
    return () => {
      scrollElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, [showContent]);

  // 📊 Chargement des données en arrière-plan (simulé)
  useEffect(() => {
    const loadUserData = async () => {
      try {
        // 🔄 Ici vous pourriez charger des données depuis une API
        // await fetch('/api/user-data');
        // await loadProjects();
        // await loadCertifications();
        
        console.log('✅ Données du portfolio chargées avec succès');
      } catch (error) {
        console.error('❌ Erreur lors du chargement des données:', error);
      }
    };

    // 🚀 Lance le chargement des données pendant l'animation de chargement
    loadUserData();
  }, []);

  return (
    <div className="min-h-screen bg-white cursor-none">
      {/* 🖱️ Curseur personnalisé professionnel */}
      <CustomCursor />
      {/* 🎬 Page de chargement - s'affiche au démarrage avec animations */}
      {isLoading && (
        <LoadingPage 
          onLoadingComplete={handleLoadingComplete}  // Callback à la fin du chargement
          minDuration={10000}                        // Durée minimum : 10 secondes
          message="Chargement du portfolio de Mohamed Boulkassoum..."
          autoProgress={true}                        // Progression automatique
          showCode={true}                           // Affiche des lignes de code simulées
          customLogo="MB"                           // Logo personnalisé avec initiales
          tasks={[                                  // Liste des tâches affichées pendant le chargement
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
      
      {/* 🎯 Contenu principal avec animation d'apparition progressive */}
      <div className={`transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar />                {/* 🧭 Barre de navigation */}
        <HeroSection />          {/* 🏠 Section d'accueil avec photo et infos */}
        <ProjectsSection />      {/* 🚀 Projets filtrés par profil */}
        <SkillsSection />        {/* 💪 Compétences techniques et langues */}
        <CertificationsSection />{/* 🏆 Certifications professionnelles */}
        <EducationSection />     {/* 🎓 Formation académique */}
        <AboutSection />         {/* 👤 À propos personnel */}
        <ContactSection />       {/* 📞 Formulaire de contact */}
        <Footer />               {/* 🦶 Pied de page avec liens */}
        <AgentChatWidget />      {/* 🤖 Widget chatbot interactif */}
      </div>
    </div>
  );
};

export default Index;