/**
 * 🖱️ CustomCursor - Curseur personnalisé professionnel
 * 
 * Fonctionnalités :
 * - Cercle blanc semi-translucide qui suit la souris
 * - Animation fluide avec framer-motion
 * - Transformation en carré avec brackets {} au survol des liens/boutons
 * - Particule orbitante pour l'aspect tech/data
 * - Changement de couleur et taille au survol d'éléments interactifs
 */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  // 📍 Position du curseur
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // 🎯 État des interactions (survol d'éléments cliquables)
  const [isHovering, setIsHovering] = useState(false);
  
  // 🎪 État pour l'animation de la particule orbitante
  const [orbitAngle, setOrbitAngle] = useState(0);

  // 🖱️ Mise à jour de la position de la souris
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  // 🎯 Détection des éléments interactifs (liens, boutons)
  useEffect(() => {
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // 📝 Sélection des éléments interactifs
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], .cursor-pointer, input, textarea, select'
    );

    // 🔗 Ajout des event listeners
    interactiveElements.forEach((element) => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    // 🧹 Nettoyage
    return () => {
      interactiveElements.forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  // 🌀 Animation continue de la particule orbitante
  useEffect(() => {
    const interval = setInterval(() => {
      setOrbitAngle((prev) => (prev + 2) % 360);
    }, 50); // Rotation fluide toutes les 50ms

    return () => clearInterval(interval);
  }, []);

  // 🔲 Calcul de la position de la particule orbitante
  const orbitRadius = isHovering ? 25 : 20;
  const particleX = mousePosition.x + Math.cos((orbitAngle * Math.PI) / 180) * orbitRadius;
  const particleY = mousePosition.y + Math.sin((orbitAngle * Math.PI) / 180) * orbitRadius;

  return (
    <>
      {/* 🖱️ Curseur principal */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - (isHovering ? 16 : 8),
          y: mousePosition.y - (isHovering ? 16 : 8),
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5
        }}
      >
        {/* 🔵 Cercle principal / Carré au survol */}
        <div
          className={`
            ${isHovering 
              ? 'w-8 h-8 rounded-lg bg-blue-400/70 border-2 border-blue-300' 
              : 'w-4 h-4 rounded-full bg-white/60 border border-white/30'
            }
            transition-all duration-300 ease-out
            backdrop-blur-sm
            relative
            flex items-center justify-center
          `}
        >
          {/* 🔤 Brackets {} au survol */}
          {isHovering && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-white text-xs font-mono font-bold"
            >
              {}
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* ✨ Particule orbitante (nœud de données) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        animate={{
          x: particleX - 3,
          y: particleY - 3,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <div 
          className={`
            w-1.5 h-1.5 rounded-full
            ${isHovering ? 'bg-blue-300 shadow-lg shadow-blue-400/50' : 'bg-white/80'}
            transition-all duration-300
          `}
        />
      </motion.div>

      {/* 🌊 Effet de traînée subtil */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997] mix-blend-screen"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 25,
          mass: 0.8
        }}
      >
        <div 
          className={`
            w-3 h-3 rounded-full
            ${isHovering ? 'bg-blue-200/20' : 'bg-white/20'}
            transition-all duration-500
          `}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;