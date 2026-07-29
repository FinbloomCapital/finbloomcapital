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
  { id: 'privacy-section-1', label: '1. About this policy' },
  { id: 'privacy-section-2', label: '2. Information we collect' },
  { id: 'privacy-section-3', label: '3. How we collect information' },
  { id: 'privacy-section-4', label: '4. How we use your information' },
  { id: 'privacy-section-5', label: '5. Lawful bases for processing' },
  { id: 'privacy-section-6', label: '6. When we share information' },
  { id: 'privacy-section-7', label: '7. Credit assessment and automated processing' },
  { id: 'privacy-section-8', label: '8. How long we keep information' },
  { id: 'privacy-section-9', label: '9. How we protect information' },
  { id: 'privacy-section-10', label: '10. Your data-protection rights' },
  { id: 'privacy-section-11', label: '11. Cookies and similar technologies' },
  { id: 'privacy-section-12', label: '12. International data transfers' },
  { id: 'privacy-section-13', label: 'Children' },
  { id: 'privacy-section-14', label: 'Changes to this policy' },
  { id: 'privacy-section-15', label: '13. Contact us' },
];

function sectionHeading(id: string, number: number | undefined, title: string) {
  return (
    <div id={id} className="scroll-mt-28 content-stretch flex flex-col gap-2 items-start w-full" data-name={`privacy-heading-${id}`}>
      <p className="font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[#062530] text-[17px]">
        {number !== undefined ? `${number}. ${title}` : title}
      </p>
    </div>
  );
}

function para(text: string, key: number | string) {
  return (
    <p key={key} className="font-['Inter:Regular'] font-normal leading-[1.7] not-italic relative shrink-0 text-[#55606b] text-[14px] w-full max-w-[680px]">
      {text}
    </p>
  );
}

