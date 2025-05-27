import { useEffect, useState, useRef } from 'react';

export function useScrollFadeIn<T extends HTMLElement>(threshold = 0.3) {
  const ref = useRef<T | null>(null);
  const [inFadeIn, setInFadeIn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInFadeIn(true);
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  return { ref, inFadeIn };
}
