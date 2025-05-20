import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, ReactNode } from "react";
import useOnScreen from "../../utils/userOnScreen";

interface LazyShowProps {
  children: ReactNode;
  x?: number;
  y?: number;
  duration?: number;
  threshold?: number; // Added threshold for visibility detection
}

const LazyShow = ({ 
  children, 
  x = 0, 
  y = 0, 
  duration = 1.4,
  threshold = 0.1 
}: LazyShowProps) => {
  const controls = useAnimation();
  const rootRef = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(rootRef, threshold);
  const wasOnScreen = useRef(false);

  useEffect(() => {
    // When component comes into view
    if (onScreen) {
      controls.start({
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          duration: duration,
          ease: "easeInOut"
        },
      });
      wasOnScreen.current = true;
    } 
    // When component goes out of view, reset animation
    else if (wasOnScreen.current) {
      controls.start({
        x: x,
        y: y,
        opacity: 0,
        transition: {
          duration: 0.2, // Faster reset when out of view
          ease: "easeIn"
        },
      });
      wasOnScreen.current = false;
    }
  }, [onScreen, controls, duration, x, y]);

  return (
    <motion.div
      className="lazy-div"
      ref={rootRef}
      initial={{ opacity: 0, x: x, y: y }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default LazyShow;