function bulletList(items: string[], keyPrefix: string) {
  return (
    <ul key={keyPrefix} className="space-y-2 text-[14px] text-[#55606b] w-full max-w-[680px]">
      {items.map((it, i) => (
        <li key={`${keyPrefix}-${i}`} className="flex gap-3">
          <span className="mt-[6px] inline-block h-[6px] w-[6px] shrink-0 rounded-full bg-[#046675]" />
          <span className="leading-[1.7]">{it}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PrivacyPolicyDesktop() {
  const [active, setActive] = useState<string>('privacy-section-1');
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

      let top = sentinelRect.top;
      if (window.scrollY + NAVBAR_H >= sentinelAbsTop) {
        top = NAVBAR_H;
      }

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
    <div className="w-full overflow-x-hidden bg-[#faf9f6]" data-node-id="120:90" data-name="Privacy Policy - Desktop">
      <div className="bg-[#faf9f6] content-stretch flex flex-col items-start overflow-clip px-[80px] py-[40px] relative shrink-0 w-full" data-node-id="120:104" data-name="Hero">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="210:437">
          <div className="content-stretch flex gap-[113px] items-center overflow-clip relative shrink-0 w-full" data-node-id="120:4" data-name="Hero grid">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[22px] items-start min-w-px overflow-clip relative" data-node-id="120:5" data-name="Hero left">
              <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold leading-[1.08] relative shrink-0 text-[#062530] text-[52px] whitespace-nowrap" data-node-id="120:107">
                Privacy Policy
              </p>
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#55606b] text-[17px] w-[min-content]" data-node-id="120:109">
                Effective date: 14 July 2026 · Last updated: 14 July 2026
              </p>
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.6] min-w-full not-italic relative shrink-0 text-[#55606b] text-[16px] w-[min-content]" data-node-id="210:4">
                We respect your privacy. This policy explains what information we collect, how we use it, and your rights under Nigerian data-protection law, in plain language.
              </p>
              <div className="content-center flex flex-wrap gap-[17px_12px] items-center overflow-clip relative shrink-0 w-[600px]" data-node-id="120:6" data-name="Trust row">
                <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-node-id="120:7" data-name="trust-item">
                  <div className="relative shrink-0 size-[16px]" data-node-id="120:8" data-name="material-symbols-light:check">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMaterialSymbolsLightCheck} />
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#55606b] text-[13.5px] whitespace-nowrap" data-node-id="120:10">
                    NDPR compliant
                  </p>
                </div>
                <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-node-id="120:11" data-name="trust-item">
                  <div className="relative shrink-0 size-[16px]" data-node-id="120:12" data-name="material-symbols-light:check">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMaterialSymbolsLightCheck1} />
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#55606b] text-[13.5px] whitespace-nowrap" data-node-id="120:14">
                    Secure by design
                  </p>
                </div>
                <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-node-id="120:15" data-name="trust-item">
                  <div className="relative shrink-0 size-[16px]" data-node-id="120:16" data-name="material-symbols-light:check">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMaterialSymbolsLightCheck1} />
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#55606b] text-[13.5px] whitespace-nowrap" data-node-id="120:18">
                    Your rights, respected
                  </p>
                </div>
                <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-node-id="210:5" data-name="trust-item">
                  <div className="relative shrink-0 size-[16px]" data-node-id="210:6" data-name="material-symbols-light:check">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMaterialSymbolsLightCheck2} />
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#55606b] text-[13.5px] whitespace-nowrap" data-node-id="210:8">
                    Credit-bureau aware
                  </p>
                </div>
                <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-node-id="210:9" data-name="trust-item">
                  <div className="relative shrink-0 size-[16px]" data-node-id="210:10" data-name="material-symbols-light:check">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMaterialSymbolsLightCheck2} />
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#55606b] text-[13.5px] whitespace-nowrap" data-node-id="210:12">
                    No data sold
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[460px] overflow-clip relative shrink-0 w-[564px]" data-node-id="120:106" data-name="Hero right">
              <div className="absolute bg-[#062530] h-[381px] left-[20px] overflow-clip rounded-[28px] top-[20px] w-[460px]" data-node-id="120:108" data-name="Illustration frame">
                <div className="absolute h-[420px] left-0 top-0 w-[460px]" data-node-id="120:19" data-name="Grid"></div>
                <div className="absolute bg-[var(--teal\/accent-soft,#e5eff1)] content-stretch flex flex-col items-center justify-center left-[23px] rounded-[18px] size-[72px] top-[23px]" data-node-id="120:63" data-name="shield-icon">
                  <div className="relative shrink-0 size-[34px]" data-node-id="120:87" data-name="shield-check">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShieldCheck} />
                  </div>
                </div>
                <div className="absolute bg-[var(--teal\/accent-soft,#e5eff1)] content-stretch flex flex-col items-center justify-center left-[104px] rounded-[18px] size-[72px] top-[23px]" data-node-id="120:65" data-name="lock-icon">
                  <div className="relative shrink-0 size-[34px]" data-node-id="120:90" data-name="file-text">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFileText} />
                  </div>
                </div>
                <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.07)] border-solid content-stretch flex flex-col gap-[12px] h-[180px] items-start left-[23px] overflow-clip p-[16px] right-[23px] rounded-[16px] top-[124px]" data-node-id="120:67" data-name="policy">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="120:68" data-name="policy-header">
                    <div className="bg-[var(--teal\/accent-soft,#e5eff1)] content-stretch flex gap-[8px] items-center px-[10px] py-[6px] relative rounded-[999px] shrink-0" data-node-id="120:69" data-name="chip">
                      <div className="relative shrink-0 size-[14px]" data-node-id="120:93" data-name="check">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCheck} />
                      </div>
                      <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[11px] text-[color:var(--teal\/aqua-dark,#2c4e4e)] whitespace-nowrap" data-node-id="120:71">
                        Protected
                      </p>
                    </div>
                    <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.07)] border-solid content-stretch flex items-start px-[10px] py-[6px] relative rounded-[999px] shrink-0" data-node-id="120:72" data-name="badge">
                      <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[11px] text-[rgba(255,255,255,0.8)] whitespace-nowrap" data-node-id="120:73">
                        Privacy
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-node-id="120:74" data-name="policy-lines">
                    <div className="bg-[rgba(255,255,255,0.07)] h-[10px] relative rounded-[5px] shrink-0 w-full" data-node-id="120:75" />
                    <div className="bg-[rgba(255,255,255,0.07)] h-[10px] relative rounded-[5px] shrink-0 w-[92%]" data-node-id="120:76" />
                    <div className="bg-[rgba(255,255,255,0.07)] h-[10px] relative rounded-[5px] shrink-0 w-[84%]" data-node-id="120:77" />
                    <div className="bg-[rgba(255,255,255,0.07)] h-[10px] relative rounded-[5px] shrink-0 w-[88%]" data-node-id="120:78" />
                    <div className="bg-[rgba(255,255,255,0.07)] h-[10px] relative rounded-[5px] shrink-0 w-[70%]" data-node-id="120:79" />
                  </div>
                  <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] not-italic relative shrink-0 text-[12px] w-full whitespace-nowrap" data-node-id="120:80" data-name="policy-footer">
                    <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[rgba(255,255,255,0.8)]" data-node-id="120:81">
                      NDPA 2023
                    </p>
                    <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[rgba(255,255,255,0.6)]" data-node-id="120:82">
                      v1.0 · Jul 2026
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref={containerRef as React.RefObject<HTMLDivElement>} className="bg-[#faf9f6] content-stretch flex flex-col items-start pb-[80px] px-[80px] relative shrink-0 w-full" data-node-id="120:110" data-name="Legal body">
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full lg:flex-row lg:gap-[56px]" data-node-id="120:111" data-name="Legal layout">
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
            data-node-id="120:112"
            data-name="TOC"
          >
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#8b939c] text-[12px] tracking-[0.12px] whitespace-nowrap" data-node-id="120:113">
              ON THIS PAGE
            </p>
            <div className="h-[8px] relative shrink-0 w-[10px]" data-node-id="120:114" data-name="Frame" />
            <nav className="flex w-full flex-col gap-1" aria-label="Privacy Policy table of contents">
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

          <section className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[28px] items-start min-w-px overflow-clip relative" data-node-id="120:130" data-name="Content">
            {sectionHeading('privacy-section-1', 1, 'About this policy')}
            {para('This Privacy Policy explains how Finbloom Capital Ltd. ("Finbloom", "we", "us" or "our") processes personal data when you visit our website, use our lending web application, apply for or receive financing, act as a guarantor, contact us or otherwise interact with our services.', 1)}
            {para('Finbloom acts as a data controller for the personal data described in this policy. We process personal data in accordance with the Nigeria Data Protection Act 2023, applicable directives of the Nigeria Data Protection Commission, consumer-protection requirements and other applicable Nigerian laws.', 2)}

            {sectionHeading('privacy-section-2', 2, 'Information we collect')}
            {para('We may collect the following categories of information, where relevant and lawful:', 3)}
            {bulletList([
              'Identity information: full name, date of birth, photograph, signature, gender, nationality, BVN, NIN and information contained in a valid means of identification.',
              'Contact information: residential and business address, email address and telephone number.',
              'Financial information: bank-account details, bank statements, income, transaction history, existing financial obligations, loan purpose and repayment information.',
              'Business information: business name, CAC documents, ownership and director information, business address, contracts, invoices, inventory, assets, customers and cash-flow records.',
              'Credit information: credit reports, credit scores, borrowing history, defaults and information received from or reported to licensed credit bureaus.',
              'Security information: guarantor details, collateral documents, valuations, insurance details and information relating to financed assets.',
              'Technical information: IP address, browser and device type, login records, cookies, pages visited and security-event information.',
              'Communications: enquiries, complaints, call or message records and correspondence with our employees, representatives or service providers.',
            ], 'collected')}
            {para('We do not design our lending services to access customers\' phone contacts, call logs, private messages, photographs or gallery content.', 4)}

            {sectionHeading('privacy-section-3', 3, 'How we collect information')}
            {para('We collect information directly from you through our website, forms, web application, email, telephone and physical documents. We may also receive information from your employer, guarantor, business partners, banks, payment providers, identity-verification providers, licensed credit bureaus, public registers, referees and other lawful sources.', 5)}

            {sectionHeading('privacy-section-4', 4, 'How we use your information')}
            {para('We may process your information to:', 6)}
            {bulletList([
              'verify your identity, address, business and eligibility;',
              'assess affordability, creditworthiness, fraud risk and repayment capacity;',
              'process applications and issue offers, agreements and disbursements;',
              'manage customer accounts, repayments, reminders, restructuring and recoveries;',
              'register, value, insure, monitor or enforce collateral and guarantees;',
              'conduct credit-bureau searches and submit required credit-performance information;',
              'prevent fraud, money laundering, identity theft, cyber incidents and other unlawful activity;',
              'respond to enquiries, complaints and data-rights requests;',
              'improve our products, customer experience, risk models and internal controls;',
              'send service notices and, where permitted, relevant marketing communications;',
              'comply with legal, regulatory, audit, tax, accounting and reporting obligations.',
            ], 'uses')}

            {sectionHeading('privacy-section-5', 5, 'Lawful bases for processing')}
            {para('We rely on one or more lawful bases, including performance of a contract or steps taken at your request before entering a contract; compliance with legal obligations; our legitimate interests in responsible lending, fraud prevention, service improvement and recovery of lawful debts; your consent where required; and the establishment, exercise or defence of legal claims.', 7)}
            {para('Where processing depends on consent, you may withdraw that consent. Withdrawal does not affect processing already carried out lawfully and may not prevent processing required for a contract, legal obligation or legitimate claim.', 8)}

            {sectionHeading('privacy-section-6', 6, 'When we share information')}
            {para('We may share relevant information, only where necessary and lawful, with:', 9)}
            {bulletList([
              'our lending-platform and technology providers, including Lendsqr and related infrastructure providers;',
              'licensed credit bureaus, identity-verification providers and fraud-prevention services;',
              'banks, payment processors, direct-debit providers and collection partners;',
              'insurers, valuers, asset vendors, brokers, custodians and collateral-registration providers;',
              'professional advisers, auditors, lawyers and authorised recovery agents;',
              'regulators, courts, law-enforcement authorities and government agencies where lawfully required;',
              'persons involved in a proposed merger, investment, restructuring or transfer of business, subject to appropriate safeguards;',
              'and other parties you authorise us to engage.',
            ], 'shares')}
            {para('Service providers acting on our behalf are expected to process information only for authorised purposes and apply appropriate confidentiality and security safeguards. We do not sell personal data.', 10)}

            {sectionHeading('privacy-section-7', 7, 'Credit assessment and automated processing')}
            {para('We may use rules, scoring tools and information from credit bureaus to support credit and fraud-risk decisions. A decision may consider income, business cash flow, existing obligations, repayment history, application information and other relevant factors. Where a decision producing a significant effect is made solely through automated processing, you may request information about the decision, express your views and request appropriate human review, subject to applicable law.', 11)}

            {sectionHeading('privacy-section-8', 8, 'How long we keep information')}
            {para('We retain personal data only for as long as reasonably necessary for the purposes described in this policy, including the duration of the customer relationship and any period required for regulatory, accounting, tax, credit-reporting, fraud-prevention, dispute or legal-claim purposes. Retention periods may differ by record type. Information that is no longer required will be securely deleted, destroyed or anonymised, subject to lawful retention requirements.', 12)}

            {sectionHeading('privacy-section-9', 9, 'How we protect information')}
            {para('We apply proportionate organisational and technical safeguards designed to protect personal data against unauthorised access, loss, misuse, alteration or disclosure. Measures may include access controls, authentication, encryption where appropriate, secure backups, staff confidentiality obligations, vendor assessments, monitoring and incident-response procedures. No electronic system is completely secure, but we continually review safeguards in light of risk and available technology.', 13)}

            {sectionHeading('privacy-section-10', 10, 'Your data-protection rights')}
            {para('Subject to applicable law and relevant exemptions, you may:', 14)}
            {bulletList([
              'request confirmation and access to personal data we hold about you;',
              'request correction of inaccurate or incomplete information;',
              'request deletion where there is no lawful reason to retain the information;',
              'object to or request restriction of certain processing;',
              'withdraw consent where consent is the lawful basis;',
              'request portability of information you provided in an applicable structured format;',
              'object to direct marketing;',
              'request appropriate review of qualifying automated decisions;',
              'and complain to Finbloom or the Nigeria Data Protection Commission.',
            ], 'rights')}
            {para('We may need to verify your identity before acting on a request. Some rights may be limited where we must retain or process information to fulfil a contract, comply with law, protect another person or establish or defend a legal claim.', 15)}

            {sectionHeading('privacy-section-11', 11, 'Cookies and similar technologies')}
            {para('Our website or web application may use essential cookies for security, authentication and core functionality, and may use analytics or preference cookies where permitted. You can manage non-essential cookies through available settings or your browser. Disabling essential cookies may prevent parts of the service from functioning correctly.', 16)}

            {sectionHeading('privacy-section-12', 12, 'International data transfers')}
            {para('Where a service provider processes personal data outside Nigeria, we will take reasonable steps to ensure an appropriate lawful transfer mechanism and safeguards consistent with applicable data-protection requirements.', 17)}

            {sectionHeading('privacy-section-13', undefined, 'Children')}
            {para('Our lending services are not intended for persons under 18 years of age. We do not knowingly provide consumer loans to children. If we discover that a child\'s personal data has been collected without an appropriate lawful basis, we will take reasonable steps to delete or otherwise address it.', 18)}

            {sectionHeading('privacy-section-14', undefined, 'Changes to this policy')}
            {para('We may update this policy to reflect changes in our services, technology or legal obligations. The updated version will be posted on this page with a revised effective date. Material changes may also be communicated through appropriate customer channels.', 19)}

            {sectionHeading('privacy-section-15', 13, 'Contact us')}
            {para('If you have questions, requests or complaints about privacy and data protection, please contact us:', 20)}
            <ul className="space-y-2 text-[14px] text-[#55606b]">
              <li className="flex items-center gap-2">
                <span className="font-['Inter:Semi_Bold'] text-[#062530]">Entity:</span>
                <span>Finbloom Capital Ltd. — Privacy and Data Protection — Nigeria</span>
              </li>
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
            {para('You may also lodge a complaint with the Nigeria Data Protection Commission where you believe your data-protection rights have been infringed.', 21)}
          </section>
        </div>
      </div>
    </div>
  );
}
