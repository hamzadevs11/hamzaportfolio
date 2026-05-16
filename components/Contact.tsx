"use client";

import MagneticButton from "./MagneticButton";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-surface/50 text-accent mb-8">
        <Mail className="w-8 h-8" />
      </div>

      <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
        Let&apos;s build something great.
      </h2>

      <p className="text-lg text-muted mb-10 max-w-2xl mx-auto">
        Currently open for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
      </p>

      <MagneticButton 
        className="text-lg px-10 py-4"
        onClick={() => window.location.href = 'mailto:hello@hcdevs.com'}
      >
        Say Hello
      </MagneticButton>

      <div className="mt-20 pt-8 border-t border-surface/50 flex flex-col md:flex-row items-center justify-between text-sm text-muted">
        <p>© {new Date().getFullYear()} Hamza — HC Devs. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="https://github.com/hamzadevs11" className="hover:text-accent transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/hamza-devs-67b00840a " className="hover:text-accent transition-colors">LinkedIn</a>
          <a href="https://x.com/hamzadevs" className="hover:text-accent transition-colors">Twitter</a>
        </div>
      </div>
    </section>
  );
}
