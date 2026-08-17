import { Link } from 'react-router-dom';

const imgTablerArrowDown = "/img/tabler_arrow-down.svg";
const imgGrid = "/img/Hero illustration.svg";
const imgEllipse = "https://www.figma.com/api/mcp/asset/5ad596ae-2227-4bde-b5c0-1433b42836e6";
const imgLine1 = "https://www.figma.com/api/mcp/asset/69b9611a-75a0-438c-8ff7-1120bc8a91bf";
const imgEllipse1 = "https://www.figma.com/api/mcp/asset/0d20d636-b8b7-4abb-bf07-f07e980d7b30";
const imgEllipse2 = "https://www.figma.com/api/mcp/asset/566692f1-a4a3-4ad0-8b30-9f7b9c80db7d";
const imgShieldCheck = "https://www.figma.com/api/mcp/asset/bf690152-ece9-4e71-a69b-51373583824f";

export default function CashflowFlexDesktop() {
  return (
    <div className="w-full overflow-x-hidden bg-[#faf9f6]" data-node-id="114:3" data-name="Pay monthly interest. Repay principal at maturity. - Desktop">
      <div className="bg-[#faf9f6] content-stretch flex flex-col items-start overflow-clip pb-[40px] pt-[64px] md:px-[80px] px-[20px] relative shrink-0 w-full" data-node-id="114:17" data-name="Hero">
        <div className="content-stretch flex md:flex-row flex-col gap-[48px] items-center overflow-clip relative shrink-0 w-full" data-node-id="114:18" data-name="Hero grid">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px overflow-clip relative" data-node-id="114:19" data-name="left">
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold leading-[normal] relative shrink-0 text-[#062530] md:text-[30px] text-[24px]" data-node-id="114:21">Pay monthly interest. Repay principal at maturity.</p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.5] not-italic relative shrink-0 text-[#55606b] text-[15px] md:w-[460px] w-full" data-node-id="114:22">{`A financing structure for businesses with steady monthly cash flow but a lump-sum repayment event on the horizon. Keep your monthly payments low with interest-only installments, then settle the principal when your revenue milestone hits — whether that's a contract payout, seasonal peak, or funding round.`}</p>
            <a href="#how-it-works" className="bg-[#046675] content-stretch flex gap-[8px] items-center overflow-clip px-[26px] py-[14px] relative rounded-[100px] shrink-0" data-node-id="114:23" data-name="apply-btn">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="114:24">Read more</p>
              <div className="relative shrink-0 size-[18px]" data-node-id="152:7" data-name="tabler:arrow-down"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTablerArrowDown} /></div>
            </a>
          </div>
          <div className="bg-[#062530] content-stretch flex flex-col md:h-[460px] h-[300px] items-center justify-center overflow-clip relative rounded-[28px] shadow-[0px_12px_32px_0px_rgba(20,23,28,0.14)] shrink-0 md:w-[500px] w-full" data-node-id="114:25" data-name="Hero illustration">
            <img alt="" className="block w-full h-full object-cover" src={imgGrid} />
          </div>
        </div>
      </div>
      <div id="how-it-works" className="bg-[#faf9f6] content-stretch flex flex-col gap-[32px] md:h-[478px] h-auto items-start overflow-clip pb-[60px] md:px-[80px] px-[20px] relative shrink-0 w-full scroll-mt-24" data-node-id="114:40" data-name="Body">
        <div className="content-stretch flex md:flex-row flex-col gap-[56px] items-start overflow-clip relative shrink-0 w-full" data-node-id="114:41" data-name="body grid">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px overflow-clip relative" data-node-id="114:42" data-name="body left">
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[#062530] text-[18px] whitespace-nowrap" data-node-id="114:43">How it works</p>
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="149:4" data-name="steps-list">
              <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-node-id="149:5" data-name="step-1">
                <div className="bg-[#062530] content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-node-id="149:6" data-name="step-number">
                  <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="149:7">1</p>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-node-id="149:8" data-name="step-content">
                  <p className="font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[#062530] text-[16px] whitespace-nowrap" data-node-id="149:9">Apply online</p>
                  <p className="font-['Inter:Regular'] font-normal leading-[1.55] min-w-full not-italic relative shrink-0 text-[#55606b] text-[14px] w-[min-content]">{`Submit your application through our secure portal. We'll ask for basic business and personal details to initiate the assessment.`}</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-node-id="149:11" data-name="step-2">
                <div className="bg-[#062530] content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-node-id="149:12" data-name="step-number">
                  <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="149:13">2</p>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-node-id="149:14" data-name="step-content">
                  <p className="font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[#062530] text-[16px] whitespace-nowrap" data-node-id="149:15">Document verification</p>
                  <p className="font-['Inter:Regular'] font-normal leading-[1.55] min-w-full not-italic relative shrink-0 text-[#55606b] text-[14px] w-[min-content]">Upload the required documents. Our team reviews your identity, business registration, and financial statements to verify your profile.</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-node-id="149:17" data-name="step-3">
                <div className="bg-[#062530] content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-node-id="149:18" data-name="step-number">
                  <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="149:19">3</p>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-node-id="149:20" data-name="step-content">
                  <p className="font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[#062530] text-[16px] whitespace-nowrap" data-node-id="149:21">Offer confirmation</p>
                  <p className="font-['Inter:Regular'] font-normal leading-[1.55] min-w-full not-italic relative shrink-0 text-[#55606b] text-[14px] w-[min-content]">{`Finbloom assesses your application against the product's structure. If approved, we'll issue an offer letter outlining your terms and repayment schedule.`}</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-node-id="149:23" data-name="step-4">
                <div className="bg-[#062530] content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-node-id="149:24" data-name="step-number">
                  <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="149:25">4</p>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-node-id="149:26" data-name="step-content">
                  <p className="font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[#062530] text-[16px] whitespace-nowrap" data-node-id="149:27">Funds disbursed</p>
                  <p className="font-['Inter:Regular'] font-normal leading-[1.55] min-w-full not-italic relative shrink-0 text-[#55606b] text-[14px] w-[min-content]">{`Once you accept the offer, we'll disburse the funds directly to your designated account. You can then start using the capital for your business needs.`}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] bg-white border border-[#e7e5e1] border-solid content-stretch flex flex-col gap-[10px] items-start leading-[normal] not-italic overflow-clip p-[24px] relative rounded-[16px] shrink-0 md:w-[360px] w-full whitespace-nowrap" data-node-id="114:45" data-name="docs">
            <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[#8b939c] text-[11.5px] tracking-[0.115px]" data-node-id="114:46">{`DOCUMENTS YOU'LL NEED`}</p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#55606b] text-[13px]" data-node-id="114:47">Valid ID, BVN and NIN</p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#55606b] text-[13px]" data-node-id="114:48">Recent bank statements</p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#55606b] text-[13px]" data-node-id="114:49">CAC documents, where applicable</p>
          </div>
        </div>
        <a href="https://finbloom-capital-ltd.lsq.app/" target="_blank" rel="noopener noreferrer" className="bg-[#046675] content-stretch flex items-center overflow-clip px-[26px] py-[14px] relative rounded-[100px] shrink-0 md:w-auto w-full text-center justify-center" data-node-id="147:2" data-name="apply-btn">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="147:3">Apply for this product</p>
        </a>
      </div>
      <div className="bg-[#faf9f6] content-stretch flex flex-col items-start overflow-clip pb-[80px] md:px-[80px] px-[20px] relative shrink-0 w-full" data-node-id="114:50" data-name="Related">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[#062530] text-[18px] whitespace-nowrap" data-node-id="114:51">Explore other products</p>
        <div className="h-[20px] relative shrink-0 w-[10px]" data-node-id="114:52" data-name="Frame" />
        <div className="content-stretch flex md:flex-row flex-col gap-[18px] items-start relative shrink-0 w-full" data-node-id="114:53" data-name="rel row">
          <Link to="/invoice-finance-desktop" className="bg-white border border-[#e7e5e1] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[18px] py-[20px] relative rounded-[14px] hover:bg-gray-50 transition w-full" data-node-id="114:54" data-name="rel-card">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#062530] text-[13.5px] whitespace-nowrap" data-node-id="114:55">Invoice Finance</p>
          </Link>
          <Link to="/asset-finance-desktop" className="bg-white border border-[#e7e5e1] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[18px] py-[20px] relative rounded-[14px] hover:bg-gray-50 transition w-full" data-node-id="114:56" data-name="rel-card">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#062530] text-[13.5px] whitespace-nowrap" data-node-id="114:57">Asset Finance</p>
          </Link>
          <Link to="/sme-growth-loan-desktop" className="bg-white border border-[#e7e5e1] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[18px] py-[20px] relative rounded-[14px] hover:bg-gray-50 transition w-full" data-node-id="114:58" data-name="rel-card">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#062530] text-[13.5px] whitespace-nowrap" data-node-id="114:59">SME Growth Loan</p>
          </Link>
          <Link to="/finsure-loan-desktop" className="bg-white border border-[#e7e5e1] border-solid content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip px-[18px] py-[20px] relative rounded-[14px] hover:bg-gray-50 transition w-full" data-node-id="224:1531" data-name="rel-card">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#062530] text-[13.5px] whitespace-nowrap" data-node-id="224:1532">FinSure Loan</p>
          </Link>
          <Link to="/secure-yield-loan-desktop" className="bg-white border border-[#e7e5e1] border-solid content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip px-[18px] py-[20px] relative rounded-[14px] hover:bg-gray-50 transition w-full" data-node-id="224:1533" data-name="rel-card">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#062530] text-[13.5px] whitespace-nowrap" data-node-id="224:1534">SecureYield Loan</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
