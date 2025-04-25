
import React from 'react';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-blue-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-bold">Mohamed Boulkassoum</p>
            <p className="text-sm text-gray-300">Data Engineering Student</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="mailto:contact@mohamedboulkassoum.com" 
              className="text-white hover:text-gray-300 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/mohamedboulkassoum" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-gray-300 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/mohamedboulkassoum" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-gray-300 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="tel:+212600000000" 
              className="text-white hover:text-gray-300 transition-colors"
              aria-label="Phone"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>© {currentYear} Mohamed Boulkassoum. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
