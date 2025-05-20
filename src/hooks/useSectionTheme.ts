import { useEffect } from 'react';
import { useTheme } from './useTheme';

export function useSectionTheme(
  sectionRef: React.RefObject<HTMLElement>,
  options: {
    theme: 'light' | 'dark';
    threshold?: number;
  }
) {
  const { theme, setTheme } = useTheme();
  
  useEffect(() => {
    if (!sectionRef.current) return;
    
    let originalTheme = theme;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            originalTheme = theme;
            setTheme(options.theme);
          } else {
            // Restore original theme when leaving the section
            if (theme === options.theme) {
              setTheme(originalTheme);
            }
          }
        });
      },
      { threshold: options.threshold || 0.3 } // Default to 30% visibility
    );
    
    observer.observe(sectionRef.current);
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [sectionRef, options.theme, theme, setTheme]);
}
