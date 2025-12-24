import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { TrendingUp, Users, Building2, Repeat, Zap, IndianRupee, Briefcase, Store, GraduationCap, Brain, Shield, Lock, Network, Calendar, Target } from "lucide-react";
import { useEffect, useRef } from "react";

const stats = [
  { value: 50, suffix: "K+", label: "Colleges in India" },
  { value: 40, suffix: "M+", label: "College Students" },
  { value: 100, suffix: "+", label: "Daily App Opens" },
  { value: 4, suffix: "+", label: "Years of Usage" },
];

const revenueStreams = [
  {
    icon: Building2,
    title: "College SaaS Subscriptions",
    tag: "Primary",
    description: "Annual plans for admin tools, moderation, analytics, branding",
    pricing: [
      "Private colleges: ₹1.5–3 lakh / year",
      "Tier-2 colleges: ₹50k–1 lakh / year",
      "Government colleges: free / subsidized initially",
    ],
    highlight: "Recurring, predictable B2B revenue",
  },
  {
    icon: Target,
    title: "Sponsored Campus Opportunities",
    tag: "Early Revenue",
    description: "Hackathons, workshops, placement drives",
    details: "Brands and ed-tech companies pay to reach verified campuses",
    highlight: "Short-term cash flow during early expansion",
  },
  {
    icon: Store,
    title: "Campus Business Listings",
    tag: "Local Revenue",
    description: "PGs, cafes, coaching centers, local services",
    details: "Monthly per-college listings",
    highlight: "Replaces posters and WhatsApp promotions",
  },
  {
    icon: GraduationCap,
    title: "Alumni & Recruiter Access",
    tag: "High Value",
    description: "Alumni mentoring visibility & recruiter access",
    details: "Internships and fresher hiring connections",
    highlight: "High value once alumni density grows",
  },
  {
    icon: Brain,
    title: "AI-Based Add-ons",
    tag: "Future ARPU",
    description: "Career guidance, resume feedback, personalized assistance",
    details: "Advanced academic and career support tools",
    highlight: "Long-term upside, not early revenue",
  },
];

const phasingTimeline = [
  {
    year: "Year 1",
    focus: "Foundation",
    items: ["Sponsored events", "Campus listings", "Pilot colleges"],
  },
  {
    year: "Year 2",
    focus: "Monetization",
    items: ["College SaaS subscriptions", "Recruiter access"],
  },
  {
    year: "Year 3",
    focus: "Expansion",
    items: ["AI subscriptions", "Alumni premium", "Advanced analytics"],
  },
];

const defensibilityPoints = [
  {
    icon: Shield,
    title: "Verified College Hierarchy",
    description: "Role-based permissions: Admin → Faculty → Student → Alumni",
  },
  {
    icon: Lock,
    title: "High Switching Costs",
    description: "Once embedded in college operations, deeply integrated workflows create lock-in",
  },
  {
    icon: Network,
    title: "Campus Network Effects",
    description: "More students = more content = more value for every user on campus",
  },
  {
    icon: Building2,
    title: "Infrastructure Positioning",
    description: "Not a feature app — a digital operating layer for institutions",
  },
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">For Investors</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Investor Opportunity: Building <span className="gradient-text">Digital Infrastructure</span> for Indian Colleges
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            AfterCollage is not a consumer social network. It is a <strong>B2B-first digital infrastructure platform</strong> for colleges in India.
          </p>
        </motion.div>

        {/* Core Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-8 mb-16 text-center max-w-4xl mx-auto"
        >
          <p className="text-lg text-foreground/90 leading-relaxed">
            Colleges already pay for ERP systems, portals, and communication tools. 
            AfterCollage unifies engagement, communication, and opportunity discovery on top of existing systems — 
            <span className="text-primary font-semibold"> creating strong institutional lock-in.</span>
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20"
        >
          {stats.map((stat) => (
            <AnimatedCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </motion.div>

        {/* Market Potential */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            A Large, <span className="gradient-text">Underserved</span> Institutional Market
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Building2, text: "50,000+ colleges represent long-term institutional customers" },
              { icon: Users, text: "Each college brings thousands of daily active student users" },
              { icon: TrendingUp, text: "Adoption happens at the college level, not user-by-user" },
              { icon: Repeat, text: "One onboarding = years of recurring usage" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-5 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <p className="text-sm text-foreground/80">{item.text}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-6 text-sm">
            This is a structural market, not a trend-driven one.
          </p>
        </motion.div>

        {/* Revenue Streams */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Multiple Revenue Streams, <span className="gradient-text">One Core Platform</span>
          </h3>
          <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
            Clear, segmented monetization paths that scale with adoption
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {revenueStreams.map((stream, index) => (
              <motion.div
                key={stream.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 hover:border-accent/30 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <stream.icon className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">
                    {stream.tag}
                  </span>
                </div>
                <h4 className="text-lg font-semibold mb-2">{stream.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">{stream.description}</p>
                
                {stream.pricing && (
                  <ul className="text-xs text-foreground/70 space-y-1 mb-3">
                    {stream.pricing.map((price, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <IndianRupee className="w-3 h-3 text-accent" />
                        {price}
                      </li>
                    ))}
                  </ul>
                )}
                
                {stream.details && (
                  <p className="text-xs text-foreground/60 mb-3">{stream.details}</p>
                )}
                
                <p className="text-xs font-medium text-primary">{stream.highlight}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Revenue Phasing Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Monetization That <span className="gradient-text">Matches Adoption</span>
          </h3>
          <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
            Patient, phased approach to long-term value creation
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {phasingTimeline.map((phase, index) => (
              <motion.div
                key={phase.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="glass rounded-2xl p-6 text-center relative"
              >
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-accent" />
                </div>
                <h4 className="text-xl font-bold gradient-text mb-1">{phase.year}</h4>
                <p className="text-sm text-muted-foreground mb-4">{phase.focus}</p>
                <ul className="text-sm text-foreground/80 space-y-2">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 justify-center">
                      <Zap className="w-3 h-3 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                {index < phasingTimeline.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-accent/30" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Defensibility & Moat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Why This Is <span className="gradient-text">Hard to Replace</span>
          </h3>
          <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
            Infrastructure positioning vs feature-based apps
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {defensibilityPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-5 hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <point.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{point.title}</h4>
                <p className="text-sm text-muted-foreground">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scale Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            What Scale <span className="gradient-text">Can Look Like</span>
          </h3>
          
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 flex-wrap mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">200</div>
                <div className="text-xs text-muted-foreground">Colleges</div>
              </div>
              <span className="text-2xl text-muted-foreground">×</span>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">₹1L</div>
                <div className="text-xs text-muted-foreground">ARR Each</div>
              </div>
              <span className="text-2xl text-muted-foreground">=</span>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">₹20 Cr</div>
                <div className="text-xs text-muted-foreground">ARR Potential</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Even partial market penetration creates significant outcomes
            </p>
            <p className="text-xs text-muted-foreground/60 mt-4 italic">
              *Illustrative projections for vision demonstration only
            </p>
          </div>
        </motion.div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="glass-strong rounded-3xl p-10 md:p-16 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
              "We are not building a social media app.
              <br />
              <span className="gradient-text">We are building the digital operating system for colleges in India.</span>"
            </h3>
            <p className="text-lg text-muted-foreground">
              High lock-in, recurring revenue, and long-term institutional value.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Investor;
