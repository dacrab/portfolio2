import { motion } from "framer-motion";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

interface LottiePanelProps {
  isInView: boolean;
  delay: number;
}

export default function LottiePanel({ isInView, delay }: LottiePanelProps) {
  return (
    <motion.div 
      className="sticky top-32 bg-card/30 backdrop-blur-sm border border-border/40 rounded-xl overflow-hidden h-full group hover:border-accent/30 transition-all duration-500 shadow-md hover:shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
      transition={{ duration: 0.7, delay }}
    >
      <div className="p-6 h-full flex flex-col">
        {/* Section title */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
          className="text-xl font-bold mb-3 text-center"
        >
          Let&apos;s Build Something Amazing
        </motion.h3>
        
        {/* Lottie Animation */}
        <div className="flex-grow relative overflow-hidden flex items-center justify-center py-4">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <motion.div 
            className="w-full h-80 relative"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <DotLottieReact
              src="https://lottie.host/89786656-4880-42e7-9f18-82895c67895a/37mBlD7a1R.lottie"
              loop
              autoplay
              className="w-full h-full"
            />
            
            {/* Enhanced glow effect behind animation */}
            <div className="absolute inset-0 -z-10 bg-accent/5 blur-2xl rounded-full transform scale-90"></div>
          </motion.div>
        </div>
        
        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
          transition={{ duration: 0.5, delay: delay + 0.3 }}
          className="text-muted text-sm text-center mb-4"
        >
          Have a project in mind? I&apos;d love to help bring your vision to life.
        </motion.p>
        
        {/* "Discuss Your Project" button */}
        <div className="mt-auto text-center">
          <motion.a
            href="#contact"
            className="inline-flex items-center px-5 py-2.5 rounded-lg bg-accent/10 border border-accent/30 text-accent hover:bg-accent hover:text-white transition-all duration-300 font-medium shadow-sm"
            whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(var(--accent-rgb), 0.3)" }}
            whileTap={{ y: 0 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
            transition={{ duration: 0.5, delay: delay + 0.4 }}
          >
            <span>Discuss Your Project</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
              <path d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
} 