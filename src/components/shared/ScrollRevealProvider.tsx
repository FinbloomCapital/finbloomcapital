import type { ReactNode } from 'react';
import { useEffect } from 'react';

export default function ScrollRevealProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const main = document.querySelector('main');
    if (!main) return;

    const topLevelSections = new Set<HTMLElement>();

    const collectSections = () => {
      const allNamed = main.querySelectorAll<HTMLElement>('[data-name]');
      allNamed.forEach((el) => {
        const name = el.getAttribute('data-name') || '';
        const isTopLevelSection =
          name === 'Hero' ||
          name === 'Products' ||
          name === 'Product grid' ||
          name === 'Metrics' ||
          name === 'Why Finbloom' ||
          name === 'Why' ||
          name === 'Why grid' ||
          name === 'how' ||
          name === 'How it works' ||
          name === 'Body' ||
          name === 'body grid' ||
          name === 'Related' ||
          name === 'rel row' ||
          name === 'Testimonials' ||
          name === 'Financial Partners' ||
          name === 'Partners row' ||
          name === 'FAQ' ||
          name === 'FAQ layout' ||
          name === 'Referral' ||
          name === 'Referral card' ||
          name === 'Quick Contact' ||
          name === 'QC card' ||
          name === 'Mission Vision' ||
          name === 'mv' ||
          name === 'Core Values' ||
          name === 'Values grid' ||
          name === 'Leadership' ||
          name === 'team row' ||
          name === 'Trust row' ||
          name === 'stats' ||
          name === 'growth' ||
          name === 'Hero left' ||
          name === 'Hero right' ||
          name === 'Hero illustration' ||
          name === 'Hero grid' ||
          name === 'Legal body' ||
          name === 'Legal layout' ||
          name === 'Summary' ||
          name === 'TOC' ||
          name === 'policy-summary' ||
          name === 'policy-summary-cards' ||
          name === 'Body grid' ||
          name === 'Doc' ||
          name === 'Related products';

        if (isTopLevelSection) {
          topLevelSections.add(el);
          if (!el.hasAttribute('data-reveal')) {
            el.setAttribute('data-reveal', '');
          }
        }
      });
    };

    collectSections();

    const applyStaggeredDelays = () => {
      const visible = main.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-visible)');
      visible.forEach((el, idx) => {
        if (!el.hasAttribute('data-delay')) {
          const delay = Math.min(idx, 6) * 100;
          if (delay > 0) el.setAttribute('data-delay', String(delay));
        }
      });
    };
    applyStaggeredDelays();

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' },
    );

    topLevelSections.forEach((el) => io.observe(el));

    const mo = new MutationObserver(() => {
      const before = topLevelSections.size;
      collectSections();
      applyStaggeredDelays();
      if (topLevelSections.size > before) {
        topLevelSections.forEach((el) => {
          if (!el.classList.contains('is-visible')) io.observe(el);
        });
      }
    });
    mo.observe(main, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return <>{children}</>;
}
