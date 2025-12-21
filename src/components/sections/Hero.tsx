import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/5" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(167,139,250,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(167,139,250,0.04)_1px,transparent_1px)] bg-[size:80px_80px]" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-[150px]" />
      
      <div className="container-custom relative z-10 text-center px-4">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">Redefining Campus Life</span>
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
      }} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
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
      }} className="text-lg text-accent font-medium mb-12">
          "It's a college, after college."
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
          <a href="#demo" className="inline-flex items-center justify-center gap-2 px-8 py-4 gradient-bg text-primary-foreground font-semibold rounded-2xl hover:opacity-90 transition-opacity glow-primary">
            Explore the Product
            <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#features" className="inline-flex items-center justify-center gap-2 px-8 py-4 glass rounded-2xl font-semibold hover:bg-secondary/80 transition-colors">
            View Features
          </a>
        </motion.div>

        {/* Scroll indicator */}
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