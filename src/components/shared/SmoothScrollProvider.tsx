import type { ReactNode } from 'react';
import { createContext, useCallback, useContext, useEffect, useRef } from 'react';
import Lenis from 'lenis';

interface LenisCtx {
  scrollTo: (target: string | number | HTMLElement, opts?: { offset?: number; immediate?: boolean }) => void;
  lenis: Lenis | null;
}

const SmoothScrollContext = createContext<LenisCtx>({ scrollTo: () => {}, lenis: null });
export const useSmoothScroll = () => useContext(SmoothScrollContext);

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const rafRef = useRef<number | null>(null);

  const scrollTo = useCallback<LenisCtx['scrollTo']>((target, opts) => {
    const lenis = lenisRef.current;
    if (!lenis) {
      let y = 0;
      if (typeof target === 'number') y = target;
      else if (typeof target === 'string') {
        const el = document.querySelector(target) ?? document.getElementById(target.replace(/^#/, ''));
        if (el) y = el.getBoundingClientRect().top + window.scrollY - (opts?.offset ?? 0);
      } else if (target instanceof HTMLElement) {
        y = target.getBoundingClientRect().top + window.scrollY - (opts?.offset ?? 0);
      }
      window.scrollTo({ top: y, behavior: opts?.immediate ? 'auto' : 'smooth' });
      return;
    }
    if (typeof target === 'string' && (target.startsWith('#') || !target.startsWith('.'))) {
      const selector = target.startsWith('#') ? target : `#${target}`;
      const el = document.querySelector(selector) as HTMLElement | null;
      if (el) {
        lenis.scrollTo(el, { offset: -(opts?.offset ?? 0), immediate: opts?.immediate ?? false, duration: 1.1, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
        return;
      }
    }
    lenis.scrollTo(target as any, { offset: -(opts?.offset ?? 0), immediate: opts?.immediate ?? false, duration: 1.1 });
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (lenisRef.current) return;

    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    const lenis = new Lenis({
      duration: prefersReducedMotion ? 0.001 : 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: !prefersReducedMotion,
      touchMultiplier: 1.6,
      wheelMultiplier: 1,
    } as any);

    lenisRef.current = lenis;
    (window as any).lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    }
    rafRef.current = requestAnimationFrame(raf);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lenis.destroy();
      lenisRef.current = null;
      (window as any).lenis = undefined;
    };
  }, []);

  return (
    <SmoothScrollContext.Provider value={{ scrollTo, lenis: lenisRef.current }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
