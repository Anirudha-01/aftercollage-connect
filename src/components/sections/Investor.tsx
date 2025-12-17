import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { TrendingUp, Users, Building2, Repeat, Zap } from "lucide-react";
import { useEffect, useRef } from "react";

const investorPoints = [
  {
    icon: TrendingUp,
    title: "Massive Market",
    description: "50,000+ colleges in India alone. Each college = a dedicated customer with thousands of users.",
  },
  {
    icon: Users,
    title: "Daily Active Users",
    description: "Students check their phones 100+ times/day. We become their default campus app.",
  },
  {
    icon: Building2,
    title: "Enterprise Ready",
    description: "Colleges pay for admin tools, analytics, and premium features. B2B revenue stream.",
  },
  {
    icon: Repeat,
    title: "Network Effects",
    description: "More students = more content = more students. Each college creates its own viral loop.",
  },
  {
    icon: Zap,
    title: "Better Than Alternatives",
    description: "WhatsApp is chaotic. LinkedIn is for jobs only. Instagram isn't academic. We combine all three.",
  },
];

const stats = [
  { value: 50, suffix: "K+", label: "Colleges in India" },
  { value: 40, suffix: "M+", label: "College Students" },
  { value: 100, suffix: "+", label: "Daily App Opens" },
  { value: 4, suffix: "+", label: "Years of Usage" },
];

const AnimatedCounter = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, value, count]);

  return (
    <div ref={ref} className="glass-strong rounded-2xl p-6 text-center">
      <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
        <motion.span>{rounded}</motion.span>
        {suffix}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
};

const Investor = () => {
  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">For Investors</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Why <span className="gradient-text">AfterCollage</span> Will Scale
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The opportunity is massive. The timing is perfect. The execution is ready.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat) => (
            <AnimatedCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </motion.div>

        {/* Investment points */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {investorPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 hover:border-accent/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <point.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
              <p className="text-muted-foreground">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Investor;
