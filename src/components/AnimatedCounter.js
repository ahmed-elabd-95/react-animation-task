import "./styles.css";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export default function AnimatedCounter() {
  
  const count = useMotionValue(0o1);

  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 100, { duration: 4, delay: 1, });

    return animation.stop;
  }, []);

  return (
    <div className="counter-container">
    
    <div className="logo-section">
    <motion.div
      className="logo"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 1,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
      <img src="../Frame.svg"/>
    </motion.div>
    </div>
    <motion.div 
    className="counter-persentage"
    initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{   
        type: "spring",    
        duration: 0.8,
        easeInOut: [0, 0.71, 0.2, 1.01]
      }}
    >
    <motion.h1>{rounded}</motion.h1>
      <h1>%</h1>
      </motion.div>      
    </div>
  );
}
