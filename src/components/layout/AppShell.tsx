import type { ReactNode } from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSmoothScroll } from '../shared/SmoothScrollProvider';

const applicationUrl = 'https://finbloom-capital-ltd.lsq.app/login';
const NEW_PHONE = '+234 704 823 2127';
const ADDRESS = '29, Ogayemi Close, Yaba';
const EMAIL = 'info@finbloomcapital.com';

const links = [
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
  { to: '/learn-landing-page', label: 'Learn' },
  { to: '/', hash: '#faq', label: 'FAQs' },
  { to: '/', hash: '#contact', label: 'Contact' },
];

const footerProductLinks = [
  { to: '/products/cashflow-flex', label: 'Cashflow Flex' },
  { to: '/invoice-finance-desktop', label: 'Invoice Finance' },
  { to: '/asset-finance-desktop', label: 'Asset Finance' },
  { to: '/sme-growth-loan-desktop', label: 'SME Growth Loan' },
];

const footerCompanyLinks = [
  { to: '/about', label: 'About' },
  { to: '/', label: 'FAQ' },
  { to: '/#contact', label: 'Contact' },
  { external: true, to: applicationUrl, label: 'Apply' },
];

function FinbloomLogo() {
  return (
    <span className="inline-flex items-center gap-2">
      <img
        src="/img/Finbloom_logo.png"
        alt="Finbloom Capital"
        style={{ width: '128px', height: '36px' }}
        className="shrink-0 object-contain"
      />
    </span>
  );
}

function FinbloomFooterLogo() {
  return (
    <span className="inline-flex items-center gap-2">
      <span
        className="font-bold tracking-tight whitespace-nowrap"
        style={{ fontSize: '16px', color: '#ffffff', fontFamily: "'Plus Jakarta Sans', Inter, sans-serif" }}
      >
        Finbloom Capital
      </span>
    </span>
  );
}

