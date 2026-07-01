"use client";

import { type CSSProperties, type ReactNode, useEffect, useRef, useState } from "react";

type ViewportRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function ViewportReveal({ children, className, delay = 0 }: ViewportRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [canAnimate, setCanAnimate] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      return;
    }

    const animationTimer = window.setTimeout(() => setCanAnimate(true), 0);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.18 },
    );

    observer.observe(element);

    return () => {
      window.clearTimeout(animationTimer);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${className ?? ""} viewport-reveal-card${canAnimate ? " can-animate" : ""}${isVisible ? " is-visible" : ""}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
