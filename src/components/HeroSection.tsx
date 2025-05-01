
import React from 'react';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const handleDownloadCV = () => {
  const link = document.createElement('a');
  link.href = "/CV_Mohamed_Boulkassoum_Data_Engineering.pdf";
  link.download = 'CV_Mohamed_Boulkassoum.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-blue/10 to-white z-0"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2620&q=80')] bg-cover bg-center opacity-10 z-0"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="/Bilgassim.jpg"
                alt="Mohamed Boulkassoum"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="md:col-span-7 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Boulkassoum Mohamed Boulkassoum</h1>
            <p className="text-lg md:text-xl text-portfolio-gray mb-6">
              Étudiant en Management et Gouvernance des SI, développeur Full Stack(Laravel & React), passionné par l'ingénierie des données
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
              <a 
                href="mohamed.boulkassoum23@ump.ac.ma"
                className="p-3 bg-white rounded-full shadow-md hover:bg-portfolio-blue hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/moboulkassoum"
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-white rounded-full shadow-md hover:bg-portfolio-blue hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/bilgassim"
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-white rounded-full shadow-md hover:bg-portfolio-blue hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="tel:+212710911949"
                className="p-3 bg-white rounded-full shadow-md hover:bg-portfolio-blue hover:text-white transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
            
            <Button onClick={handleDownloadCV}
              className="bg-portfolio-blue-dark hover:bg-portfolio-blue text-white px-6 py-2 rounded-md shadow-md"
            >
              Télécharger mon CV
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <a href="#projects" aria-label="Défiler vers le bas">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-portfolio-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
