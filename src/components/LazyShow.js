import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import useOnScreen from "../utils/userOnScreen";
// import {AnimatePresence, useAnimation, motion} from 'framer-motion/dist/framer-motion'

const LazyShow = ({ children, x, y, duration }) => {
  const controls = useAnimation();
  const rootRef = useRef();
  const onScreen = useOnScreen(rootRef);

  useEffect(() => {
    if (onScreen) {
      controls.start({
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          duration: duration || 1.4,
          ease: "easeInOut"
        },
      });
    }
  }, [onScreen, controls]);

  return (
    <motion.div
      className="lazy-div"
      ref={rootRef}
      // initial={{ opacity: 0, x: -20 }}
      initial={{ opacity: 0, x: x, y: y }}
      // initial={{ opacity: 0, y: 190 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default LazyShow;
