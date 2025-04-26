
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

        {/* Cabinet medical */}
        <Card className="shadow-lg border-t-4 border-t-portfolio-green overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-portfolio-green/5 to-transparent">
            <CardTitle className="text-2xl">Plateforme Cabinet Médical</CardTitle>
            <CardDescription>Solution de gestion de rendez-vous et dossier patient</CardDescription>
          </CardHeader>

          <Tabs defaultValue="contextMedical">
            <TabsList className="px-6">
              <TabsTrigger value="contextMedical">Contexte</TabsTrigger>
              <TabsTrigger value="techMedical">Stack</TabsTrigger>
              <TabsTrigger value="resultsMedical">Fonctionnalités</TabsTrigger>
            </TabsList>

            <CardContent className="pt-6">
              <TabsContent value="contextMedical">
                <p>Application web sur mesure pour un cabinet de radiologie comprenant :</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Gestion des rendez-vous en temps réel</li>
                  <li>Visualisation des examens (DICOM viewer intégré)</li>
                  <li>Espace sécurisé pour les patients et médecins</li>
                </ul>
              </TabsContent>

              <TabsContent value="techMedical">
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Node.js</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">MongoDB</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">OHIF Viewer</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Hébergement AWS</span>
                </div>
                <p className="mt-3 text-sm">Architecture microservices avec API REST sécurisée (JWT)</p>
              </TabsContent>

              <TabsContent value="resultsMedical">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <h4 className="font-medium">Patients</h4>
                    <ul className="text-xs mt-1 space-y-1">
                      <li>• Prise de RDV en ligne</li>
                      <li>• Consultation des résultats</li>
                      <li>• Messagerie sécurisée</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <h4 className="font-medium">Administration</h4>
                    <ul className="text-xs mt-1 space-y-1">
                      <li>• Tableau de bord analytique</li>
                      <li>• Export des données</li>
                      <li>• Gestion multi-utilisateurs</li>
                    </ul>
                  </div>
                </div>
                <a href="#" className="inline-block mt-4 text-sm text-green-600 hover:underline">
                  Voir la démo live →
                </a>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>

        {/* Sincoshop */}
        <Card className="shadow-lg border-t-4 border-t-portfolio-orange overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-portfolio-orange/5 to-transparent">
            <CardTitle className="text-2xl">Sincoshop</CardTitle>
            <CardDescription>Système de gestion de stock et ventes</CardDescription>
          </CardHeader>

          <CardContent>
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
          </CardContent>
        </Card>

        {/* Boutique e-shopping */}
        <Card className="shadow-lg border-t-4 border-t-portfolio-blue overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-portfolio-blue/5 to-transparent">
            <CardTitle className="text-2xl">Boutique E-commerce</CardTitle>
            <CardDescription>Site vitrine avec fonctionnalités de vente en ligne</CardDescription>
          </CardHeader>

          <CardContent>
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
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProjectsSection;
