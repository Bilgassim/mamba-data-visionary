# 💼 Portfolio Mohamed Boulkassoum

> **Portfolio professionnel multi-profils** avec système de changement de profil dynamique
> 
> **🔄 4 profils disponibles** : Data Engineering | Cybersécurité | Full Stack | Project Manager

---

## 📚 Guide pour Débutants

### 🚀 Comment utiliser ce portfolio

Ce portfolio est conçu pour être **facile à comprendre et modifier**, même si vous êtes nouveau en programmation.

#### 🎯 Concept Principal
- **Un seul site** = **4 profils différents**
- Quand vous changez de profil, tout le contenu s'adapte automatiquement
- Chaque profil a ses propres compétences, projets et CV

---

## 🗂️ Structure Simple du Projet

```
📁 Portfolio/
├── 📁 src/                          ← Code principal
│   ├── 📁 components/               ← Morceaux réutilisables du site
│   │   ├── HeroSection.tsx          ← Section d'accueil (photo + nom)
│   │   ├── ProjectsSection.tsx      ← Section projets
│   │   ├── SkillsSection.tsx        ← Section compétences
│   │   ├── CVSelector.tsx           ← Sélecteur de CV
│   │   └── ...autres sections
│   ├── 📁 context/                  ← Gestion des profils
│   │   └── ProfileContext.tsx       ← ⭐ FICHIER IMPORTANT ⭐
│   ├── 📁 data/                     ← Données du site
│   │   ├── skillsData.ts            ← Vos compétences
│   │   └── certificationsData.ts    ← Vos certifications
│   └── 📁 pages/
│       └── Index.tsx                ← Page principale
├── 📁 public/                       ← Fichiers publics
│   ├── CV_*.pdf                     ← Vos 4 CV
│   └── Bilgassim.jpg               ← Votre photo
└── README.md                        ← Ce fichier
```

---

## 🔧 Modifications Courantes (Guide Pas-à-Pas)

### 📝 1. Changer le Profil par Défaut

**📁 Fichier:** `src/context/ProfileContext.tsx`  
**📍 Ligne 29**

```typescript
// Pour changer le profil par défaut au chargement
const [selectedProfile, setSelectedProfile] = useState<ProfileType>('project-manager');

// Changez 'project-manager' par :
// 'data-engineering'    ← Data Engineering
// 'pentesting'          ← Cybersécurité  
// 'fullstack'           ← Full Stack
// 'project-manager'     ← Project Manager (actuel)
```

### 🎨 2. Modifier Vos Informations Personnelles

**📁 Fichier:** `src/components/HeroSection.tsx`  
**🔍 Cherchez ces sections:**

```typescript
// Votre nom (ligne ~80)
<h1>Mohamed Boulkassoum</h1>

// Vos réseaux sociaux (ligne ~20)
const socialLinks = [
  { icon: Github, href: "https://github.com/Bilgassim", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/your-profile", label: "LinkedIn" },
  // ... ajoutez ou modifiez vos liens
];
```

### 📊 3. Ajouter/Modifier Vos Compétences

**📁 Fichier:** `src/data/skillsData.ts`

```typescript
// Structure d'une compétence
{
  name: "Python",                    // Nom de la compétence
  level: 90,                        // Niveau (0-100)
  category: "Programmation",        // Catégorie
  profiles: ["data-engineering"]    // Profils où elle apparaît
}

// Pour ajouter une compétence :
// 1. Copiez un élément existant
// 2. Changez name, level, category
// 3. Ajoutez les profils concernés
```

### 🏆 4. Ajouter Vos Certifications

**📁 Fichier:** `src/data/certificationsData.ts`

```typescript
// Structure d'une certification
{
  name: "Nom de la certification",
  issuer: "Organisme qui l'a délivrée", 
  date: "2024",
  description: "Description courte",
  logo: "/path/to/logo.png",        // Logo dans le dossier public/
  profiles: ["profil1", "profil2"]  // Profils concernés
}
```

