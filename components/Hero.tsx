"use client";

import MagneticButton from "./MagneticButton";
import { ArrowRight } from "lucide-react";
import { DM_Serif_Display } from "next/font/google";
import { motion } from "framer-motion";

const dmSerif = DM_Serif_Display({ subsets: ["latin"], weight: "400", style: "italic" });

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      
      {/* Cinematic Video Background */}
      <div className="absolute inset-0 z-0 bg-background overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale mix-blend-screen scale-105"
        >
          {/* High-end abstract dark fluid/smoke video placeholder */}
          <source src="https://vamwyouzculrmxlxqkwe.supabase.co/storage/v1/object/public/hero-portfolio-video/3068-165796695_medium.mp4" type="video/mp4" />
        </video>
        
        {/* Gradients to fade video out into the page body smoothly */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/80" />
      </div>
      
      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-end gap-12 md:gap-8 mt-auto md:mb-12">
        <div className="max-w-4xl space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center px-4 py-2 rounded-full border border-white/10 bg-white/5 text-muted text-xs font-mono uppercase tracking-widest backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-accent mr-3 animate-pulse" />
            Available for select commissions
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-[7.5rem] font-bold tracking-tighter text-text leading-[0.9]"
          >
            Architecting <br />
            <span className={`text-muted ${dmSerif.className}`}>digital</span> luxury.
          </motion.h1>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-6 max-w-sm"
        >
          <p className="text-lg md:text-xl text-muted font-light leading-relaxed">
            I partner with ambitious brands to engineer high-conversion web applications—merging cinematic motion with uncompromising performance.
          </p>
          
          <div className="flex items-center gap-4 pt-4 border-t border-surface/50">
            <MagneticButton 
              className="gap-3 group bg-text text-background hover:bg-white px-8 py-4"
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Portfolio
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
