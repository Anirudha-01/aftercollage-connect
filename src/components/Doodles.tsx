import { motion } from "framer-motion";

interface DoodleProps {
  className?: string;
}

// Star doodle
export const DoodleStar = ({ className = "" }: DoodleProps) => (
  <motion.svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    className={className}
    animate={{ rotate: [0, 360] }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
  >
    <path
      d="M20 4L23.5 14.5L34 16L26 24L28 35L20 29L12 35L14 24L6 16L16.5 14.5L20 4Z"
      fill="currentColor"
      opacity="0.8"
    />
  </motion.svg>
);

// Spiral doodle
export const DoodleSpiral = ({ className = "" }: DoodleProps) => (
  <motion.svg
    width="50"
    height="50"
    viewBox="0 0 50 50"
    fill="none"
    className={className}
    animate={{ rotate: [0, -360] }}
    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
  >
    <path
      d="M25 5C35 5 45 15 45 25C45 35 35 45 25 45C15 45 10 35 10 25C10 20 15 15 20 15C25 15 28 18 28 22C28 24 26 26 24 26"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
  </motion.svg>
);

// Heart doodle
export const DoodleHeart = ({ className = "" }: DoodleProps) => (
  <motion.svg
    width="35"
    height="35"
    viewBox="0 0 35 35"
    fill="none"
    className={className}
    animate={{ scale: [1, 1.2, 1] }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
  >
    <path
      d="M17.5 30L15.1 27.8C7 20.3 2 15.5 2 9.8C2 5.4 5.4 2 9.8 2C12.3 2 14.7 3.2 17.5 6C20.3 3.2 22.7 2 25.2 2C29.6 2 33 5.4 33 9.8C33 15.5 28 20.3 19.9 27.8L17.5 30Z"
      fill="currentColor"
      opacity="0.7"
    />
  </motion.svg>
);

// Lightning bolt doodle
export const DoodleBolt = ({ className = "" }: DoodleProps) => (
  <motion.svg
    width="30"
    height="45"
    viewBox="0 0 30 45"
    fill="none"
    className={className}
    animate={{ y: [0, -5, 0], opacity: [0.7, 1, 0.7] }}
    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
  >
    <path
      d="M18 2L4 22H14L12 43L26 18H16L18 2Z"
      fill="currentColor"
    />
  </motion.svg>
);

// Squiggly line
export const DoodleSquiggle = ({ className = "" }: DoodleProps) => (
  <motion.svg
    width="80"
    height="20"
    viewBox="0 0 80 20"
    fill="none"
    className={className}
  >
    <motion.path
      d="M2 10C10 2 15 18 25 10C35 2 40 18 50 10C60 2 65 18 78 10"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
    />
  </motion.svg>
);

// Circle with dots
export const DoodleCircle = ({ className = "" }: DoodleProps) => (
  <motion.svg
    width="45"
    height="45"
    viewBox="0 0 45 45"
    fill="none"
    className={className}
    animate={{ rotate: [0, 360] }}
    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
  >
    <circle cx="22.5" cy="22.5" r="18" stroke="currentColor" strokeWidth="2.5" strokeDasharray="8 6" fill="none" />
    <circle cx="22.5" cy="4.5" r="3" fill="currentColor" />
    <circle cx="22.5" cy="40.5" r="3" fill="currentColor" />
  </motion.svg>
);

// Book doodle
export const DoodleBook = ({ className = "" }: DoodleProps) => (
  <motion.svg
    width="40"
    height="35"
    viewBox="0 0 40 35"
    fill="none"
    className={className}
    animate={{ rotate: [-5, 5, -5] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
  >
    <path
      d="M5 5C5 5 15 2 20 8C25 2 35 5 35 5V30C35 30 25 27 20 30C15 27 5 30 5 30V5Z"
      stroke="currentColor"
      strokeWidth="2.5"
      fill="none"
    />
    <path d="M20 8V30" stroke="currentColor" strokeWidth="2" />
  </motion.svg>
);

// Arrow doodle
export const DoodleArrow = ({ className = "" }: DoodleProps) => (
  <motion.svg
    width="50"
    height="30"
    viewBox="0 0 50 30"
    fill="none"
    className={className}
    animate={{ x: [0, 10, 0] }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
  >
    <path
      d="M2 15C10 15 25 5 35 15C25 25 10 15 2 15Z"
      stroke="currentColor"
      strokeWidth="2.5"
      fill="none"
    />
    <path
      d="M35 15L48 15M48 15L42 8M48 15L42 22"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </motion.svg>
);

// Confetti piece
export const DoodleConfetti = ({ className = "" }: DoodleProps) => (
  <motion.div
    className={`${className} w-3 h-3 rounded-sm`}
    animate={{ 
      y: [0, -20, 0],
      rotate: [0, 180, 360],
      scale: [1, 1.2, 1]
    }}
    transition={{ 
      duration: 3, 
      repeat: Infinity, 
      ease: "easeInOut" 
    }}
  />
);

// Floating shapes component - light theme version
export const FloatingDoodles = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    {/* Pink star */}
    <DoodleStar className="absolute top-[15%] left-[10%] text-primary opacity-40" />
    
    {/* Yellow heart */}
    <DoodleHeart className="absolute top-[25%] right-[15%] text-accent opacity-35" />
    
    {/* Orange spiral */}
    <DoodleSpiral className="absolute bottom-[30%] left-[8%] text-secondary opacity-30" />
    
    {/* Purple circle */}
    <DoodleCircle className="absolute top-[60%] right-[10%] text-purple-soft opacity-40" />
    
    {/* Pink squiggle */}
    <DoodleSquiggle className="absolute bottom-[20%] right-[20%] text-primary opacity-30" />
    
    {/* Yellow bolt */}
    <DoodleBolt className="absolute top-[40%] left-[85%] text-secondary opacity-45" />
    
    {/* Book */}
    <DoodleBook className="absolute bottom-[45%] left-[15%] text-accent opacity-30" />
    
    {/* More scattered elements */}
    <DoodleStar className="absolute top-[70%] left-[70%] text-secondary opacity-35" />
    <DoodleHeart className="absolute top-[10%] left-[50%] text-primary opacity-25" />
    <DoodleCircle className="absolute bottom-[15%] left-[40%] text-purple-soft opacity-30" />
  </div>
);

export default FloatingDoodles;