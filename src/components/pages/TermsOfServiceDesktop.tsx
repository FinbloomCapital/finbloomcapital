import { useCallback, useEffect, useRef, useState } from 'react';
import { useSmoothScroll } from '../shared/SmoothScrollProvider';

const imgMaterialSymbolsLightCheck = "https://www.figma.com/api/mcp/asset/574a5cc6-0bdd-4e0e-a425-1945e4c21fb5";
const imgMaterialSymbolsLightCheck1 = "https://www.figma.com/api/mcp/asset/202c8cb2-e8a1-4f9f-bb42-0277ae2ec19a";
const imgMaterialSymbolsLightCheck2 = "https://www.figma.com/api/mcp/asset/f209800b-2e3d-4c86-b01a-8a18491f1739";
const imgGrid = "https://www.figma.com/api/mcp/asset/5874f488-84ee-469a-9ba7-e82449d16f9a";
const imgFileText = "https://www.figma.com/api/mcp/asset/de14e4e3-d7b0-4c1b-8fff-64149e4f04fb";
const imgShieldCheck = "https://www.figma.com/api/mcp/asset/92c70e34-9282-467d-81fd-da2b3cf894a4";
const imgCheck = "https://www.figma.com/api/mcp/asset/5d7c38c5-d9a4-4dd3-b9ea-536c4e6ebed0";

const tocItems = [
  { id: 'terms-section-1', label: '1. Acceptance of terms' },
  { id: 'terms-section-2', label: '2. Eligibility and authority' },
  { id: 'terms-section-3', label: '3. Our services' },
  { id: 'terms-section-4', label: '4. Applications and verification' },
  { id: 'terms-section-5', label: '5. Offers, rates, fees' },
  { id: 'terms-section-6', label: '6. Disbursement and repayment' },
  { id: 'terms-section-7', label: '7. Account security' },
  { id: 'terms-section-8', label: '8. Acceptable use' },
  { id: 'terms-section-9', label: '9. Electronic communications' },
  { id: 'terms-section-10', label: '10. Third-party services' },
  { id: 'terms-section-11', label: '11. Service availability' },
  { id: 'terms-section-12', label: '12. Disclaimers and liability' },
  { id: 'terms-section-13', label: '13. Suspension or termination' },
  { id: 'terms-section-14', label: '14. Governing law' },
  { id: 'terms-section-15', label: '15. Contact us' },
];

function sectionHeading(id: string, number: number, title: string) {
  return (
    <div id={id} className="scroll-mt-28 content-stretch flex flex-col gap-2 items-start w-full" data-name={`terms-heading-${number}`}>
      <p className="font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[#062530] text-[17px]">
        {number}. {title}
      </p>
    </div>
  );
}

function para(text: string, key: number) {
  return (
    <p key={key} className="font-['Inter:Regular'] font-normal leading-[1.7] not-italic relative shrink-0 text-[#55606b] text-[14px] w-full max-w-[680px]">
      {text}
    </p>
  );
}

