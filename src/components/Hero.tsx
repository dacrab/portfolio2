"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence, MotionValue } from "framer-motion";
import TextAnimation from "./TextAnimation";

// CV dropdown component
const CVDropdown = ({ isOpen, onDownload }: { isOpen: boolean; onDownload: (lang: string) => void }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div 
        className="absolute top-full left-0 mt-2 w-full bg-card/90 backdrop-blur-sm border border-border/40 rounded-lg shadow-lg overflow-hidden z-50"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
      >
        <button 
          onClick={() => onDownload('english')}
          className="w-full px-4 py-2.5 text-left text-sm hover:bg-accent/10 transition-colors duration-150 flex items-center gap-2"
        >
          <svg className="h-4 w-6 rounded-sm shadow-sm" viewBox="0 0 640 480" aria-hidden="true">
            <g fillRule="evenodd">
              <g strokeWidth="1pt">
                <path fill="#bd3d44" d="M0 0h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8v39.4H0z" transform="scale(.9375)"/>
                <path fill="#fff" d="M0 39.4h972.8v39.4H0zm0 78.8h972.8v39.3H0zm0 78.7h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8v39.4H0z" transform="scale(.9375)"/>
              </g>
              <path fill="#192f5d" d="M0 0h389.1v275.7H0z" transform="scale(.9375)"/>
              <path fill="#fff" d="M32.4 11.8L36 22.7h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0l3.5 10.9h11.4l-9.2 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9H177l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9H242l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7h11.4zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 39.4l3.5 10.9h11.5L70.6 57 74 67.9l-9-6.7-9.3 6.7L59 57l-9-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7L124 57l-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0l3.5 10.9h11.5L330 57l3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7h11.4z" transform="scale(.9375)"/>
            </g>
          </svg>
          <span>English Version</span>
        </button>
        <button 
          onClick={() => onDownload('greek')}
          className="w-full px-4 py-2.5 text-left text-sm hover:bg-accent/10 transition-colors duration-150 flex items-center gap-2"
        >
          <svg className="h-4 w-6 rounded-sm shadow-sm" viewBox="0 0 640 480" aria-hidden="true">
            <path fill="#0d5eaf" d="M0 0h640v53.3H0z"/>
            <path fill="#fff" d="M0 53.3h640v53.4H0z"/>
            <path fill="#0d5eaf" d="M0 106.7h640V160H0z"/>
            <path fill="#fff" d="M0 160h640v53.3H0z"/>
            <path fill="#0d5eaf" d="M0 213.3h640v53.4H0z"/>
            <path fill="#fff" d="M0 266.7h640V320H0z"/>
            <path fill="#0d5eaf" d="M0 320h640v53.3H0z"/>
            <path fill="#fff" d="M0 373.3h640v53.4H0z"/>
            <path fill="#0d5eaf" d="M0 426.7h640V480H0z"/>
            <path fill="#0d5eaf" d="M0 0h213.3v240H0z"/>
            <path fill="#fff" d="M0 80h213.3v80H0z"/>
            <path fill="#fff" d="M80 0h53.3v240H80z"/>
          </svg>
          <span>Greek Version</span>
        </button>
      </motion.div>
    )}
  </AnimatePresence>
);

