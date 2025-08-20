// hooks/useLoading.ts
import { useState, useEffect, useCallback } from 'react';

interface UseLoadingOptions {
  initialDelay?: number;
  minLoadingTime?: number;
  autoStop?: boolean;
}

export const useLoading = (options: UseLoadingOptions = {}) => {
  const { initialDelay = 1000, minLoadingTime = 500, autoStop = true } = options;
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  // Fonction pour arrêter le chargement avec animation fluide
  const stopLoading = useCallback(() => {
    setProgress(100);
    // Démarrer la transition de sortie
    setTimeout(() => {
      setIsVisible(false);
      // Retirer complètement le composant après la transition
      setTimeout(() => {
        setIsLoading(false);
      }, 500); // Durée de la transition CSS
    }, 200);
  }, []);

  // Fonction pour simuler une progression
  const simulateProgress = useCallback(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.random() * 15;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
      }
      setProgress(Math.min(currentProgress, 100));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const startTime = Date.now();
    
    // Démarrer la simulation de progression
    const cleanup = simulateProgress();
    
    if (autoStop) {
      const timer = setTimeout(() => {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minLoadingTime - elapsedTime);
        
        setTimeout(() => {
          stopLoading();
        }, remainingTime);
      }, initialDelay);

      return () => {
        clearTimeout(timer);
        cleanup();
      };
    }

    return cleanup;
  }, [initialDelay, minLoadingTime, autoStop, simulateProgress, stopLoading]);

  return { 
    isLoading, 
    isVisible,
    setIsLoading,
    stopLoading,
    progress
  };
};