"use client";

import { motion } from "framer-motion";

const technologiesRow1 = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", 
  "Node.js", "Prisma", "PostgreSQL", "Framer Motion"
];

const technologiesRow2 = [
  "GraphQL", "REST APIs", "Git", "Vercel", 
  "Three.js", "GSAP", "WebGL", "Redis"
];

// Duplicate for seamless loop
const row1 = [...technologiesRow1, ...technologiesRow1, ...technologiesRow1, ...technologiesRow1];
const row2 = [...technologiesRow2, ...technologiesRow2, ...technologiesRow2, ...technologiesRow2];

export default function TechStack() {
  return (
    <section className="py-32 overflow-hidden border-t border-surface/50 relative bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-background to-background opacity-50 pointer-events-none" />
      
      <div className="px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto mb-20 relative z-10">
        <p className="text-xs text-accent uppercase tracking-[0.3em] font-semibold mb-6">Arsenal</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text tracking-tighter leading-[0.9]">
          The engine behind <br className="hidden md:block"/> the experiences.
        </h2>
      </div>
      
      {/* Marquee Row 1 */}
      <div className="flex whitespace-nowrap overflow-hidden relative group">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <motion.div
          className="flex gap-6 pr-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {row1.map((tech, index) => (
            <div 
              key={`${tech}-${index}`} 
              className="flex items-center justify-center px-10 py-6 rounded-full bg-surface/20 border border-white/5 text-muted hover:text-text hover:border-white/20 transition-all duration-300 backdrop-blur-sm flex-shrink-0"
            >
              <span className="text-lg font-medium tracking-wide">{tech}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Marquee Row 2 (Reverse) */}
      <div className="flex whitespace-nowrap overflow-hidden relative mt-6 group">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <motion.div
          className="flex gap-6 pr-6 w-max"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            duration: 45,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {row2.map((tech, index) => (
            <div 
              key={`rev-${tech}-${index}`} 
              className="flex items-center justify-center px-10 py-6 rounded-full bg-surface/20 border border-white/5 text-muted hover:text-text hover:border-white/20 transition-all duration-300 backdrop-blur-sm flex-shrink-0"
            >
              <span className="text-lg font-medium tracking-wide">{tech}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
