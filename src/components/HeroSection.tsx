import React, { useEffect, useState } from 'react';
import { Mail, Linkedin, Github, Phone, Download, ArrowDown } from 'lucide-react';
import CVSelector from './CVSelector';
import { useProfile } from '../context/ProfileContext';

const HeroSection = () => {
  const { selectedProfile, getProfileTitle, getProfileDescription } = useProfile();
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Animation d'entrée progressive
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Effet parallaxe subtil pour le curseur
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const socialLinks = [
    {
      href: "mailto:mohamed.boulkassoum23@ump.ac.ma",
      icon: Mail,
      label: "Email",
      color: "hover:bg-blue-500"
    },
    {
      href: "https://linkedin.com/in/moboulkassoum",
      icon: Linkedin,
      label: "LinkedIn",
      color: "hover:bg-blue-600",
      external: true
    },
    {
      href: "https://github.com/bilgassim",
      icon: Github,
      label: "GitHub",
      color: "hover:bg-gray-800",
      external: true
    },
    {
      href: "tel:+212710911949",
      icon: Phone,
      label: "Phone",
      color: "hover:bg-green-500"
    }
  ];

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden mt-6">
      {/* Arrière-plan animé */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100"></div>
      
      {/* Particules flottantes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-bounce" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full opacity-40 animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-pink-300 rounded-full opacity-50 animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-10 w-1.5 h-1.5 bg-blue-300 rounded-full opacity-60 animate-bounce" style={{animationDelay: '0.5s'}}></div>
      </div>

      {/* Effet de grille subtile */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(59,130,246) 1px, transparent 0)`,
          backgroundSize: '50px 50px',
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
        }}
      ></div>
      
      <div className="container mx-auto px-4 z-10 flex-grow flex items-center">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            
            {/* Photo de profil avec effets */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end mt-10">
              <div className={`relative transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                {/* Cercles d'arrière-plan animés */}
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-20 animate-pulse"></div>
                <div className="absolute -inset-8 rounded-full border border-blue-300 opacity-30 animate-spin" style={{animationDuration: '20s'}}></div>
                
                {/* Conteneur de l'image */}
                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl relative group">
                    <img 
                      src="/Bilgassim.jpg"
                      alt="Mohamed Boulkassoum"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Overlay avec effet hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contenu textuel */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">
              {/* Nom avec animation */}
              <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                <div className="inline-block">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent leading-tight">
                    Mohamed
                  </h1>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight">
                    Boulkassoum
                  </h1>
                </div>
              </div>
              
              {/* Description avec animation */}
              <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  {getProfileDescription(selectedProfile)}
                </p>
              </div>
              
              {/* Boutons sociaux avec animations */}
              <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a 
                        key={social.label}
                        href={social.href}
                        {...(social.external && { target: "_blank", rel: "noopener noreferrer" })}
                        className={`group relative p-4 bg-white rounded-full shadow-lg hover:shadow-xl ${social.color} hover:text-white transition-all duration-300 hover:-translate-y-1 hover:scale-110`}
                        style={{animationDelay: `${index * 0.1}s`}}
                        aria-label={social.label}
                      >
                        <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                        
                        {/* Tooltip */}
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                          {social.label}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
          
          {/* Sélecteur de CV avec animation */}
          <div className={`transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
              <CVSelector />
            </div>
          </div>
        </div>
      </div>

      {/* Styles CSS pour les animations personnalisées */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 4s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;