// Abstract graphic for the right side
const AbstractGraphic = ({ pathLength }: { pathLength: MotionValue<number> }) => (
  <motion.svg 
    width="100%" 
    height="100%" 
    viewBox="0 0 500 500" 
    fill="none" 
    className="w-full h-full max-h-[500px]"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.5 }}
  >
    {/* Circle decorations */}
    <motion.circle 
      cx="250" 
      cy="250" 
      r="180" 
      stroke="var(--accent)" 
      strokeOpacity="0.15"
      strokeWidth="0.5" 
      strokeDasharray="4 4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      transition={{ duration: 2, delay: 1.5 }}
    />
    <motion.circle 
      cx="250" 
      cy="250" 
      r="120" 
      stroke="var(--accent)" 
      strokeOpacity="0.25"
      strokeWidth="0.5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.8 }}
      transition={{ duration: 2, delay: 1.8 }}
    />
    
    {/* Animated signature path */}
    <motion.path
      d="M150,250 C150,180 220,150 250,150 C280,150 320,180 320,220 C320,260 280,280 250,280 C220,280 180,260 180,220 C180,180 220,150 250,150 M250,280 L250,350 M200,320 L300,320"
      stroke="var(--accent)"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
      style={{
        pathLength: pathLength,
        opacity: useTransform(pathLength, [0, 1], [0, 1])
      }}
    />
    
    {/* Glow effect for signature */}
    <motion.path
      d="M150,250 C150,180 220,150 250,150 C280,150 320,180 320,220 C320,260 280,280 250,280 C220,280 180,260 180,220 C180,180 220,150 250,150 M250,280 L250,350 M200,320 L300,320"
      stroke="var(--accent)"
      strokeWidth="6"
      strokeLinecap="round"
      strokeOpacity="0.3"
      fill="none"
      style={{
        pathLength: pathLength,
        opacity: useTransform(pathLength, [0, 1], [0, 0.3])
      }}
      filter="blur(4px)"
    />
    
    {/* Accent points */}
    <motion.circle 
      cx="250" 
      cy="150" 
      r="5" 
      fill="var(--accent)"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 2.2 }}
    />
    <motion.circle 
      cx="250" 
      cy="350" 
      r="5" 
      fill="var(--accent)"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 2.5 }}
    />
  </motion.svg>
);

// Floating tech keywords
const TechKeywords = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => (
  <>
    <motion.div
      className="absolute top-[15%] right-[15%] font-mono text-xs text-accent/70 backdrop-blur-sm px-2 py-1 rounded-full bg-card/10 border border-accent/5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 0.7, y: 0 }}
      transition={{ duration: 0.8, delay: 3.2 }}
      style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]) }}
    >
      Next.js
    </motion.div>
    <motion.div
      className="absolute bottom-[20%] left-[20%] font-mono text-xs text-accent/70 backdrop-blur-sm px-2 py-1 rounded-full bg-card/10 border border-accent/5"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 0.7, y: 0 }}
      transition={{ duration: 0.8, delay: 3.4 }}
      style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "50%"]) }}
    >
      React
    </motion.div>
    <motion.div
      className="absolute top-[60%] right-[25%] font-mono text-xs text-accent/70 backdrop-blur-sm px-2 py-1 rounded-full bg-card/10 border border-accent/5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 0.7, y: 0 }}
      transition={{ duration: 0.8, delay: 3.6 }}
      style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]) }}
    >
      TypeScript
    </motion.div>
    <motion.div
      className="absolute top-[35%] left-[15%] font-mono text-xs text-accent/70 backdrop-blur-sm px-2 py-1 rounded-full bg-card/10 border border-accent/5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 0.7, y: 0 }}
      transition={{ duration: 0.8, delay: 3.8 }}
    >
      Tailwind
    </motion.div>
    <motion.div
      className="absolute top-[80%] right-[40%] font-mono text-xs text-accent/70 backdrop-blur-sm px-2 py-1 rounded-full bg-card/10 border border-accent/5"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 0.7, y: 0 }}
      transition={{ duration: 0.8, delay: 4.0 }}
    >
      Framer Motion
    </motion.div>
  </>
);

// Scroll indicator component
const ScrollIndicator = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => (
  <motion.div 
    className="absolute bottom-8 left-1/2 -translate-x-1/2"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 3.5, duration: 1 }}
    style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
  >
    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      className="flex flex-col items-center"
    >
      <div className="text-xs text-accent/70 mb-2">Scroll</div>
      <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="14" height="22" rx="7" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.4" />
        <motion.circle 
          cx="8" 
          cy="8" 
          r="3" 
          fill="var(--accent)"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </svg>
    </motion.div>
  </motion.div>
);

