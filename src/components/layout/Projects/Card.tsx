import React from 'react';
import { motion } from 'framer-motion';
import { ProjectType } from './projects';

interface CardProps {
  project: ProjectType;
  index: number;
  currentIndex: number;
  progress: number;
}

export const ProjectCard: React.FC<CardProps> = ({ 
  project, 
  index, 
  currentIndex,
  progress
}) => {
  // Calculate if this card should be visible based on scroll progress
  // A card is visible only if it's the current card or has already been viewed
  const isVisible = index <= currentIndex;
  
  // Calculate the stacking position
  const getCardStyles = () => {
    // If card isn't visible yet, position it below viewport and make it invisible
    if (!isVisible) {
      return {
        y: '200%', // Position far below to ensure it's out of view
        opacity: 0,
        scale: 0.9,
        zIndex: 0,
        pointerEvents: 'none' // Disable interactions for invisible cards
      };
    }
    
    // If this is the current card being scrolled into view
    if (index === currentIndex) {
      // Calculate partial progress for smooth transition
      const partialProgress = progress - Math.floor(progress);
      
      // Start from below viewport (100%) and move up to final position (0%)
      // as partialProgress goes from 0 to 1
      const yPosition = 100 * (1 - partialProgress); // 100% to 0%
      
      return {
        y: `${yPosition}%`, // Move from below into view
        opacity: partialProgress, // Fade in
        scale: 0.95 + (partialProgress * 0.05), // Grow slightly
        zIndex: 50 - index,
        pointerEvents: 'auto'
      };
    }
    
    // Cards that have already been viewed (stacked at top)
    const stackIndex = currentIndex - index;
    return {
      y: -40 - (stackIndex * 15), // Stack with slight offset
      opacity: 0.7 - (stackIndex * 0.1),
      scale: 0.95 - (stackIndex * 0.03),
      zIndex: 50 - index,
      rotateX: 5, // Slight tilt for stack effect
      pointerEvents: 'auto'
    };
  };

  return (
    <motion.div
      className="absolute top-0 left-0 w-full bg-background-secondary rounded-2xl overflow-hidden"
      style={{ 
        height: '400px',
        visibility: isVisible ? 'visible' : 'hidden' // Hide completely if not visible
      }}
      initial={{ y: '200%', opacity: 0 }}
      animate={getCardStyles()}
      transition={{ 
        type: 'spring', 
        stiffness: 80,
        damping: 20,
        mass: 1
      }}
    >
      <div className="relative h-full p-6 flex flex-col justify-between">
        {/* Project image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${project.cover})` }}
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background-secondary to-transparent" />
        
        {/* Content */}
        <div className="relative z-10">
          <span className="px-3 py-1 bg-background-primary/30 text-text-secondary rounded-full text-sm">
            {project.title}
          </span>
        </div>
        
        <div className="relative z-10 mt-auto">
          <h3 className="text-2xl font-bold font-archivo mb-2">{project.title}</h3>
          <p className="text-text-primary/80 mb-4">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.categories.map((cat, i) => (
              <span 
                key={i} 
                className="px-2 py-1 bg-background-primary/30 rounded-md text-xs"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
