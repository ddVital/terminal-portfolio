import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

const TextAnimation = ({ words }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const variants = {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={currentWordIndex}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            style={{ display: index === currentWordIndex ? "inline-block" : "none" }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default TextAnimation;

