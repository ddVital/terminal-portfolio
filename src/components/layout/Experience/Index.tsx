import { useTranslation } from "react-i18next";
import { motion, useScroll, useTransform } from "framer-motion";
import { JobCard } from "../../JobCards/JobCard"
import { Techstack } from "../../Techstack/Techstack";
import { useRef } from "react";
import { jobs } from "./jobs";
import { useSectionTheme } from "../../../hooks/useSectionTheme";
import LazyShow from "../../LazyShow/LazyShow";

export function Experience() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress within this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  return (
    <section 
      ref={sectionRef}
      id="experience" 
      className="relative bg-background-primary py-20"
    >
      <div 
        ref={containerRef}
        className="relative min-h-screen max-w-screen-lg w-full mx-auto px-4 md:px-0"
      >
        <div className='relative flex flex-col lg:flex-row lg:justify-between w-full max-w-screen-lg gap-12 md:gap-16'>
          <LazyShow y={40} duration={.8}>
            <div className='lg:sticky top-24 h-fit max-w-[600px]'>
              <h1 className='text-6xl md:text-7xl font-acumin font-bold'>{t('experience.title')}</h1>
              <h2 className='text-base font-semibold my-2'>{t('experience.subtitle')}</h2>
              <p className='text-base font-poppins my-8 max-w-[600px]'>{t('experience.description')}</p>
              <span className="block text-sm font-medium text-text-muted mb-8">{t('experience.techstack')}</span>

              <Techstack />
            </div>
          </LazyShow>

          <div className='relative w-full md:w-[500px] space-y-12'>
            {jobs.map((job, index) => (
              <LazyShow key={job.id} y={index * 20} duration={index * 0.6}>
                <motion.div 
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                >
                  <JobCard {...job} />
                </motion.div>
              </LazyShow>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
