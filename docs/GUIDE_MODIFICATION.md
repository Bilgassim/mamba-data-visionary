# 📖 Guide de Modification - Portfolio Mohamed Boulkassoum

> **Guide complet pour modifier facilement votre portfolio, même sans expérience en programmation**

---

## 🎯 Modifications les Plus Courantes

### 1. 📝 Changer Vos Informations Personnelles

#### ✏️ Modifier votre nom et titre
**📁 Fichier:** `src/components/HeroSection.tsx`

```typescript
// Ligne ~82 - Votre nom principal
<h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
  Mohamed Boulkassoum {/* ← Changez ici */}
</h1>

// Ligne ~85 - Description qui change selon le profil
<p className="text-xl md:text-2xl text-white/90 mb-8">
  {getProfileDescription(selectedProfile)} {/* ← Se met à jour automatiquement */}
</p>
```

#### 📱 Modifier vos réseaux sociaux
**📁 Fichier:** `src/components/HeroSection.tsx` (lignes 25-35)

```typescript
const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/VotreUsername", // ← Changez ici
    label: "GitHub"
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/votre-profil", // ← Changez ici
    label: "LinkedIn"
  },
  {
    icon: Mail,
    href: "mailto:votre.email@example.com", // ← Changez ici
    label: "Email"
  }
  // Ajoutez d'autres réseaux sociaux ici
];
```

### 2. 🔄 Gérer les Profils

#### 🎯 Changer le profil par défaut
**📁 Fichier:** `src/context/ProfileContext.tsx` (ligne 29)

```typescript
// Profil qui s'affiche au chargement du site
const [selectedProfile, setSelectedProfile] = useState<ProfileType>('project-manager');

// Options disponibles :
// 'data-engineering'    ← Ingénieur Data
// 'pentesting'          ← Cybersécurité
// 'fullstack'           ← Développeur Full Stack
// 'project-manager'     ← Chef de Projet (actuellement sélectionné)
```

#### ✏️ Modifier les titres et descriptions des profils
**📁 Fichier:** `src/context/ProfileContext.tsx`

```typescript
// Titres des profils (lignes 14-19)
export const profileTitles = {
  'data-engineering': 'Data Engineering',                    // ← Modifiez ici
  'pentesting': 'Cybersécurité & Pentesting',               // ← Modifiez ici
  'fullstack': 'Full Stack Developer',                      // ← Modifiez ici
  'project-manager': 'Project Manager PMO'                  // ← Modifiez ici
};

// Descriptions des profils (lignes 21-26)
export const profileDescriptions = {
  'data-engineering': 'Spécialiste en ingénierie des données...',    // ← Modifiez ici
  'pentesting': 'Expert en tests de pénétration...',                 // ← Modifiez ici
  'fullstack': 'Développeur Full Stack avec expertise...',           // ← Modifiez ici
  'project-manager': 'Chef de projet avec expertise...'              // ← Modifiez ici
};
```

### 3. 💪 Gérer Vos Compétences

#### ➕ Ajouter une nouvelle compétence
**📁 Fichier:** `src/data/skillsData.ts`

```typescript
// Ajoutez cette structure à la fin du tableau skills :
{
  name: "Nouvelle Compétence",        // ← Nom de la compétence
  level: 85,                          // ← Niveau de 0 à 100
  category: "Programmation",          // ← Catégorie existante ou nouvelle
  profiles: ["fullstack", "data-engineering"]  // ← Profils où elle apparaît
}
```

#### ✏️ Modifier une compétence existante
```typescript
// Trouvez la compétence et modifiez :
{
  name: "Python",           // ← Changez le nom
  level: 95,               // ← Changez le niveau (0-100)
  category: "Programmation", // ← Changez la catégorie
  profiles: ["data-engineering", "fullstack"] // ← Ajoutez/retirez des profils
}
```

#### 📊 Catégories disponibles
```typescript
// Catégories actuelles (vous pouvez en créer de nouvelles) :
- "Programmation"
- "Data & Analytics" 
- "Cloud & DevOps"
- "Sécurité"
- "Gestion de Projet"
- "Design & Frontend"
```

### 4. 🏆 Gérer Vos Certifications

#### ➕ Ajouter une certification
**📁 Fichier:** `src/data/certificationsData.ts`

```typescript
// Ajoutez cette structure :
{
  name: "Nom de la Certification",
  issuer: "Organisme qui l'a délivrée",
  date: "2024",
  description: "Description courte de la certification",
  logo: "/logos/certification-logo.png",  // ← Logo dans public/logos/
  profiles: ["profil1", "profil2"]        // ← Profils concernés
}
```

#### 🖼️ Ajouter un logo de certification
1. Placez le logo dans `public/logos/`
2. Formats recommandés : PNG, SVG, JPG
3. Taille recommandée : 100x100px
4. Référencez-le dans le fichier certifications

### 5. 🛠️ Gérer Vos Projets

#### ➕ Ajouter un nouveau projet
**📁 Fichier:** `src/components/projects/projectsData.tsx`

```typescript
// Ajoutez cette structure :
{
  id: "unique-id",                    // ← Identifiant unique
  title: "Titre du Projet",          // ← Nom du projet
  description: "Description courte",  // ← Résumé
  longDescription: "Description détaillée...", // ← Description complète
  technologies: ["React", "Python"], // ← Technologies utilisées
  profiles: ["fullstack"],           // ← Profils concernés
  category: "Web Development",       // ← Catégorie
  image: "/project-image.jpg",       // ← Image dans public/
  github: "https://github.com/...",  // ← Lien GitHub (optionnel)
  live: "https://demo.com",          // ← Lien de démo (optionnel)
  features: [                        // ← Fonctionnalités clés
    "Fonctionnalité 1",
    "Fonctionnalité 2"
  ]
}
```

