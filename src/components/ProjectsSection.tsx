
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState('contextEnsao');

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <section id="projects" className="section-container scroll-animation">
      <h2 className="section-title">Expériences & Projets</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* ENSAO AI Project */}
        <Card className="shadow-lg border-t-4 border-t-portfolio-blue overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-portfolio-blue/5 to-transparent">
            <CardTitle className="text-2xl">Projet IA Médicale - ENSAO</CardTitle>
            <CardDescription>Analyse d'images médicales par Deep Learning</CardDescription>
          </CardHeader>
          
          <Tabs defaultValue="contextEnsao" className="w-full" onValueChange={handleTabChange}>
            <div className="px-6">
              <TabsList className="w-full justify-start">
                <TabsTrigger value="contextEnsao">Contexte</TabsTrigger>
                <TabsTrigger value="techEnsao">Technologies</TabsTrigger>
                <TabsTrigger value="resultsEnsao">Résultats</TabsTrigger>
              </TabsList>
            </div>
            
            <CardContent className="pt-6">
              <TabsContent value="contextEnsao">
                <div className="space-y-4">
                  <p>Développement d'un système d'intelligence artificielle pour l'analyse automatisée d'images médicales DICOM au sein du projet de recherche à l'ENSAO.</p>
                  <p>L'objectif était d'améliorer le diagnostic précoce des pathologies en utilisant des techniques de Computer Vision et de Deep Learning.</p>
                </div>
              </TabsContent>
              
              <TabsContent value="techEnsao">
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-portfolio-blue-dark px-3 py-1 rounded-full text-sm">Python</span>
                    <span className="bg-blue-100 text-portfolio-blue-dark px-3 py-1 rounded-full text-sm">PyTorch</span>
                    <span className="bg-blue-100 text-portfolio-blue-dark px-3 py-1 rounded-full text-sm">CNN</span>
                    <span className="bg-blue-100 text-portfolio-blue-dark px-3 py-1 rounded-full text-sm">Grad-CAM</span>
                    <span className="bg-blue-100 text-portfolio-blue-dark px-3 py-1 rounded-full text-sm">DICOM</span>
                  </div>
                  <p className="mt-4">Utilisation de réseaux de neurones convolutifs (CNN) pour la classification des images et Grad-CAM pour la visualisation des zones d'intérêt identifiées par le modèle.</p>
                </div>
              </TabsContent>
              
              <TabsContent value="resultsEnsao">
                <div className="space-y-4">
                  <p>Le système a atteint une précision de 94% dans l'identification des anomalies, réduisant le temps d'analyse par les radiologues de 45%.</p>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="border rounded-md p-2">
                      <p className="text-xs text-center text-portfolio-gray-dark mb-2">Image originale</p>
                      <div className="aspect-square bg-gray-100 rounded flex items-center justify-center">
                        <p className="text-xs text-gray-500">Image DICOM</p>
                      </div>
                    </div>
                    <div className="border rounded-md p-2">
                      <p className="text-xs text-center text-portfolio-gray-dark mb-2">Après traitement</p>
                      <div className="aspect-square bg-gray-100 rounded flex items-center justify-center">
                        <p className="text-xs text-gray-500">Image traitée</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
        
        {/* Solidarity World Project */}
        <Card className="shadow-lg border-t-4 border-t-portfolio-blue overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-portfolio-blue/5 to-transparent">
            <CardTitle className="text-2xl">Chef de projet - Solidarity World</CardTitle>
            <CardDescription>Management agile et coordination d'équipe</CardDescription>
          </CardHeader>
          
          <CardContent>
            <div className="relative">
              <div className="absolute top-0 bottom-0 left-2 w-0.5 bg-portfolio-gray-light"></div>
              
              <div className="relative pl-8 pb-6">
                <div className="absolute left-0 w-4 h-4 rounded-full bg-portfolio-blue-dark"></div>
                <h3 className="text-lg font-medium">Définition du projet</h3>
                <p className="text-sm text-portfolio-gray-dark">Élaboration des spécifications et planification</p>
              </div>
              
              <div className="relative pl-8 pb-6">
                <div className="absolute left-0 w-4 h-4 rounded-full bg-portfolio-blue-dark"></div>
                <h3 className="text-lg font-medium">Mise en place Jira</h3>
                <p className="text-sm text-portfolio-gray-dark">Configuration des workflows et attribution des tâches</p>
              </div>
              
              <div className="relative pl-8">
                <div className="absolute left-0 w-4 h-4 rounded-full bg-portfolio-blue-dark"></div>
                <h3 className="text-lg font-medium">Livraison réussie</h3>
                <p className="text-sm text-portfolio-gray-dark">Déploiement et remise au client</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Gestion de projet</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Méthodologie Agile</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Leadership</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Communication</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProjectsSection;
