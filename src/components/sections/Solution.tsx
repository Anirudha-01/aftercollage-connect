import { motion } from "framer-motion";
import { CheckCircle2, Layers, Globe, Zap } from "lucide-react";
const Solution = () => {
  return <section className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[200px] -translate-y-1/2 -translate-x-1/2" />
      
      <div className="container-custom relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">The Solution</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            One Platform. <span className="gradient-text">Infinite Possibilities.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            AfterCollage transforms every college into a thriving digital ecosystem.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="space-y-6">
            {[{
            icon: Layers,
            title: "One College = One Digital Campus",
            description: "Each institution gets its own branded space with departments, divisions, and complete autonomy."
          }, {
            icon: Globe,
            title: "Social + Academic + Career Combined",
            description: "Posts, chats, events, courses, and job opportunities—all in one unified experience."
          }, {
            icon: Zap,
            title: "AI-Powered Everything",
            description: "Smart recommendations, doubt solving, and personalized career guidance built right in."
          }].map((item, index) => <div key={item.title} className="flex gap-4 glass rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>)}
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="relative">
            <div className="glass-strong rounded-3xl p-8 glow-primary">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-sky/10 to-accent/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-2xl gradient-bg flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary-foreground">af</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Your College, Digitized</h3>
                  <div className="flex flex-wrap justify-center gap-2 mt-4">
                    {["Social", "Academic", "Career", "Events", "AI"].map(tag => <span key={tag} className="px-3 py-1 text-sm rounded-full bg-primary/20 text-primary">
                        {tag}
                      </span>)}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Solution;