import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menubar } from './Menubar';

interface GalleryItem {
  id: string;
  title: string;
  icon: string;
  image: string;
  description?: string;
}

interface GalleryProps {
  items: GalleryItem[];
  className?: string;
}

export const Gallery: React.FC<GalleryProps> = ({ items, className = '' }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [menubarMounted, setMenubarMounted] = useState(false);
  
  // Convert items to the format expected by Menubar
  const menubarTabs = items.map((item, index) => ({
    title: item.title,
    icon: item.icon,
    active: index === activeIndex
  }));
  
  const handleTabChange = (index: number) => {
    setActiveIndex(index);
  };
  
  const activeItem = items[activeIndex];

  // Set menubarMounted to true after first hover
  useEffect(() => {
    if (isHovering && !menubarMounted) {
      setMenubarMounted(true);
    }
  }, [isHovering]);
  
  return (
    <motion.div 
      className={`relative overflow-hidden rounded-3xl w-full h-full ${className}`}
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
    >
      {/* Background image with animation */}
      <AnimatePresence mode="wait">
        <div
          key={activeItem.id}
          className="absolute inset-0 w-full h-full"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${activeItem.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
        </div>
      </AnimatePresence>
      
      {/* Content overlay */}
      <div className="relative z-10 flex flex-col justify-between h-full p-6">
        {/* Top content area (if needed) */}
        <div></div>
        
        {/* Navigation menubar - only visible on hover and positioned at bottom */}
        <AnimatePresence>
          {isHovering && (
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
            >
              {menubarMounted && (
                <Menubar 
                  tabs={menubarTabs} 
                  onChange={handleTabChange} 
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
