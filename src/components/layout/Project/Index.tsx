import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslation } from "react-i18next";
import { projects } from "./projects";
import { div } from "framer-motion/client";
import { Button } from "../../ui/Button/Index";

interface ProjectsProps {
  setBackgroundColors: (colors: {
    color1: string;
    color2: string;
    color3: string;
  }) => void;
}

export const Projects = () => {
  const { t } = useTranslation();
  const projectsRef = useRef<HTMLElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  return (
    <motion.section 
      id="projects" 
      ref={projectsRef}
      className="px-4 md:px-0 relative w-full bg-background-primary"
    >

      <div className="relative mx-auto w-full max-w-screen-lg py-8 flex flex-col flex-nowrap gap-20 overflow-visible">
        <header className="sticky top-20 md:flex justify-between items-end">
          <div className="text-4xl font-bold font-archivo mb-4 md:mb-0">
            <h2>{t("projects.title")}</h2>
            <h2>{t("projects.subtitle")}</h2>
          </div>
          <Button variant="ghost" icon="github" className="hidden md:block">{t("projects.viewMore")}</Button>
        </header>

        {projects.map((project, index) => {
          return (
            <div
              key={project.id}
              className={`sticky top-60 h-[500px] bg-red-700 rounded-3xl overflow-hidden`}
              style={{
                background: `#${(index + 1) * 50}0000`,
              }}
            >
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={project.cover || `/projects/${project.id}.jpg`} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 to-black/10" />
              </div>
              
              {/* Content positioned over the background image */}
              <div className="absolute bottom-0 z-10 flex flex-col justify-between p-8">
                <div className="max-w-2xl">
                  <h3 className="text-3xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-bases text-white/90 mb-6">{t(project.description)}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.categories.map((category, index) => (
                      <span 
                        key={index}
                        className="mx-2 backdrop-blur-sm rounded-full text-sm text-text-secondary"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
};