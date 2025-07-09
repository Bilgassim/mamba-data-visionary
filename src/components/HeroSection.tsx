
import React from 'react';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';
import CVSelector from './CVSelector';
import { useProfile } from '../context/ProfileContext';

const HeroSection = () => {
  const { selectedProfile, getProfileTitle, getProfileDescription } = useProfile();
  
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-blue/10 to-white z-0"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2620&q=80')] bg-cover bg-center opacity-10 z-0"></div>
      
      <div className="container mx-auto px-4 z-10 flex-grow flex items-center">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-12">
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Mohamed Boulkassoum</h1>
              <p className="text-lg md:text-xl text-portfolio-gray mb-6">
                {getProfileDescription(selectedProfile)}
              </p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <a 
                  href="mailto:mohamed.boulkassoum23@ump.ac.ma"
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
            </div>
          </div>
          
          <div className="flex justify-center">
            <CVSelector />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
