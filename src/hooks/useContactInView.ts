import { useState, useEffect, useRef } from 'react';

export function useContactInView() {
  const [isInView, setIsInView] = useState(false);
  const contactRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 } // Adjust threshold as needed
    );

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactRef.current = contactSection;
      observer.observe(contactSection);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return isInView;
}
