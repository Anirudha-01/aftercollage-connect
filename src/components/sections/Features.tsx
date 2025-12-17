import { motion } from "framer-motion";
import {
  User,
  Rss,
  MessageSquare,
  Camera,
  Calendar,
  Bot,
  Users,
  Globe,
  Flag,
  Briefcase,
  GraduationCap,
  Building2,
} from "lucide-react";

const features = [
  {
    icon: User,
    title: "Rich Profiles",
    description: "LinkedIn-style profiles with skills, projects, achievements, and portfolio links.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Rss,
    title: "Dual Feeds",
    description: "Global feed for cross-college discovery and college-specific feed for campus updates.",
    color: "bg-sky/10 text-sky",
  },
  {
    icon: MessageSquare,
    title: "Smart Chat",
    description: "Private DMs, department groups, project channels, and alumni networks.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Camera,
    title: "Campus Snaps",
    description: "24-hour stories for events, campus life, and memorable moments.",
    color: "bg-mint/10 text-mint",
  },
  {
    icon: Calendar,
    title: "Event Hub",
    description: "Discover, promote, and manage hackathons, fests, and workshops.",
    color: "bg-sunset/10 text-sunset",
  },
  {
    icon: Bot,
    title: "AI Assistant",
    description: "Instant doubt solving, study help, and personalized recommendations.",
    color: "bg-purple-soft/10 text-purple-soft",
  },
  {
    icon: Users,
    title: "Team Finder",
    description: "Find teammates for hackathons, projects, and competitions.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Globe,
    title: "Cross-College",
    description: "Connect with students from other colleges for collaborations.",
    color: "bg-sky/10 text-sky",
  },
  {
    icon: Flag,
    title: "Complaints",
    description: "Anonymous feedback system with tracking and resolution.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Briefcase,
    title: "Opportunities",
    description: "Internships, jobs, and freelance gigs curated for students.",
    color: "bg-mint/10 text-mint",
  },
  {
    icon: GraduationCap,
    title: "Alumni Network",
    description: "Stay connected with alumni for mentorship and opportunities.",
    color: "bg-sunset/10 text-sunset",
  },
  {
    icon: Building2,
    title: "Campus Business",
    description: "Promote local services, food joints, and student startups.",
    color: "bg-purple-soft/10 text-purple-soft",
  },
];

const Features = () => {
  return (
    <section id="features" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Features</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Everything Your Campus <span className="gradient-text">Needs</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive suite of tools designed for the modern college experience.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass rounded-2xl p-5 hover:border-primary/30 transition-all group hover:scale-[1.02]"
            >
              <div className={`w-10 h-10 rounded-xl ${feature.color} flex items-center justify-center mb-3`}>
                <feature.icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold mb-1">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
