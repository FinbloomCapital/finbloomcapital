const imgFinbloomLogo1 = "https://www.figma.com/api/mcp/asset/96245253-4abe-4d5c-8890-02b02c420db2";
const imgTablerArrowDown = "https://www.figma.com/api/mcp/asset/fe48e725-c30f-4328-b5d6-bf93e5bfa9b1";
const imgGrid = "https://www.figma.com/api/mcp/asset/2592abc0-47fa-4eb6-835f-c627c9747b41";
const imgCheck = "https://www.figma.com/api/mcp/asset/3a763a7b-8267-4537-a6c6-410b5b09063c";
const imgShieldCheck = "https://www.figma.com/api/mcp/asset/7f425470-ae91-4033-b0bd-2f69b98554f1";
const imgFinbloomLogoBackground = "https://www.figma.com/api/mcp/asset/8028082a-b90b-4b8c-909f-5a6512693ba5";
const imgGroup = "https://www.figma.com/api/mcp/asset/cfe54adb-98d1-44a8-8adf-4fb0d1618724";
const imgGroup1 = "https://www.figma.com/api/mcp/asset/9b52d229-c0b0-45e7-b89e-c737e8dffa7c";
const imgGroup2 = "https://www.figma.com/api/mcp/asset/464891fa-8a5b-4c1b-a7e8-33fa5baa5a45";
const imgMdiInstagram = "https://www.figma.com/api/mcp/asset/f858ebfa-593a-421e-9be2-89846ed86a2a";
const imgMdiLinkedin = "https://www.figma.com/api/mcp/asset/538bbaf4-894f-4e6d-88a9-274dad2d53a9";

