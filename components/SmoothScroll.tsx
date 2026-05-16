"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode, useEffect } from "react";
import { initAnimations } from "@/lib/gsap";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    initAnimations();
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
