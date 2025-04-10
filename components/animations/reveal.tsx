'use client';

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "motion/react";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
}

export const Reveal = ({ children, width = "fit-content" }: RevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if (isInView) { 
            mainControls.start("show");
            slideControls.start("show");
        }
    }, [isInView]);

  return (
    <div ref={ref} 
    style={{ position: "relative", width, overflow: "hidden" }}
    >
      <motion.div
        className="h-full"
        variants={{
            hidden: { opacity: 0, x: 150 },
            show: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
            duration: 0.5,
            delay: 0,
        }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          show: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 10,
          bottom: 0,
          left: 0,
          right: 0,
          background: "var(--accent)",
          zIndex: 20,
        }}
      />
    </div>
  );
};