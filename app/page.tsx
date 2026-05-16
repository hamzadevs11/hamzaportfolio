import Hero from "@/components/Hero";
import About from "@/components/About";
import CaseStudy from "@/components/CaseStudy";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import { projects } from "@/lib/mock-data";
import { DM_Serif_Display } from "next/font/google";

const dmSerif = DM_Serif_Display({ subsets: ["latin"], weight: "400", style: "italic" });

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <main className="min-h-screen bg-background selection:bg-accent/30 selection:text-text">
      <Hero />
      <About />
      
      <section id="work" className="py-32 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto relative">
        <div className="mb-20 md:mb-32">
          <p className="text-xs text-accent uppercase tracking-[0.3em] font-semibold mb-6">Selected Work</p>
          <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-bold text-text leading-[0.9] tracking-tighter max-w-3xl">
            Featured <br/><span className={`text-muted ${dmSerif.className}`}>case studies</span>.
          </h2>
        </div>
        
        <div className="flex flex-col">
          {featuredProjects.map((project, index) => (
            <CaseStudy 
              key={project.id}
              index={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              image={project.image}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
      </section>

      <Services />
      <TechStack />
      <Process />
      <Contact />
    </main>
  );
}
