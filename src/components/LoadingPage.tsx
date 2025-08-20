import React from 'react';
import { motion } from 'framer-motion';

interface LoadingPageProps {
  onComplete: () => void;
}

const LoadingPage: React.FC<LoadingPageProps> = ({ onComplete }) => {
  // Animation sur 3 secondes puis disparition
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-gradient-to-br from-background via-muted to-background flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="flex flex-col items-center space-y-8">
        {/* Logo MB avec animation */}
        <motion.div
          className="relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center text-white font-bold text-3xl md:text-4xl shadow-2xl"
            animate={{ 
              boxShadow: [
                "0 0 20px rgba(34, 91, 153, 0.3)",
                "0 0 40px rgba(34, 91, 153, 0.6)",
                "0 0 20px rgba(34, 91, 153, 0.3)"
              ]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            MB
          </motion.div>
        </motion.div>

        {/* Nom avec animation typographique */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.h1 
            className="text-2xl md:text-3xl font-bold text-foreground mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Mohamed Boulkassoum
          </motion.h1>
          <motion.p
            className="text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Portfolio Portfolio
          </motion.p>
        </motion.div>

        {/* Barre de progression circulaire */}
        <motion.div
          className="relative w-16 h-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              className="text-muted"
            />
            <motion.circle
              cx="32"
              cy="32"
              r="28"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              className="text-primary"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              style={{
                strokeDasharray: "176",
                strokeDashoffset: 0,
              }}
            />
          </svg>
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-2 h-2 bg-primary rounded-full"></div>
          </motion.div>
        </motion.div>

        {/* Texte de chargement avec animation */}
        <motion.div
          className="flex items-center space-x-1 text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <span>Chargement</span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            ...
          </motion.span>
        </motion.div>

        {/* Éléments skeleton pour l'effet de préchargement */}
        <motion.div
          className="w-full max-w-md space-y-3 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <motion.div
            className="h-3 bg-muted rounded animate-pulse"
            style={{ width: "80%" }}
          />
          <motion.div
            className="h-3 bg-muted rounded animate-pulse"
            style={{ width: "60%" }}
          />
          <motion.div
            className="h-3 bg-muted rounded animate-pulse"
            style={{ width: "90%" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingPage;