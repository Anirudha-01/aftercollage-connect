import { motion } from "framer-motion";
import { Shield, Crown, GraduationCap, Users, UserCheck } from "lucide-react";

const roles = [
  {
    icon: Shield,
    title: "Super Admin",
    description: "Platform-wide control, college onboarding, and system management.",
    level: 0,
    color: "from-primary to-sky",
  },
  {
    icon: Crown,
    title: "College Admin",
    description: "Full control over their college's digital campus.",
    level: 1,
    color: "from-sky to-accent",
  },
  {
    icon: GraduationCap,
    title: "Faculty",
    description: "Department management, announcements, and student interaction.",
    level: 2,
    color: "from-accent to-mint",
  },
  {
    icon: Users,
    title: "Student",
    description: "Full access to social, academic, and career features.",
    level: 3,
    color: "from-mint to-primary",
  },
  {
    icon: UserCheck,
    title: "Alumni",
    description: "Network access, mentorship tools, and job posting.",
    level: 3,
    color: "from-purple-soft to-sunset",
  },
];

const Hierarchy = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute right-0 top-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[200px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">User Roles</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Clear <span className="gradient-text">Hierarchy</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every user has their place, with appropriate access and responsibilities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hierarchy visualization */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-3xl p-8"
          >
            <h3 className="text-xl font-bold mb-8 text-center">College Structure</h3>
            <div className="space-y-4">
              {[
                { title: "Dean / Principal", level: "College Head", color: "bg-primary" },
                { title: "HOD", level: "Department Head", color: "bg-sky" },
                { title: "Faculty", level: "Teaching Staff", color: "bg-accent" },
                { title: "Students", level: "Learners", color: "bg-mint" },
              ].map((item, index) => (
                <div key={item.title} className="flex items-center gap-4" style={{ paddingLeft: `${index * 24}px` }}>
                  <div className={`w-3 h-3 rounded-full ${item.color}`} />
                  <div className="glass rounded-xl px-4 py-3 flex-1">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{item.title}</span>
                      <span className="text-xs text-muted-foreground">{item.level}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground text-center">
                Each level manages and mentors the level below
              </p>
            </div>
          </motion.div>

          {/* Role cards */}
          <div className="space-y-4">
            {roles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-4 flex items-center gap-4 hover:border-primary/30 transition-colors"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${role.color} flex items-center justify-center shrink-0`}>
                  <role.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold">{role.title}</h4>
                  <p className="text-sm text-muted-foreground">{role.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hierarchy;
