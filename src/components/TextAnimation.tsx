"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TextAnimationProps {
  text: string;
  variant?: "split" | "reveal" | "typewriter" | "gradient" | "char-by-char";
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  color?: string;
}

export default function TextAnimation({
  text,
  variant = "reveal",
  className = "",
  delay = 0,
  duration = 0.5,
  once = false,
  color = "gradient-1"
}: TextAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.2, once });
  
  // Split text into characters and words only when needed
  const characters = text.split("");
  const wordArray = text.split(" ");
  
  // Character by character animation
  if (variant === "char-by-char") {
    return (
      <motion.div
        ref={ref}
        className={`inline-block ${className}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay }}
      >
        {characters.map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={isInView ? { clipPath: "inset(0 0 0 0)" } : { clipPath: "inset(0 100% 0 0)" }}
            transition={{
              duration: duration,
              delay: delay + index * 0.04,
              ease: [0.215, 0.61, 0.355, 1]
            }}
            className="inline-block"
            style={{ willChange: "clip-path" }}
          >
            {char === " " ? <span>&nbsp;</span> : char}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  // Split words animation
  if (variant === "split") {
    return (
      <motion.div
        ref={ref}
        className={`inline-block ${className}`}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
      >
        {wordArray.map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            initial={{ opacity: 0, y: 20, display: "inline-block" }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: duration,
              delay: delay + index * 0.1,
              ease: [0.215, 0.61, 0.355, 1]
            }}
            className="inline-block mr-[0.25em]"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  // Typewriter effect
  if (variant === "typewriter") {
    return (
      <div ref={ref} className={`relative overflow-hidden ${className}`}>
        <motion.div
          initial={{ width: "0%" }}
          animate={isInView ? { width: "100%" } : { width: "0%" }}
          transition={{
            duration: duration * text.length * 0.08,
            delay,
            ease: "linear"
          }}
          className="whitespace-nowrap"
        >
          {text}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className={`inline-block ml-[2px] w-[2px] h-[1.2em] bg-${color} align-middle`}
          />
        </motion.div>
      </div>
    );
  }

  // Gradient text animation
  if (variant === "gradient") {
    return (
      <div ref={ref} className={`${className}`}>
        <motion.span
          initial={{ backgroundPosition: "0% 50%" }}
          animate={
            isInView ? { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] } : { backgroundPosition: "0% 50%" }
          }
          transition={{
            duration: duration * 5,
            delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear"
          }}
          className="bg-clip-text text-transparent bg-gradient-to-r from-accent via-gradient-2 to-gradient-4 bg-[size:300%]"
        >
          {text}
        </motion.span>
      </div>
    );
  }

  // Default reveal
  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={isInView ? { y: "0%", opacity: 1 } : { y: "100%", opacity: 0 }}
        transition={{
          duration,
          delay,
          ease: [0.215, 0.61, 0.355, 1]
        }}
      >
        {text}
      </motion.div>
    </div>
  );
}