export default function TermsOfServiceDesktop() {
  const [active, setActive] = useState<string>('terms-section-1');
  const asideRef = useRef<HTMLElement | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollTo: smoothTo } = useSmoothScroll();
  const [stick, setStick] = useState<{
    isDesktop: boolean;
    fixed: boolean;
    width: number;
    left: number;
    top: number;
  }>({ isDesktop: false, fixed: false, width: 260, left: 0, top: 92 });

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      smoothTo(el, { offset: 92 });
      setActive(id);
    }
  }, [smoothTo]);

  useEffect(() => {
    const NAVBAR_H = 84 + 8;

    function update() {
      const sentinel = sentinelRef.current;
      const container = containerRef.current;
      const aside = asideRef.current;
      const w = typeof window !== 'undefined' ? window.innerWidth : 1280;
      const isDesktop = w >= 1024;

      if (!isDesktop || !sentinel || !container || !aside) {
        setStick({ isDesktop: false, fixed: false, width: 260, left: 0, top: NAVBAR_H });
        return;
      }

      const sentinelRect = sentinel.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const asideHeight = Math.min(aside.scrollHeight, window.innerHeight - NAVBAR_H - 16);
      const width = sentinelRect.width > 0 ? sentinelRect.width : 260;
      const sentinelAbsTop = sentinelRect.top + window.scrollY;

      // 1) natural top: as if positioned inline with sentinel
      let top = sentinelRect.top;

      // 2) sticky pin: once user scrolls past the sentinel top - navbar, pin to navbar
      if (window.scrollY + NAVBAR_H >= sentinelAbsTop) {
        top = NAVBAR_H;
      }

      // 3) container clamp: don't let aside float past the container bottom
      const topAbsWhenPinned = window.scrollY + top;
      const asideBottom = topAbsWhenPinned + asideHeight;
      const containerAbsBottom = containerRect.top + window.scrollY + containerRect.height;
      if (asideBottom > containerAbsBottom) {
        top = NAVBAR_H - (asideBottom - containerAbsBottom);
      }

      const left = sentinelRect.left;
      setStick({ isDesktop: true, fixed: true, width, left, top });
    }

    const ids = tocItems.map((t) => t.id);
    function onScroll() {
      update();
      const offset = window.scrollY + 120;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= offset) {
          current = id;
        }
      }
      setActive(current);
    }
    const rafWrap = (fn: () => void) => () => window.requestAnimationFrame(fn);
    const onScrollRaf = rafWrap(onScroll);
    const onResizeRaf = rafWrap(update);
    update();
    onScroll();
    window.addEventListener('scroll', onScrollRaf, { passive: true });
    window.addEventListener('resize', onResizeRaf);
    const t = setTimeout(update, 0);
    return () => {
      window.removeEventListener('scroll', onScrollRaf);
      window.removeEventListener('resize', onResizeRaf);
      clearTimeout(t);
    };
  }, []);

  return (
    <div className="w-full overflow-x-hidden bg-[#faf9f6]" data-node-id="110:90" data-name="Terms of Service - Desktop">
      <div className="bg-[#faf9f6] content-stretch flex flex-col items-start overflow-clip px-[80px] py-[40px] relative shrink-0 w-full" data-node-id="110:104" data-name="Hero">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="203:437">
          <div className="content-stretch flex gap-[113px] items-center overflow-clip relative shrink-0 w-full" data-node-id="119:4" data-name="Hero grid">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[22px] items-start min-w-px overflow-clip relative" data-node-id="119:5" data-name="Hero left">
              <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold leading-[1.08] relative shrink-0 text-[#062530] text-[52px] whitespace-nowrap" data-node-id="110:107">
                Terms of Service
              </p>
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#55606b] text-[17px] w-[min-content]" data-node-id="110:109">
                Effective 14 July 2026 · Last updated 14 July 2026
              </p>
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.6] min-w-full not-italic relative shrink-0 text-[#55606b] text-[16px] w-[min-content]" data-node-id="207:4">
                We believe in clarity. These terms outline how our service works, your rights as a user, and our commitments to you, written in plain language.
              </p>
              <div className="content-center flex flex-wrap gap-[17px_12px] items-center overflow-clip relative shrink-0 w-[600px]" data-node-id="119:6" data-name="Trust row">
                <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-node-id="119:7" data-name="trust-item">
                  <div className="relative shrink-0 size-[16px]" data-node-id="119:8" data-name="material-symbols-light:check">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMaterialSymbolsLightCheck} />
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#55606b] text-[13.5px] whitespace-nowrap" data-node-id="119:10">
                    Transparent terms
                  </p>
                </div>
                <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-node-id="119:11" data-name="trust-item">
                  <div className="relative shrink-0 size-[16px]" data-node-id="119:12" data-name="material-symbols-light:check">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMaterialSymbolsLightCheck1} />
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#55606b] text-[13.5px] whitespace-nowrap" data-node-id="119:14">
                    Secure application
                  </p>
                </div>
                <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-node-id="119:15" data-name="trust-item">
                  <div className="relative shrink-0 size-[16px]" data-node-id="119:16" data-name="material-symbols-light:check">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMaterialSymbolsLightCheck1} />
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#55606b] text-[13.5px] whitespace-nowrap" data-node-id="119:18">
                    Personal support
                  </p>
                </div>
                <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-node-id="207:5" data-name="trust-item">
                  <div className="relative shrink-0 size-[16px]" data-node-id="207:6" data-name="material-symbols-light:check">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMaterialSymbolsLightCheck2} />
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#55606b] text-[13.5px] whitespace-nowrap" data-node-id="207:8">
                    GDPR compliant
                  </p>
                </div>
                <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-node-id="207:9" data-name="trust-item">
                  <div className="relative shrink-0 size-[16px]" data-node-id="207:10" data-name="material-symbols-light:check">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMaterialSymbolsLightCheck2} />
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#55606b] text-[13.5px] whitespace-nowrap" data-node-id="207:12">
                    No hidden fees
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[460px] overflow-clip relative shrink-0 w-[564px]" data-node-id="110:106" data-name="Hero right">
              <div className="absolute bg-[#062530] h-[381px] left-[20px] overflow-clip rounded-[28px] top-[20px] w-[460px]" data-node-id="110:108" data-name="Illustration frame">
                <div className="absolute h-[420px] left-0 top-0 w-[460px]" data-node-id="119:19" data-name="Grid"></div>
                <div className="absolute bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] border-solid h-[329px] left-[26px] overflow-clip rounded-[20px] top-[26px] w-[408px]" data-node-id="119:62" data-name="illustration">
                  <div className="absolute bg-[var(--teal\/accent-soft,#e5eff1)] content-stretch flex flex-col items-center justify-center left-[23px] rounded-[18px] size-[72px] top-[23px]" data-node-id="119:63" data-name="doc-icon">
                    <div className="relative shrink-0 size-[34px]" data-node-id="119:87" data-name="file-text">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFileText} />
                    </div>
                  </div>
                  <div className="absolute bg-[var(--teal\/accent-soft,#e5eff1)] content-stretch flex flex-col items-center justify-center left-[104px] rounded-[18px] size-[72px] top-[23px]" data-node-id="119:65" data-name="shield-icon">
                    <div className="relative shrink-0 size-[34px]" data-node-id="119:90" data-name="shield-check">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShieldCheck} />
                    </div>
                  </div>
                  <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.07)] border-solid content-stretch flex flex-col gap-[12px] h-[180px] items-start left-[23px] overflow-clip p-[16px] right-[23px] rounded-[16px] top-[124px]" data-node-id="119:67" data-name="contract">
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="119:68" data-name="contract-header">
                      <div className="bg-[var(--teal\/accent-soft,#e5eff1)] content-stretch flex gap-[8px] items-center px-[10px] py-[6px] relative rounded-[999px] shrink-0" data-node-id="119:69" data-name="chip">
                        <div className="relative shrink-0 size-[14px]" data-node-id="119:93" data-name="check">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCheck} />
                        </div>
                        <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[11px] text-[color:var(--teal\/aqua-dark,#2c4e4e)] whitespace-nowrap" data-node-id="119:71">
                          Verified
                        </p>
                      </div>
                      <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.07)] border-solid content-stretch flex items-start px-[10px] py-[6px] relative rounded-[999px] shrink-0" data-node-id="119:72" data-name="badge">
                        <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[11px] text-[rgba(255,255,255,0.8)] whitespace-nowrap" data-node-id="119:73">
                          Terms
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-node-id="119:74" data-name="contract-lines">
                      <div className="bg-[rgba(255,255,255,0.07)] h-[10px] relative rounded-[5px] shrink-0 w-full" data-node-id="119:75" data-name="Rectangle" />
                      <div className="bg-[rgba(255,255,255,0.07)] h-[10px] relative rounded-[5px] shrink-0 w-full" data-node-id="119:76" data-name="Rectangle" />
                      <div className="bg-[rgba(255,255,255,0.07)] h-[10px] relative rounded-[5px] shrink-0 w-full" data-node-id="119:77" data-name="Rectangle" />
                      <div className="bg-[rgba(255,255,255,0.07)] h-[10px] relative rounded-[5px] shrink-0 w-full" data-node-id="119:78" data-name="Rectangle" />
                      <div className="bg-[rgba(255,255,255,0.07)] h-[10px] relative rounded-[5px] shrink-0 w-full" data-node-id="119:79" data-name="Rectangle" />
                    </div>
                    <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] not-italic relative shrink-0 text-[12px] w-full whitespace-nowrap" data-node-id="119:80" data-name="contract-footer">
                      <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[rgba(255,255,255,0.8)]" data-node-id="119:81">
                        Agreement
                      </p>
                      <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[rgba(255,255,255,0.6)]" data-node-id="119:82">
                        v1.0
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref={containerRef as React.RefObject<HTMLDivElement>} className="bg-[#faf9f6] content-stretch flex flex-col items-start pb-[80px] px-[80px] relative shrink-0 w-full" data-node-id="110:110" data-name="Legal body">
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full lg:flex-row lg:gap-[56px]" data-node-id="110:111" data-name="Legal layout">
          <div
            ref={sentinelRef as React.RefObject<HTMLDivElement>}
            aria-hidden="true"
            className="shrink-0 hidden lg:block lg:w-[260px]"
            style={{ visibility: 'hidden' }}
          >
            <div className="content-stretch flex flex-col gap-[6px] items-start w-full">
              <p className="font-bold leading-[normal] text-[12px]">ON THIS PAGE</p>
              <nav className="flex w-full flex-col gap-1">
                {tocItems.map((item) => (
                  <div key={item.id} className="py-1.5 w-full">
                    <span className="block h-[20px] w-full">&nbsp;</span>
                  </div>
                ))}
              </nav>
            </div>
          </div>
          <aside
            ref={asideRef as React.RefObject<HTMLElement>}
            className="content-stretch flex flex-col gap-[6px] items-start shrink-0 w-full lg:w-[260px] lg:pointer-events-auto"
            style={
              stick.isDesktop
                ? {
                    position: 'fixed',
                    top: `${stick.top}px`,
                    left: `${stick.left}px`,
                    width: `${stick.width}px`,
                    maxHeight: `calc(100vh - ${stick.top + 16}px)`,
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    paddingRight: '8px',
                    zIndex: 30,
                    pointerEvents: 'auto',
                  }
                : {
                    position: 'relative',
                    maxHeight: 'none',
                  }
            }
            data-node-id="110:112"
            data-name="TOC"
          >
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#8b939c] text-[12px] tracking-[0.12px] whitespace-nowrap" data-node-id="110:113">
              ON THIS PAGE
            </p>
            <div className="h-[8px] relative shrink-0 w-[10px]" data-node-id="110:114" data-name="Frame" />
            <nav className="flex w-full flex-col gap-1" aria-label="Terms of Service table of contents">
              {tocItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollTo(item.id)}
                  className={`text-left text-[13px] font-['Inter:Medium'] font-medium leading-[normal] rounded-md px-3 py-1.5 -mx-3 transition ${
                    active === item.id
                      ? 'bg-[#e5eff1] text-[#034f5b]'
                      : 'text-[#55606b] hover:text-[#034f5b] hover:bg-[rgba(229,239,241,0.45)]'
                  }`}
                  data-node-id={`toc-${item.id}`}
                  aria-current={active === item.id ? 'location' : undefined}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </aside>

          <section className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[28px] items-start min-w-px overflow-clip relative" data-node-id="110:130" data-name="Content">
            {sectionHeading('terms-section-1', 1, 'Acceptance of these terms')}
            {para('These Terms of Service ("Terms") apply when you visit our website, create an account, use our lending web application, submit an application or otherwise access a service provided by Finbloom Capital Ltd. ("Finbloom", "we", "us" or "our"). By accessing or using the service, you confirm that you have read, understood and agreed to these Terms and our Privacy Policy.', 1)}
            {para('If you do not agree, you should not use the service. Additional product-specific terms may apply and will be presented before you accept a financing facility.', 2)}

            {sectionHeading('terms-section-2', 2, 'Eligibility and authority')}
            {para('You must be at least 18 years old, have legal capacity to enter a binding agreement and satisfy the applicable identity, residency, income, business and credit requirements. Where you act for a company or another person, you represent that you have proper authority to bind that person or organisation.', 3)}
            {para('We may request information and documents needed to verify your identity, business, authority, eligibility and compliance with applicable law.', 4)}

            {sectionHeading('terms-section-3', 3, 'Our services')}
            {para('Finbloom may provide information, eligibility tools, application facilities, customer-account functions and access to financing products such as SME Growth Loans, Cashflow Flex Loans, Invoice Finance and Asset Finance. Products, limits, pricing, security requirements and availability may change and may differ between customers.', 5)}
            {para('A calculator, illustration, eligibility message or marketing statement does not guarantee approval and should not be treated as financial advice or a binding offer.', 6)}

            {sectionHeading('terms-section-4', 4, 'Applications and verification')}
            {para('You agree to provide complete, current and accurate information. We may verify information through lawful sources, including identity-verification providers, banks, employers, business partners, public registers and licensed credit bureaus. We may decline, suspend or request further information on an application where verification is incomplete, inconsistent or raises legal, fraud, affordability or credit concerns.', 7)}
            {para('Submitting an application does not oblige Finbloom to approve or disburse a facility. We may approve a different amount, tenure or structure from the one requested, subject to your acceptance.', 8)}

            {sectionHeading('terms-section-5', 5, 'Offers, rates, fees and facility documents')}
            {para('If an application is approved, the applicable offer letter and facility agreement will state the approved amount, purpose, tenure, interest or finance charge, applicable fees, repayment schedule, security requirements, consequences of default and other material terms. You should review these documents carefully before acceptance.', 9)}
            {para('You will not be bound to a facility merely because you viewed an estimate. Acceptance occurs through the method stated in the relevant documents, which may include an electronic signature or another legally recognised electronic action.', 10)}

            {sectionHeading('terms-section-6', 6, 'Disbursement and repayment')}
            {para('Disbursement is subject to satisfaction of all conditions stated in the offer or facility documents. Depending on the product, funds may be paid to you, a vendor, supplier, service provider or another approved recipient.', 11)}
            {para('You must make repayments in the amounts and on the dates specified in your facility documents. You are responsible for maintaining sufficient funds in the designated repayment account and for notifying us promptly if you anticipate difficulty. Late or missed payments may attract only the charges disclosed in your agreement, affect your credit record and lead to lawful recovery or enforcement action.', 12)}
            {para('Early repayment, restructuring, rollover or extension is subject to the applicable facility terms and Finbloom\'s written approval where required.', 13)}

            {sectionHeading('terms-section-7', 7, 'Account security and your responsibilities')}
            {para('You are responsible for keeping your password, PIN, one-time code and device access secure. Do not share authentication credentials with another person. You must notify Finbloom promptly if you suspect unauthorised access, impersonation or a security incident affecting your account.', 14)}
            {para('You are responsible for information and instructions submitted through your account until we receive and act on a valid notice of compromise. Finbloom will never ask you to disclose your password, PIN or one-time code through an unsolicited call or message.', 15)}

            {sectionHeading('terms-section-8', 8, 'Acceptable use')}
            {para('You must not use the service to: provide false, misleading, forged or incomplete information; impersonate another person or access an account without authority; commit fraud, money laundering or another unlawful act; interfere with, damage, reverse engineer or attempt unauthorised access to the service; upload malicious code or use automated tools to abuse the platform; infringe another person\'s intellectual-property, privacy or other rights; or use financing for an unlawful or prohibited purpose.', 16)}

            {sectionHeading('terms-section-9', 9, 'Electronic communications')}
            {para('You consent to receive agreements, disclosures, notices, reminders, statements and other service communications electronically through the web application, email, SMS, telephone or another contact channel you provide, subject to applicable law. You are responsible for keeping your contact information current.', 17)}
            {para('Marketing communications will be sent only where permitted. You may opt out of marketing, but you may continue to receive essential account, security, regulatory and repayment communications.', 18)}

            {sectionHeading('terms-section-10', 10, 'Third-party services and links')}
            {para('The service may rely on or link to third-party services such as Lendsqr, payment providers, banks, identity-verification services, credit bureaus, insurers or vendor websites. Third parties may have their own terms and privacy practices. Finbloom is not responsible for an external service\'s content, accuracy, privacy practices, security, availability or terms, and your use of any third-party service is at your own risk and subject to that provider\'s separate agreement.', 19)}

            {sectionHeading('terms-section-11', 11, 'Service availability')}
            {para('We aim to make the service continuously available, but availability may be affected by maintenance, upgrades, third-party provider downtime, network issues or events outside our control. Finbloom does not warrant uninterrupted, error-free or continuous access to any service.', 20)}
            {para('Scheduled maintenance will be communicated in advance where reasonably practicable. We are not liable for any loss caused by temporary unavailability that is reasonable or outside our control.', 21)}

            {sectionHeading('terms-section-12', 12, 'Disclaimers and liability')}
            {para('Except for any liability that cannot be excluded by applicable law (including fraudulent misrepresentation, or liability for death or personal injury caused by our negligence), the service is provided on an "as is" and "as available" basis without warranties of any kind, whether express, implied or statutory.', 22)}
            {para('To the maximum extent permitted by law, Finbloom\'s total aggregate liability under these Terms for any direct loss shall not exceed the total fees paid by you to Finbloom in the twelve (12) months preceding the event giving rise to the claim. Finbloom is not liable for indirect, consequential, special, punitive, incidental or exemplary damages, including lost profits, lost revenue, lost savings or business interruption.', 23)}

            {sectionHeading('terms-section-13', 13, 'Suspension or termination')}
            {para('We may suspend, restrict or terminate your access to any service where (a) you breach these Terms or a facility document; (b) we reasonably suspect fraud, money laundering, unauthorised activity or a security risk; (c) required by law or a regulator; (d) your account is inactive for an extended period; or (e) continued provision becomes unlawful, impracticable or commercially unreasonable.', 24)}
            {para('You may close your account or stop using the service at any time, subject to any ongoing obligations under an accepted facility. Clauses that by their nature survive termination (including disclaimers, liability caps, repayment obligations and dispute-resolution clauses) will remain in effect.', 25)}

            {sectionHeading('terms-section-14', 14, 'Governing law')}
            {para('These Terms and any non-contractual obligations arising out of or in connection with them are governed by and construed in accordance with the laws of the Federal Republic of Nigeria.', 26)}
            {para('Any dispute arising from these Terms or the use of our services shall be subject to the exclusive jurisdiction of the courts of Lagos State, Nigeria, without prejudice to any right we may have to commence proceedings in any other competent court.', 27)}

            {sectionHeading('terms-section-15', 15, 'Contact us')}
            {para('If you have any questions, concerns or complaints about these Terms, the service, or your facility, please contact us through any of the channels below and our team will respond as quickly as possible:', 28)}
            <ul className="space-y-2 text-[14px] text-[#55606b]">
              <li className="flex items-center gap-2">
                <span className="font-['Inter:Semi_Bold'] text-[#062530]">Address:</span>
                <span>29, Ogayemi Close, Yaba, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-['Inter:Semi_Bold'] text-[#062530]">Email:</span>
                <a href="mailto:info@finbloomcapital.com" className="text-[#034f5b] hover:underline">
                  info@finbloomcapital.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-['Inter:Semi_Bold'] text-[#062530]">Phone:</span>
                <a href="tel:+2347048232127" className="text-[#034f5b] hover:underline">
                  +234 704 823 2127
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
