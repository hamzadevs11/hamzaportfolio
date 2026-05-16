import Image from "next/image";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  index: number;
}

export default function CaseStudy({ title, description, tags, image, githubUrl, liveUrl, index }: ProjectProps) {
  const isEven = index % 2 === 0;

  return (
    <div className="group relative py-20 border-b border-surface/50 last:border-0 overflow-hidden">
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
        
        {/* Image Section */}
        <div className={`lg:col-span-7 ${!isEven ? 'lg:order-2' : 'lg:order-1'} relative aspect-[4/3] lg:aspect-[16/10] rounded-[2rem] overflow-hidden bg-surface`}>
          <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none mix-blend-overlay" />
          <Image 
            src={`/${image}`} 
            alt={title}
            fill
            className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-[0.16,1,0.3,1] grayscale-[0.3] group-hover:grayscale-0"
          />
        </div>
        
        {/* Content Section */}
        <div className={`lg:col-span-5 ${!isEven ? 'lg:order-1' : 'lg:order-2'} flex flex-col justify-center space-y-10`}>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-xs font-mono text-muted uppercase tracking-[0.2em]">
              <span>Project — {String(index + 1).padStart(2, '0')}</span>
            </div>
            
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text tracking-tighter leading-[1.1] group-hover:text-accent transition-colors duration-500">
              {title}
            </h3>
          </div>
          
          <p className="text-lg text-muted font-light leading-relaxed max-w-lg">
            {description}
          </p>
          
          <div className="pt-6 border-t border-surface/50">
            <p className="text-xs text-muted uppercase tracking-[0.2em] mb-4 font-semibold">Technologies</p>
            <ul className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <li key={tag} className="px-4 py-2 text-[11px] font-mono text-muted/80 bg-surface/30 rounded-full border border-white/5 hover:border-white/20 transition-colors">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex items-center gap-8 pt-4">
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="relative text-text text-sm uppercase tracking-widest font-semibold flex items-center gap-2 group/link overflow-hidden">
                <span className="relative z-10">Live Demo</span>
                <ArrowUpRight className="w-4 h-4 opacity-70 group-hover/link:opacity-100 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-all" />
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-accent -translate-x-[101%] group-hover/link:translate-x-0 transition-transform duration-300 ease-out" />
              </a>
            )}
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-text transition-colors flex items-center gap-2 text-sm uppercase tracking-widest font-medium group/github">
                <Github className="w-4 h-4 group-hover/github:scale-110 transition-transform" />
                Source
              </a>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
