import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import useOnScreen from "../utils/userOnScreen";

const boxVariant = {
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 1, x: 20 }
};

const ScrollAnimation = ({ children, variants }) => {

  const control = useAnimation();
  const rootRef = useRef();
  const onScreen = useOnScreen(rootRef);

  useEffect(() => {
    if (onScreen) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, onScreen]);

  return (
    <motion.div
      className="lazyshow"
      ref={rootRef}
    //   variants={boxVariant}
      variants={variants}
      initial="hidden"
      animate={control}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;