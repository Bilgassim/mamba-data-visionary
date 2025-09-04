/**
 * 🔄 ProfileContext - Système central de gestion des profils
 * 
 * Ce fichier gère le changement dynamique entre les 4 profils professionnels :
 * - data-engineering : Ingénieur Data / IA
 * - pentesting : Expert Cybersécurité  
 * - fullstack : Développeur Full Stack
 * - project-manager : Chef de Projet PMO
 * 
 * 🎯 Utilisation : useProfile() dans n'importe quel composant
 * 🔧 Pour changer le profil par défaut : modifier ligne 29
 */
import React, { createContext, useContext, useState, ReactNode } from 'react';

// 🏷️ Types de profils disponibles
export type ProfileType = 'data-engineering' | 'pentesting' | 'fullstack' | 'project-manager';

// 📋 Interface du contexte (ce que les composants peuvent utiliser)
interface ProfileContextType {
  selectedProfile: ProfileType;                           // Profil actuellement sélectionné
  setSelectedProfile: (profile: ProfileType) => void;     // Fonction pour changer de profil
  getProfileTitle: (profile: ProfileType) => string;      // Obtenir le titre d'un profil
  getProfileDescription: (profile: ProfileType) => string; // Obtenir la description d'un profil
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

// 🏷️ Titres des profils (affichés dans l'interface)
export const profileTitles = {
  'data-engineering': 'Data Engineering',           // Titre pour le profil Data Engineering
  'pentesting': 'Cybersécurité & Pentesting',      // Titre pour le profil Cybersécurité
  'fullstack': 'Full Stack Developer',             // Titre pour le profil Full Stack
  'project-manager': 'Project Manager PMO'         // Titre pour le profil Project Manager
};

// 📝 Descriptions des profils (affichées sous le nom dans HeroSection)
export const profileDescriptions = {
  'data-engineering': 'Spécialiste en ingénierie des données, Big Data et architecture de systèmes',
  'pentesting': 'Expert en tests de pénétration et sécurité des systèmes d\'information',
  'fullstack': 'Développeur Full Stack avec expertise React, Laravel et technologies modernes',
  'project-manager': 'Chef de projet avec expertise en gestion agile et management d\'équipe'
};

// 🎯 Composant Provider - Fournit le contexte à toute l'application
export const ProfileProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // 🔧 PROFIL PAR DÉFAUT - Modifiez ici pour changer le profil de démarrage
  const [selectedProfile, setSelectedProfile] = useState<ProfileType>('project-manager');

  // 📖 Fonction pour obtenir le titre d'un profil
  const getProfileTitle = (profile: ProfileType): string => {
    return profileTitles[profile];
  };

  // 📖 Fonction pour obtenir la description d'un profil  
  const getProfileDescription = (profile: ProfileType): string => {
    return profileDescriptions[profile];
  };

  // 🔗 Fournit toutes les fonctions et données aux composants enfants
  return (
    <ProfileContext.Provider value={{
      selectedProfile,          // Profil actuellement sélectionné
      setSelectedProfile,       // Fonction pour changer de profil
      getProfileTitle,          // Fonction pour obtenir le titre
      getProfileDescription     // Fonction pour obtenir la description
    }}>
      {children}
    </ProfileContext.Provider>
  );
};

// 🪝 Hook personnalisé pour utiliser le contexte des profils
// Utilisation : const { selectedProfile, setSelectedProfile } = useProfile();
export const useProfile = () => {
  const context = useContext(ProfileContext);
  
  // ⚠️ Vérification de sécurité : le hook doit être utilisé dans un Provider
  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  
  return context;
};