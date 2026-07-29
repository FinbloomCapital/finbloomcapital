import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const imgMaterialSymbolsLightCheck = "https://www.figma.com/api/mcp/asset/838f233f-d192-4bb4-b769-787537360bef";
const imgMaterialSymbolsLightCheck1 = "https://www.figma.com/api/mcp/asset/2b300978-4813-453e-83fd-7c6bff1a1b41";
const imgGrid = "https://www.figma.com/api/mcp/asset/ea083479-3309-4c18-971e-526ed8e84c21";
const imgMaterialSymbolsCheck = "https://www.figma.com/api/mcp/asset/f2f31b04-c92c-4a48-9e2f-b4faa2d04ebc";
const imgHumbleiconsLineChart = "https://www.figma.com/api/mcp/asset/6aa9ebf1-7631-464e-8ea4-90d0e7f68fe7";
const imgHugeiconsInvoice01 = "https://www.figma.com/api/mcp/asset/51598ebe-35af-4191-b84a-b6784597d8ba";
const imgGroup = "https://www.figma.com/api/mcp/asset/aeffc4a5-92d3-421f-81fb-873a1893f138";
const imgPhBuildings = "https://www.figma.com/api/mcp/asset/0c264df6-5af9-43b5-a8e5-3deb168b2c70";
const imgStreamlinePlumpInsuranceHand = "https://www.figma.com/api/mcp/asset/12d7054c-44de-45e1-acb8-f9936a02adcc";
const imgGroup1 = "https://www.figma.com/api/mcp/asset/2581af67-7bb0-4549-9e1c-288671d724a5";
const imgIcRoundCall = "https://www.figma.com/api/mcp/asset/5d55aacb-1739-434b-b252-f6198fb14abb";
const imgMaterialSymbolsMailOutlineRounded = "https://www.figma.com/api/mcp/asset/94670736-adce-4e02-9a9b-359d0f9429af";
const imgFinbloomLogoBackground = "https://www.figma.com/api/mcp/asset/a8a271bd-40bd-4765-b76c-72988ec8914f";
const imgGroup2 = "https://www.figma.com/api/mcp/asset/12688e77-7c3f-48e2-9513-d1f846d7d7ee";
const imgGroup3 = "https://www.figma.com/api/mcp/asset/487437c5-61c5-414c-a95c-3c5d2fe0f21a";
const imgGroup4 = "https://www.figma.com/api/mcp/asset/60000813-86f0-48bf-8ff8-709d81968dc1";
const imgMdiInstagram = "https://www.figma.com/api/mcp/asset/294cac60-75ce-4c64-bd51-3190969aa8f8";
const imgMdiLinkedin = "https://www.figma.com/api/mcp/asset/e9110244-c19f-4387-ab94-b1ca4de9e323";
const imgCRCPartner = '/img/CRC.png';
const imgLendsqrPartner = '/img/lendsqr.png';

const testimonials = [
  {
    initials: 'OA',
    name: 'Opeyemi A.',
    role: 'Distribution business, Lagos',
    quote:
      'Cashflow Flex meant I could take on a large supply contract without waiting on my own customers to pay first.',
    accentBg: '#e5eff1',
    accentText: '#034f5b',
  },
  {
    initials: 'CN',
    name: 'Chidinma N.',
    role: 'Logistics operator, Lagos',
    quote:
      'Invoice Finance freed up cash that would otherwise have sat unpaid for two months. The process was straightforward.',
    accentBg: '#e4f2f2',
    accentText: '#2c4e4e',
  },
  {
    initials: 'TB',
    name: 'Tunde B.',
    role: 'Retail & FMCG, Ibadan',
    quote:
      'We financed a delivery van through Asset Finance instead of draining our working capital.',
    accentBg: '#fdf1ec',
    accentText: '#81320d',
  },
  {
    initials: 'KA',
    name: 'Kafayat A.',
    role: 'Manufacturer, Ogun State',
    quote:
      'The SME Growth Loan let us buy extra inventory ahead of demand and avoid stockouts during peak season.',
    accentBg: '#fdf6e0',
    accentText: '#685216',
  },
];

function TestimonialsCarousel() {
  const [page, setPage] = useState(0);
  const hoverRef = useRef(false);
  const total = testimonials.length;

  const visibleMap = useMemo(
    () => ({ base: 1, sm: 1, md: 2, lg: 3 }),
    []
  );
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    function update() {
      const w = typeof window !== 'undefined' ? window.innerWidth : 1280;
      if (w >= 1024) setVisible(visibleMap.lg);
      else if (w >= 768) setVisible(visibleMap.md);
      else setVisible(visibleMap.base);
    }
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [visibleMap]);

  const pages = Math.max(1, total - visible + 1);

  const next = useCallback(() => {
    setPage((p) => (p + 1) % pages);
  }, [pages]);
  const prev = useCallback(() => {
    setPage((p) => (p - 1 + pages) % pages);
  }, [pages]);

  useEffect(() => {
    const id = setInterval(() => {
      if (!hoverRef.current) {
        setPage((p) => (p + 1) % pages);
      }
    }, 5000);
    return () => clearInterval(id);
  }, [pages]);

  useEffect(() => {
    if (page >= pages) setPage(0);
  }, [pages, page]);

  const trackStyle =
    typeof window !== 'undefined' && window.innerWidth >= 1024
      ? { transform: `translateX(calc(-1 * ${page} * ((100% - ${visible - 1} * 20px) / ${visible} + 20px)))` }
      : typeof window !== 'undefined' && window.innerWidth >= 768
      ? { transform: `translateX(calc(-1 * ${page} * (50% - 10px + 20px)))` }
      : { transform: `translateX(calc(-1 * ${page} * (100% + 20px)))` };

  return (
    <section className="bg-white content-stretch flex flex-col items-start overflow-clip p-[80px] relative shrink-0 w-full" data-node-id="32:2" data-name="Testimonials">
      <div className="content-stretch flex flex-col gap-[14px] items-start overflow-clip relative shrink-0 w-[640px]" data-node-id="32:3" data-name="Section head">
        <p className="font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold leading-[normal] relative shrink-0 text-[30px] text-[#2c4e4e] whitespace-nowrap" data-node-id="32:6">
          Testimonials
        </p>
        <p className="font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[#55606b] text-[15px] w-[560px]" data-node-id="32:7">
          A few of the individuals and business owners who&apos;ve financed their next step with us.
        </p>
      </div>
      <div className="h-[32px] relative shrink-0 w-[10px]" data-node-id="32:8" data-name="spacer" />
      <div
        className="relative w-full"
        onMouseEnter={() => (hoverRef.current = true)}
        onMouseLeave={() => (hoverRef.current = false)}
      >
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={prev}
          className="absolute left-0 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#e7e5e1] bg-white shadow-md text-[#034f5b] transition hover:bg-[#034f5b] hover:text-white md:inline-flex size-10"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="overflow-hidden px-4 md:px-10 lg:px-14">
          <div
            className="flex gap-[20px] transition-transform duration-700 ease-out"
            style={trackStyle}
          >
            {testimonials.map((t, i) => (
              <article
                key={i}
                className="bg-[#e5eff1] content-stretch flex flex-col gap-[18px] items-start overflow-clip px-[26px] py-[28px] relative rounded-[18px] shrink-0"
                style={{
                  width:
                    typeof window !== 'undefined' && window.innerWidth >= 1024
                      ? `calc((100% - ${visible - 1} * 20px) / ${visible})`
                      : typeof window !== 'undefined' && window.innerWidth >= 768
                      ? 'calc(50% - 10px)'
                      : '100%',
                }}
                data-node-id={`32:tc-${i}`}
                data-name="Testimonial card"
              >
                <p className="font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold leading-[normal] relative shrink-0 text-[#046675] text-[26px] whitespace-nowrap">
                  &ldquo;
                </p>
                <p className="font-['Inter:Regular'] font-normal leading-[1.55] not-italic relative shrink-0 text-[#062530] text-[14px] w-full max-w-[320px]">
                  {t.quote}
                </p>
                <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="person">
                  <div
                    className="content-stretch flex items-center justify-center overflow-clip relative rounded-[22px] shrink-0 border border-solid size-[44px]"
                    style={{ backgroundColor: t.accentBg, borderColor: t.accentText }}
                  >
                    <p className="font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[13.5px] whitespace-nowrap" style={{ color: t.accentText }}>
                      {t.initials}
                    </p>
                  </div>
                  <div className="content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap">
                    <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[#062530] text-[13.5px]">
                      {t.name}
                    </p>
                    <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#55606b] text-[12px]">
                      {t.role}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <button
          type="button"
          aria-label="Next testimonial"
          onClick={next}
          className="absolute right-0 top-1/2 z-10 hidden translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#e7e5e1] bg-white shadow-md text-[#034f5b] transition hover:bg-[#034f5b] hover:text-white md:inline-flex size-10"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        <div className="flex justify-between absolute inset-x-2 top-1/2 z-10 -translate-y-1/2 md:hidden pointer-events-none">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={prev}
            className="pointer-events-auto inline-flex items-center justify-center rounded-full border border-[#e7e5e1] bg-white shadow-md text-[#034f5b] size-9"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={next}
            className="pointer-events-auto inline-flex items-center justify-center rounded-full border border-[#e7e5e1] bg-white shadow-md text-[#034f5b] size-9"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
      <div className="h-[20px] relative shrink-0 w-[10px]" data-node-id="32:38" data-name="spacer" />
      <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="32:37" data-name="dots">
        {Array.from({ length: pages }).map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to testimonial page ${i + 1}`}
            onClick={() => setPage(i)}
            className={`relative rounded-[4px] shrink-0 size-[8px] transition-all ${
              i === page ? 'bg-[#2c4e4e]' : 'bg-[#e7e5e1]'
            }`}
            data-node-id={`32:dot-${i}`}
            data-name="dot"
          />
        ))}
      </div>
    </section>
  );
}


export default function HomePageDesktop() {
  return (
    <div className="bg-[#faf9f6] content-stretch flex flex-col items-start relative size-full" data-node-id="29:3" data-name="Home Page - Desktop">
      <div className="bg-[#faf9f6] content-stretch flex flex-col items-start overflow-clip pb-[96px] pt-[120px] px-[117px] relative shrink-0 w-full" data-node-id="29:17" data-name="Hero">
        <div className="content-stretch flex gap-[113px] items-center overflow-clip relative shrink-0 w-full" data-node-id="29:18" data-name="Hero grid">
          <div className="content-stretch flex flex-col gap-[22px] items-start overflow-clip relative shrink-0" data-node-id="29:19" data-name="Hero left">
            <div className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold leading-[0] relative shrink-0 text-[#062530] text-[52px] whitespace-nowrap" data-node-id="29:22">
              <p className="leading-[1.08] mb-0">Flexible finance.</p>
              <p className="leading-[1.08]">Brighter possibilities.</p>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] not-italic relative shrink-0 text-[#55606b] text-[17px] w-[520px]" data-node-id="29:23">
              Responsible financing solutions that help Nigerian individuals and businesses strengthen cash flow, seize opportunities and grow with confidence.
            </p>
            <div className="content-stretch flex gap-[20px] items-center overflow-clip relative shrink-0" data-node-id="29:24" data-name="Hero CTAs">
              <a href="https://finbloom-capital-ltd.lsq.app/login" target="_blank" rel="noopener noreferrer" className="bg-[#046675] content-stretch flex items-center justify-center px-[28px] py-[14px] relative rounded-[100px] shrink-0" data-node-id="204:16" data-name="Button">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[14.5px] text-left text-white whitespace-nowrap" data-node-id="I204:16;204:6">
                  Apply for financing
                </p>
              </a>
              <a href="/products" className="border border-[var(--teal\/accent,#046675)] border-solid content-stretch flex items-center justify-center px-[30px] py-[16px] relative rounded-[100px] shrink-0" data-node-id="55:31" data-name="Button/Explore">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[14.5px] text-[color:var(--teal\/accent,#046675)] text-left whitespace-nowrap" data-node-id="29:27">
                  Explore products
                </p>
              </a>
            </div>
            <div className="content-center flex flex-wrap gap-[0px_26px] items-center overflow-clip relative shrink-0" data-node-id="29:28" data-name="Trust row">
              <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="29:29" data-name="trust-item">
                <div className="relative shrink-0 size-[16px]" data-node-id="55:39" data-name="material-symbols-light:check">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMaterialSymbolsLightCheck} />
                </div>
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#55606b] text-[13.5px] whitespace-nowrap" data-node-id="29:31">
                  Transparent terms
                </p>
              </div>
              <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="29:32" data-name="trust-item">
                <div className="relative shrink-0 size-[16px]" data-node-id="55:37" data-name="material-symbols-light:check">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMaterialSymbolsLightCheck1} />
                </div>
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#55606b] text-[13.5px] whitespace-nowrap" data-node-id="29:34">
                  Secure application
                </p>
              </div>
              <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="29:35" data-name="trust-item">
                <div className="relative shrink-0 size-[16px]" data-node-id="55:34" data-name="material-symbols-light:check">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMaterialSymbolsLightCheck1} />
                </div>
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#55606b] text-[13.5px] whitespace-nowrap" data-node-id="29:37">
                  Personal support
                </p>
              </div>
            </div>
          </div>
          <div className="h-[460px] overflow-clip relative shrink-0 w-[500px]" data-node-id="29:38" data-name="Hero right">
            <div className="absolute bg-[#062530] h-[420px] left-[20px] overflow-clip rounded-[28px] top-[20px] w-[460px]" data-node-id="29:39" data-name="Device frame">
              <div className="absolute h-[420px] left-0 top-0 w-[460px]" data-node-id="41:2" data-name="Grid">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGrid} />
              </div>
              <div className="absolute content-stretch flex gap-[8px] items-end left-[26px] overflow-clip top-[244px] w-[408px]" data-node-id="29:40" data-name="bars">
                <div className="bg-gradient-to-b from-[#046675] h-[55px] relative rounded-[5px] shrink-0 to-[#07bfdb] to-[90.909%] w-[40px]" data-node-id="29:41" data-name="Rectangle" />
                <div className="bg-gradient-to-b from-[#046675] h-[85px] relative rounded-[5px] shrink-0 to-[#07bfdb] to-[90.909%] w-[40px]" data-node-id="29:42" data-name="Rectangle" />
                <div className="bg-gradient-to-b from-[#046675] h-[64px] relative rounded-[5px] shrink-0 to-[#07bfdb] to-[90.909%] w-[40px]" data-node-id="29:43" data-name="Rectangle" />
                <div className="bg-gradient-to-b from-[#046675] h-[105px] relative rounded-[5px] shrink-0 to-[#07bfdb] to-[90.909%] w-[40px]" data-node-id="29:44" data-name="Rectangle" />
                <div className="bg-gradient-to-b from-[#046675] h-[76px] relative rounded-[5px] shrink-0 to-[#07bfdb] to-[90.909%] w-[40px]" data-node-id="29:45" data-name="Rectangle" />
                <div className="bg-gradient-to-b from-[#046675] h-[124px] relative rounded-[5px] shrink-0 to-[#07bfdb] to-[90.909%] w-[40px]" data-node-id="29:46" data-name="Rectangle" />
                <div className="bg-gradient-to-b from-[#046675] h-[92px] relative rounded-[5px] shrink-0 to-[#07bfdb] to-[90.909%] w-[40px]" data-node-id="29:47" data-name="Rectangle" />
                <div className="bg-gradient-to-b from-[#046675] h-[70px] relative rounded-[5px] shrink-0 to-[#07bfdb] to-[90.909%] w-[40px]" data-node-id="29:48" data-name="Rectangle" />
              </div>
            </div>
            <div className="[word-break:break-word] absolute bg-white content-stretch flex flex-col gap-[6px] items-start leading-[normal] left-0 overflow-clip px-[18px] py-[16px] rounded-[18px] shadow-[0px_12px_32px_0px_rgba(20,23,28,0.14)] top-[2px] w-[196px] whitespace-nowrap" data-node-id="29:49" data-name="Float card A">
              <p className="font-['Inter:Semi_Bold'] font-semibold not-italic relative shrink-0 text-[#8b939c] text-[10.5px] tracking-[0.21px]" data-node-id="29:50">
                AVAILABLE GROWTH FACILITY
              </p>
              <p className="font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold relative shrink-0 text-[#062530] text-[21px]" data-node-id="29:51">
                ₦5,000,000
              </p>
            </div>
            <div className="absolute bg-white content-stretch flex gap-[10px] h-[76px] items-center left-[294px] overflow-clip pl-[16px] pr-[18px] py-[14px] rounded-[16px] shadow-[0px_12px_32px_0px_rgba(20,23,28,0.14)] top-[373px]" data-node-id="29:52" data-name="Float card B">
              <div className="relative shrink-0 size-[24px]" data-node-id="55:32" data-name="material-symbols:check">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMaterialSymbolsCheck} />
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="29:54" data-name="cardB text">
                <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#062530] text-[13px]" data-node-id="29:55">
                  Application received
                </p>
                <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#55606b] text-[11.5px]" data-node-id="29:56">{`We'll keep you updated`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#e5eff1] content-stretch flex flex-col items-start overflow-clip p-[80px] relative shrink-0 w-full" data-node-id="30:2" data-name="Products">
        <div className="content-stretch flex flex-col gap-[14px] items-start overflow-clip relative shrink-0 w-[640px]" data-node-id="30:3" data-name="Section head">
          <div className="bg-white content-stretch flex items-start overflow-clip px-[14px] py-[7px] relative rounded-[100px] shrink-0" data-node-id="30:4" data-name="Eyebrow">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#034f5b] text-[12px] tracking-[0.24px] whitespace-nowrap" data-node-id="30:5">
              OUR PRODUCTS
            </p>
          </div>
          <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold leading-[normal] relative shrink-0 text-[#062530] text-[32px] whitespace-nowrap" data-node-id="30:6">
            Capital for every stage of growth.
          </p>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[#55606b] text-[15.5px] w-[560px]" data-node-id="30:7">
            Choose a financing solution designed around the way your business earns, invests and grows.
          </p>
        </div>
        <div className="h-[32px] relative shrink-0 w-[10px]" data-node-id="30:8" data-name="spacer" />
        <div className="content-start grid grid-cols-1 gap-5 items-start overflow-clip relative w-full md:grid-cols-2 lg:grid-cols-3" data-node-id="30:9" data-name="Product grid">
          <div className="bg-white content-stretch flex flex-col gap-[14px] items-start overflow-clip px-[22px] py-[26px] relative rounded-[18px] w-full" data-node-id="30:10" data-name="Product card">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#8b939c] text-[12px] tracking-[0.12px] whitespace-nowrap" data-node-id="30:11">
              01
            </p>
            <div className="bg-[#e5eff1] overflow-clip relative rounded-[12px] shrink-0 size-[42px]" data-node-id="30:12" data-name="icon">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-node-id="71:72" data-name="humbleicons:line-chart">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHumbleiconsLineChart} />
              </div>
            </div>
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[#062530] text-[16.5px] w-[226px]" data-node-id="30:13">
              Finbloom Cashflow Flex
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[#55606b] text-[13.5px] w-[226px]" data-node-id="30:14">
              Pay interest monthly and repay the principal at maturity.
            </p>
            <a href="/products/cashflow-flex" className="[word-break:break-word] block cursor-pointer font-['Inter:Semi_Bold'] font-semibold leading-[0] not-italic relative shrink-0 text-[#034f5b] text-[13px] whitespace-nowrap" data-node-id="30:15">
              <p className="leading-[normal] whitespace-pre">{`Learn more  →`}</p>
            </a>
          </div>
          <div className="bg-white content-stretch flex flex-col gap-[14px] items-start overflow-clip px-[22px] py-[26px] relative rounded-[18px] w-full" data-node-id="30:16" data-name="Product card">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#8b939c] text-[12px] tracking-[0.12px] whitespace-nowrap" data-node-id="30:17">
              02
            </p>
            <div className="bg-[#e4f2f2] overflow-clip relative rounded-[12px] shrink-0 size-[42px]" data-node-id="30:18" data-name="icon">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-node-id="71:74" data-name="hugeicons:invoice-01">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHugeiconsInvoice01} />
              </div>
            </div>
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[#062530] text-[16.5px] w-[226px]" data-node-id="30:19">
              Finbloom Invoice Finance
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[#55606b] text-[13.5px] w-[226px]" data-node-id="30:20">
              Unlock cash tied up in verified unpaid business invoices.
            </p>
            <a href="/products" className="[word-break:break-word] block cursor-pointer font-['Inter:Semi_Bold'] font-semibold leading-[0] not-italic relative shrink-0 text-[#2c4e4e] text-[13px] whitespace-nowrap" data-node-id="30:21">
              <p className="leading-[normal] whitespace-pre">{`Learn more  →`}</p>
            </a>
          </div>
          <div className="bg-white content-stretch flex flex-col gap-[14px] items-start overflow-clip px-[22px] py-[26px] relative rounded-[18px] w-full" data-node-id="30:22" data-name="Product card">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#8b939c] text-[12px] tracking-[0.12px] whitespace-nowrap" data-node-id="30:23">
              03
            </p>
            <div className="bg-[#fdf1ec] overflow-clip relative rounded-[12px] shrink-0 size-[42px]" data-node-id="30:24" data-name="icon">
              <div className="absolute left-[9px] overflow-clip size-[24px] top-[9px]" data-node-id="71:76" data-name="mingcute:truck-line">
                <div className="absolute inset-[16.67%_8.33%_0.78%_8.33%]" data-node-id="71:77" data-name="Group">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[#062530] text-[16.5px] w-[226px]" data-node-id="30:25">
              Finbloom Asset Finance
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[#55606b] text-[13.5px] w-[226px]" data-node-id="30:26">
              Acquire vehicles, machinery, solar systems and productive assets.
            </p>
            <a href="/products" className="[word-break:break-word] block cursor-pointer font-['Inter:Semi_Bold'] font-semibold leading-[0] not-italic relative shrink-0 text-[#81320d] text-[13px] whitespace-nowrap" data-node-id="30:27">
              <p className="leading-[normal] whitespace-pre">{`Learn more  →`}</p>
            </a>
          </div>
          <div className="bg-white content-stretch flex flex-col gap-[14px] items-start overflow-clip px-[22px] py-[26px] relative rounded-[18px] w-full" data-node-id="30:28" data-name="Product card">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#8b939c] text-[12px] tracking-[0.12px] whitespace-nowrap" data-node-id="30:29">
              04
            </p>
            <div className="bg-[#fdf6e0] overflow-clip relative rounded-[12px] shrink-0 size-[42px]" data-node-id="30:30" data-name="icon">
              <div className="absolute left-[9px] size-[24px] top-[9px]" data-node-id="71:80" data-name="ph:buildings">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPhBuildings} />
              </div>
            </div>
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[#062530] text-[16.5px] w-[226px]" data-node-id="30:31">
              Finbloom SME Growth Loan
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[#55606b] text-[13.5px] w-[226px]" data-node-id="30:32">
              Working capital for inventory, fulfilment and business expansion.
            </p>
            <a href="/products" className="[word-break:break-word] block cursor-pointer font-['Inter:Semi_Bold'] font-semibold leading-[0] not-italic relative shrink-0 text-[#685216] text-[13px] whitespace-nowrap" data-node-id="30:33">
              <p className="leading-[normal] whitespace-pre">{`Learn more  →`}</p>
            </a>
          </div>
          <div className="bg-white content-stretch flex flex-col gap-[14px] items-start overflow-clip px-[22px] py-[26px] relative rounded-[18px] w-full" data-node-id="230:1788" data-name="Product card">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#8b939c] text-[12px] tracking-[0.12px] whitespace-nowrap" data-node-id="230:1789">
              05
            </p>
            <div className="bg-[#fdf1ec] overflow-clip relative rounded-[12px] shrink-0 size-[42px]" data-node-id="230:1790" data-name="icon">
              <div className="absolute left-[9px] overflow-clip size-[24px] top-[9px]" data-node-id="230:1791" data-name="mingcute:shield-check-line">
                <div className="absolute left-0 size-[24px] top-0" data-node-id="232:2201" data-name="streamline-plump:insurance-hand">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStreamlinePlumpInsuranceHand} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[#062530] text-[16.5px] w-[226px]" data-node-id="230:1793">
              FinSure Loan
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[#55606b] text-[13.5px] w-[226px]" data-node-id="230:1794">
              Insurance-backed lending product that bundles credit life or business interruption cover with each loan.
            </p>
            <a href="/products" className="[word-break:break-word] block cursor-pointer font-['Inter:Semi_Bold'] font-semibold leading-[0] not-italic relative shrink-0 text-[#81320d] text-[13px] whitespace-nowrap" data-node-id="230:1795">
              <p className="leading-[normal] whitespace-pre">{`Learn more  →`}</p>
            </a>
          </div>
          <div className="bg-white content-stretch flex flex-col gap-[14px] items-start overflow-clip px-[22px] py-[26px] relative rounded-[18px] w-full" data-node-id="230:1796" data-name="Product card">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#8b939c] text-[12px] tracking-[0.12px] whitespace-nowrap" data-node-id="230:1797">
              06
            </p>
            <div className="bg-[#e4f2f2] overflow-clip relative rounded-[12px] shrink-0 size-[42px]" data-node-id="230:1798" data-name="icon">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.33px)] overflow-clip size-[24px] top-1/2" data-node-id="230:1799" data-name="hugeicons:lock-01">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[22px] top-[calc(50%+1px)]" data-node-id="232:2203" data-name="streamline:investment-selection">
                  <div className="absolute inset-[3.59%_3.79%_3.58%_3.8%]" data-node-id="232:2204" data-name="Group">
                    <div className="absolute inset-[-2.45%_-2.46%]">
                      <img alt="" className="block max-w-none size-full" src={imgGroup1} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[#062530] text-[16.5px] w-[226px]" data-node-id="230:1801">
              SecureYield Loan
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[#55606b] text-[13.5px] w-[226px]" data-node-id="230:1802">
              Investment-backed loans using fixed-income or equity securities as collateral via API integration.
            </p>
            <a href="/products" className="[word-break:break-word] block cursor-pointer font-['Inter:Semi_Bold'] font-semibold leading-[0] not-italic relative shrink-0 text-[#2c4e4e] text-[13px] whitespace-nowrap" data-node-id="230:1803">
              <p className="leading-[normal] whitespace-pre">{`Learn more  →`}</p>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-[var(--neutral\/surface,white)] content-stretch flex flex-col items-start overflow-clip p-[80px] relative shrink-0 w-full" data-node-id="30:34" data-name="Why Finbloom">
        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-node-id="30:35" data-name="Why head">
          <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold leading-[normal] relative shrink-0 text-[#062530] text-[30px] whitespace-nowrap" data-node-id="30:36">
            Finance with a human perspective.
          </p>
        </div>
        <div className="h-[32px] relative shrink-0 w-[10px]" data-node-id="30:37" data-name="spacer" />
        <div className="content-stretch flex gap-[28px] items-start overflow-clip relative shrink-0 w-full" data-node-id="30:38" data-name="Why grid">
          <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-[360px]" data-node-id="30:39" data-name="Why col">
            <div className="bg-[#e5eff1] content-stretch flex items-center justify-center overflow-clip relative rounded-[11px] shrink-0 size-[38px]" data-node-id="30:40" data-name="badge">
              <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[#034f5b] text-[14px] whitespace-nowrap" data-node-id="30:41">
                01
              </p>
            </div>
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[#062530] text-[17.5px] whitespace-nowrap" data-node-id="30:42">
              Clear from the start
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] not-italic relative shrink-0 text-[#55606b] text-[14px] w-[320px]" data-node-id="30:43">
              Understand your repayment structure, fees and obligations before accepting an offer.
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-[360px]" data-node-id="30:44" data-name="Why col">
            <div className="bg-[#e4f2f2] content-stretch flex items-center justify-center overflow-clip relative rounded-[11px] shrink-0 size-[38px]" data-node-id="30:45" data-name="badge">
              <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[#2c4e4e] text-[14px] whitespace-nowrap" data-node-id="30:46">
                02
              </p>
            </div>
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[#062530] text-[17.5px] whitespace-nowrap" data-node-id="30:47">
              Built around cash flow
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] not-italic relative shrink-0 text-[#55606b] text-[14px] w-[320px]" data-node-id="30:48">
              Facilities aligned with genuine business cycles and identified repayment sources.
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-[360px]" data-node-id="30:49" data-name="Why col">
            <div className="bg-[#fdf1ec] content-stretch flex items-center justify-center overflow-clip relative rounded-[11px] shrink-0 size-[38px]" data-node-id="30:50" data-name="badge">
              <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[#81320d] text-[14px] whitespace-nowrap" data-node-id="30:51">
                03
              </p>
            </div>
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[#062530] text-[17.5px] whitespace-nowrap" data-node-id="30:52">
              Support that listens
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] not-italic relative shrink-0 text-[#55606b] text-[14px] w-[320px]" data-node-id="30:53">
              Practical guidance from application through repayment, not just an automated decision.
            </p>
          </div>
        </div>
      </div>
      <TestimonialsCarousel />
      <div className="bg-[#fdf6e0] content-stretch flex flex-col items-start overflow-clip px-[80px] py-[64px] relative shrink-0 w-full" data-node-id="32:45" data-name="Financial Partners">
        <div className="content-stretch flex flex-col gap-[14px] items-start overflow-clip relative shrink-0 w-[640px]" data-node-id="32:46" data-name="Section head">
          <div className="bg-white content-stretch flex items-start overflow-clip px-[14px] py-[7px] relative rounded-[100px] shrink-0" data-node-id="32:47" data-name="Eyebrow">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#685216] text-[12px] tracking-[0.24px] whitespace-nowrap" data-node-id="32:48">
              FINANCIAL PARTNERS
            </p>
          </div>
          <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold leading-[normal] relative shrink-0 text-[#062530] text-[30px] whitespace-nowrap" data-node-id="32:49">
            Working alongside trusted institutions.
          </p>
        </div>
        <div className="h-[32px] relative shrink-0 w-[10px]" data-node-id="32:50" data-name="spacer" />
        <div className="[word-break:break-word] content-center flex flex-wrap font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold gap-[32px_56px] items-center justify-center leading-[normal] overflow-clip relative shrink-0 text-[#8b939c] text-[15px] tracking-[0.15px] w-full whitespace-nowrap" data-node-id="32:51" data-name="Partners row">
          <img
            src={imgCRCPartner}
            alt="CRC"
            className="relative shrink-0 max-h-[56px] max-w-[180px] object-contain"
            data-node-id="32:52"
          />
          <img
            src={imgLendsqrPartner}
            alt="Lendsqr"
            className="relative shrink-0 max-h-[56px] max-w-[180px] object-contain"
            data-node-id="32:53"
          />
        </div>
      </div>
      <div id="faq" className="bg-[#faf9f6] content-stretch flex flex-col items-start overflow-clip p-[80px] relative shrink-0 w-full scroll-mt-[92px]" data-node-id="84:2" data-name="FAQ">
        <div className="content-stretch flex flex-col gap-[14px] items-start overflow-clip relative shrink-0 w-[640px]" data-node-id="84:3" data-name="FAQ head">
          <div className="bg-[#e5eff1] content-stretch flex items-start overflow-clip px-[14px] py-[7px] relative rounded-[100px] shrink-0" data-node-id="84:4" data-name="Eyebrow">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#034f5b] text-[12px] tracking-[0.24px] whitespace-nowrap" data-node-id="84:5">
              FREQUENTLY ASKED QUESTIONS
            </p>
          </div>
          <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold leading-[normal] relative shrink-0 text-[#062530] text-[30px] whitespace-nowrap" data-node-id="84:6">
            Clear answers before you apply.
          </p>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.45] not-italic relative shrink-0 text-[#55606b] text-[15px] w-[560px]" data-node-id="84:7">
            Review information about eligibility, applications, repayments, security and customer support.
          </p>
        </div>
        <div className="h-[36px] relative shrink-0 w-[10px]" data-node-id="84:8" data-name="spacer" />
        <div className="content-stretch flex gap-[56px] items-start overflow-clip relative shrink-0 w-full" data-node-id="84:9" data-name="FAQ layout">
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[300px]" data-node-id="84:10" data-name="FAQ left">
            <div className="bg-white border border-[#e7e5e1] border-solid content-stretch flex items-center overflow-clip px-[20px] py-[13px] relative rounded-[100px] shrink-0 w-full" data-node-id="84:11" data-name="Search">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#8b939c] text-[14px] whitespace-nowrap" data-node-id="84:12">
                Search questions
              </p>
            </div>
            <div className="relative shrink-0 size-[10px]" data-node-id="84:13" data-name="spacer" />
            <div className="bg-[#e5eff1] content-stretch flex items-start overflow-clip px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="84:14" data-name="cat-btn">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#034f5b] text-[14px] whitespace-nowrap" data-node-id="84:15">
                All questions
              </p>
            </div>
            <div className="content-stretch flex items-start overflow-clip px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="84:16" data-name="cat-btn">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#55606b] text-[14px] whitespace-nowrap" data-node-id="84:17">{`Eligibility & applying`}</p>
            </div>
            <div className="content-stretch flex items-start overflow-clip px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="84:18" data-name="cat-btn">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#55606b] text-[14px] whitespace-nowrap" data-node-id="84:19">
                Repayment
              </p>
            </div>
            <div className="content-stretch flex items-start overflow-clip px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="84:20" data-name="cat-btn">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#55606b] text-[14px] whitespace-nowrap" data-node-id="84:21">{`Security & data`}</p>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="84:22" data-name="FAQ right">
            <div className="[word-break:break-word] border-[#e7e5e1] border-b border-solid content-stretch flex flex-col gap-[12px] items-start not-italic overflow-clip py-[20px] relative shrink-0 w-full" data-node-id="84:23" data-name="faq-item">
              <div className="content-stretch flex items-center justify-between leading-[normal] overflow-clip relative shrink-0 w-full whitespace-nowrap" data-node-id="84:24" data-name="q-row">
                <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#062530] text-[15px]" data-node-id="84:25">
                  Who can apply for financing?
                </p>
                <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[#034f5b] text-[16px]" data-node-id="84:26">
                  −
                </p>
              </div>
              <p className="font-['Inter:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#55606b] text-[13.5px] w-[560px]" data-node-id="84:27">{`Nigerian individuals and registered businesses that meet Finbloom Capital's identity, income, cash-flow and credit-assessment requirements may apply.`}</p>
            </div>
            <div className="border-[#e7e5e1] border-b border-solid content-stretch flex flex-col items-start overflow-clip py-[20px] relative shrink-0 w-full" data-node-id="84:28" data-name="faq-item">
              <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] not-italic overflow-clip relative shrink-0 w-full whitespace-nowrap" data-node-id="84:29" data-name="q-row">
                <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#062530] text-[15px]" data-node-id="84:30">
                  What financing products does Finbloom offer?
                </p>
                <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[#034f5b] text-[16px]" data-node-id="84:31">
                  +
                </p>
              </div>
            </div>
            <div className="border-[#e7e5e1] border-b border-solid content-stretch flex flex-col items-start overflow-clip py-[20px] relative shrink-0 w-full" data-node-id="84:32" data-name="faq-item">
              <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] not-italic overflow-clip relative shrink-0 w-full whitespace-nowrap" data-node-id="84:33" data-name="q-row">
                <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#062530] text-[15px]" data-node-id="84:34">
                  What documents will I need?
                </p>
                <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[#034f5b] text-[16px]" data-node-id="84:35">
                  +
                </p>
              </div>
            </div>
            <div className="border-[#e7e5e1] border-b border-solid content-stretch flex flex-col items-start overflow-clip py-[20px] relative shrink-0 w-full" data-node-id="84:36" data-name="faq-item">
              <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] not-italic overflow-clip relative shrink-0 w-full whitespace-nowrap" data-node-id="84:37" data-name="q-row">
                <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#062530] text-[15px]" data-node-id="84:38">
                  How do I apply?
                </p>
                <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[#034f5b] text-[16px]" data-node-id="84:39">
                  +
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#faf9f6] content-stretch flex flex-col items-start overflow-clip p-[80px] relative shrink-0 w-full" data-node-id="84:40" data-name="Referral">
        <div className="bg-gradient-to-r content-stretch flex from-[var(--warm\/yellow,#f8c535)] items-center justify-between overflow-clip p-[56px] relative rounded-[28px] shadow-[0px_20px_40px_-10px_rgba(0,0,0,0.25)] shrink-0 to-[var(--teal\/accent-dark,#034f5b)] via-[53.271%] via-[var(--warm\/yellow-dark,#685216)] w-full" data-node-id="84:41" data-name="Referral card">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-[420px]" data-node-id="84:42" data-name="Referral text">
            <p className="font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold leading-[normal] relative shrink-0 text-[40px] text-white w-full" data-node-id="84:43">
              Sign up for a loan.
            </p>
            <p className="font-['Plus_Jakarta_Sans:Medium'] font-medium leading-[1.5] relative shrink-0 text-[18px] text-[rgba(255,255,255,0.8)] w-full" data-node-id="84:44">
              Apply for a loan in minutes and get the capital you need to grow your business.
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0" data-node-id="254:1789" data-name="Action container">
            <a className="bg-[var(--warm\/yellow,#f8c535)] content-stretch cursor-pointer flex items-center justify-center px-[28px] py-[14px] relative rounded-[100px] shrink-0" href="https://finbloom-capital-ltd.lsq.app/login" data-node-id="204:18" target="_blank" rel="noopener noreferrer" data-name="Button">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-left text-white whitespace-nowrap" data-node-id="I204:18;204:4">
                Sign up for a loan
              </p>
            </a>
          </div>
        </div>
      </div>
      <div id="contact" className="bg-[#faf9f6] content-stretch flex flex-col items-start overflow-clip pb-[80px] px-[80px] relative shrink-0 w-full scroll-mt-[92px]" data-node-id="84:47" data-name="Quick Contact">
        <div className="bg-white border border-[#e7e5e1] border-solid content-stretch flex gap-[48px] items-start overflow-clip p-[44px] relative rounded-[28px] shrink-0 w-full" data-node-id="84:48" data-name="QC card">
          <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-[460px]" data-node-id="84:49" data-name="QC left">
            <div className="bg-[#e5eff1] content-stretch flex items-start overflow-clip px-[14px] py-[7px] relative rounded-[100px] shrink-0" data-node-id="84:50" data-name="Eyebrow">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#034f5b] text-[12px] tracking-[0.24px] whitespace-nowrap" data-node-id="84:51">
                GET IN TOUCH
              </p>
            </div>
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold leading-[normal] relative shrink-0 text-[#062530] text-[22px] whitespace-nowrap" data-node-id="84:52">
              Still have questions?
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] not-italic relative shrink-0 text-[#55606b] text-[14px] w-[400px]" data-node-id="84:53">
              Send us a message and a member of the Finbloom team will get back to you.
            </p>
            <div className="relative shrink-0 size-[10px]" data-node-id="84:54" data-name="spacer" />
            <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-node-id="84:55" data-name="contact-row">
              <div className="overflow-clip relative rounded-[8px] shrink-0 size-[16px]" data-node-id="84:56" data-name="dot">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[23px] left-[calc(50%+1px)] top-[calc(50%-0.5px)] w-[22px]" data-node-id="86:4" data-name="ic:round-call">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcRoundCall} />
                </div>
              </div>
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#55606b] text-[13.5px] whitespace-nowrap" data-node-id="84:57">
                +234 704 823 2127
              </p>
            </div>
            <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-node-id="84:58" data-name="contact-row">
              <div className="overflow-clip relative rounded-[8px] shrink-0 size-[16px]" data-node-id="84:59" data-name="dot">
                <div className="absolute left-0 size-[16px] top-0" data-node-id="86:6" data-name="material-symbols:mail-outline-rounded">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMaterialSymbolsMailOutlineRounded} />
                </div>
              </div>
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#55606b] text-[13.5px] whitespace-nowrap" data-node-id="84:60">
                info@finbloomcapital.com
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px overflow-clip relative" data-node-id="84:61" data-name="QC right">
            <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-node-id="84:62" data-name="field">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#062530] text-[12.5px] whitespace-nowrap" data-node-id="84:63">
                Full name
              </p>
              <div className="bg-[#faf9f6] border border-[#e7e5e1] border-solid content-stretch flex items-start overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:64" data-name="input">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#8b939c] text-[13.5px] whitespace-nowrap" data-node-id="84:65">
                  Your name
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-node-id="84:66" data-name="field">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#062530] text-[12.5px] whitespace-nowrap" data-node-id="84:67">
                Email address
              </p>
              <div className="bg-[#faf9f6] border border-[#e7e5e1] border-solid content-stretch flex items-start overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:68" data-name="input">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#8b939c] text-[13.5px] whitespace-nowrap" data-node-id="84:69">
                  you@email.com
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-node-id="84:70" data-name="field">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#062530] text-[12.5px] whitespace-nowrap" data-node-id="84:71">
                Message
              </p>
              <div className="bg-[#faf9f6] border border-[#e7e5e1] border-solid content-stretch flex items-start overflow-clip px-[16px] py-[12px] relative rounded-[10px] shrink-0 w-full" data-node-id="84:72" data-name="input">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#8b939c] text-[13.5px] whitespace-nowrap" data-node-id="84:73">
                  How can we help?
                </p>
              </div>
            </div>
            <div className="bg-[#046675] content-stretch flex items-center justify-center px-[28px] py-[14px] relative rounded-[100px] shrink-0" data-node-id="204:20" data-name="Button">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[14.5px] text-white whitespace-nowrap" data-node-id="I204:20;204:6">
                Send message
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#034f5b] content-stretch flex flex-col h-[481px] items-start overflow-clip pt-[64px] px-[80px] relative shrink-0 w-[1440px]" data-node-id="204:62" data-name="Footer">
        <div className="absolute h-[236px] left-0 top-[241px] w-[1440px]" data-node-id="I204:62;90:2" data-name="Finbloom Logo Background">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFinbloomLogoBackground} />
        </div>
        <div className="border-[rgba(255,255,255,0.12)] border-b border-solid content-stretch flex items-center justify-between overflow-clip pb-[44px] relative shrink-0 w-full" data-node-id="I204:62;85:3" data-name="CTA row">
          <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold leading-[normal] relative shrink-0 text-[22px] text-white w-[480px]" data-node-id="I204:62;85:4">
            Ready to grow your business with flexible financing?
          </p>
          <a className="bg-[#046675] content-stretch cursor-pointer flex items-center justify-center px-[28px] py-[14px] relative rounded-[100px] shrink-0" href="https://finbloom-capital-ltd.lsq.app/login" data-node-id="I204:62;204:22" target="_blank" rel="noopener noreferrer" data-name="Button">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[14.5px] text-left text-white whitespace-nowrap" data-node-id="I204:62;204:22;204:6">
              Apply for financing
            </p>
          </a>
        </div>
        <div className="h-[44px] relative shrink-0 w-[10px]" data-node-id="I204:62;85:7" data-name="spacer" />
        <div className="content-stretch flex items-start justify-between overflow-clip pb-[44px] relative shrink-0 w-full" data-node-id="I204:62;85:8" data-name="Footer top">
          <div className="content-stretch flex flex-col gap-[14px] items-start overflow-clip relative shrink-0 w-[320px]" data-node-id="I204:62;85:9" data-name="Footer brand">
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold leading-[normal] relative shrink-0 text-[16px] text-white whitespace-nowrap" data-node-id="I204:62;85:10">
              Finbloom Capital
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[13.5px] text-[rgba(255,255,255,0.6)] w-[280px]" data-node-id="I204:62;85:11">
              Flexible finance for stronger businesses and brighter possibilities.
            </p>
            <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-node-id="I204:62;85:12" data-name="Social row">
              <div className="border border-solid border-white content-stretch flex items-center justify-center overflow-clip relative rounded-[19px] shrink-0 size-[38px]" data-node-id="I204:62;85:13" data-name="social-icon">
                <div className="overflow-clip relative shrink-0 size-[18px]" data-node-id="I204:62;86:8" data-name="prime:twitter">
                  <div className="absolute contents inset-0" data-node-id="I204:62;86:9" data-name="Group">
                    <div className="absolute contents inset-0" data-node-id="I204:62;86:14" data-name="Clip path group">
                      <div className="absolute inset-[4.69%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-0.843px] mask-size-[18px_18px]" data-node-id="I204:62;86:10" style={{ maskImage: `url("${imgGroup2}")` }} data-name="Group">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup3} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-solid border-white content-stretch flex items-center justify-center overflow-clip relative rounded-[19px] shrink-0 size-[38px]" data-node-id="I204:62;85:14" data-name="social-icon">
                <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I204:62;86:15" data-name="mingcute:facebook-line">
                  <div className="absolute inset-[8.33%_8.33%_0.78%_8.33%]" data-node-id="I204:62;86:16" data-name="Group">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup4} />
                  </div>
                </div>
              </div>
              <div className="border border-solid border-white content-stretch flex items-center justify-center overflow-clip relative rounded-[19px] shrink-0 size-[38px]" data-node-id="I204:62;85:15" data-name="social-icon">
                <div className="relative shrink-0 size-[24px]" data-node-id="I204:62;86:19" data-name="mdi:instagram">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMdiInstagram} />
                </div>
              </div>
              <div className="border border-solid border-white content-stretch flex items-center justify-center overflow-clip relative rounded-[19px] shrink-0 size-[38px]" data-node-id="I204:62;85:16" data-name="social-icon">
                <div className="relative shrink-0 size-[24px]" data-node-id="I204:62;86:21" data-name="mdi:linkedin">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMdiLinkedin} />
                </div>
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex gap-[56px] items-start not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="I204:62;85:17" data-name="Footer links">
            <div className="content-stretch flex flex-col gap-[11px] items-start leading-[normal] overflow-clip relative shrink-0" data-node-id="I204:62;85:18" data-name="footer-col">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[12px] text-[rgba(255,255,255,0.4)] tracking-[0.12px]" data-node-id="I204:62;85:19">
                OUR PRODUCTS
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13.5px] text-[rgba(255,255,255,0.75)]" data-node-id="I204:62;85:20">
                Cashflow Flex
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13.5px] text-[rgba(255,255,255,0.75)]" data-node-id="I204:62;85:21">
                Invoice Finance
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13.5px] text-[rgba(255,255,255,0.75)]" data-node-id="I204:62;85:22">
                Asset Finance
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13.5px] text-[rgba(255,255,255,0.75)]" data-node-id="I204:62;85:23">
                SME Growth Loan
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[11px] items-start leading-[normal] overflow-clip relative shrink-0" data-node-id="I204:62;85:24" data-name="footer-col">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[12px] text-[rgba(255,255,255,0.4)] tracking-[0.12px]" data-node-id="I204:62;85:25">
                COMPANY
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13.5px] text-[rgba(255,255,255,0.75)]" data-node-id="I204:62;85:26">
                About
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13.5px] text-[rgba(255,255,255,0.75)]" data-node-id="I204:62;85:27">
                FAQ
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13.5px] text-[rgba(255,255,255,0.75)]" data-node-id="I204:62;85:28">
                Contact
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13.5px] text-[rgba(255,255,255,0.75)]" data-node-id="I204:62;85:29">
                Apply
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[11px] items-start overflow-clip relative shrink-0" data-node-id="I204:62;85:30" data-name="footer-col">
              <p className="font-['Inter:Bold'] font-bold leading-[normal] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.4)] tracking-[0.12px]" data-node-id="I204:62;85:31">
                CONTACT US
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[normal] relative shrink-0 text-[13.5px] text-[rgba(255,255,255,0.75)]" data-node-id="I204:62;85:32">
                29, Ogayemi Close, Yaba
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[normal] relative shrink-0 text-[13.5px] text-[rgba(255,255,255,0.75)]" data-node-id="I204:62;85:33">
                info@finbloomcapital.com
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[normal] relative shrink-0 text-[13.5px] text-[rgba(255,255,255,0.75)]" data-node-id="I204:62;85:34">
                +234 704 823 2127
              </p>
              <div className="content-stretch cursor-pointer flex font-['Inter:Regular'] font-normal gap-[11px] items-start leading-[0] relative shrink-0 text-[13.5px] text-[rgba(255,255,255,0.75)]" data-node-id="I204:62;203:613" data-name="Privacy & Terms">
                <a className="block relative shrink-0" data-node-id="I204:62;203:605">
                  <p className="leading-[normal]">Privacy</p>
                </a>
                <a className="block relative shrink-0" data-node-id="I204:62;203:610">
                  <p className="leading-[normal]">Terms</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-[rgba(255,255,255,0.12)] border-solid border-t content-stretch flex items-center justify-between overflow-clip py-[22px] relative shrink-0 w-full" data-node-id="I204:62;85:35" data-name="Bottom bar">
          <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="I204:62;85:36" data-name="badge">
            <div className="bg-[#69babb] relative rounded-[7px] shrink-0 size-[14px]" data-node-id="I204:62;85:37" data-name="dot" />
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.6)] whitespace-nowrap" data-node-id="I204:62;85:38">
              RC 7631703, Licensed Money Lender, Lagos State
            </p>
          </div>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.45)] whitespace-pre" data-node-id="I204:62;85:39">{`© 2026 Finbloom Capital Ltd. All rights reserved.  Privacy   Terms`}</p>
        </div>
      </div>
    </div>
  );
}