function scrollToHash(hash: string, smooth?: { scrollTo: (t: any, o?: any) => void }) {
  const id = hash.replace('#', '');
  const navbarOffset = 84 + 8;
  const el = document.getElementById(id);
  if (el) {
    if (smooth?.scrollTo) {
      smooth.scrollTo(el, { offset: navbarOffset });
    } else {
      const top = el.getBoundingClientRect().top + window.scrollY - navbarOffset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    return;
  }
  let attempts = 0;
  const iv = setInterval(() => {
    attempts++;
    const el2 = document.getElementById(id);
    if (el2) {
      clearInterval(iv);
      if (smooth?.scrollTo) smooth.scrollTo(el2, { offset: navbarOffset });
      else window.scrollTo({ top: el2.getBoundingClientRect().top + window.scrollY - navbarOffset, behavior: 'smooth' });
    } else if (attempts > 40) {
      clearInterval(iv);
    }
  }, 50);
}

export default function AppShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { scrollTo: smoothTo, lenis } = useSmoothScroll();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    if (lenis) lenis.on('scroll', onScroll as any);
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (lenis) lenis.off('scroll', onScroll as any);
    };
  }, [lenis]);

  useEffect(() => {
    const win: any = window;
    if (lenis && typeof win.lenis === 'object') {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [location.pathname, lenis]);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      if (id) {
        const t = setTimeout(() => scrollToHash(location.hash, { scrollTo: smoothTo }), 120);
        return () => clearTimeout(t);
      }
    }
  }, [location.pathname, location.hash, smoothTo]);

  const handleNavClick = (link: { to: string; hash?: string; label: string }) => {
    setMenuOpen(false);
    if (link.hash) {
      const target = { pathname: link.to, hash: link.hash };
      if (location.pathname === link.to) {
        scrollToHash(link.hash, { scrollTo: smoothTo });
      } else {
        navigate(target);
      }
    } else {
      navigate(link.to);
    }
  };

  const isLinkActive = (link: { to: string; hash?: string; label: string }) => {
    if (link.hash) {
      return location.pathname === link.to && location.hash === link.hash;
    }
    return location.pathname === link.to;
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#062530]">
      <header
        className={`sticky top-0 z-40 border-b transition-colors duration-200 ${
          scrolled
            ? 'border-[#e7e5e1] bg-[#faf9f6]/80 backdrop-blur-xl shadow-[0_1px_0_0_rgba(231,229,225,0.6)]'
            : 'border-transparent bg-[#faf9f6]/0 backdrop-blur-sm'
        }`}
      >
        <div className="mx-auto flex min-h-[84px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link to="/" aria-label="Finbloom Capital home" className="inline-flex items-center">
            <FinbloomLogo />
          </Link>

          <nav className="hidden flex-wrap items-center justify-end gap-3 text-sm font-medium text-[#55606b] sm:gap-5 md:flex">
            {links.map((link) => (
              <button
                key={`${link.to}${link.hash ?? ''}`}
                type="button"
                onClick={() => handleNavClick(link)}
                className={`transition hover:text-[#034f5b] ${isLinkActive(link) ? 'text-[#034f5b]' : ''}`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href={applicationUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ width: '130px', height: '48px' }}
              className="inline-flex items-center justify-center rounded-full bg-[#034f5b] text-sm font-semibold text-white transition hover:bg-[#046675]"
            >
              Apply now
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-[#062530] transition hover:bg-[#e5eff1]"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              {menuOpen ? (
                <>
                  <path d="M6 6l12 12" />
                  <path d="M18 6L6 18" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>

        {menuOpen ? (
          <div className="border-t border-[#e7e5e1] md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
              <nav className="flex flex-col gap-1 text-sm font-medium text-[#55606b]">
                {links.map((link) => (
                  <button
                    key={`${link.to}${link.hash ?? ''}`}
                    type="button"
                    onClick={() => handleNavClick(link)}
                    className={`rounded-lg px-3 py-2 text-left transition hover:bg-[#e5eff1] hover:text-[#034f5b] ${
                      isLinkActive(link) ? 'bg-[#e5eff1] text-[#034f5b]' : ''
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
              <a
                href={applicationUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ height: '48px' }}
                className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-[#034f5b] px-4 text-sm font-semibold text-white transition hover:bg-[#046675] sm:w-[130px]"
              >
                Apply now
              </a>
            </div>
          </div>
        ) : null}
      </header>

      <main className="w-full">{children}</main>

      <footer className="relative mt-12 overflow-hidden bg-[#034f5b] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-1/2 -z-0 h-[220px] w-[1100px] max-w-full -translate-x-1/2"
          style={{
            backgroundImage: 'url(/img/Finbloom_logo.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center bottom',
            backgroundSize: 'contain',
            opacity: 0.24,
          }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8 lg:pt-14">
          <div className="flex flex-col gap-6 border-b border-white/10 pb-10 md:flex-row md:items-center md:justify-between lg:gap-8">
            <h2 className="text-2xl leading-[1.15] font-extrabold tracking-tight md:text-3xl">
              Ready to grow your business with flexible financing?
            </h2>
            <a
              href={applicationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full bg-[#046675] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#07bfdb] sm:w-auto sm:shrink-0"
            >
              Apply for financing
            </a>
          </div>

          <div className="grid gap-10 border-b border-white/10 py-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div className="max-w-md">
              <Link to="/" className="inline-flex items-center" aria-label="Finbloom Capital home">
                <FinbloomFooterLogo />
              </Link>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/75">
                Flexible finance for stronger businesses and brighter possibilities.
              </p>
              <div className="mt-5 flex items-center gap-3" aria-label="Social links">
                <a
                  href="#"
                  aria-label="X (Twitter)"
                  className="flex size-10 items-center justify-center rounded-full border border-white text-white/90 transition hover:bg-white hover:text-[#034f5b]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M18 6l-9 9" />
                    <path d="M8 6h6l-12 12" />
                    <path d="M6 18l9-9" />
                    <path d="M16 18h-6l12-12" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex size-10 items-center justify-center rounded-full border border-white text-white/90 transition hover:bg-white hover:text-[#034f5b]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M13.5 21.5v-7.5h2.5l0.4-3h-2.9V9.2c0-0.9 0.2-1.5 1.6-1.5h1.3v-2.8c-0.2-0.1-1-0.1-1.9-0.1-1.9 0-3.2 1.1-3.2 3.2v2.2H8.4v3h2.5v7.5h2.6z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex size-10 items-center justify-center rounded-full border border-white text-white/90 transition hover:bg-white hover:text-[#034f5b]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="flex size-10 items-center justify-center rounded-full border border-white text-white/90 transition hover:bg-white hover:text-[#034f5b]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M4.98 3.5a2.5 2.5 0 110.02 5 2.5 2.5 0 01-0.02-5zM3 9h4v12H3V9zm7 0h3.8v1.7h0.1c0.5-1 1.9-2 3.9-2 4.2 0 5 2.7 5 6.3V21h-4v-5.3c0-1.3 0-2.9-1.8-2.9-1.8 0-2.1 1.4-2.1 2.8V21h-4V9z" />
                  </svg>
                </a>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs text-white/65">
                <span className="inline-block size-3 rounded-[5px] bg-[#69babb]" />
                RC 7631703, Licensed Money Lender, Lagos State
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/45">
                Our Products
              </p>
              <ul className="mt-4 space-y-3 text-sm text-white/85">
                {footerProductLinks.map((item) => (
                  <li key={item.label}>
                    <Link to={item.to} className="transition hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/45">
                Company
              </p>
              <ul className="mt-4 space-y-3 text-sm text-white/85">
                {footerCompanyLinks.map((item) => (
                  <li key={item.label}>
                    {item.external ? (
                      <a href={item.to} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
                        {item.label}
                      </a>
                    ) : (
                      <Link to={item.to} className="transition hover:text-white">
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/45">
                Contact Us
              </p>
              <ul className="mt-4 space-y-3 text-sm text-white/85">
                <li>{ADDRESS}</li>
                <li>
                  <a href={`mailto:${EMAIL}`} className="transition hover:text-white">
                    {EMAIL}
                  </a>
                </li>
                <li>
                  <a href={`tel:${NEW_PHONE.replace(/\s+/g, '')}`} className="transition hover:text-white">
                    {NEW_PHONE}
                  </a>
                </li>
                <li className="flex items-center gap-3 pt-1 text-white/80">
                  <Link to="/privacy" className="transition hover:text-white">
                    Privacy
                  </Link>
                  <span className="text-white/30">|</span>
                  <Link to="/terms" className="transition hover:text-white">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-2 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Finbloom Capital Ltd. All rights reserved.</p>
            <p className="inline-flex items-center gap-2">
              <Link to="/privacy" className="transition hover:text-white/80">
                Privacy
              </Link>
              <span className="text-white/20">·</span>
              <Link to="/terms" className="transition hover:text-white/80">
                Terms
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
