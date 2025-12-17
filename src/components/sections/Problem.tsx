import { motion } from "framer-motion";
import { AlertTriangle, Unplug, Calendar, Users, MessageSquareOff } from "lucide-react";

const problems = [
  {
    icon: Unplug,
    title: "No Single Platform",
    description: "Students juggle between WhatsApp, email, and multiple apps just to stay connected with their college.",
  },
  {
    icon: AlertTriangle,
    title: "Academic + Social Disconnect",
    description: "Learning management and social interactions exist in completely separate worlds.",
  },
  {
    icon: Calendar,
    title: "Scattered Opportunities",
    description: "Events, internships, and hackathons are buried in emails that students never read.",
  },
  {
    icon: Users,
    title: "No Cross-College Network",
    description: "Students can't easily connect with peers from other colleges for projects or collaborations.",
  },
  {
    icon: MessageSquareOff,
    title: "Weak Communication",
    description: "Faculty-student communication is still stuck in the pre-digital era with minimal engagement.",
  },
];

const Problem = () => {
  return (
    <section className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">The Problem</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            College Life is <span className="text-sunset">Broken</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Today's students deserve better than fragmented tools and disconnected experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 hover:border-sunset/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-sunset/10 flex items-center justify-center mb-4 group-hover:bg-sunset/20 transition-colors">
                <problem.icon className="w-6 h-6 text-sunset" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
