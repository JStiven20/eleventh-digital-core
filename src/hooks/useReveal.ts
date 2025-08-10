import { useEffect, useRef, useState } from "react";

interface RevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

// Simple IntersectionObserver-based reveal hook
export default function useReveal({ threshold = 0.15, rootMargin = "0px", once = true }: RevealOptions = {}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isVisible } as const;
}
