"use client";

import { motion } from "framer-motion";
import { DM_Serif_Display } from "next/font/google";

const dmSerif = DM_Serif_Display({ subsets: ["latin"], weight: "400", style: "italic" });

export default function About() {
  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto relative border-t border-surface/50">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
        
        {/* Left column - Title */}
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <p className="text-xs text-accent uppercase tracking-[0.3em] font-semibold mb-6">About the Architect</p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text leading-[1.1] tracking-tighter">
            An <span className={`text-muted ${dmSerif.className}`}>AI-Native</span> <br/> approach.
          </h2>
        </div>
        
        {/* Right column - Content */}
        <div className="lg:col-span-7 lg:col-start-6 space-y-12 mt-4 lg:mt-0">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl md:text-3xl text-text font-light leading-relaxed tracking-wide text-balance"
          >
            Hamza is an AI-Native Full Stack Developer specializing in building modern, high-performance web applications using React, Next.js, Three.js, and Prisma.
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-muted font-light leading-relaxed space-y-8"
          >
            <p>
              He focuses on crafting immersive digital experiences with clean UI/UX, smooth animations, and scalable architecture. Passionate about blending creativity with engineering, Hamza builds products that are not only visually stunning but also production-ready and optimized for real-world use.
            </p>
            <p>
              He works with a founder mindset, turning ideas into impactful digital solutions for global clients and startups.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="pt-10 border-t border-surface/50"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
               <div className="space-y-3">
                 <p className="text-5xl font-bold text-accent">AI</p>
                 <p className="text-xs uppercase tracking-[0.2em] text-muted font-semibold">Native Workflow</p>
               </div>
               <div className="space-y-3">
                 <p className="text-5xl font-bold text-accent">100</p>
                 <p className="text-xs uppercase tracking-[0.2em] text-muted font-semibold">Performance Score</p>
               </div>
               <div className="space-y-3">
                 <p className="text-5xl font-bold text-accent">MVP</p>
                 <p className="text-xs uppercase tracking-[0.2em] text-muted font-semibold">Founder Mindset</p>
               </div>
            </div>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
