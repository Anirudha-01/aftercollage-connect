import { motion } from "framer-motion";

const techStack = [
  {
    name: "Next.js",
    description: "React framework for production",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    category: "Frontend",
  },
  {
    name: "Flutter",
    description: "Cross-platform mobile development",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    category: "Mobile",
  },
  {
    name: "Firebase",
    description: "Backend as a Service",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    category: "Backend",
  },
  {
    name: "OpenAI",
    description: "AI & ML capabilities",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    category: "AI",
  },
  {
    name: "AWS",
    description: "Cloud infrastructure",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    category: "Cloud",
  },
  {
    name: "TypeScript",
    description: "Type-safe development",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    category: "Language",
  },
];

const TechStack = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[200px] translate-y-1/2 -translate-x-1/2" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Technology</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Built With <span className="gradient-text">Modern Stack</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Industry-standard technologies ensuring scalability, security, and performance.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 flex items-center gap-4 hover:border-primary/30 transition-colors group"
            >
              <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center p-3 group-hover:scale-110 transition-transform">
                <img src={tech.logo} alt={tech.name} className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-lg">{tech.name}</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">{tech.category}</span>
                </div>
                <p className="text-sm text-muted-foreground">{tech.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
