import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Icon } from '../../../../ui/Icon';

interface ProjectNavProps {
  currentIndex: number;
  onNavigate: (direction: 'next' | 'prev') => void;
}

export const ProjectNav = ({ currentIndex, onNavigate }: ProjectNavProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center space-x-4">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onNavigate('prev')}
        className="p-2 rounded-full border border-text-primary backdrop-blur flex items-center justify-center"
        aria-label={t('projects.previous')}
      >
        <Icon name="arrowLeft" size={18} />
      </motion.button>
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onNavigate('next')}
        className="p-2 rounded-full border border-text-primary backdrop-blur flex items-center justify-center"
        aria-label={t('projects.next')}
      >
        <Icon name="arrowRight" size={18} />
      </motion.button>
    </div>
  );
};
