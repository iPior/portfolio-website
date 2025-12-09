'use client';

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "motion/react";

interface FadeProps {
  children: React.ReactNode;
}

export const FadeRight = ({children}: FadeProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) { 
            mainControls.start("show");
        }
    }, [isInView, mainControls]);

  return (
    <div ref={ref} >
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
            delay: 0.25,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};