"use client";

import { Code2, Database, Layout } from "lucide-react";
import { useState } from "react";
import { DM_Serif_Display } from "next/font/google";

const dmSerif = DM_Serif_Display({ subsets: ["latin"], weight: "400", style: "italic" });

const services = [
  {
    num: "01",
    icon: <Layout className="w-8 h-8 md:w-12 md:h-12" />,
    title: "Frontend Architecture",
    description: "Building responsive, accessible, and highly interactive user interfaces using React, Next.js, and modern CSS frameworks like Tailwind. We focus on cinematic motion and performant rendering.",
  },
  {
    num: "02",
    icon: <Database className="w-8 h-8 md:w-12 md:h-12" />,
    title: "Backend Engineering",
    description: "Designing robust APIs, database schemas, and scalable server-side applications using Node.js, Prisma, and PostgreSQL. Engineered for speed and zero-downtime deployments.",
  },
  {
    num: "03",
    icon: <Code2 className="w-8 h-8 md:w-12 md:h-12" />,
    title: "Full-Stack Integration",
    description: "Connecting the dots between frontend and backend to deliver complete, production-ready web applications from scratch, maintaining strict security and UX standards.",
  },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto relative">
      <div className="mb-24 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <p className="text-xs text-accent uppercase tracking-[0.3em] font-semibold mb-6">Expertise</p>
          <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-bold text-text leading-[0.9] tracking-tighter">
            What <span className={`text-muted ${dmSerif.className}`}>we</span> do.
          </h2>
        </div>
        <p className="text-lg text-muted max-w-md font-light leading-relaxed">
          Delivering end-to-end solutions that combine brutalist performance with elegant, award-winning user experiences.
        </p>
      </div>
      
      <div className="border-t border-surface/50 flex flex-col">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="group relative border-b border-surface/50 py-12 md:py-16 transition-colors duration-500 hover:bg-surface/20"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Hover Background Reveal */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start md:items-center">
              
              <div className="md:col-span-2 flex items-center gap-6">
                <span className="text-sm md:text-base font-mono text-muted/50 group-hover:text-accent transition-colors duration-500">
                  {service.num}
                </span>
                <div className="text-surface group-hover:text-accent transition-colors duration-500 transform group-hover:scale-110 group-hover:-rotate-12">
                  {service.icon}
                </div>
              </div>
              
              <div className="md:col-span-4">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text tracking-tight group-hover:translate-x-4 transition-transform duration-500 ease-out">
                  {service.title}
                </h3>
              </div>
              
              <div className="md:col-span-6 md:col-start-7 lg:col-span-5 lg:col-start-8">
                <p className="text-muted leading-relaxed text-base md:text-lg font-light opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  {service.description}
                </p>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
