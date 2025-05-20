import React, { useState, useRef, useEffect, forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '../Icon';

interface MenuItemProps {
  title: string,
  icon: string,
  active: boolean,
  onClick: () => void,
}

const MenuItem = forwardRef<HTMLButtonElement, MenuItemProps>(
  ({ icon, title, active, onClick }, ref) => {
    return (
      <motion.button
        ref={ref}
        className={`relative px-4 py-2 rounded-full flex items-center justify-center ${active ? 'text-white' : 'text-white/70 hover:text-white'}`}
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        data-active={active}
      >
        <div className="z-10 flex items-center gap-2 text-black">
          <Icon name={icon} size={24} />
        </div>
      </motion.button>
    );
  }
);

MenuItem.displayName = 'MenuItem';

interface MenubarProps {
  tabs: Omit<MenuItemProps, 'onClick'>[];
  onChange?: (index: number) => void;
}

export const Menubar: React.FC<MenubarProps> = ({ tabs, onChange }) => {
  const [activeIndex, setActiveIndex] = useState(tabs.findIndex(item => item.active) || 0);
  const itemsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const menuRef = useRef<HTMLDivElement>(null);
  const [activeStyles, setActiveStyles] = useState({ width: 0, left: 0 });
  
  const handleItemClick = (index: number) => {
    setActiveIndex(index);
    if (onChange) onChange(index);
  };
  
  // Update the active indicator position whenever activeIndex changes or on resize
  useEffect(() => {
    const updateActiveStyles = () => {
      if (!menuRef.current || !itemsRef.current[activeIndex]) return;
      
      const menuRect = menuRef.current.getBoundingClientRect();
      const activeItemRect = itemsRef.current[activeIndex]?.getBoundingClientRect();
      
      if (!activeItemRect) return;
      
      setActiveStyles({
        width: activeItemRect.width,
        left: activeItemRect.left - menuRect.left
      });
    };
    
    // Update immediately and on resize
    updateActiveStyles();
    window.addEventListener('resize', updateActiveStyles);
    
    // Also use a small delay to ensure DOM has settled
    const timeoutId = setTimeout(updateActiveStyles, 50);
    
    return () => {
      window.removeEventListener('resize', updateActiveStyles);
      clearTimeout(timeoutId);
    };
  }, [activeIndex]);
  
  return (
    <div 
      ref={menuRef}
      className="relative flex w-fit px-2 py-2 gap-2 rounded-full bg-white/35 backdrop-blur-sm shadow-lg"
    >
      {/* Animated background for active item */}
      <motion.div
        className="absolute top-1.5 bottom-1.5 rounded-full bg-white shadow-md"
        initial={false}
        animate={{ 
          width: activeStyles.width,
          left: activeStyles.left,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
          mass: 0.8
        }}
      />
      
      {/* Menu tabs */}
      {tabs.map((item, index) => (
        <MenuItem 
          key={index} 
          icon={item.icon} 
          title={item.title} 
          active={index === activeIndex} 
          onClick={() => handleItemClick(index)}
          ref={el => itemsRef.current[index] = el}
        />
      ))}
    </div>
  );
};

export { MenuItem };
