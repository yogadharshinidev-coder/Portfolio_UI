import { useEffect, useRef } from 'react';

/**
 * Attaches an IntersectionObserver to elements matching `selector` inside
 * the given root element and adds the class `visible` when they enter the
 * viewport.
 */
export function useReveal(selector = '.reveal, .reveal-left, .reveal-right', threshold = 0.15) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = ref.current ?? document;
    const els = root.querySelectorAll<HTMLElement>(selector);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay ?? '0';
            setTimeout(() => el.classList.add('visible'), parseInt(delay, 10));
            io.unobserve(el);
          }
        });
      },
      { threshold }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [selector, threshold]);

  return ref;
}