### 6. 📷 Changer Votre Photo

#### 🔄 Remplacer la photo de profil
1. **Ajoutez votre photo** dans le dossier `public/`
2. **Renommez-la** `Bilgassim.jpg` ou modifiez le nom dans le code
3. **Spécifications recommandées :**
   - Format : JPG, PNG
   - Taille : 500x500px minimum
   - Fond uniforme de préférence

#### 🔧 Modifier le chemin de la photo
**📁 Fichier:** `src/components/HeroSection.tsx`

```typescript
// Ligne ~70 - Changez le nom du fichier
<img
  src="/votre-nouvelle-photo.jpg"  // ← Changez ici
  alt="Mohamed Boulkassoum"
  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"
/>
```

### 7. 📄 Gérer Vos CV

#### 📁 Remplacer les fichiers CV
1. Placez vos nouveaux CV dans le dossier `public/`
2. Nommez-les exactement comme les anciens :
   - `CV_Mohamed_Boulkassoum_Data_Engineering.pdf`
   - `CV_Mohamed_Boulkassoum_Pentesting.pdf`
   - `CV_Mohamed_Boulkassoum_FullStack.pdf`
   - `CV_Mohamed_Boulkassoum_PMO.pdf`

#### 🔄 Ou modifier les noms dans le code
**📁 Fichier:** `src/components/CVSelector.tsx` (lignes 16-49)

```typescript
const cvOptions: CVOption[] = [
  {
    id: 'data-engineering',
    title: 'Data Engineering',
    description: 'Spécialisé en ingénierie des données...',
    fileName: 'VOTRE_NOUVEAU_NOM_CV.pdf', // ← Changez ici
    icon: Database,
    color: 'text-blue-600'
  },
  // ... répétez pour les autres profils
];
```

---

## 🎨 Personnalisation Visuelle

### 🌈 Changer les Couleurs

#### 🎯 Couleurs principales
**📁 Fichier:** `src/index.css` (lignes 30-60)

```css
:root {
  /* Couleur principale (bleu actuel) */
  --primary: 220 100% 50%;        /* Format : H S L */
  
  /* Couleur secondaire */
  --secondary: 210 40% 98%;
  
  /* Couleurs de fond */
  --background: 0 0% 100%;        /* Blanc */
  --foreground: 222.2 84% 4.9%;   /* Noir/gris foncé */
}

/* Pour changer les couleurs :
   H = Teinte (0-360) : 0=rouge, 120=vert, 240=bleu
   S = Saturation (0-100%) : 0=gris, 100=couleur vive
   L = Luminosité (0-100%) : 0=noir, 50=couleur pure, 100=blanc
*/
```

#### 🔵 Exemples de couleurs populaires
```css
/* Bleu (actuel) */
--primary: 220 100% 50%;

/* Vert */
--primary: 120 100% 40%;

/* Rouge */
--primary: 0 100% 50%;

/* Orange */
--primary: 30 100% 50%;

/* Violet */
--primary: 270 100% 50%;
```

### 📱 Responsive Design

Le site s'adapte automatiquement à tous les écrans. Les préfixes importants :

- `sm:` = Smartphones (≥640px)
- `md:` = Tablettes (≥768px)
- `lg:` = Ordinateurs portables (≥1024px)
- `xl:` = Écrans larges (≥1280px)

---

## 🚀 Commandes de Développement

```bash
# 🟢 Démarrer le serveur de développement
npm run dev
# Ouvre automatiquement http://localhost:5173

# 📦 Installer les dépendances (après clonage)
npm install

# 🏗️ Construire pour la production
npm run build

# 👀 Prévisualiser la version de production
npm run preview

# 🧹 Nettoyer le cache
rm -rf node_modules .next
npm install
```

---

## ⚠️ Erreurs Courantes & Solutions

### 🔴 "Module not found"
```bash
# Solution : Réinstaller les dépendances
rm -rf node_modules
npm install
```

### 🔴 "Port already in use"
```bash
# Solution : Changer le port ou tuer le processus
npm run dev -- --port 3001
```

### 🔴 Les modifications n'apparaissent pas
1. **Sauvegardez** le fichier (Ctrl+S)
2. **Vérifiez** la console pour les erreurs
3. **Redémarrez** le serveur si nécessaire

### 🔴 Images ne s'affichent pas
1. **Vérifiez** que l'image est dans `public/`
2. **Vérifiez** le chemin (commence par `/`)
3. **Vérifiez** l'extension du fichier

---

## 📞 Aide Supplémentaire

### 🔗 Resources Utiles
- **React** : https://react.dev/learn
- **Tailwind CSS** : https://tailwindcss.com/docs
- **TypeScript** : https://www.typescriptlang.org/docs

### 💡 Conseils pour Débuter
1. **Commencez petit** : Modifiez d'abord les textes
2. **Testez souvent** : Sauvegardez et vérifiez après chaque modification
3. **Lisez les commentaires** : Le code contient des explications
4. **Copiez-collez** : Dupliquez les structures existantes pour ajouter du contenu

---

**🎉 Félicitations ! Vous savez maintenant comment personnaliser votre portfolio.**

*N'hésitez pas à expérimenter - vous pouvez toujours revenir en arrière !*