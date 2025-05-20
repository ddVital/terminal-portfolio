import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import logoWebsite from '../../../assets/logos/ddvital.dev.svg';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Disable scrolling
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setIsLoading(false);
      onLoadingComplete();
      // Re-enable scrolling
      document.body.style.overflow = 'unset';
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-background-primary"
    >
      <motion.img
        src={logoWebsite}
        alt="Logo"
        className="w-48 h-48"
        initial={{ scale: 1 }}
        animate={{ 
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity
        }}
      />
    </motion.div>
  );
};
