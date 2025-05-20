import { useTranslation } from "react-i18next";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Quote() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  
  // Get the quote text and split it into words
  const quoteText = t('quote.title');
  const words = quoteText.split(' ');
  
  // Set up scroll-based animation
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  return (
    <section 
      id="quote" 
      ref={sectionRef}
      className="bg-background-primary min-h-screen flex items-center overflow-hidden relative md:py-40"
    >
      <div
        className="px-4 md:flex md:justify-between md:items-center relative w-full max-w-screen-lg mx-auto"
      >
        <div className="quote-container max-w-[900px]">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-archivo leading-tight">
            {words.map((word, index) => (
              <motion.span
                key={index}
                className="font-archivo font-medium md:text-8xl tracking-wide my-2 inline-block mr-4 text-text-primary"
                initial={{ opacity: 0, y: 50 }}
                style={{
                  opacity: useTransform(
                    scrollYProgress,
                    [0, 0.1 + index * 0.02, 0.2 + index * 0.03, 0.9],
                    [0, 0, 1, 1]
                  ),
                  // y: useTransform(
                  //   scrollYProgress,
                  //   [0, 0.3 + index * 0.05, 0.5 + index * 0.05, 0.9],
                  //   [50, 50, 0, 0]
                  // )
                }}
              >
                {word}
              </motion.span>
            ))}
          </h2>
          
          <motion.div 
            className="w-24 h-1 bg-text-secondary mt-16"
            initial={{ width: 0 }}
            style={{
              width: useTransform(
                scrollYProgress,
                [0.4, 0.6],
                [0, 96]
              )
            }}
          />
        </div>
      </div>
    </section>
  );
}
