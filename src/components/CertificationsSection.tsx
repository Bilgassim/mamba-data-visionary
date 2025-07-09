
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { certifications } from '../data/certificationsData';
import { useProfile } from '../context/ProfileContext';

const CertificationsSection = () => {
  const { selectedProfile } = useProfile();
  
  const filteredCertifications = certifications.filter(cert => 
    cert.profiles.includes(selectedProfile)
  );
  return (
    <section id="certifications" className="section-container bg-gray-50 scroll-animation">
      <h2 className="section-title">Certifications</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCertifications.map((cert) => (
          <HoverCard key={cert.id}>
            <HoverCardTrigger asChild>
              <Card className="overflow-hidden card-hover cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-white rounded-md p-2 flex items-center justify-center">
                      <img src={cert.logo} alt={cert.name} className="max-h-12 max-w-full" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{cert.name}</h3>
                      <p className="text-sm text-portfolio-gray">{cert.issuer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <h4 className="font-semibold">{cert.name}</h4>
                  <span className="text-xs text-portfolio-blue-dark bg-blue-50 px-2 py-0.5 rounded-full">{cert.date}</span>
                </div>
                <p className="text-sm">{cert.content}</p>
                <p className="text-xs text-portfolio-gray-light">Délivré par : {cert.issuer}</p>
              </div>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
