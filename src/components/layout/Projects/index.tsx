import { motion, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { projects } from "./projects";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslation } from "react-i18next";
import { ProjectCard } from "./Card";

export const Projects = () => {
  const { t } = useTranslation();
  const projectsRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useGSAP(() => {
    gsap.to('#highlights-title', { opacity: 1, y: 0 });
  }, []);

  // Handle scroll-based card stacking
  useEffect(() => {
    const handleScroll = () => {
      if (!projectsRef.current) return;
      
      const { top, height } = projectsRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress within the section
      // Negative top value means we've scrolled past the top of the section
      const sectionScrolled = Math.max(0, -top);
      
      // Calculate how many "card heights" we've scrolled
      // Each card takes about 30vh of scroll to fully transition
      const cardScrollHeight = windowHeight * 0.3;
      const rawProgress = sectionScrolled / cardScrollHeight;
      
      // Limit to the number of projects
      const clampedProgress = Math.min(projects.length - 0.01, Math.max(0, rawProgress));
      
      setScrollProgress(clampedProgress);
      setCurrentIndex(Math.floor(clampedProgress));
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.section 
      id="projects" 
      ref={projectsRef}
      className="relative w-full bg-background-primary"
      style={{ 
        // Height calculation: enough room to scroll through all projects
        // Each project takes 30vh of scroll, plus some padding
        height: `calc(${projects.length * 30}vh + 100vh)`
      }}
    >
      <div className="sticky top-0 w-full h-screen flex flex-col justify-center items-center">
        <div className="mx-auto w-full max-w-screen-lg px-4 md:px-0">
          <header className="mb-12 md:flex justify-between items-start">
            <div className="text-4xl font-bold font-archivo mb-8">
              <h2>{t("projects.title")}</h2>
              <h2>{t("projects.subtitle")}</h2>
            </div>
          </header>
          
          <div 
            ref={cardsContainerRef}
            className="w-full h-[400px] relative perspective-1000"
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                currentIndex={currentIndex}
                progress={scrollProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};
