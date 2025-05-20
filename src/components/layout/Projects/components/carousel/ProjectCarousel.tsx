import { motion } from "framer-motion";
import { useEffect } from "react";
import { projects } from "../../projects";
import { ProjectCard } from "./ProjectCard";

interface ProjectCarouselProps {
  setBackgroundColors?: (colors: {
    color1: string;
    color2: string;
    color3: string;
  }) => void;
  currentIndex: number;
}

export const ProjectCarousel = ({ currentIndex }: ProjectCarouselProps) => {
  // Update background colors when current project changes
  useEffect(() => {
  }, [currentIndex]);

  return (
    <div className="overflow-hidden">
      <motion.div 
        className="flex"
        animate={{ x: `calc(-${currentIndex * 80}% - ${currentIndex * 20}px)` }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </motion.div>
    </div>
  );
};
