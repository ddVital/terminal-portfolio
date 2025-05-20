import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

interface TextAnimationProps {
  words: string[];
}

const TextAnimation = ({ words }: TextAnimationProps) => {
  const [visibleWords, setVisibleWords] = useState<number[]>([]);
  
  useEffect(() => {
    // Reveal words one by one with a delay
    const wordRevealInterval = setInterval(() => {
      setVisibleWords(prev => {
        if (prev.length >= words.length) {
          clearInterval(wordRevealInterval);
          return prev;
        }
        return [...prev, prev.length];
      });
    }, 300); // Reveal a new word every 300ms
    
    return () => clearInterval(wordRevealInterval);
  }, [words.length]);

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-wrap justify-center gap-x-2 gap-y-4">
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial="hidden"
          animate={visibleWords.includes(index) ? "visible" : "hidden"}
          variants={wordVariants}
          transition={{ 
            duration: 0.5,
            delay: 0.1 * index,
            ease: "easeOut"
          }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export default TextAnimation;
