import { motion } from "framer-motion";
import { Building2, Sparkles, Megaphone, Store, Crown } from "lucide-react";

const revenueStreams = [
  {
    icon: Building2,
    title: "College Subscriptions",
    description: "Premium admin tools, analytics dashboard, and white-label branding for institutions.",
    price: "₹50K - ₹2L/year",
    color: "from-primary to-sky",
  },
  {
    icon: Sparkles,
    title: "AI Premium",
    description: "Advanced AI tutoring, career guidance, and personalized learning paths for students.",
    price: "₹99 - ₹299/month",
    color: "from-sky to-accent",
  },
  {
    icon: Megaphone,
    title: "Event Promotions",
    description: "Featured listings for hackathons, fests, and workshops with broader reach.",
    price: "₹500 - ₹5K/event",
    color: "from-accent to-mint",
  },
  {
    icon: Store,
    title: "Campus Marketplace",
    description: "Local businesses, food joints, and student startups can list and promote.",
    price: "₹1K - ₹10K/month",
    color: "from-mint to-primary",
  },
  {
    icon: Crown,
    title: "Alumni Premium",
    description: "Enhanced networking, job posting, and mentorship tools for alumni.",
    price: "₹199 - ₹499/month",
    color: "from-purple-soft to-sunset",
  },
];

const Monetization = () => {
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
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Business Model</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Multiple <span className="gradient-text">Revenue Streams</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sustainable monetization without compromising the core user experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {revenueStreams.map((stream, index) => (
            <motion.div
              key={stream.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 hover:scale-[1.02] transition-transform"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stream.color} flex items-center justify-center mb-4`}>
                <stream.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{stream.title}</h3>
              <p className="text-muted-foreground mb-4">{stream.description}</p>
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                {stream.price}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 glass-strong rounded-3xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Projected Revenue Model</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-primary mb-1">Year 1</div>
              <div className="text-muted-foreground">100 colleges onboarded</div>
              <div className="text-lg font-semibold mt-2">₹50L - ₹1Cr</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-sky mb-1">Year 2</div>
              <div className="text-muted-foreground">500 colleges + Premium users</div>
              <div className="text-lg font-semibold mt-2">₹3Cr - ₹5Cr</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-1">Year 3</div>
              <div className="text-muted-foreground">2000+ colleges + Marketplace</div>
              <div className="text-lg font-semibold mt-2">₹15Cr - ₹25Cr</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Monetization;
