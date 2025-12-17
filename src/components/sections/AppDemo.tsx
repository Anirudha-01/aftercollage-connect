import { motion } from "framer-motion";
import { User, Bell, MessageCircle, Camera, Calendar, Users, Bot, Flag } from "lucide-react";

const screens = [
  {
    title: "Login & Onboarding",
    icon: User,
    color: "from-primary to-sky",
    content: (
      <div className="space-y-3">
        <div className="h-10 w-full rounded-xl bg-secondary/50" />
        <div className="h-10 w-full rounded-xl bg-secondary/50" />
        <div className="h-12 w-full rounded-xl gradient-bg" />
        <p className="text-xs text-muted-foreground text-center pt-2">Select your college • Choose department • Set up profile</p>
      </div>
    ),
  },
  {
    title: "Home Feed",
    icon: Bell,
    color: "from-sky to-accent",
    content: (
      <div className="space-y-3">
        {[1, 2].map((i) => (
          <div key={i} className="p-3 rounded-xl bg-secondary/50 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/30" />
              <div className="h-3 w-20 rounded bg-muted" />
            </div>
            <div className="h-24 w-full rounded-lg bg-muted/50" />
            <div className="flex gap-4">
              <div className="h-3 w-12 rounded bg-muted" />
              <div className="h-3 w-12 rounded bg-muted" />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Chat & Groups",
    icon: MessageCircle,
    color: "from-accent to-mint",
    content: (
      <div className="space-y-2">
        {["CS Department", "Project Team", "Study Group", "Alumni Network"].map((name) => (
          <div key={name} className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50">
            <div className="w-10 h-10 rounded-full bg-accent/30" />
            <div>
              <p className="text-sm font-medium">{name}</p>
              <p className="text-xs text-muted-foreground">New message...</p>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Campus Snaps",
    icon: Camera,
    color: "from-mint to-primary",
    content: (
      <div className="flex gap-2 overflow-hidden">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="w-16 shrink-0">
            <div className="w-16 h-20 rounded-xl bg-gradient-to-b from-primary/30 to-accent/30 mb-1" />
            <div className="h-2 w-12 mx-auto rounded bg-muted" />
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Events Hub",
    icon: Calendar,
    color: "from-primary to-sunset",
    content: (
      <div className="space-y-2">
        {["Hackathon 2024", "Tech Talk", "Cultural Fest"].map((event) => (
          <div key={event} className="p-3 rounded-xl bg-secondary/50 flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center text-xs font-bold text-primary-foreground">
              DEC<br/>15
            </div>
            <div>
              <p className="text-sm font-medium">{event}</p>
              <p className="text-xs text-muted-foreground">200+ interested</p>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Team Finder",
    icon: Users,
    color: "from-sunset to-purple-soft",
    content: (
      <div className="space-y-2">
        <div className="p-3 rounded-xl border-2 border-dashed border-primary/30 text-center">
          <p className="text-sm font-medium text-primary">Looking for teammates?</p>
          <p className="text-xs text-muted-foreground">Post your project idea</p>
        </div>
        {["React Dev needed", "ML Researcher"].map((req) => (
          <div key={req} className="p-3 rounded-xl bg-secondary/50 flex justify-between items-center">
            <span className="text-sm">{req}</span>
            <span className="text-xs px-2 py-1 rounded-full bg-accent/20 text-accent">Apply</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "AI Assistant",
    icon: Bot,
    color: "from-purple-soft to-sky",
    content: (
      <div className="space-y-3">
        <div className="p-3 rounded-xl bg-primary/20 ml-8">
          <p className="text-sm">How do I solve this integral?</p>
        </div>
        <div className="p-3 rounded-xl bg-secondary/50 mr-8">
          <p className="text-sm">Let me help you with calculus! First, identify the type of integral...</p>
        </div>
        <div className="flex gap-2">
          <div className="h-8 flex-1 rounded-lg bg-secondary/50" />
          <div className="h-8 w-8 rounded-lg gradient-bg" />
        </div>
      </div>
    ),
  },
  {
    title: "Complaints",
    icon: Flag,
    color: "from-sky to-accent",
    content: (
      <div className="space-y-2">
        <div className="p-3 rounded-xl bg-secondary/50">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">WiFi Issue - Block A</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-sunset/20 text-sunset">Pending</span>
          </div>
          <p className="text-xs text-muted-foreground">Submitted 2 days ago</p>
        </div>
        <div className="p-3 rounded-xl bg-secondary/50">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">Lab Equipment</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-accent/20 text-accent">Resolved</span>
          </div>
          <p className="text-xs text-muted-foreground">Submitted 5 days ago</p>
        </div>
      </div>
    ),
  },
];

const AppDemo = () => {
  return (
    <section id="demo" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">App Preview</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Experience the <span className="gradient-text">Future</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A sneak peek into every corner of the AfterCollage experience.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {screens.map((screen, index) => (
            <motion.div
              key={screen.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-3xl p-4 hover:scale-[1.02] transition-transform"
            >
              {/* Phone frame */}
              <div className="rounded-2xl bg-background p-4 border border-border">
                {/* Status bar */}
                <div className="flex justify-between items-center mb-4">
                  <div className="text-xs text-muted-foreground">9:41</div>
                  <div className="flex gap-1">
                    <div className="w-4 h-2 rounded-sm bg-muted" />
                    <div className="w-4 h-2 rounded-sm bg-muted" />
                  </div>
                </div>
                
                {/* Header */}
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${screen.color} flex items-center justify-center`}>
                    <screen.icon className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="font-semibold text-sm">{screen.title}</span>
                </div>
                
                {/* Content */}
                <div className="min-h-[200px]">
                  {screen.content}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppDemo;