export default function Hero() {
  const ref = useRef(null);
  const [showCVDropdown, setShowCVDropdown] = useState(false);
  
  // Scroll animations setup
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const headerScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.5], [0.7, 0]);
  
  // Signature SVG path animation
  const pathLength = useSpring(0, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const timer = setTimeout(() => {
      pathLength.set(1);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [pathLength]);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!showCVDropdown) return;
    
    const handleClickOutside = () => setShowCVDropdown(false);
    document.addEventListener('click', handleClickOutside);
    
    return () => document.removeEventListener('click', handleClickOutside);
  }, [showCVDropdown]);

  const handleCVButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowCVDropdown(!showCVDropdown);
  };

  const downloadCV = (language: string) => {
    const filename = language === 'english' ? 'CV_English.pdf' : 'CV_Greek.pdf';
    const link = document.createElement('a');
    link.href = `/assets/cv/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowCVDropdown(false);
  };

  return (
    <div
      ref={ref}
      id="home"
      className="min-h-screen w-full relative flex flex-col items-center justify-center overflow-hidden pt-24"
    >
      {/* Background grid */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ 
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--accent) 1px, transparent 0)`,
          backgroundSize: '50px 50px',
          opacity: gridOpacity
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1.5 }}
      />
      
      {/* Background shapes */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          className="absolute -left-[20%] top-[10%] w-[60%] h-[55%] rounded-full bg-accent/10 blur-[120px]"
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "10%"]) }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        <motion.div 
          className="absolute right-[10%] bottom-[10%] w-[50%] h-[50%] rounded-full bg-accent/10 blur-[120px]"
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]) }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1.5, delay: 1 }}
        />
      </div>

      <div className="container mx-auto relative z-10 px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-12 min-h-[65vh] items-center">
          {/* Content column */}
          <motion.div 
            className="lg:col-span-7 xl:col-span-6 lg:col-start-1"
            style={{ opacity: headerOpacity, scale: headerScale }}
          >
            <div className="relative">
              {/* Introduction text */}
              <motion.div 
                className="mb-2 text-accent text-base md:text-lg tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <TextAnimation 
                  text="Hello, I'm a"
                  variant="typewriter"
                  className="inline-block"
                  delay={0.5}
                  duration={0.3}
                />
              </motion.div>
              
              {/* Main headline */}
              <div className="mb-6 lg:mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.8 }}
                >
                  <TextAnimation 
                    text="Junior Web Developer"
                    variant="reveal"
                    className="block text-4xl md:text-5xl lg:text-6xl font-bold"
                    delay={0.1}
                    duration={0.5}
                  />
                </motion.div>
              </div>
              
              {/* Description text */}
              <motion.div
                className="max-w-2xl text-muted mb-8 lg:mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.3 }}
              >
                <TextAnimation 
                  text="Crafting modern web experiences with Next.js, TypeScript, and Tailwind CSS. Passionate about learning UI/UX design and cutting-edge animations."
                  variant="split"
                  className="text-base md:text-lg"
                  delay={0.1}
                  duration={0.4}
                />
              </motion.div>
              
              {/* Action buttons */}
              <motion.div 
                className="flex flex-wrap gap-3 md:gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.8 }}
              >
                <a 
                  href="#projects" 
                  className="px-6 py-2.5 rounded-lg bg-accent text-white font-medium transition-all duration-300 hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-background"
                >
                  View My Work
                </a>
                <a 
                  href="#contact" 
                  className="px-6 py-2.5 rounded-lg border border-border text-foreground transition-all duration-300 hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-background"
                >
                  Contact Me
                </a>
                
                {/* CV Download Button with Dropdown */}
                <div className="relative">
                  <button 
                    onClick={handleCVButtonClick}
                    className="px-6 py-2.5 rounded-lg border border-accent bg-accent/10 text-accent font-medium transition-all duration-300 hover:bg-accent/20 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-background flex items-center gap-2"
                  >
                    <span>Download CV</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  <CVDropdown isOpen={showCVDropdown} onDownload={downloadCV} />
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Visual column */}
          <div className="lg:col-span-5 xl:col-span-6 lg:col-start-8">
            <div className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] flex items-center justify-center">
              <AbstractGraphic pathLength={pathLength} />
              <TechKeywords scrollYProgress={scrollYProgress} />
            </div>
          </div>
        </div>
      </div>

      <ScrollIndicator scrollYProgress={scrollYProgress} />
    </div>
  );
} 