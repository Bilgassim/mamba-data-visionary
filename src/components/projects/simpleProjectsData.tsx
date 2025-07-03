import React from 'react';

// Sincoshop Project Content
export const sincoshopContent = (
  <div className="space-y-4">
    <p>ERP complet développé avec Laravel incluant :</p>

    <div className="flex items-start gap-4">
      <div className="flex-1">
        <h4 className="font-medium mb-2">Modules clés</h4>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>Gestion des inventaires (alertes seuil)</li>
          <li>Suivi des commandes fournisseurs</li>
          <li>Reporting analytique</li>
          <li>Intégration API bancaires</li>
        </ul>
      </div>
      <div className="flex-1">
        <h4 className="font-medium mb-2">Technologies</h4>
        <div className="flex flex-wrap gap-2">
          <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">Laravel 10</span>
          <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">Livewire</span>
          <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">MySQL</span>
          <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">Redis</span>
        </div>
      </div>
    </div>

    <div className="bg-orange-50 p-3 rounded-lg mt-3">
      <h4 className="font-medium flex items-center gap-2">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd"/>
        </svg>
        Résultats concrets
      </h4>
      <p className="text-sm mt-1">Réduction de 30% des ruptures de stock et gain de 15h/semaine sur la gestion administrative</p>
    </div>
  </div>
);

// DarijaQuest Project Content
export const darijaQuestContent = (
  <div className="space-y-4">
    <p>Application éducative interactive pour apprendre le Darija (arabe marocain) avec reconnaissance vocale et progression personnalisée.</p>

    <div className="flex items-start gap-4">
      <div className="flex-1">
        <h4 className="font-medium mb-2">Fonctionnalités</h4>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>Interface ludique style Duolingo</li>
          <li>Reconnaissance vocale intégrée</li>
          <li>Quiz interactifs et audio</li>
          <li>Progression par niveaux</li>
        </ul>
      </div>
      <div className="flex-1">
        <h4 className="font-medium mb-2">Technologies</h4>
        <div className="flex flex-wrap gap-2">
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">React + Vite</span>
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Firebase</span>
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">TailwindCSS</span>
        </div>
      </div>
    </div>

    <div className="bg-green-50 p-3 rounded-lg mt-3">
      <h4 className="font-medium">Impact éducatif</h4>
      <p className="text-sm mt-1">Facilite l'apprentissage du dialecte marocain pour les francophones et arabophones</p>
    </div>
  </div>
);

// Mamba Academy Project Content
export const mambaAcademyContent = (
  <div className="space-y-3">
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
        <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
        </svg>
      </div>
      <div>
        <h4 className="font-medium">Centre de formation</h4>
        <p className="text-sm text-portfolio-gray-dark">Formations professionnelles en bureautique</p>
      </div>
    </div>

    <ul className="list-disc pl-5 space-y-1 text-sm">
      <li>Présentation complète des offres de formation</li>
      <li>Formulaire d'inscription intégré</li>
      <li>Design responsive et moderne</li>
      <li>Intégration WhatsApp pour contact direct</li>
    </ul>

    <div className="flex flex-wrap gap-2 mt-3">
      <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">WordPress</span>
      <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">Astra Theme</span>
      <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">Elementor</span>
    </div>
  </div>
);

// E-Marketing Site Project Content
export const eMarketingContent = (
  <div className="space-y-3">
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
        <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2z" clipRule="evenodd"/>
        </svg>
      </div>
      <div>
        <h4 className="font-medium">Projet freelance</h4>
        <p className="text-sm text-portfolio-gray-dark">Développement sur mesure pour entreprise locale</p>
      </div>
    </div>

    <ul className="list-disc pl-5 space-y-1 text-sm">
      <li>Présentation des services marketing</li>
      <li>Section témoignages clients</li>
      <li>Optimisation SEO avancée</li>
      <li>Animations et design responsive</li>
    </ul>

    <div className="flex flex-wrap gap-2 mt-3">
      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">HTML5</span>
      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">CSS3</span>
      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">JavaScript</span>
      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">Bootstrap</span>
    </div>
  </div>
);

// E-commerce Site Project Content
export const ecommerceContent = (
  <div className="space-y-3">
    <div className="flex items-center gap-3">
      <img
          src="https://independant.io/wp-content/uploads/woocommerce_logo.png"
          alt="WooCommerce"
          className="w-8 h-8 object-contain"
      />
      <div>
        <h4 className="font-medium">Solution clé en main</h4>
        <p className="text-sm text-portfolio-gray-dark">Personnalisation avancée d'un thème WordPress</p>
      </div>
    </div>

    <ul className="list-disc pl-5 space-y-1 text-sm">
      <li>Intégration avec système de paiement (PayPal, Carte bancaire)</li>
      <li>Module de livraison personnalisé</li>
      <li>SEO optimisé (Score Lighthouse &gt; 90)</li>
      <li>Backoffice multilingue (FR/AR)</li>
    </ul>

    <div className="flex flex-wrap gap-2 mt-3">
      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">WordPress</span>
      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">WooCommerce</span>
      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Elementor Pro</span>
      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">MySQL</span>
    </div>

    <div className="mt-4 flex justify-between items-center">
      <a href="chicmodapro.com" className="text-sm text-blue-600 hover:underline flex items-center gap-1">
        Visiter le site
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
        </svg>
      </a>
    </div>
  </div>
);