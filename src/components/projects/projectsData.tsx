import React from 'react';

// ENSAO Project Data
export const ensaoProjectData = {
  title: "Projet IA Médicale - ENSAO",
  description: "Analyse d'images médicales par Deep Learning",
  borderColor: "border-t-portfolio-blue",
  gradientColor: "from-portfolio-blue/5",
  defaultTab: "contextEnsao",
  tabs: [
    {
      id: "contextEnsao",
      label: "Contexte",
      content: (
        <div className="space-y-4">
          <p>Développement d'un système d'intelligence artificielle pour l'analyse automatisée d'images médicales DICOM au sein du projet de recherche à l'ENSAO.</p>
          <p>L'objectif était d'améliorer le diagnostic précoce des pathologies en utilisant des techniques de Computer Vision et de Deep Learning.</p>
        </div>
      )
    },
    {
      id: "techEnsao",
      label: "Technologies",
      content: (
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
      )
    },
    {
      id: "resultsEnsao",
      label: "Résultats",
      content: (
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
      )
    }
  ]
};

// Solidarity World Timeline Data
export const solidarityWorldData = {
  title: "Chef de projet - Solidarity World",
  description: "Management agile et coordination d'équipe",
  borderColor: "border-t-portfolio-blue",
  gradientColor: "from-portfolio-blue/5",
  steps: [
    {
      title: "Définition du projet",
      description: "Élaboration des spécifications et planification"
    },
    {
      title: "Mise en place Jira",
      description: "Configuration des workflows et attribution des tâches"
    },
    {
      title: "Livraison réussie",
      description: "Déploiement et remise au client"
    }
  ],
  skills: ["Gestion de projet", "Méthodologie Agile", "Leadership", "Communication"]
};

// Cabinet Medical Project Data
export const cabinetMedicalData = {
  title: "Plateforme Cabinet Médical",
  description: "Solution de gestion de rendez-vous et dossier patient",
  borderColor: "border-t-portfolio-green",
  gradientColor: "from-portfolio-green/5",
  defaultTab: "contextMedical",
  tabs: [
    {
      id: "contextMedical",
      label: "Contexte",
      content: (
        <div>
          <p>Application web sur mesure pour un cabinet de radiologie comprenant :</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Gestion des rendez-vous en temps réel</li>
            <li>Visualisation des examens (DICOM viewer intégré)</li>
            <li>Espace sécurisé pour les patients et médecins</li>
          </ul>
        </div>
      )
    },
    {
      id: "techMedical",
      label: "Stack",
      content: (
        <div>
          <div className="flex flex-wrap gap-2">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">React</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Node.js</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">MongoDB</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">OHIF Viewer</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Hébergement AWS</span>
          </div>
          <p className="mt-3 text-sm">Architecture microservices avec API REST sécurisée (JWT)</p>
        </div>
      )
    },
    {
      id: "resultsMedical",
      label: "Fonctionnalités",
      content: (
        <div>
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
        </div>
      )
    }
  ]
};

// Détection Calculs Rénaux Data
export const renalDetectionData = {
  title: "Détection Calculs Rénaux (PFA)",
  description: "Système d'IA semi-supervisé avec explicabilité XAI",
  borderColor: "border-t-portfolio-blue",
  gradientColor: "from-portfolio-blue/5",
  defaultTab: "contextRenal",
  tabs: [
    {
      id: "contextRenal",
      label: "Contexte",
      content: (
        <div>
          <p>Projet de fin d'année utilisant ResNet-50 pour la détection automatique des calculs rénaux sur images CT.</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Classification médicale avec explicabilité Grad-CAM++</li>
            <li>Visualisation DICOM intégrée</li>
            <li>Interface web complète (React + FastAPI)</li>
            <li>Architecture microservices avec Docker</li>
          </ul>
        </div>
      )
    },
    {
      id: "techRenal",
      label: "Stack",
      content: (
        <div>
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
        </div>
      )
    },
    {
      id: "resultsRenal",
      label: "Résultats",
      content: (
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
      )
    }
  ]
};