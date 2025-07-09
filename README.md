# Portfolio - Mohamed Boulkassoum

Portfolio professionnel multi-profils présentant mes compétences en Data Engineering, Cybersécurité, Full Stack Development et Project Management.

## 🚀 Fonctionnalités Développées

### ✅ Système de Profils Multi-CV
- **Sélection de profils**: Data Engineering, Pentesting & Cybersécurité, Full Stack Developer, Project Manager PMO
- **Contenu adaptatif**: Compétences, certifications et descriptions changent selon le profil sélectionné
- **Téléchargement de CV**: CV spécialisé pour chaque profil

### ✅ Sections Réalisées
- **Hero Section**: Présentation dynamique avec sélection de profil
- **Projets**: Cartes avec onglets, timeline et format simple
- **Compétences**: Filtrage automatique par profil sélectionné
- **Certifications**: Affichage contextuel selon le profil
- **Formation**: Parcours académique
- **Contact**: Formulaire de contact

### ✅ Design & UX
- **Design Moderne**: Animations CSS fluides et palette cohérente
- **100% Responsive**: Adapté à tous les écrans
- **Navigation fluide**: Transitions et animations
- **Cartes interactives**: Hover effects et transitions

## 🔮 Fonctionnalités à Développer

### 📋 Prochaines Étapes
- [ ] **Expériences professionnelles** filtrées par profil
- [ ] **Projets GitHub** avec API intégration
- [ ] **Blog technique** avec articles par domaine
- [ ] **Témoignages clients** et recommandations
- [ ] **Dashboard analytics** pour suivi des visites
- [ ] **Mode sombre/clair** avec switch
- [ ] **Multilingue** (FR/EN/AR)
- [ ] **SEO avancé** avec meta tags dynamiques

### 🎯 Améliorations Futures
- [ ] **Animationsavancées** (GSAP, Framer Motion)
- [ ] **Lazy loading** pour optimisation
- [ ] **PWA** pour installation mobile
- [ ] **Tests unitaires** et e2e
- [ ] **CI/CD** avec GitHub Actions

## 💻 Technologies

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Shadcn/UI
- **État**: React Context API
- **Icons**: Lucide React
- **Déploiement**: Netlify

## 🔧 Installation

```bash
git clone https://github.com/Bilgassim/portfolio.git
cd portfolio
npm install
npm run dev
```

## 📁 Structure du Projet

```
src/
├── components/
│   ├── projects/           # Composants projets
│   │   ├── ProjectCardWithTabs.tsx
│   │   ├── TimelineProjectCard.tsx
│   │   ├── SimpleProjectCard.tsx
│   │   ├── projectsData.tsx
│   │   └── simpleProjectsData.tsx
│   ├── ui/                 # Composants UI (Shadcn)
│   ├── HeroSection.tsx
│   ├── ProjectsSection.tsx
│   ├── SkillsSection.tsx
│   ├── CertificationsSection.tsx
│   ├── EducationSection.tsx
│   ├── ContactSection.tsx
│   ├── CVSelector.tsx
│   └── ...
├── context/
│   └── ProfileContext.tsx  # Gestion des profils
├── data/
│   ├── skillsData.ts      # Données compétences
│   └── certificationsData.ts
├── pages/
│   └── Index.tsx
└── main.tsx

public/
├── CV_Mohamed_Boulkassoum_Data_Engineering.pdf
├── CV_Mohamed_Boulkassoum_Pentesting.pdf
├── CV_Mohamed_Boulkassoum_FullStack.pdf
├── CV_Mohamed_Boulkassoum_PMO.pdf
└── Bilgassim.jpg
```

## 🎨 Système de Profils

### Data Engineering
- **Focus**: Big Data, Machine Learning, IA médicale
- **Compétences**: Python, Spark, Hadoop, PyTorch
- **Projets**: Détection calculs rénaux, pipelines données

### Pentesting & Cybersécurité
- **Focus**: Tests de pénétration, sécurité SI
- **Compétences**: Kali Linux, Metasploit, OWASP
- **Certifications**: CEH, CISSP Associate

### Full Stack Developer
- **Focus**: Applications web modernes
- **Compétences**: React, Laravel, Node.js
- **Projets**: DarijaQuest, sites vitrines

### Project Manager PMO
- **Focus**: Gestion de projet, leadership
- **Compétences**: Agile/Scrum, Jira, MS Project
- **Certifications**: PMP, Scrum Master


