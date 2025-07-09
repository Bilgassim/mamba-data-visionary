import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from "@/components/ui/card";
import { Download, Database, Shield, Code, ClipboardList } from 'lucide-react';

interface CVOption {
  id: string;
  title: string;
  description: string;
  fileName: string;
  icon: React.ElementType;
  color: string;
}

const cvOptions: CVOption[] = [
  {
    id: 'data-engineering',
    title: 'Data Engineering',
    description: 'Spécialisé en ingénierie des données, Big Data et architecture de systèmes',
    fileName: 'CV_Mohamed_Boulkassoum_Data_Engineering.pdf',
    icon: Database,
    color: 'bg-blue-500'
  },
  {
    id: 'pentesting',
    title: 'Pentesting & Cybersécurité',
    description: 'Expert en tests de pénétration et sécurité des systèmes d\'information',
    fileName: 'CV_Mohamed_Boulkassoum_Pentesting.pdf',
    icon: Shield,
    color: 'bg-red-500'
  },
  {
    id: 'fullstack',
    title: 'Full Stack Developer',
    description: 'Développeur Full Stack avec expertise React, Laravel et technologies modernes',
    fileName: 'CV_Mohamed_Boulkassoum_FullStack.pdf',
    icon: Code,
    color: 'bg-green-500'
  },
  {
    id: 'project-manager',
    title: 'Project Manager PMO',
    description: 'Chef de projet avec expertise en gestion agile et management d\'équipe',
    fileName: 'CV_Mohamed_Boulkassoum_PMO.pdf',
    icon: ClipboardList,
    color: 'bg-purple-500'
  }
];

const CVSelector = () => {
  const [selectedCV, setSelectedCV] = useState<string>('data-engineering');

  const handleDownloadCV = (fileName: string) => {
    const link = document.createElement('a');
    link.href = `/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const selectedOption = cvOptions.find(cv => cv.id === selectedCV);

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">Téléchargez mon CV</h3>
        <p className="text-gray-600">Choisissez le profil qui vous intéresse</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {cvOptions.map((cv) => {
          const Icon = cv.icon;
          return (
            <Card 
              key={cv.id} 
              className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                selectedCV === cv.id 
                  ? 'ring-2 ring-portfolio-blue border-portfolio-blue' 
                  : 'hover:border-portfolio-blue/50'
              }`}
              onClick={() => setSelectedCV(cv.id)}
            >
              <CardContent className="p-4 text-center">
                <div className={`w-12 h-12 ${cv.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2 text-sm">{cv.title}</h4>
                <p className="text-xs text-gray-600 leading-tight">{cv.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {selectedOption && (
        <div className="text-center">
          <Button 
            onClick={() => handleDownloadCV(selectedOption.fileName)}
            className="bg-portfolio-blue-dark hover:bg-portfolio-blue text-white px-8 py-3 rounded-md shadow-md transition-colors"
          >
            <Download className="w-4 h-4 mr-2" />
            Télécharger CV {selectedOption.title}
          </Button>
        </div>
      )}
    </div>
  );
};

export default CVSelector;