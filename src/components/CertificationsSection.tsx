
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

interface Certification {
  id: number;
  name: string;
  logo: string;
  issuer: string;
  date: string;
  content: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    name: "Apache Spark",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Apache_Spark_logo.svg/1200px-Apache_Spark_logo.svg.png",
    issuer: "LinkedIn Learning",
    date: "Avril 2025",
    content: "Traitement de données massives avec Spark Core, Spark SQL, et Spark Streaming"
  },
  {
    id: 2,
    name: "Apache Airflow",
    logo: "https://airflow.apache.org/docs/apache-airflow/stable/_images/pin_large.png",
    issuer: "LinkedIn Learning",
    date: "Mars 2025",
    content: "Orchestration de workflows et gestion de pipelines de données"
  },
  {
    id: 3,
    name: "Hadoop Ecosystem",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Hadoop_logo.svg/1280px-Hadoop_logo.svg.png",
    issuer: "LinkedIn Learning",
    date: "Février 2025",
    content: "HDFS, MapReduce, et écosystème Hadoop complet"
  },
  {
    id: 4,
    name: "Python Data Science",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
    issuer: "DataCamp",
    date: "Janvier 2025",
    content: "NumPy, Pandas, Matplotlib, et analyse de données avancée"
  },
  {
    id: 5,
    name: "AWS Data Engineering",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png",
    issuer: "AWS",
    date: "Décembre 2024",
    content: "Services AWS pour l'ingénierie des données: S3, Redshift, EMR"
  },
  {
    id: 6,
    name: "Tableau Desktop",
    logo: "https://logos-world.net/wp-content/uploads/2021/10/Tableau-Symbol.png",
    issuer: "Tableau",
    date: "Novembre 2024",
    content: "Visualisation de données et dashboards interactifs"
  }
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="section-container bg-gray-50 scroll-animation">
      <h2 className="section-title">Certifications</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert) => (
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
