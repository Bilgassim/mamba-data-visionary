import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useEffect, useState, useCallback, useMemo } from "react";

interface LoadingPageProps {
  onLoadingComplete?: () => void;
  progress?: number;
  message?: string;
  minDuration?: number;
  theme?: 'light' | 'dark' | 'auto';
  showCode?: boolean;
  customLogo?: string;
  tasks?: string[];
  autoProgress?: boolean;
}

const LoadingPage = ({ 
  onLoadingComplete, 
  progress = 0, 
  message = "Initializing system...",
  minDuration = 10000, // 10 secondes par défaut
  theme = 'dark',
  showCode = true,
  customLogo = "MB",
  tasks = [
    "Loading development environment...",
    "Connecting to database clusters...",
    "Initializing data pipelines...",
    "Setting up project configurations...",
    "Synchronizing repositories...",
    "Configuring security protocols...",
    "Establishing network connections...",
    "Validating system integrity..."
  ],
  autoProgress = true // Activé par défaut pour la durée de 10s
}: LoadingPageProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [displayProgress, setDisplayProgress] = useState(0);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [internalProgress, setInternalProgress] = useState(0);
  const [codeLines, setCodeLines] = useState<string[]>([]);
  
  const controls = useAnimation();

  // Code snippets adaptés pour mobile
  const codeSnippets = {
    mobile: [
      "$ npm start",
      "$ git status",
      "$ docker ps",
      "$ python app.py",
      "✓ API ready",
      "✓ DB connected",
      "$ yarn build",
      "$ pm2 start",
      "✓ Server up"
    ],
    tablet: [
      "$ npm install dependencies",
      "$ docker-compose up -d",
      "$ python manage.py migrate",
      "$ kubectl get pods",
      "$ redis-cli ping",
      "✓ Services running",
      "✓ Database ready",
      "$ nginx reload",
      "$ systemctl status app"
    ],
    desktop: [
      "$ npm install dependencies",
      "$ docker-compose up -d database",
      "$ python manage.py migrate",
      "$ kubectl apply -f deployment.yaml",
      "$ spark-submit --class DataProcessor",
      "$ git pull origin main",
      "$ terraform apply -auto-approve",
      "$ airflow dags trigger etl_pipeline",
      "$ redis-cli ping",
      "$ elasticsearch health check",
      "✓ All services running",
      "✓ Database connection established",
      "✓ API endpoints ready",
      "$ nginx -t && systemctl reload nginx",
      "$ docker system prune -f"
    ]
  };

  // Détection de la taille d'écran
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenSize('mobile');
      } else if (width < 1024) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const currentTask = tasks[currentTaskIndex] || message;

  // Auto-progression avec timing précis pour 10 secondes
  useEffect(() => {
    if (!autoProgress) return;
    
    const startTime = Date.now();
    const duration = minDuration;
    
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progressPercent = Math.min((elapsed / duration) * 100, 100);
      
      setInternalProgress(progressPercent);
    }, 200); // Mise à jour toutes les 200ms pour ralentir

    return () => clearInterval(interval);
  }, [autoProgress, minDuration]);

  const activeProgress = autoProgress ? internalProgress : progress;

  // Animation des lignes de code selon l'écran avec timing ajusté
  useEffect(() => {
    if (!showCode) return;
    
    const snippets = codeSnippets[screenSize];
    // Ralentir l'apparition des lignes de code
    const intervalDuration = screenSize === 'mobile' ? 2000 : screenSize === 'tablet' ? 1800 : 1500;
    
    const interval = setInterval(() => {
      setCodeLines(prev => {
        const newLine = snippets[Math.floor(Math.random() * snippets.length)];
        const updated = [...prev, newLine];
        const maxLines = screenSize === 'mobile' ? 4 : screenSize === 'tablet' ? 5 : 6;
        return updated.length > maxLines ? updated.slice(-maxLines) : updated;
      });
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [showCode, screenSize]);

  // Animation du pourcentage
  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayProgress(activeProgress);
    }, 50);
    return () => clearTimeout(timer);
  }, [activeProgress]);

  // Rotation des tâches avec timing ajusté pour 10 secondes
  useEffect(() => {
    if (tasks.length <= 1) return;
    
    // Changer de tâche toutes les 1.5-2 secondes selon l'écran
    const taskInterval = screenSize === 'mobile' ? 2000 : 1500;
    
    const interval = setInterval(() => {
      setCurrentTaskIndex(prev => (prev + 1) % tasks.length);
    }, taskInterval);

    return () => clearInterval(interval);
  }, [tasks.length, screenSize]);

  const startTime = useMemo(() => Date.now(), []);

  // Gestion de la fermeture avec timing précis
  useEffect(() => {
    const timer = setTimeout(() => {
      // Forcer la fermeture après la durée spécifiée
      controls.start({ 
        opacity: 0, 
        y: -30,
        filter: "blur(5px)"
      });
      
      setTimeout(() => {
        setIsVisible(false);
        onLoadingComplete?.();
      }, 400);
    }, minDuration);

    return () => clearTimeout(timer);
  }, [minDuration, onLoadingComplete, controls]);

  // Particules adaptées selon l'écran
  const dataParticles = useMemo(() => {
    const particleCount = screenSize === 'mobile' ? 3 : screenSize === 'tablet' ? 4 : 6;
    return [...Array(particleCount)].map((_, i) => ({
      id: i,
      symbol: ['{ }', '[ ]', '< >', '( )', '//', '&&'][i],
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 4 + Math.random() * 2
    }));
  }, [screenSize]);

  // Styles adaptatifs selon l'écran
  const getResponsiveStyles = () => {
    switch (screenSize) {
      case 'mobile':
        return {
          containerClass: 'flex-col px-4 py-8',
          logoSize: 'text-4xl',
          nameSize: 'text-xl',
          terminalHeight: 'h-32',
          showTerminal: false,
          gridSize: '30px 30px'
        };
      case 'tablet':
        return {
          containerClass: 'flex-col px-6 py-6',
          logoSize: 'text-5xl',
          nameSize: 'text-2xl',
          terminalHeight: 'h-40',
          showTerminal: showCode,
          gridSize: '40px 40px'
        };
      default:
        return {
          containerClass: 'flex-row px-6',
          logoSize: 'text-6xl md:text-7xl',
          nameSize: 'text-2xl md:text-3xl',
          terminalHeight: 'h-64',
          showTerminal: showCode,
          gridSize: '50px 50px'
        };
    }
  };

  const styles = getResponsiveStyles();

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900 text-green-400 font-mono overflow-hidden"
          initial={{ opacity: 1 }}
          animate={controls}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Grille de fond responsive */}
          <div className="absolute inset-0 opacity-5">
            <div 
              className="w-full h-full"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: styles.gridSize
              }}
            />
          </div>

          {/* Particules adaptées */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {dataParticles.map((particle) => (
              <motion.div
                key={particle.id}
                className={`absolute text-green-500/20 font-bold ${
                  screenSize === 'mobile' ? 'text-xs' : 'text-sm'
                }`}
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                }}
                animate={{
                  y: [0, -200, 0],
                  opacity: [0.1, 0.3, 0.1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  delay: particle.delay,
                  ease: "linear"
                }}
              >
                {particle.symbol}
              </motion.div>
            ))}
          </div>

          <div className={`relative w-full max-w-7xl mx-auto ${styles.containerClass} ${
            screenSize === 'desktop' ? 'flex' : 'flex flex-col'
          }`}>
            
            {/* Terminal - Responsive */}
            {styles.showTerminal && (
              <motion.div 
                className={`${
                  screenSize === 'desktop' 
                    ? 'w-1/2 mr-8' 
                    : screenSize === 'tablet'
                    ? 'w-full mb-8'
                    : 'w-full mb-6'
                }`}
                initial={{ opacity: 0, x: screenSize === 'desktop' ? -50 : 0, y: screenSize !== 'desktop' ? -30 : 0 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                {/* En-tête terminal responsive */}
                <div className="bg-slate-800 rounded-t-lg p-2 md:p-3 border-b border-slate-700">
                  <div className="flex items-center gap-1.5 md:gap-2">
                    <div className={`${screenSize === 'mobile' ? 'w-2 h-2' : 'w-3 h-3'} bg-red-500 rounded-full`}></div>
                    <div className={`${screenSize === 'mobile' ? 'w-2 h-2' : 'w-3 h-3'} bg-yellow-500 rounded-full`}></div>
                    <div className={`${screenSize === 'mobile' ? 'w-2 h-2' : 'w-3 h-3'} bg-green-500 rounded-full`}></div>
                    <span className={`ml-2 md:ml-3 text-slate-400 ${screenSize === 'mobile' ? 'text-xs' : 'text-sm'}`}>
                      {screenSize === 'mobile' ? 'terminal' : 'terminal — dev@workstation'}
                    </span>
                  </div>
                </div>
                
                {/* Corps terminal responsive */}
                <div className={`bg-slate-950 rounded-b-lg p-2 md:p-4 ${styles.terminalHeight} overflow-hidden`}>
                  <div className="space-y-1">
                    {codeLines.map((line, index) => (
                      <motion.div
                        key={`${line}-${index}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`text-green-400 ${screenSize === 'mobile' ? 'text-xs' : 'text-sm'}`}
                      >
                        <span className="text-blue-400">$</span> {line}
                      </motion.div>
                    ))}
                    {/* Curseur responsive */}
                    <motion.div
                      className={`text-green-400 flex items-center ${screenSize === 'mobile' ? 'text-xs' : 'text-sm'}`}
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <span className="text-blue-400">$</span>
                      <span className={`${screenSize === 'mobile' ? 'w-1.5 h-3' : 'w-2 h-4'} bg-green-400 ml-1`}></span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Section principale responsive */}
            <motion.div 
              className={`${
                styles.showTerminal && screenSize === 'desktop' 
                  ? 'w-1/2' 
                  : 'w-full text-center'
              } flex flex-col justify-center`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
            >
              {/* Logo professionnel responsive */}
              <motion.div
                className={`relative ${screenSize === 'mobile' ? 'mb-6' : 'mb-8'}`}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {/* Badge de rôle responsive */}
                <motion.div
                  className={`inline-block bg-slate-800 border border-green-500/30 rounded-full px-3 md:px-4 py-1 ${
                    screenSize === 'mobile' ? 'mb-3' : 'mb-4'
                  }`}
                  animate={{ 
                    borderColor: ["rgba(34, 197, 94, 0.3)", "rgba(34, 197, 94, 0.6)", "rgba(34, 197, 94, 0.3)"]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className={`text-green-400 font-semibold ${
                    screenSize === 'mobile' ? 'text-xs' : 'text-sm'
                  }`}>
                    {screenSize === 'mobile' ? 'DEV•DATA•PM' : 'DEV • DATA • PM'}
                  </span>
                </motion.div>

                {/* Logo principal responsive */}
                <motion.div
                  className={`${styles.logoSize} font-black text-transparent bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 bg-clip-text`}
                  animate={{ 
                    backgroundPosition: ["0%", "100%", "0%"]
                  }}
                  style={{ backgroundSize: "300% 100%" }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  {customLogo}
                </motion.div>

                {/* Effet de scan responsive */}
                <motion.div
                  className="absolute inset-0 border-l-2 border-green-400 opacity-30"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    repeatDelay: 1,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>

              {/* Nom et titre responsive */}
              <motion.div
                className={`${screenSize === 'mobile' ? 'mb-6' : 'mb-8'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <h1 className={`${styles.nameSize} font-bold text-white mb-2`}>
                  Mohamed Boulkassoum
                </h1>
                <div className={`flex flex-wrap justify-center gap-1.5 md:gap-2 ${
                  screenSize === 'mobile' ? 'text-xs' : 'text-sm'
                }`}>
                  <span className="bg-green-900/30 text-green-300 px-2 py-1 rounded">
                    {screenSize === 'mobile' ? 'Developer' : 'Full Stack Developer'}
                  </span>
                  <span className="bg-blue-900/30 text-blue-300 px-2 py-1 rounded">
                    Data Engineer
                  </span>
                  <span className="bg-purple-900/30 text-purple-300 px-2 py-1 rounded">
                    {screenSize === 'mobile' ? 'PM' : 'Project Manager'}
                  </span>
                </div>
              </motion.div>

              {/* Système de progression responsive */}
              <motion.div
                className={`space-y-4 md:space-y-6 ${screenSize === 'mobile' ? 'px-2' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                {/* Tâche actuelle responsive */}
                <div className="text-center">
                  <motion.div
                    key={currentTask}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-slate-300 mb-2 ${
                      screenSize === 'mobile' ? 'text-sm px-2' : 'text-lg'
                    }`}
                  >
                    {screenSize === 'mobile' && currentTask.length > 30 
                      ? `${currentTask.substring(0, 25)}...`
                      : currentTask
                    }
                  </motion.div>
                  
                  {/* Indicateur visuel responsive */}
                  <div className="flex justify-center items-center gap-1">
                    {[...Array(screenSize === 'mobile' ? 6 : 8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`w-1 bg-slate-700 rounded-full ${
                          screenSize === 'mobile' ? 'h-4' : 'h-6'
                        }`}
                        animate={{
                          backgroundColor: i < (displayProgress / (screenSize === 'mobile' ? 16.67 : 12.5))
                            ? "#22c55e" 
                            : "#475569",
                          height: screenSize === 'mobile' ? [16, 20, 16] : [20, 28, 20]
                        }}
                        transition={{
                          height: {
                            duration: 0.6,
                            repeat: Infinity,
                            delay: i * 0.1
                          },
                          backgroundColor: {
                            duration: 0.3
                          }
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Barre de progression responsive */}
                <div className="space-y-2 md:space-y-3">
                  <div className={`flex justify-between items-center ${
                    screenSize === 'mobile' ? 'text-xs' : 'text-sm'
                  }`}>
                    <span className="text-slate-400">System Status</span>
                    <motion.span
                      key={Math.round(displayProgress)}
                      initial={{ scale: 1.2, opacity: 0.7 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-green-400 font-mono font-bold"
                    >
                      {Math.round(displayProgress)}%
                    </motion.span>
                  </div>
                  
                  {/* Barre responsive */}
                  <div className={`relative bg-slate-800 rounded-full overflow-hidden border border-slate-700 ${
                    screenSize === 'mobile' ? 'h-1.5' : 'h-2'
                  }`}>
                    <motion.div
                      className="h-full bg-gradient-to-r from-green-500 to-cyan-500 relative"
                      initial={{ width: 0 }}
                      animate={{ width: `${displayProgress}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Métriques responsive */}
                {screenSize !== 'mobile' && (
                  <div className={`grid grid-cols-3 gap-3 md:gap-4 ${
                    screenSize === 'tablet' ? 'text-xs' : 'text-xs'
                  }`}>
                    <div className="text-center">
                      <div className="text-slate-500">CPU</div>
                      <motion.div 
                        className="text-green-400 font-mono"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {Math.min(45 + displayProgress * 0.3, 85).toFixed(1)}%
                      </motion.div>
                    </div>
                    <div className="text-center">
                      <div className="text-slate-500">RAM</div>
                      <motion.div 
                        className="text-blue-400 font-mono"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                      >
                        {Math.min(2.1 + displayProgress * 0.02, 4.8).toFixed(1)}GB
                      </motion.div>
                    </div>
                    <div className="text-center">
                      <div className="text-slate-500">NET</div>
                      <motion.div 
                        className="text-cyan-400 font-mono"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                      >
                        {Math.floor(Math.random() * 50 + 150)}MB/s
                      </motion.div>
                    </div>
                  </div>
                )}

                {/* Status des services responsive */}
                <div className={`grid gap-2 ${
                  screenSize === 'mobile' ? 'grid-cols-1 text-xs' : 'grid-cols-2 text-xs'
                }`}>
                  {[
                    { name: screenSize === 'mobile' ? "DB" : "Database", status: displayProgress > 20 },
                    { name: screenSize === 'mobile' ? "API" : "API Server", status: displayProgress > 40 },
                    { name: screenSize === 'mobile' ? "Cache" : "Cache Layer", status: displayProgress > 60 },
                    { name: screenSize === 'mobile' ? "Queue" : "Message Queue", status: displayProgress > 80 }
                  ].map((service, index) => (
                    <div key={service.name} className="flex items-center justify-between bg-slate-800/50 rounded px-2 py-1">
                      <span className="text-slate-400">{service.name}</span>
                      <motion.div
                        className={`rounded-full ${
                          screenSize === 'mobile' ? 'w-1.5 h-1.5' : 'w-2 h-2'
                        } ${service.status ? 'bg-green-500' : 'bg-slate-600'}`}
                        animate={service.status ? {
                          boxShadow: [
                            "0 0 5px rgba(34, 197, 94, 0.5)",
                            "0 0 15px rgba(34, 197, 94, 0.8)",
                            "0 0 5px rgba(34, 197, 94, 0.5)"
                          ]
                        } : {}}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity
                        }}
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Overlay scanlines responsive */}
          <div 
            className={`absolute inset-0 pointer-events-none ${
              screenSize === 'mobile' ? 'opacity-3' : 'opacity-5'
            }`}
            style={{
              backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34, 197, 94, 0.1) 2px, rgba(34, 197, 94, 0.1) ${
                screenSize === 'mobile' ? '3px' : '4px'
              })`
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingPage;