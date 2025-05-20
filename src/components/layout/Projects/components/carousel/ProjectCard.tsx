import { useTranslation } from "react-i18next";
import { ProjectType } from "../../projects";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: ProjectType;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { t } = useTranslation();
  
  return (
    <motion.div 
      className="min-w-[80%] px-4 mr-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="relative rounded-3xl overflow-hidden h-[70vh] max-w-[1000px]">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={project.cover || `/projects/${project.id}.jpg`} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20" />
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
    </motion.div>
  );
};
