import React, { createContext, useContext, useState, ReactNode } from 'react';

export type ProfileType = 'data-engineering' | 'pentesting' | 'fullstack' | 'project-manager';

interface ProfileContextType {
  selectedProfile: ProfileType;
  setSelectedProfile: (profile: ProfileType) => void;
  getProfileTitle: (profile: ProfileType) => string;
  getProfileDescription: (profile: ProfileType) => string;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const profileTitles = {
  'data-engineering': 'Data Engineering',
  'pentesting': 'Cybersécurité & Pentesting',
  'fullstack': 'Full Stack Developer',
  'project-manager': 'Project Manager PMO'
};

export const profileDescriptions = {
  'data-engineering': 'Spécialiste en ingénierie des données, Big Data et architecture de systèmes',
  'pentesting': 'Expert en tests de pénétration et sécurité des systèmes d\'information',
  'fullstack': 'Développeur Full Stack avec expertise React, Laravel et technologies modernes',
  'project-manager': 'Chef de projet avec expertise en gestion agile et management d\'équipe'
};

export const ProfileProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedProfile, setSelectedProfile] = useState<ProfileType>('project-manager');

  const getProfileTitle = (profile: ProfileType): string => {
    return profileTitles[profile];
  };

  const getProfileDescription = (profile: ProfileType): string => {
    return profileDescriptions[profile];
  };

  return (
    <ProfileContext.Provider value={{
      selectedProfile,
      setSelectedProfile,
      getProfileTitle,
      getProfileDescription
    }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};