### 🔄 5. Remplacer Votre Photo

1. **Ajoutez votre photo** dans le dossier `public/`
2. **Renommez-la** `Bilgassim.jpg` (ou modifiez le nom dans `HeroSection.tsx`)
3. **Format recommandé** : JPG, 500x500px minimum

---

## 🛠️ Commandes Importantes

```bash
# 🚀 Démarrer le site en mode développement
npm run dev

# 📦 Installer les dépendances (après téléchargement)
npm install

# 🏗️ Construire pour la production
npm run build

# 👀 Prévisualiser la version de production
npm run preview
```

---

## 🎨 Personnalisation Avancée

### 🎨 Changer les Couleurs

**📁 Fichier:** `src/index.css` (lignes 30-60)

```css
:root {
  --primary: 220 100% 50%;        /* Bleu principal */
  --secondary: 210 40% 98%;       /* Gris clair */
  /* Modifiez ces valeurs HSL pour changer les couleurs */
}
```

### 📱 Responsive Design

Le site s'adapte automatiquement à tous les écrans grâce à **Tailwind CSS**.

**Classes importantes :**
- `sm:` = Petits écrans (≥640px)
- `md:` = Écrans moyens (≥768px)  
- `lg:` = Grands écrans (≥1024px)
- `xl:` = Très grands écrans (≥1280px)

---

## 🚀 Technologies Utilisées

| Technologie | Rôle | Pourquoi |
|------------|------|----------|
| **React 18** | Framework principal | Interface moderne et réactive |
| **TypeScript** | Langage | Code plus sûr avec types |
| **Tailwind CSS** | Styles | Design rapide et responsive |
| **Vite** | Bundler | Développement ultra-rapide |
| **Framer Motion** | Animations | Transitions fluides |

---

## ❓ Problèmes Courants & Solutions

### 🐛 Le site ne se charge pas
```bash
# 1. Vérifiez que Node.js est installé
node --version

# 2. Réinstallez les dépendances
rm -rf node_modules
npm install

# 3. Redémarrez le serveur
npm run dev
```

### 🎨 Mes modifications n'apparaissent pas
```bash
# 1. Sauvegardez votre fichier (Ctrl+S)
# 2. Vérifiez la console pour les erreurs
# 3. Redémarrez le serveur si nécessaire
```

### 📱 Le site ne s'affiche pas bien sur mobile
- Vérifiez que vous utilisez les classes responsive (`sm:`, `md:`, etc.)
- Testez sur plusieurs tailles d'écran

---

## 📞 Support & Aide

### 🔗 Liens Utiles
- **Documentation React** : https://react.dev/
- **Documentation Tailwind** : https://tailwindcss.com/docs
- **Tutoriels TypeScript** : https://www.typescriptlang.org/docs/

### 💡 Conseils pour Débuter
1. **Commencez petit** : Modifiez d'abord les textes et couleurs
2. **Sauvegardez souvent** : Utilisez Git pour sauvegarder vos modifications
3. **Testez fréquemment** : Vérifiez vos changes sur différents écrans
4. **Lisez les commentaires** : Le code contient des explications

---

## 📈 Prochaines Améliorations

### 🎯 Faciles à implémenter
- [ ] Ajouter plus de projets
- [ ] Mettre à jour les certifications
- [ ] Changer les couleurs du thème
- [ ] Ajouter de nouvelles compétences

### 🚀 Avancées
- [ ] Mode sombre/clair
- [ ] Multilingue (FR/EN/AR)
- [ ] Blog intégré
- [ ] Animations avancées

---

**💡 Conseil :** Commencez par modifier vos informations personnelles, puis explorez progressivement les autres fonctionnalités !

---

*Portfolio créé avec ❤️ par Mohamed Boulkassoum | Optimisé pour tous les écrans | Code simple et documenté*