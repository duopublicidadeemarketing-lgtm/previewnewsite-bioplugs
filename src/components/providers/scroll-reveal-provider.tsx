"use client";

import { useEffect } from "react";
import { initScrollReveal } from "@/lib/scroll-reveal";

export function ScrollRevealProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const observer = initScrollReveal();
    return () => observer?.disconnect();
  }, []);

  return <>{children}</>;
}
