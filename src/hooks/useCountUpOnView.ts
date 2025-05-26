import { useState, useEffect } from 'react';

export function useCountUpOnView(
  targetValue: number,
  isInView: boolean,
  duration = 1500
) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!isInView) {
      setCurrent(0);
      return;
    }
    const startTime = performance.now();
    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * targetValue);

      setCurrent(value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, targetValue, duration]);

  return current;
}
