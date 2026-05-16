"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export const initAnimations = () => {
  if (typeof window === "undefined") return;
  
  console.log("Initializing GSAP animations...");
  gsap.registerPlugin(ScrollTrigger);

  // Add smooth underline to inline links dynamically
  const inlineLinks = document.querySelectorAll('a:not(.px-8):not(.rounded-full)');
  console.log(`Found ${inlineLinks.length} inline links for underline animation.`);
  inlineLinks.forEach((link) => {
    link.classList.add('link-underline', 'pb-1');
  });

  // Hero fade-out on scroll
  const heroSection = document.querySelector("section.min-h-screen");
  if (heroSection) {
    gsap.to(heroSection, {
      opacity: 0,
      y: 50,
      scrollTrigger: {
        trigger: heroSection,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }

  // Case studies pinned reveal
  const caseStudies = document.querySelectorAll("#work .group.relative.grid");
  caseStudies.forEach((study, index) => {
    gsap.fromTo(
      study,
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        scrollTrigger: {
          trigger: study,
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        },
      }
    );
  });

  // Services stagger animation
  const services = document.querySelectorAll(".p-8.rounded-2xl.bg-surface\\/30");
  if (services.length > 0) {
    gsap.fromTo(
      services,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: services[0].parentElement,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }

  // Smooth section transitions
  const sections = document.querySelectorAll("main > section");
  sections.forEach((section) => {
    if (section === heroSection || section.id === "work") return;
    gsap.fromTo(
      section,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
};

export { gsap, ScrollTrigger };
