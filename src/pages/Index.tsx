import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import AppDemo from "@/components/sections/AppDemo";
import Features from "@/components/sections/Features";
import Hierarchy from "@/components/sections/Hierarchy";
import Investor from "@/components/sections/Investor";
import Monetization from "@/components/sections/Monetization";
import TechStack from "@/components/sections/TechStack";
import CTA from "@/components/sections/CTA";
import FloatingDoodles from "@/components/Doodles";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FloatingDoodles />
      <Navbar />
      <Hero />
      <div id="problem">
        <Problem />
      </div>
      <div id="solution">
        <Solution />
      </div>
      <AppDemo />
      <Features />
      <Hierarchy />
      <div id="investors">
        <Investor />
      </div>
      <Monetization />
      <TechStack />
      <div id="cta">
        <CTA />
      </div>
    </div>
  );
};

export default Index;
