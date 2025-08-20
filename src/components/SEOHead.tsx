import React from 'react';
import { useProfile, profileTitles, profileDescriptions } from '@/context/ProfileContext';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  canonical
}) => {
  const { selectedProfile } = useProfile();
  
  const defaultTitle = `Mohamed Boulkassoum - ${profileTitles[selectedProfile]} | Portfolio Professionnel`;
  const defaultDescription = `${profileDescriptions[selectedProfile]} Étudiant en Management et Gouvernance des SI à l'ENSAO. Spécialisé en développement web, Cloud AWS, DevOps, IA et cybersécurité.`;
  const defaultKeywords = `Mohamed Boulkassoum, ${profileTitles[selectedProfile].toLowerCase()}, portfolio, développeur web, full-stack, React, Laravel, AWS, Cloud, DevOps, intelligence artificielle, cybersécurité, Oujda, Maroc, ENSAO`;

  React.useEffect(() => {
    // Mise à jour dynamique du titre et de la description selon le profil
    document.title = title || defaultTitle;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || defaultDescription);
    }
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords || defaultKeywords);
    }
    
    // Mise à jour des Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title || defaultTitle);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description || defaultDescription);
    }
    
    // Mise à jour des Twitter Card tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title || defaultTitle);
    }
    
    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description || defaultDescription);
    }
    
  }, [selectedProfile, title, description, keywords, defaultTitle, defaultDescription, defaultKeywords]);

  return null; // Ce composant ne rend rien visuellement
};

export default SEOHead;