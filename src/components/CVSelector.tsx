import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from "@/components/ui/card";
import { Download, Database, Shield, Code, ClipboardList, Loader2 } from 'lucide-react';
import { useProfile, ProfileType } from '../context/ProfileContext';

interface CVOption {
  id: string;
  title: string;
  description: string;
  fileName: string;
  icon: React.ElementType;
  color: string; // couleur de l’icône
}

const cvOptions: CVOption[] = [
  {
    id: 'data-engineering',
    title: 'Data Engineering',
    description: 'Spécialisé en ingénierie des données, Big Data et architecture de systèmes',
    fileName: 'CV_Mohamed_Boulkassoum_Data_Engineering.pdf',
    icon: Database,
    color: 'text-blue-600'
  },
  {
    id: 'pentesting',
    title: 'Pentesting & Cybersécurité',
    description: 'Expert en tests de pénétration et sécurité des systèmes d\'information',
    fileName: 'CV_Mohamed_Boulkassoum_Pentesting.pdf',
    icon: Shield,
    color: 'text-red-600'
  },
  {
    id: 'fullstack',
    title: 'Full Stack Developer',
    description: 'Développeur Full Stack avec expertise React, Laravel et technologies modernes',
    fileName: 'CV_Mohamed_Boulkassoum_FullStack.pdf',
    icon: Code,
    color: 'text-green-600'
  },
  {
    id: 'project-manager',
    title: 'Project Manager PMO',
    description: 'Chef de projet avec expertise en gestion agile et management d\'équipe',
    fileName: 'CV_Mohamed_Boulkassoum_PMO.pdf',
    icon: ClipboardList,
    color: 'text-purple-600'
  }
];

const CVSelector = () => {
  const { selectedProfile, setSelectedProfile } = useProfile();
  const [downloading, setDownloading] = useState(false);

  const handleDownloadCV = (fileName: string) => {
    setDownloading(true);
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = `/${fileName}`;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setDownloading(false);
    }, 800);
  };

  const selectedOption = cvOptions.find(cv => cv.id === selectedProfile);

  return (
    <div className="space-y-10">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold mb-3 text-gray-900">
          Téléchargez mon CV
        </h3>
        <p className="text-gray-600 text-sm">Choisissez le profil qui vous correspond</p>
      </div>

      {/* Grid des options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {cvOptions.map((cv) => {
          const Icon = cv.icon;
          const isSelected = selectedProfile === cv.id;

          return (
            <Card
              key={cv.id}
              role="button"
              aria-selected={isSelected}
              tabIndex={0}
              className={`
                cursor-pointer rounded-xl border transition-all duration-300 
                hover:shadow-md hover:-translate-y-1
                ${isSelected ? 'border-portfolio-blue ring-2 ring-portfolio-blue/50' : 'border-gray-200'}
              `}
              onClick={() => setSelectedProfile(cv.id as ProfileType)}
            >
              <CardContent className="p-6 text-center flex flex-col items-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <Icon className={`w-6 h-6 ${cv.color}`} />
                </div>
                <h4 className="font-semibold text-gray-900">{cv.title}</h4>
                <p className="text-sm text-gray-500">{cv.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Bouton de téléchargement */}
      {selectedOption && (
        <div className="text-center transition-opacity duration-300">
          <Button
            onClick={() => handleDownloadCV(selectedOption.fileName)}
            className="bg-portfolio-blue-dark hover:bg-portfolio-blue text-white px-8 py-3 rounded-lg shadow-sm transition-all"
            disabled={downloading}
          >
            {downloading ? (
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              <Download className="w-4 h-4 mr-2" />
            )}
            {downloading ? 'Téléchargement...' : `Télécharger CV ${selectedOption.title}`}
          </Button>
        </div>
      )}
    </div>
  );
};

export default CVSelector;