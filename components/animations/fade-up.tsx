'use client';

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "motion/react";

interface FadeProps {
  children: React.ReactNode;
}

export const FadeUp = ({ children }: FadeProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) { 
            mainControls.start("show");
        }
    }, [isInView]);

  return (
    <div ref={ref} >
      <motion.div
        className="h-full"
        variants={{
            hidden: { opacity: 0, y: 75 },
            show: { opacity: 1, y: 0 },
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