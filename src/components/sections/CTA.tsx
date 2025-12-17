import { motion } from "framer-motion";
import { ArrowRight, Mail, Handshake, Rocket, Download } from "lucide-react";

const CTA = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/10 to-background" />
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[200px] -translate-x-1/2 -translate-y-1/2" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-3xl p-8 md:p-16 text-center glow-primary"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Ready to <span className="gradient-text">Transform</span> Campus Life?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            Join us in building the future of college ecosystems. Whether you're an investor, 
            institution, or just curious—we'd love to connect.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            <a
              href="mailto:hello@aftercollage.com"
              className="flex items-center justify-center gap-2 px-6 py-4 gradient-bg text-primary-foreground font-semibold rounded-2xl hover:opacity-90 transition-opacity"
            >
              <Handshake className="w-5 h-5" />
              Partner With Us
            </a>
            <a
              href="mailto:invest@aftercollage.com"
              className="flex items-center justify-center gap-2 px-6 py-4 glass rounded-2xl font-semibold hover:bg-secondary/80 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Contact Us
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-2 px-6 py-4 glass rounded-2xl font-semibold hover:bg-secondary/80 transition-colors"
            >
              <Rocket className="w-5 h-5" />
              Join Early Access
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-2 px-6 py-4 glass rounded-2xl font-semibold hover:bg-secondary/80 transition-colors group"
            >
              <Download className="w-5 h-5" />
              App Coming Soon
            </a>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
              <span className="text-lg font-bold text-primary-foreground">AC</span>
            </div>
            <span className="text-xl font-bold">AfterCollage</span>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 AfterCollage. All rights reserved.
          </p>
          <p className="text-muted-foreground/60 text-xs mt-2">
            "It's a college, after college."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
