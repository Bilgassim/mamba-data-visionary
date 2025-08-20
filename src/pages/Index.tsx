
import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
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

  // Scroll animation handler
  useEffect(() => {
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
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingPage key="loading" onComplete={handleLoadingComplete} />
        ) : (
          <div key="content" className="min-h-screen bg-white">
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
        )}
      </AnimatePresence>
    </>
  );
};

export default Index;