function Header({ className }: { className?: string }) {
  return (
    <div className={className || "bg-[#faf9f6] border-[#e7e5e1] border-b border-solid content-stretch flex flex-col h-[85px] items-start overflow-clip px-[80px] py-[20px] relative w-[1440px]"} data-node-id="204:24" data-name="Header">
      <div className="content-stretch flex h-[55px] items-center justify-between overflow-clip relative shrink-0 w-[1162px]" data-node-id="29:5" data-name="Header row">
        <div className="h-[35px] relative shrink-0 w-[126px]" data-node-id="59:41" data-name="Finbloom_logo 1">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFinbloomLogo1} />
        </div>
        <div className="[word-break:break-word] content-stretch flex font-['Inter:Medium'] font-medium gap-[36px] items-center leading-[normal] not-italic overflow-clip relative shrink-0 text-[#55606b] text-[14.5px] whitespace-nowrap" data-node-id="29:9" data-name="Nav links">
          <p className="relative shrink-0" data-node-id="29:10">Products</p>
          <p className="relative shrink-0" data-node-id="29:11">About</p>
          <p className="relative shrink-0" data-node-id="54:30">Learn</p>
          <p className="relative shrink-0" data-node-id="203:512">Contact</p>
          <p className="relative shrink-0" data-node-id="29:12">FAQs</p>
        </div>
        <div className="content-stretch flex gap-[20px] items-center overflow-clip relative shrink-0" data-node-id="29:13" data-name="Header CTA">
          <div className="bg-[var(--teal\/accent-dark,#034f5b)] content-stretch flex items-center justify-center px-[28px] py-[14px] relative rounded-[100px] shrink-0" data-node-id="204:14" data-name="Button">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[14.5px] text-white whitespace-nowrap" data-node-id="I204:14;204:4">Apply now</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SmeGrowthLoanDesktop() {
  return (
    <div className="bg-[#faf9f6] content-stretch flex flex-col items-start relative size-full" data-node-id="166:2" data-name="SME Growth Loan - Desktop">

      <div className="bg-[#faf9f6] content-stretch flex flex-col items-start overflow-clip md:px-[80px] px-[20px] py-[96px] relative shrink-0 w-full" data-node-id="166:16" data-name="Hero">
        <div className="content-stretch flex gap-[64px] items-center overflow-clip relative shrink-0 w-full" data-node-id="166:17" data-name="Hero grid">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-px overflow-clip relative" data-node-id="166:18" data-name="left">
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold leading-[1.08] min-w-full relative shrink-0 text-[#062530] text-[52px] w-[min-content]" data-node-id="166:20">
              Working capital sized to your growth plans.
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] not-italic relative shrink-0 text-[#55606b] text-[17px] w-[520px]" data-node-id="166:21">
              Inventory, fulfilment, staffing or a new location, working capital sized to your growth plans.
            </p>
            <div className="bg-[#046675] content-stretch flex gap-[8px] items-center overflow-clip px-[26px] py-[14px] relative rounded-[100px] shrink-0 w-full md:w-auto" data-node-id="187:25" data-name="apply-btn">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap" data-node-id="187:26">Check eligibility</p>
              <div className="relative shrink-0 size-[18px]" data-node-id="187:27" data-name="tabler:arrow-down"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTablerArrowDown} /></div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-[520px]" data-node-id="166:24" data-name="Hero right">
            <div className="bg-[#062530] content-stretch flex flex-col h-[420px] items-start overflow-clip relative rounded-[28px] shadow-[0px_12px_32px_0px_rgba(20,23,28,0.14)] shrink-0 w-full" data-node-id="190:14" data-name="Working capital dashboard illustration">
              <div className="absolute h-[420px] left-0 top-0 w-[520px]" data-node-id="190:15" data-name="Grid"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGrid} /></div>
              <div className="absolute bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] border-solid content-stretch flex flex-col gap-[12px] h-[160px] items-start left-[32px] overflow-clip px-[16px] py-[14px] rounded-[16px] top-[240px] w-[456px]" data-node-id="190:61" data-name="bar-chart">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="190:62" data-name="chart-header">
                  <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.8)] whitespace-nowrap" data-node-id="190:63">Cash flow forecast</p>
                  <div className="bg-[#e5eff1] content-stretch flex items-center px-[10px] py-[6px] relative rounded-[100px] shrink-0" data-node-id="190:64" data-name="chip">
                    <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#046675] text-[11px] whitespace-nowrap" data-node-id="190:65">+12%</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-end min-h-px relative w-full" data-node-id="190:66" data-name="bars">
                  <div className="bg-gradient-to-b from-[#046675] h-[44px] relative rounded-[5px] shrink-0 to-[#07bfdb] to-[90.91%] w-[40px]" data-node-id="190:67" data-name="Rectangle" />
                  <div className="bg-gradient-to-b from-[#046675] h-[68px] relative rounded-[5px] shrink-0 to-[#07bfdb] to-[90.91%] w-[40px]" data-node-id="190:68" data-name="Rectangle" />
                  <div className="bg-gradient-to-b from-[#046675] h-[52px] relative rounded-[5px] shrink-0 to-[#07bfdb] to-[90.91%] w-[40px]" data-node-id="190:69" data-name="Rectangle" />
                  <div className="bg-gradient-to-b from-[#046675] h-[84px] relative rounded-[5px] shrink-0 to-[#07bfdb] to-[90.91%] w-[40px]" data-node-id="190:70" data-name="Rectangle" />
                  <div className="bg-gradient-to-b from-[#046675] h-[62px] relative rounded-[5px] shrink-0 to-[#07bfdb] to-[90.91%] w-[40px]" data-node-id="190:71" data-name="Rectangle" />
                  <div className="bg-gradient-to-b from-[#046675] h-[96px] relative rounded-[5px] shrink-0 to-[#07bfdb] to-[90.91%] w-[40px]" data-node-id="190:72" data-name="Rectangle" />
                  <div className="bg-gradient-to-b from-[#046675] h-[74px] relative rounded-[5px] shrink-0 to-[#07bfdb] to-[90.91%] w-[40px]" data-node-id="190:73" data-name="Rectangle" />
                  <div className="bg-gradient-to-b from-[#046675] h-[58px] relative rounded-[5px] shrink-0 to-[#07bfdb] to-[90.91%] w-[40px]" data-node-id="190:74" data-name="Rectangle" />
                </div>
              </div>
              <div className="[word-break:break-word] absolute bg-white content-stretch flex flex-col gap-[6px] items-start leading-[normal] left-[12px] overflow-clip px-[18px] py-[16px] rounded-[18px] shadow-[0px_12px_32px_0px_rgba(20,23,28,0.14)] top-[12px] w-[196px] whitespace-nowrap" data-node-id="190:75" data-name="Float card A">
                <p className="font-['Inter:Semi_Bold'] font-semibold not-italic relative shrink-0 text-[#8b939c] text-[10.5px] tracking-[0.21px]" data-node-id="190:76">AVAILABLE GROWTH FACILITY</p>
                <p className="font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold relative shrink-0 text-[#062530] text-[21px]" data-node-id="190:77">₦5,000,000</p>
              </div>
              <div className="absolute bg-white content-stretch flex gap-[10px] h-[76px] items-center left-[294px] overflow-clip pl-[16px] pr-[18px] py-[14px] rounded-[16px] shadow-[0px_12px_32px_0px_rgba(20,23,28,0.14)] top-[342px]" data-node-id="190:78" data-name="Float card B">
                <div className="bg-[var(--teal\/accent-soft,#e5eff1)] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[24px]" data-node-id="190:79" data-name="status-icon">
                  <div className="relative shrink-0 size-[12px]" data-node-id="190:88" data-name="check"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCheck} /></div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="190:81" data-name="cardB text">
                  <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#062530] text-[13px]" data-node-id="190:82">Application received</p>
                  <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#55606b] text-[11.5px]" data-node-id="190:83">{`We'll keep you updated`}</p>
                </div>
              </div>
              <div className="absolute bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.08)] border-solid content-stretch flex gap-[8px] items-center left-[32px] px-[12px] py-[10px] rounded-[14px] top-[156px]" data-node-id="190:84" data-name="Float chip">
                <div className="relative shrink-0 size-[16px]" data-node-id="190:91" data-name="shield-check"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShieldCheck} /></div>
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.8)] whitespace-nowrap" data-node-id="190:86">Secure application</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#faf9f6] content-stretch flex flex-col gap-[32px] items-start overflow-clip pb-[60px] md:px-[80px] px-[20px] relative shrink-0 w-full" data-node-id="166:39" data-name="Body">
        <div className="content-stretch flex gap-[56px] items-start overflow-clip relative shrink-0 w-full" data-node-id="166:40" data-name="body grid">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-px overflow-clip relative" data-node-id="166:41" data-name="body left">
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[#062530] text-[18px] whitespace-nowrap" data-node-id="166:42">How it works</p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.55] not-italic relative shrink-0 text-[#55606b] text-[14px] w-[560px]" data-node-id="166:43">{`Finbloom assesses your business's cash flow, credit history and stated purpose, then structures a facility with a repayment schedule matched to your operating cycle.`}</p>
            <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="193:15" data-name="step-1">
              <div className="bg-[#062530] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[16px] shrink-0 size-[32px]" data-node-id="193:16" data-name="step-number">
                <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" data-node-id="193:17">1</p>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start leading-[normal] min-w-px overflow-clip relative" data-node-id="193:18" data-name="step-content">
                <p className="font-['Plus_Jakarta_Sans:Bold'] font-bold relative shrink-0 text-[#062530] text-[16px] w-full" data-node-id="193:19">Apply in minutes</p>
                <p className="font-['Inter:Regular'] font-normal not-italic relative shrink-0 text-[#55606b] text-[14px] w-full" data-node-id="193:20">{`Share basic business details and connect your accounts. No paperwork, no branch visits — just a fast, secure online application.`}</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="193:21" data-name="step-2">
              <div className="bg-[#062530] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[16px] shrink-0 size-[32px]" data-node-id="193:22" data-name="step-number">
                <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" data-node-id="193:23">2</p>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start leading-[normal] min-w-px overflow-clip relative" data-node-id="193:24" data-name="step-content">
                <p className="font-['Plus_Jakarta_Sans:Bold'] font-bold relative shrink-0 text-[#062530] text-[16px] w-full" data-node-id="193:25">Get a tailored offer</p>
                <p className="font-['Inter:Regular'] font-normal not-italic relative shrink-0 text-[#55606b] text-[14px] w-full" data-node-id="193:26">We analyze your revenue patterns and cash flow health to build a facility sized and structured for your specific needs.</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="193:27" data-name="step-3">
              <div className="bg-[#062530] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[16px] shrink-0 size-[32px]" data-node-id="193:28" data-name="step-number">
                <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" data-node-id="193:29">3</p>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start leading-[normal] min-w-px overflow-clip relative" data-node-id="193:30" data-name="step-content">
                <p className="font-['Plus_Jakarta_Sans:Bold'] font-bold relative shrink-0 text-[#062530] text-[16px] w-full" data-node-id="193:31">Access funds quickly</p>
                <p className="font-['Inter:Regular'] font-normal not-italic relative shrink-0 text-[#55606b] text-[14px] w-full" data-node-id="193:32">Once approved, funds are deposited directly into your business account, often within 24 hours of acceptance.</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-node-id="193:33" data-name="step-4">
              <div className="bg-[#062530] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[16px] shrink-0 size-[32px]" data-node-id="193:34" data-name="step-number">
                <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" data-node-id="193:35">4</p>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start leading-[normal] min-w-px overflow-clip relative" data-node-id="193:36" data-name="step-content">
                <p className="font-['Plus_Jakarta_Sans:Bold'] font-bold relative shrink-0 text-[#062530] text-[16px] w-full" data-node-id="193:37">Repay on your terms</p>
                <p className="font-['Inter:Regular'] font-normal not-italic relative shrink-0 text-[#55606b] text-[14px] w-full" data-node-id="193:38">{`Payments align with your operating cycle, so you're never caught short. Track everything from your dashboard in real time.`}</p>
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] bg-white border border-[#e7e5e1] border-solid content-stretch flex flex-col gap-[10px] items-start leading-[normal] not-italic overflow-clip p-[24px] relative rounded-[16px] shrink-0 w-[360px] whitespace-nowrap" data-node-id="166:44" data-name="docs">
            <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[#8b939c] text-[11.5px] tracking-[0.115px]" data-node-id="166:45">{`DOCUMENTS YOU'LL NEED`}</p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#55606b] text-[13px]" data-node-id="166:46">Valid ID, BVN and NIN</p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#55606b] text-[13px]" data-node-id="166:47">Recent bank statements</p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#55606b] text-[13px]" data-node-id="166:48">A short statement of intended use of funds</p>
          </div>
        </div>
        <div className="bg-[#046675] content-stretch flex items-center overflow-clip px-[26px] py-[14px] relative rounded-[100px] shrink-0 w-full md:w-auto" data-node-id="187:36" data-name="apply-btn">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="187:37">Apply for this product</p>
        </div>
      </div>
      <div className="bg-[#faf9f6] content-stretch flex flex-col items-start overflow-clip pb-[80px] md:px-[80px] px-[20px] relative shrink-0 w-full" data-node-id="166:49" data-name="Related">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[#062530] text-[18px] whitespace-nowrap" data-node-id="166:50">Explore other products</p>
        <div className="h-[20px] relative shrink-0 w-[10px]" data-node-id="166:51" data-name="Frame" />
        <div className="content-stretch cursor-pointer flex gap-[18px] items-start overflow-clip relative shrink-0 w-full" data-node-id="166:52" data-name="rel row">
          <a className="bg-white border border-[#e7e5e1] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[18px] py-[20px] relative rounded-[14px]" data-node-id="166:53" data-name="rel-card">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#062530] text-[13.5px] text-left whitespace-nowrap" data-node-id="166:54">Cashflow Flex</p>
          </a>
          <a className="bg-white border border-[#e7e5e1] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[18px] py-[20px] relative rounded-[14px]" data-node-id="166:55" data-name="rel-card">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#062530] text-[13.5px] text-left whitespace-nowrap" data-node-id="166:56">Invoice Finance</p>
          </a>
          <a className="bg-white border border-[#e7e5e1] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[18px] py-[20px] relative rounded-[14px]" data-node-id="166:57" data-name="rel-card">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#062530] text-[13.5px] text-left whitespace-nowrap" data-node-id="166:58">Asset Finance</p>
          </a>
          <a className="bg-white border border-[#e7e5e1] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[18px] py-[20px] relative rounded-[14px]" data-node-id="222:1531" data-name="rel-card">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#062530] text-[13.5px] text-left whitespace-nowrap" data-node-id="222:1532">FinSure Loan</p>
          </a>
          <a className="bg-white border border-[#e7e5e1] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[18px] py-[20px] relative rounded-[14px]" data-node-id="222:1533" data-name="rel-card">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#062530] text-[13.5px] text-left whitespace-nowrap" data-node-id="222:1534">SecureYield Loan</p>
          </a>
        </div>
      </div>
      <div className="bg-[#034f5b] content-stretch flex flex-col h-[481px] items-start overflow-clip pt-[64px] px-[80px] relative shrink-0 w-[1440px]" data-node-id="217:1024" data-name="Footer">
        <div className="absolute h-[236px] left-0 top-[241px] w-[1440px]" data-node-id="I217:1024;90:2" data-name="Finbloom Logo Background"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFinbloomLogoBackground} /></div>
        <div className="border-[rgba(255,255,255,0.12)] border-b border-solid content-stretch flex items-center justify-between overflow-clip pb-[44px] relative shrink-0 w-full" data-node-id="I217:1024;85:3" data-name="CTA row">
          <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold leading-[normal] relative shrink-0 text-[22px] text-white w-[480px]" data-node-id="I217:1024;85:4">Ready to grow your business with flexible financing?</p>
          <div className="bg-[#046675] content-stretch flex items-center justify-center px-[28px] py-[14px] relative rounded-[100px] shrink-0" data-node-id="I217:1024;204:22" data-name="Button">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[14.5px] text-white whitespace-nowrap" data-node-id="I217:1024;204:22;204:6">Apply for financing</p>
          </div>
        </div>
        <div className="h-[44px] relative shrink-0 w-[10px]" data-node-id="I217:1024;85:7" data-name="spacer" />
        <div className="content-stretch flex items-start justify-between overflow-clip pb-[44px] relative shrink-0 w-full" data-node-id="I217:1024;85:8" data-name="Footer top">
          <div className="content-stretch flex flex-col gap-[14px] items-start overflow-clip relative shrink-0 w-[320px]" data-node-id="I217:1024;85:9" data-name="Footer brand">
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold leading-[normal] relative shrink-0 text-[16px] text-white whitespace-nowrap" data-node-id="I217:1024;85:10">Finbloom Capital</p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[13.5px] text-[rgba(255,255,255,0.6)] w-[280px]" data-node-id="I217:1024;85:11">Flexible finance for stronger businesses and brighter possibilities.</p>
            <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-node-id="I217:1024;85:12" data-name="Social row">
              <div className="border border-solid border-white content-stretch flex items-center justify-center overflow-clip relative rounded-[19px] shrink-0 size-[38px]" data-node-id="I217:1024;85:13" data-name="social-icon">
                <div className="overflow-clip relative shrink-0 size-[18px]" data-node-id="I217:1024;86:8" data-name="prime:twitter">
                  <div className="absolute contents inset-0" data-node-id="I217:1024;86:9" data-name="Group">
                    <div className="absolute contents inset-0" data-node-id="I217:1024;86:14" data-name="Clip path group">
                      <div className="absolute inset-[4.69%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-0.843px] mask-size-[18px_18px]" data-node-id="I217:1024;86:10" style={{ maskImage: `url("${imgGroup}")` }} data-name="Group">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-solid border-white content-stretch flex items-center justify-center overflow-clip relative rounded-[19px] shrink-0 size-[38px]" data-node-id="I217:1024;85:14" data-name="social-icon">
                <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I217:1024;86:15" data-name="mingcute:facebook-line">
                  <div className="absolute inset-[8.33%_8.33%_0.78%_8.33%]" data-node-id="I217:1024;86:16" data-name="Group"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup2} /></div>
                </div>
              </div>
              <div className="border border-solid border-white content-stretch flex items-center justify-center overflow-clip relative rounded-[19px] shrink-0 size-[38px]" data-node-id="I217:1024;85:15" data-name="social-icon">
                <div className="relative shrink-0 size-[24px]" data-node-id="I217:1024;86:19" data-name="mdi:instagram"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMdiInstagram} /></div>
              </div>
              <div className="border border-solid border-white content-stretch flex items-center justify-center overflow-clip relative rounded-[19px] shrink-0 size-[38px]" data-node-id="I217:1024;85:16" data-name="social-icon">
                <div className="relative shrink-0 size-[24px]" data-node-id="I217:1024;86:21" data-name="mdi:linkedin"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMdiLinkedin} /></div>
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex gap-[56px] items-start not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="I217:1024;85:17" data-name="Footer links">
            <div className="content-stretch flex flex-col gap-[11px] items-start leading-[normal] overflow-clip relative shrink-0" data-node-id="I217:1024;85:18" data-name="footer-col">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[12px] text-[rgba(255,255,255,0.4)] tracking-[0.12px]" data-node-id="I217:1024;85:19">OUR PRODUCTS</p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13.5px] text-[rgba(255,255,255,0.75)]" data-node-id="I217:1024;85:20">Cashflow Flex</p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13.5px] text-[rgba(255,255,255,0.75)]" data-node-id="I217:1024;85:21">Invoice Finance</p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13.5px] text-[rgba(255,255,255,0.75)]" data-node-id="I217:1024;85:22">Asset Finance</p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13.5px] text-[rgba(255,255,255,0.75)]" data-node-id="I217:1024;85:23">SME Growth Loan</p>
            </div>
            <div className="content-stretch flex flex-col gap-[11px] items-start leading-[normal] overflow-clip relative shrink-0" data-node-id="I217:1024;85:24" data-name="footer-col">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[12px] text-[rgba(255,255,255,0.4)] tracking-[0.12px]" data-node-id="I217:1024;85:25">COMPANY</p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13.5px] text-[rgba(255,255,255,0.75)]" data-node-id="I217:1024;85:26">About</p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13.5px] text-[rgba(255,255,255,0.75)]" data-node-id="I217:1024;85:27">FAQ</p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13.5px] text-[rgba(255,255,255,0.75)]" data-node-id="I217:1024;85:28">Contact</p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[13.5px] text-[rgba(255,255,255,0.75)]" data-node-id="I217:1024;85:29">Apply</p>
            </div>
            <div className="content-stretch flex flex-col gap-[11px] items-start overflow-clip relative shrink-0" data-node-id="I217:1024;85:30" data-name="footer-col">
              <p className="font-['Inter:Bold'] font-bold leading-[normal] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.4)] tracking-[0.12px]" data-node-id="I217:1024;85:31">CONTACT US</p>
              <p className="font-['Inter:Regular'] font-normal leading-[normal] relative shrink-0 text-[13.5px] text-[rgba(255,255,255,0.75)]" data-node-id="I217:1024;85:32">29, Ogayemi Close, Yaba</p>
              <p className="font-['Inter:Regular'] font-normal leading-[normal] relative shrink-0 text-[13.5px] text-[rgba(255,255,255,0.75)]" data-node-id="I217:1024;85:33">info@finbloomcapital.com</p>
              <p className="font-['Inter:Regular'] font-normal leading-[normal] relative shrink-0 text-[13.5px] text-[rgba(255,255,255,0.75)]" data-node-id="I217:1024;85:34">+234 814 323 3008</p>
              <div className="content-stretch cursor-pointer flex font-['Inter:Regular'] font-normal gap-[11px] items-start leading-[0] relative shrink-0 text-[13.5px] text-[rgba(255,255,255,0.75)]" data-node-id="I217:1024;203:613" data-name="Privacy & Terms">
                <a className="block relative shrink-0" data-node-id="I217:1024;203:605"><p className="leading-[normal]">Privacy</p></a>
                <a className="block relative shrink-0" data-node-id="I217:1024;203:610"><p className="leading-[normal]">Terms</p></a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-[rgba(255,255,255,0.12)] border-solid border-t content-stretch flex items-center justify-between overflow-clip py-[22px] relative shrink-0 w-full" data-node-id="I217:1024;85:35" data-name="Bottom bar">
          <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="I217:1024;85:36" data-name="badge">
            <div className="bg-[#69babb] relative rounded-[7px] shrink-0 size-[14px]" data-node-id="I217:1024;85:37" data-name="dot" />
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.6)] whitespace-nowrap" data-node-id="I217:1024;85:38">RC 7631703, Licensed Money Lender, Lagos State</p>
          </div>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.45)] whitespace-pre" data-node-id="I217:1024;85:39">{`© 2026 Finbloom Capital Ltd. All rights reserved.  Privacy   Terms`}</p>
        </div>
      </div>
    </div>
  );
}
