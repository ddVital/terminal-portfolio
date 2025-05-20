import { motion, useTransform, useScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import { AnimatedText } from "../../AnimatedText";
import { heroText } from "../../../utils/heroWords";
import { Button } from "../../ui/Button/Index";
import { Background } from "../../canvas/Background";
import { Canvas } from '@react-three/fiber'
import { useEffect, useState, useRef } from "react";

export default function Hero() {
  const { t } = useTranslation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });
  
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  
  // Create scroll-based animations
  const opacity = useTransform(
    scrollY, 
    [0, 300], // As we scroll from 0 to 300px
    [1, 0]    // Opacity goes from 1 to 0
  );
  
  const y = useTransform(
    scrollY,
    [0, 300],
    [0, -100] // Move up as we scroll down
  );

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center">
      <motion.div 
        ref={ref}
        style={{ opacity, y }} // Apply scroll-based animations
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="flex flex-col justify-center items-center relative mx-auto z-10 px-4 md:px-0 md:max-w-[1150px]"
      >
        <motion.span 
          className="mb-4 block"
        >
          {t('hero.intro')}
        </motion.span>

        <motion.h1 
          className="text-6xl md:text-7xl font-medium font-archivo text-center mx-auto md:max-w-[900px]"
        >
          {t("hero.title")}
        </motion.h1>
        
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 mt-12"
        >
          <Button variant="secondary" size="sm" icon="paperPlane" iconPosition="right" className="w-full md:w-auto">
            {t("hero.contact")}
          </Button>

          <Button variant="primary" size="sm" iconPosition="right" className="w-full md:w-auto">
            {t("hero.meeting")}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
