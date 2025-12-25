import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Star, Heart, Zap } from "lucide-react";
import { DoodleStar, DoodleHeart, DoodleSpiral, DoodleBolt } from "../Doodles";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Light playful gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10" />
      
      {/* Soft grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(236,72,153,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(236,72,153,0.06)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Fun floating color blobs */}
      <motion.div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/30 to-purple-soft/20 rounded-full blur-[100px]" animate={{
      scale: [1, 1.2, 1],
      x: [0, 20, 0]
    }} transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }} />
      <motion.div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-secondary/40 to-accent/20 rounded-full blur-[80px]" animate={{
      scale: [1.2, 1, 1.2],
      y: [0, -30, 0]
    }} transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }} />
      <motion.div className="absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-to-br from-accent/25 to-secondary/15 rounded-full blur-[70px]" animate={{
      scale: [1, 1.3, 1],
      x: [0, -20, 0]
    }} transition={{
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut"
    }} />
      <motion.div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-gradient-to-br from-purple-soft/30 to-primary/20 rounded-full blur-[90px]" animate={{
      scale: [1.1, 1, 1.1],
      y: [0, 20, 0]
    }} transition={{
      duration: 9,
      repeat: Infinity,
      ease: "easeInOut"
    }} />

      {/* Decorative doodles around hero */}
      <div className="absolute top-32 left-[15%] hidden lg:block">
        <DoodleStar className="text-primary w-10 h-10 opacity-70" />
      </div>
      <div className="absolute top-48 right-[12%] hidden lg:block">
        <DoodleHeart className="text-accent w-12 h-12 opacity-60" />
      </div>
      <div className="absolute bottom-40 left-[8%] hidden lg:block">
        <DoodleSpiral className="text-purple-soft w-14 h-14 opacity-50" />
      </div>
      <div className="absolute bottom-32 right-[18%] hidden lg:block">
        <DoodleBolt className="text-secondary w-8 h-12 opacity-70" />
      </div>
      
      <div className="container-custom relative z-10 text-center px-4">
        <motion.div initial={{
        opacity: 0,
        y: 20,
        scale: 0.9
      }} animate={{
        opacity: 1,
        y: 0,
        scale: 1
      }} transition={{
        duration: 0.5,
        type: "spring",
        bounce: 0.4
      }} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass mb-8 border-2 border-primary/30">
          <Sparkles className="w-4 h-4 text-secondary animate-pulse" />
          <span className="text-sm text-foreground font-medium">Redefining Campus Life</span>
          <Star className="w-4 h-4 text-primary animate-wiggle" />
        </motion.div>

        <motion.h1 initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.1
      }} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 font-display">
          <span className="gradient-text">AfterCollage</span>
        </motion.h1>

        <motion.p initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }} className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-4 text-balance leading-relaxed">
          The virtual college ecosystem that connects students, teachers, and alumni in one unified digital campus.
        </motion.p>

        <motion.p initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.3
      }} className="text-lg font-semibold mb-12 flex items-center justify-center gap-2">
          <Heart className="w-5 h-5 text-primary animate-pulse" />
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            "It's a college, after college."
          </span>
          <Zap className="w-5 h-5 text-secondary animate-bounce" />
        </motion.p>

        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.4
      }} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#demo" className="inline-flex items-center justify-center gap-2 px-8 py-4 gradient-bg text-primary-foreground font-bold rounded-2xl hover:opacity-90 transition-all glow-primary btn-bouncy text-lg">
            Explore the Product
            <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#features" className="inline-flex items-center justify-center gap-2 px-8 py-4 glass rounded-2xl font-bold hover:border-primary/50 transition-all btn-bouncy text-lg">
            View Features
            <Star className="w-5 h-5 text-secondary" />
          </a>
        </motion.div>

        {/* Scroll indicator with bounce */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.6,
        delay: 0.8
      }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          
        </motion.div>
      </div>
    </section>;
};
export default Hero;