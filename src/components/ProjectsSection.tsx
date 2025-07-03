
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

        {/* Détection automatique des calculs rénaux */}
        <Card className="shadow-lg border-t-4 border-t-portfolio-blue overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-portfolio-blue/5 to-transparent">
            <CardTitle className="text-2xl">Détection Calculs Rénaux (PFA)</CardTitle>
            <CardDescription>Système d'IA semi-supervisé avec explicabilité XAI</CardDescription>
          </CardHeader>

          <Tabs defaultValue="contextRenal">
            <TabsList className="px-6">
              <TabsTrigger value="contextRenal">Contexte</TabsTrigger>
              <TabsTrigger value="techRenal">Stack</TabsTrigger>
              <TabsTrigger value="resultsRenal">Résultats</TabsTrigger>
            </TabsList>

            <CardContent className="pt-6">
              <TabsContent value="contextRenal">
                <p>Projet de fin d'année utilisant ResNet-50 pour la détection automatique des calculs rénaux sur images CT.</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Classification médicale avec explicabilité Grad-CAM++</li>
                  <li>Visualisation DICOM intégrée</li>
                  <li>Interface web complète (React + FastAPI)</li>
                  <li>Architecture microservices avec Docker</li>
                </ul>
              </TabsContent>

              <TabsContent value="techRenal">
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Python</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">PyTorch</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">FastAPI</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Cornerstone.js</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Docker</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Redis</span>
                </div>
                <p className="mt-3 text-sm">Architecture microservices avec Celery pour le traitement asynchrone des images médicales</p>
              </TabsContent>

              <TabsContent value="resultsRenal">
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h4 className="font-medium">Performance</h4>
                      <ul className="text-xs mt-1 space-y-1">
                        <li>• Précision : 89.5%</li>
                        <li>• AUC : 0.91</li>
                        <li>• Validation radiologues</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h4 className="font-medium">Innovation</h4>
                      <ul className="text-xs mt-1 space-y-1">
                        <li>• Explicabilité IA</li>
                        <li>• Interface DICOM</li>
                        <li>• Temps réel</li>
                      </ul>
                    </div>
                  </div>
                  <button className="w-full mt-4 text-sm text-blue-600 hover:underline">
                    En savoir plus →
                  </button>
                </div>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>

        {/* DarijaQuest */}
        <Card className="shadow-lg border-t-4 border-t-portfolio-green overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-portfolio-green/5 to-transparent">
            <CardTitle className="text-2xl">DarijaQuest</CardTitle>
            <CardDescription>Plateforme d'apprentissage du Darija en ligne</CardDescription>
          </CardHeader>

          <CardContent>
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

              <button className="w-full mt-4 text-sm text-green-600 hover:underline">
                En savoir plus →
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Mamba Academy */}
        <Card className="shadow-lg border-t-4 border-t-portfolio-orange overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-portfolio-orange/5 to-transparent">
            <CardTitle className="text-2xl">Mamba Academy</CardTitle>
            <CardDescription>Site vitrine pour centre de formations bureautiques</CardDescription>
          </CardHeader>

          <CardContent>
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

              <button className="w-full mt-4 text-sm text-orange-600 hover:underline">
                En savoir plus →
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Site e-marketing */}
        <Card className="shadow-lg border-t-4 border-t-purple-500 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-purple-500/5 to-transparent">
            <CardTitle className="text-2xl">Site E-Marketing</CardTitle>
            <CardDescription>Site vitrine pour entreprise de marketing digital</CardDescription>
          </CardHeader>

          <CardContent>
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

              <button className="w-full mt-4 text-sm text-purple-600 hover:underline">
                En savoir plus →
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProjectsSection;
