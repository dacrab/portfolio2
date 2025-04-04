import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface NumberCounterProps {
  end: number;
  duration: number;
  delay?: number;
  suffix?: string;
  isInView?: boolean;
  className?: string;
}

export default function NumberCounter({
  end,
  duration,
  delay = 0,
  suffix = '',
  isInView = true,
  className = 'text-accent text-2xl font-bold'
}: NumberCounterProps) {
  const [count, setCount] = useState(0);
  const animationRef = useRef<number>(0);
  
  useEffect(() => {
    // Reset counter when not in view
    if (!isInView) {
      setCount(0);
      return;
    }
    
    const startTime = Date.now() + delay * 1000;
    
    const animateCount = () => {
      const now = Date.now();
      
      // Wait for delay before starting animation
      if (now < startTime) {
        animationRef.current = requestAnimationFrame(animateCount);
        return;
      }
      
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
      // Simple easing function for smoother animation
      const easedProgress = progress * (2 - progress);
      const currentCount = Math.floor(easedProgress * end);
      
      setCount(currentCount);
      
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animateCount);
      } else {
        setCount(end); // Ensure we end exactly at the target number
      }
    };
    
    animationRef.current = requestAnimationFrame(animateCount);
    
    // Cleanup animation frame on unmount or when dependencies change
    return () => cancelAnimationFrame(animationRef.current);
  }, [end, duration, delay, isInView]);
  
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: isInView ? 1 : 0, 
        scale: isInView ? 1 : 0.8,
        y: isInView ? 0 : 10
      }}
      transition={{ duration: 0.4, delay }}
    >
      {count}{suffix}
    </motion.div>
  );
}