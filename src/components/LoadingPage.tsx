import React from "react";
import { motion } from "framer-motion";

interface LoadingPageProps {
  onLoadingComplete: () => void;
}

const LoadingPage: React.FC<LoadingPageProps> = ({ onLoadingComplete }) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 flex items-center justify-center z-[100]"
    >
      <div className="text-center space-y-8">
        {/* Logo/Initiales avec animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 rounded-full flex items-center justify-center shadow-2xl">
            <span className="text-3xl font-bold text-white">MB</span>
          </div>
          
          {/* Cercle d'animation autour du logo */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 w-24 h-24 border-4 border-transparent border-t-blue-500 border-r-purple-600 rounded-full"
          />
        </motion.div>

        {/* Nom avec animation de typing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="space-y-2"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-3xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-700 bg-clip-text text-transparent"
          >
            Mohamed Boulkassoum
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="text-sm text-gray-600 font-medium"
          >
            Portfolio de développement
          </motion.p>
        </motion.div>

        {/* Animation de chargement avec texte */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="space-y-4"
        >
          {/* Barre de progression animée */}
          <div className="w-48 h-1 bg-gray-300 rounded-full mx-auto overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
            />
          </div>
          
          {/* Texte de chargement avec animation de points */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
            className="text-gray-500 text-sm"
          >
            <span>Chargement</span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ...
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Skeleton loader pour donner une idée du contenu à venir */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
          className="space-y-3 w-64 mx-auto"
        >
          <div className="space-y-2">
            <div className="h-2 bg-gray-300 rounded animate-pulse"></div>
            <div className="h-2 bg-gray-300 rounded animate-pulse w-3/4"></div>
            <div className="h-2 bg-gray-300 rounded animate-pulse w-1/2"></div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingPage;