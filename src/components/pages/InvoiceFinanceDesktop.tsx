import { Link } from 'react-router-dom';

const imgFinbloomLogoBackground = "https://www.figma.com/api/mcp/asset/a5d892d0-d1fc-4190-9e55-6adbdb06ea13";
const imgGroup = "https://www.figma.com/api/mcp/asset/cb11d9f6-2bf6-4a5f-87ba-a6d761e19e12";
const imgGroup1 = "https://www.figma.com/api/mcp/asset/2bdd7e1f-b870-4751-a9c0-53aefd1495db";
const imgGroup2 = "https://www.figma.com/api/mcp/asset/f41efecc-94e4-4ddf-915b-f778828689de";
const imgMdiInstagram = "https://www.figma.com/api/mcp/asset/408fffea-6257-474e-8c1c-3f3740353bd1";
const imgMdiLinkedin = "https://www.figma.com/api/mcp/asset/94b86b8c-3492-4188-b1f8-123abfb93e3c";
const imgFinbloomLogo1 = "https://www.figma.com/api/mcp/asset/352f18b6-cbca-45ef-b2c3-353c3776916b";
const imgTablerArrowDown = "/img/tabler_arrow-down.svg";
const imgGrid = "/img/Invoice Finance illustration.svg";
const imgFileText = "https://www.figma.com/api/mcp/asset/a4f4efeb-7dc4-46fb-850a-29d54a1228c1";
const imgCreditCard = "https://www.figma.com/api/mcp/asset/cc744e24-8599-4334-9d53-33d709c50355";
const imgArrowRight = "https://www.figma.com/api/mcp/asset/647f3e2b-9055-45f1-b571-dc9be367a4fc";
const imgZap = "https://www.figma.com/api/mcp/asset/91f3bace-a0ab-4b2a-9687-8caeaecf38d7";
const imgRefreshCw = "https://www.figma.com/api/mcp/asset/7aef163f-c83f-404b-bd97-eb1878ed71ed";
const imgShieldCheck = "https://www.figma.com/api/mcp/asset/eb85d68d-428a-4156-96c3-1b636c9744c0";
const imgMaterialSymbolsCheck = "https://www.figma.com/api/mcp/asset/d67b3488-7a72-4816-8a7c-29cc949a3dc8";

function Footer({ className }: { className?: string }) {
  return (
    <div className={className || "bg-[#034f5b] content-stretch flex flex-col h-[481px] items-start overflow-clip pt-[64px] px-[80px] relative w-[1440px]"} data-node-id="204:61" data-name="Footer">
      <div className="absolute h-[236px] left-0 top-[241px] w-[1440px]" data-node-id="90:2" data-name="Finbloom Logo Background">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFinbloomLogoBackground} />
      </div>
      <div className="border-[rgba(255,255,255,0.12)] border-b border-solid content-stretch flex items-center justify-between overflow-clip pb-[44px] relative shrink-0 w-full" data-node-id="85:3" data-name="CTA row">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold leading-[normal] relative shrink-0 text-[22px] text-white w-[480px]" data-node-id="85:4">
          Ready to grow your business with flexible financing?
        </p>
        <div className="bg-[#046675] content-stretch flex items-center justify-center px-[28px] py-[14px] relative rounded-[100px] shrink-0" data-node-id="204:22" data-name="Button">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[14.5px] text-white whitespace-nowrap" data-node-id="I204:22;204:6">
            Apply for financing
          </p>
        </div>
      </div>
      <div className="h-[44px] relative shrink-0 w-[10px]" data-node-id="85:7" data-name="spacer" />
      <div className="content-stretch flex items-start justify-between overflow-clip pb-[44px] relative shrink-0 w-full" data-node-id="85:8" data-name="Footer top">
        <div className="content-stretch flex flex-col gap-[14px] items-start overflow-clip relative shrink-0 w-[320px]" data-node-id="85:9" data-name="Footer brand">
          <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold leading-[normal] relative shrink-0 text-[16px] text-white whitespace-nowrap" data-node-id="85:10">
            Finbloom Capital
          </p>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[13.5px] text-[rgba(255,255,255,0.6)] w-[280px]" data-node-id="85:11">
            Flexible finance for stronger businesses and brighter possibilities.
          </p>
          <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-node-id="85:12" data-name="Social row">
            <div className="border border-solid border-white content-stretch flex items-center justify-center overflow-clip relative rounded-[19px] shrink-0 size-[38px]" data-node-id="85:13" data-name="social-icon">
              <div className="overflow-clip relative shrink-0 size-[18px]" data-node-id="86:8" data-name="prime:twitter">
                <div className="absolute contents inset-0" data-node-id="86:9" data-name="Group">
                  <div className="absolute contents inset-0" data-node-id="86:14" data-name="Clip path group">
                    <div className="absolute inset-[4.69%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-0.843px] mask-size-[18px_18px]" data-node-id="86:10" style={{ maskImage: `url("${imgGroup}")` }} data-name="Group">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-solid border-white content-stretch flex items-center justify-center overflow-clip relative rounded-[19px] shrink-0 size-[38px]" data-node-id="85:14" data-name="social-icon">
              <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="86:15" data-name="mingcute:facebook-line">
                <div className="absolute inset-[8.33%_8.33%_0.78%_8.33%]" data-node-id="86:16" data-name="Group">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup2} />
                </div>
              </div>
            </div>
            <div className="border border-solid border-white content-stretch flex items-center justify-center overflow-clip relative rounded-[19px] shrink-0 size-[38px]" data-node-id="85:15" data-name="social-icon">
              <div className="relative shrink-0 size-[24px]" data-node-id="86:19" data-name="mdi:instagram">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMdiInstagram} />
              </div>
            </div>
            <div className="border border-solid border-white content-stretch flex items-center justify-center overflow-clip relative rounded-[19px] shrink-0 size-[38px]" data-node-id="85:16" data-name="social-icon">
              <div className="relative shrink-0 size-[24px]" data-node-id="86:21" data-name="mdi:linkedin">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMdiLinkedin} />
              </div>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex gap-[56px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="85:17" data-name="Footer links">
          <div className="content-stretch flex flex-col gap-[11px] items-start overflow-clip relative shrink-0" data-node-id="85:18" data-name="footer-col">
            <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[12px] text-[rgba(255,255,255,0.4)] tracking-[0.12px]" data-node-id="85:19">
              OUR PRODUCTS
            </p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13.5px] text-[rgba(255,255,255,0.75)]" data-node-id="85:20">
              Cashflow Flex
            </p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13.5px] text-[rgba(255,255,255,0.75)]" data-node-id="85:21">
              Invoice Finance
            </p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13.5px] text-[rgba(255,255,255,0.75)]" data-node-id="85:22">
              Asset Finance
            </p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13.5px] text-[rgba(255,255,255,0.75)]" data-node-id="85:23">
              SME Growth Loan
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[11px] items-start overflow-clip relative shrink-0" data-node-id="85:24" data-name="footer-col">
            <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[12px] text-[rgba(255,255,255,0.4)] tracking-[0.12px]" data-node-id="85:25">
              COMPANY
            </p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13.5px] text-[rgba(255,255,255,0.75)]" data-node-id="85:26">
              About
            </p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13.5px] text-[rgba(255,255,255,0.75)]" data-node-id="85:27">
              FAQ
            </p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13.5px] text-[rgba(255,255,255,0.75)]" data-node-id="85:28">
              Contact
            </p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13.5px] text-[rgba(255,255,255,0.75)]" data-node-id="85:29">
              Apply
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[11px] items-start overflow-clip relative shrink-0" data-node-id="85:30" data-name="footer-col">
            <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[12px] text-[rgba(255,255,255,0.4)] tracking-[0.12px]" data-node-id="85:31">
              CONTACT US
            </p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13.5px] text-[rgba(255,255,255,0.75)]" data-node-id="85:32">
              29, Ogayemi Close, Yaba
            </p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13.5px] text-[rgba(255,255,255,0.75)]" data-node-id="85:33">
              info@finbloomcapital.com
            </p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13.5px] text-[rgba(255,255,255,0.75)]" data-node-id="85:34">
              +234 814 323 3008
            </p>
            <div className="content-stretch flex font-['Inter:Regular'] font-normal gap-[11px] items-start relative shrink-0 text-[13.5px] text-[rgba(255,255,255,0.75)]" data-node-id="203:613" data-name="Privacy & Terms">
              <p className="relative shrink-0" data-node-id="203:605">
                Privacy
              </p>
              <p className="relative shrink-0" data-node-id="203:610">
                Terms
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-[rgba(255,255,255,0.12)] border-solid border-t content-stretch flex items-center justify-between overflow-clip py-[22px] relative shrink-0 w-full" data-node-id="85:35" data-name="Bottom bar">
        <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="85:36" data-name="badge">
          <div className="bg-[#69babb] relative rounded-[7px] shrink-0 size-[14px]" data-node-id="85:37" data-name="dot" />
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.6)] whitespace-nowrap" data-node-id="85:38">
            RC 7631703, Licensed Money Lender, Lagos State
          </p>
        </div>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.45)] whitespace-pre" data-node-id="85:39">{`© 2026 Finbloom Capital Ltd. All rights reserved.  Privacy   Terms`}</p>
      </div>
    </div>
  );
}

function Header({ className }: { className?: string }) {
  return (
    <div className={className || "bg-[#faf9f6] border-[#e7e5e1] border-b border-solid content-stretch flex flex-col h-[85px] items-start overflow-clip px-[80px] py-[20px] relative w-[1440px]"} data-node-id="204:24" data-name="Header">
      <div className="content-stretch flex h-[55px] items-center justify-between overflow-clip relative shrink-0 w-[1162px]" data-node-id="29:5" data-name="Header row">
        <div className="h-[35px] relative shrink-0 w-[126px]" data-node-id="59:41" data-name="Finbloom_logo 1">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFinbloomLogo1} />
        </div>
        <div className="[word-break:break-word] content-stretch flex font-['Inter:Medium'] font-medium gap-[36px] items-center leading-[normal] not-italic overflow-clip relative shrink-0 text-[#55606b] text-[14.5px] whitespace-nowrap" data-node-id="29:9" data-name="Nav links">
          <p className="relative shrink-0" data-node-id="29:10">
            Products
          </p>
          <p className="relative shrink-0" data-node-id="29:11">
            About
          </p>
          <p className="relative shrink-0" data-node-id="54:30">
            Learn
          </p>
          <p className="relative shrink-0" data-node-id="203:512">
            Contact
          </p>
          <p className="relative shrink-0" data-node-id="29:12">
            FAQs
          </p>
        </div>
        <div className="content-stretch flex gap-[20px] items-center overflow-clip relative shrink-0" data-node-id="29:13" data-name="Header CTA">
          <div className="bg-[var(--teal\/accent-dark,#034f5b)] content-stretch flex items-center justify-center px-[28px] py-[14px] relative rounded-[100px] shrink-0" data-node-id="204:14" data-name="Button">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[14.5px] text-white whitespace-nowrap" data-node-id="I204:14;204:4">
              Apply now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function InvoiceFinanceDesktop() {
  return (
    <div className="bg-[#faf9f6] content-stretch flex flex-col items-start relative size-full" data-node-id="165:453" data-name="Invoice Finance - Desktop">

      <div className="bg-[#faf9f6] content-stretch flex flex-col items-start overflow-clip md:px-[80px] px-[20px] py-[96px] relative shrink-0 w-full" data-node-id="165:467" data-name="Hero">
        <div className="content-stretch flex md:flex-row flex-col gap-[48px] items-center overflow-clip relative shrink-0 w-full" data-node-id="165:468" data-name="Hero grid">
          <div className="content-stretch flex flex-col gap-[22px] items-start overflow-clip relative shrink-0 md:w-[520px] w-full" data-node-id="165:469" data-name="left">
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#8b939c] text-[13px] whitespace-nowrap" data-node-id="165:470">{`Home > Products > Invoice Finance`}</p>
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold leading-[1.08] min-w-full relative shrink-0 text-[#062530] md:text-[52px] text-[36px] w-[min-content]" data-node-id="165:471">
              Turn unpaid invoices into working capital.
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#55606b] text-[17px] w-[min-content]" data-node-id="165:472">
              If your business regularly waits 30, 60 or 90 days to get paid, draw against verified receivables instead.
            </p>
            <a href="#how-it-works" className="bg-[#046675] content-stretch flex gap-[8px] items-center overflow-clip px-[26px] py-[14px] relative rounded-[100px] shrink-0 w-full md:w-auto justify-center" data-node-id="187:5" data-name="apply-btn">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap" data-node-id="187:6">
                Read more
              </p>
              <div className="relative shrink-0 size-[18px]" data-node-id="187:7" data-name="tabler:arrow-down">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTablerArrowDown} />
              </div>
            </a>
          </div>
          <div className="bg-[#062530] content-stretch flex flex-col md:h-[381px] h-[300px] items-center justify-center overflow-clip relative rounded-[28px] shadow-[0px_12px_32px_0px_rgba(20,23,28,0.14)] shrink-0 md:w-[500px] w-full" data-node-id="165:475" data-name="Invoice Finance illustration">
            <img alt="" className="block w-full h-full object-cover" src={imgGrid} />
          </div>
        </div>
      </div>
      <div id="how-it-works" className="bg-[#faf9f6] content-stretch flex flex-col gap-[32px] items-start overflow-clip pb-[60px] md:px-[80px] px-[20px] relative shrink-0 w-full scroll-mt-24" data-node-id="165:490" data-name="Body">
        <div className="content-stretch flex md:flex-row flex-col gap-[56px] items-start overflow-clip relative shrink-0 w-full" data-node-id="165:491" data-name="body grid">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px overflow-clip relative" data-node-id="165:492" data-name="body left">
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[#062530] text-[18px] whitespace-nowrap" data-node-id="165:493">
              How it works
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.55] not-italic relative shrink-0 text-[#55606b] text-[14px] md:w-[560px] w-full" data-node-id="165:494">
              Finbloom advances a portion of the value of your verified, unpaid invoices. When your customer settles, the facility is repaid and the balance released to you.
            </p>
            <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip relative shrink-0 w-full" data-node-id="191:11" data-name="steps-list">
              <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="191:12" data-name="step-1">
                <div className="bg-[#062530] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[16px] shrink-0 size-[32px]" data-node-id="191:13" data-name="step-number">
                  <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="191:14">
                    1
                  </p>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px overflow-clip relative" data-node-id="191:15" data-name="step-content">
                  <p className="font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[#062530] text-[16px] whitespace-nowrap" data-node-id="191:16">
                    Connect your accounts
                  </p>
                  <p className="font-['Inter:Regular'] font-normal leading-[1.55] min-w-full not-italic relative shrink-0 text-[#55606b] text-[14px] w-[min-content]" data-node-id="191:17">
                    Link your invoicing platform in minutes. We sync your outstanding receivables automatically — no manual uploads required.
                  </p>
                </div>
              </div>
              <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="191:18" data-name="step-2">
                <div className="bg-[#062530] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[16px] shrink-0 size-[32px]" data-node-id="191:19" data-name="step-number">
                  <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="191:20">
                    2
                  </p>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px overflow-clip relative" data-node-id="191:21" data-name="step-content">
                  <p className="font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[#062530] text-[16px] whitespace-nowrap" data-node-id="191:22">
                    Get funded fast
                  </p>
                  <p className="font-['Inter:Regular'] font-normal leading-[1.55] min-w-full not-italic relative shrink-0 text-[#55606b] text-[14px] w-[min-content]" data-node-id="191:23">
                    Choose which invoices to advance and receive up to 90% of their value within 24 hours, deposited directly to your bank account.
                  </p>
                </div>
              </div>
              <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="191:24" data-name="step-3">
                <div className="bg-[#062530] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[16px] shrink-0 size-[32px]" data-node-id="191:25" data-name="step-number">
                  <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="191:26">
                    3
                  </p>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px overflow-clip relative" data-node-id="191:27" data-name="step-content">
                  <p className="font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[#062530] text-[16px] whitespace-nowrap" data-node-id="191:28">
                    Repay when your customer pays
                  </p>
                  <p className="font-['Inter:Regular'] font-normal leading-[1.55] min-w-full not-italic relative shrink-0 text-[#55606b] text-[14px] w-[min-content]" data-node-id="191:29">
                    When your customer settles the invoice, we collect the advanced amount plus a small fee. The remaining balance is released to you instantly.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] bg-white border border-[#e7e5e1] border-solid content-stretch flex flex-col gap-[10px] items-start leading-[normal] not-italic overflow-clip p-[24px] relative rounded-[16px] shrink-0 md:w-[360px] w-full whitespace-nowrap" data-node-id="165:495" data-name="docs">
            <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[#8b939c] text-[11.5px] tracking-[0.115px]" data-node-id="165:496">{`DOCUMENTS YOU'LL NEED`}</p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#55606b] text-[13px]" data-node-id="165:497">
              Copies of the unpaid invoices
            </p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#55606b] text-[13px]" data-node-id="165:498">
              Underlying contracts or purchase orders
            </p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#55606b] text-[13px]" data-node-id="165:499">
              CAC documents and business registration
            </p>
          </div>
        </div>
        <a href="https://finbloom-capital-ltd.lsq.app/" target="_blank" rel="noopener noreferrer" className="bg-[#046675] content-stretch flex items-center overflow-clip px-[26px] py-[14px] relative rounded-[100px] shrink-0 w-full md:w-auto text-center justify-center" data-node-id="187:30" data-name="apply-btn">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="187:31">
            Apply for this product
          </p>
        </a>
      </div>
      <div className="bg-[#faf9f6] content-stretch flex flex-col items-start overflow-clip pb-[80px] md:px-[80px] px-[20px] relative shrink-0 w-full" data-node-id="165:500" data-name="Related">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[#062530] text-[18px] whitespace-nowrap" data-node-id="165:501">
          Explore other products
        </p>
        <div className="h-[20px] relative shrink-0 w-[10px]" data-node-id="165:502" data-name="Frame" />
        <div className="content-stretch flex md:flex-row flex-col gap-[18px] items-start relative shrink-0 w-full" data-node-id="165:503" data-name="rel row">
          <Link to="/products/cashflow-flex" className="bg-white border border-[#e7e5e1] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[18px] py-[20px] relative rounded-[14px] hover:bg-gray-50 transition w-full" data-node-id="165:504" data-name="rel-card">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#062530] text-[13.5px] whitespace-nowrap" data-node-id="165:505">
              Cashflow Flex
            </p>
          </Link>
          <Link to="/asset-finance-desktop" className="bg-white border border-[#e7e5e1] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[18px] py-[20px] relative rounded-[14px] hover:bg-gray-50 transition w-full" data-node-id="165:506" data-name="rel-card">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#062530] text-[13.5px] whitespace-nowrap" data-node-id="165:507">
              Asset Finance
            </p>
          </Link>
          <Link to="/sme-growth-loan-desktop" className="bg-white border border-[#e7e5e1] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[18px] py-[20px] relative rounded-[14px] hover:bg-gray-50 transition w-full" data-node-id="165:508" data-name="rel-card">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#062530] text-[13.5px] whitespace-nowrap" data-node-id="165:509">
              SME Growth Loan
            </p>
          </Link>
          <Link to="/finsure-loan-desktop" className="bg-white border border-[#e7e5e1] border-solid content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip px-[18px] py-[20px] relative rounded-[14px] hover:bg-gray-50 transition w-full" data-node-id="224:1535" data-name="rel-card">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#062530] text-[13.5px] whitespace-nowrap" data-node-id="224:1536">
              FinSure Loan
            </p>
          </Link>
          <Link to="/secure-yield-loan-desktop" className="bg-white border border-[#e7e5e1] border-solid content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip px-[18px] py-[20px] relative rounded-[14px] hover:bg-gray-50 transition w-full" data-node-id="224:1537" data-name="rel-card">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#062530] text-[13.5px] whitespace-nowrap" data-node-id="224:1538">
              SecureYield Loan
            </p>
          </Link>
        </div>
      </div>

    </div>
  );
}
