import "./App.css";
import { useState, useEffect, useRef } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import { useInView } from "react-intersection-observer";

import AnimatedCounter from "./components/AnimatedCounter";
import HeroSection from "./components/hero";
import { Footer } from "./components/footer";
import Header from "./components/header";
import AboutSection from "./components/about";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}
export default function App() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  
  const [countUp, setCountUp] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCountUp(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        exit={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0, ease: "easeOut" }}
      >
        {countUp ? (
          <AnimatedCounter />
        ) : (
          <>
            <Header />
                <motion.div
                  className="relative flex flex-col items-center justify-center h-full text-center text-white"
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 100 }}
                  transition={{ duration: 1 }}
                  style={{y}}
                >
                  <HeroSection />
                </motion.div>
              
            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              exit={{ opacity: 0, y: 100 }}
            >
              <HeroSection />
            </motion.div> */}

                <motion.div
                  className="relative flex flex-col items-center justify-center h-full text-center text-white"
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 100 }}
                  transition={{ duration: 1 }}
                  style={{y}}
                >
                  <AboutSection />
                </motion.div>
              
            <Footer />
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
