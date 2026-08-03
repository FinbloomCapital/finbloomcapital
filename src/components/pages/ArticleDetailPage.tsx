import { useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

const imgFinbloomLogoBackground = "https://www.figma.com/api/mcp/asset/8b52388f-f556-4972-8d25-15ecc2ed66fb";
const imgGroup = "https://www.figma.com/api/mcp/asset/99be794e-f1af-4504-b4ef-ac28a0ae9ee5";
const imgGroup1 = "https://www.figma.com/api/mcp/asset/290d201d-79fd-43f8-8b71-f1bedcca07cc";
const imgGroup2 = "https://www.figma.com/api/mcp/asset/9857d9bc-0937-4ead-8a67-ffed3b9a68f9";
const imgMdiInstagram = "https://www.figma.com/api/mcp/asset/8a9b516d-c9ae-46ab-9f07-fb577ba578e6";
const imgMdiLinkedin = "https://www.figma.com/api/mcp/asset/72b5229e-63c6-418c-9df6-75349d2da3fb";
const imgFinbloomLogo1 = "https://www.figma.com/api/mcp/asset/0ca3b78b-cd7a-49b8-9f30-c7c6d05e9d99";
const imgEllipse = "https://www.figma.com/api/mcp/asset/89bf6f68-8fb9-4f0f-adac-0ff8943b6de5";
const imgFeaturedLargeImage = "https://www.figma.com/api/mcp/asset/97207881-9d08-4233-b0e0-21f81fe8cdd2";
const imgEllipse3 = "https://www.figma.com/api/mcp/asset/41600207-cd86-4170-a275-ec945d7dbaec";
const imgThumbnail = "https://www.figma.com/api/mcp/asset/e67ae0ac-681c-4ae9-b890-217ebdc2a5be";
const imgThumbnail1 = "https://www.figma.com/api/mcp/asset/1d21cd4d-0c94-45d8-8e6e-652f3fc928fb";
const imgThumbnail2 = "https://www.figma.com/api/mcp/asset/dda48820-6894-4bb9-8565-b4ca1c78324a";
const imgTwitter = "https://www.figma.com/api/mcp/asset/595eee0a-6787-4916-ba5f-b074cce9f782";
const imgFacebook = "https://www.figma.com/api/mcp/asset/cafe5234-c2a1-447b-b7d4-f5382383c7d5";
const imgLinkedin = "https://www.figma.com/api/mcp/asset/8e434693-1be0-48b2-b976-7d49756ee026";
const imgEllipse1 = "https://www.figma.com/api/mcp/asset/08b4a57d-8927-4567-8e98-6df0762ae4cf";
const imgEllipse2 = "https://www.figma.com/api/mcp/asset/988a9106-905a-481b-bfef-06ca8851aac9";
const imgInfo = "https://www.figma.com/api/mcp/asset/e60ee2fa-19b1-474c-9822-1e8c0e41938e";
const imgLinkedin1 = "https://www.figma.com/api/mcp/asset/07043ad7-799b-431f-bbb2-b281b46fbe47";
const imgTwitter1 = "https://www.figma.com/api/mcp/asset/f2786309-1815-4375-99e8-ae249a82e216";
const imgLine = "https://www.figma.com/api/mcp/asset/f2a32725-cc2b-4578-ac00-b661c98d2d65";

export default function ArticleDetailPage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  return (
    <div className="bg-[#faf9f6] content-stretch flex flex-col items-start relative size-full" data-node-id="226:1661" data-name="article-detail-page">
      {/* Breadcrumbs bar - with responsive padding */}
      <div className="content-stretch flex items-center justify-between pb-[12px] pt-[24px] md:px-[120px] px-[20px] relative shrink-0 w-full" data-node-id="226:1699" data-name="Breadcrumbs bar">
        <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center leading-[normal] not-italic relative shrink-0 text-[13px] whitespace-nowrap" data-node-id="226:1700" data-name="Left breadcrumbs">
          <p className="font-[\'Inter:Medium\'] font-medium relative shrink-0 text-[#8b939c]" data-node-id="226:1701">Learn</p>
          <p className="font-[\'Inter:Regular\'] font-normal relative shrink-0 text-[#8b939c]" data-node-id="226:1702">/</p>
          <p className="font-[\'Inter:Medium\'] font-medium relative shrink-0 text-[#8b939c]" data-node-id="226:1703">Articles</p>
          <p className="font-[\'Inter:Regular\'] font-normal relative shrink-0 text-[#8b939c]" data-node-id="226:1704">/</p>
          <p className="font-[\'Inter:Semi_Bold\'] font-semibold relative shrink-0 text-[#046675]" data-node-id="226:1705">Cash Flow Management</p>
        </div>
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-node-id="226:1706" data-name="Share options">
          <p className="[word-break:break-word] font-[\'Inter:Semi_Bold\'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#55606b] text-[13px] whitespace-nowrap" data-node-id="226:1707">SHARE THIS ARTICLE</p>
          <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="226:1708" data-name="Share Icons">
            <div className="border border-[#e7e5e1] border-solid content-stretch flex items-center justify-center p-[6px] relative rounded-[100px] shrink-0 size-[32px]" data-node-id="226:1709" data-name="Frame">
              <div className="relative shrink-0 size-[14px]" data-node-id="226:1925" data-name="twitter"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTwitter} /></div>
            </div>
            <div className="border border-[#e7e5e1] border-solid content-stretch flex items-center justify-center p-[6px] relative rounded-[100px] shrink-0 size-[32px]" data-node-id="226:1711" data-name="Frame">
              <div className="relative shrink-0 size-[14px]" data-node-id="226:1928" data-name="facebook"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFacebook} /></div>
            </div>
            <div className="border border-[#e7e5e1] border-solid content-stretch flex items-center justify-center p-[6px] relative rounded-[100px] shrink-0 size-[32px]" data-node-id="226:1713" data-name="Frame">
              <div className="relative shrink-0 size-[14px]" data-node-id="226:1931" data-name="linkedin"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLinkedin} /></div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Hero - with responsive padding */}
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[48px] pt-[32px] md:px-[120px] px-[20px] relative shrink-0 w-full" data-node-id="226:1715" data-name="Article Hero">
        <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="226:1716" data-name="Category Tag Row">
          <div className="bg-[#e5eff1] content-stretch flex items-start px-[14px] py-[6px] relative rounded-[100px] shrink-0" data-node-id="226:1717" data-name="Category Pill">
            <p className="[word-break:break-word] font-[\'Inter:Bold\'] font-bold leading-[normal] not-italic relative shrink-0 text-[#046675] text-[12px] tracking-[1px] whitespace-nowrap" data-node-id="226:1718">CASH FLOW</p>
          </div>
          <div className="[word-break:break-word] flex flex-col font-[\'Inter:Bold\'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#eb5b18] text-[12px] tracking-[1px] whitespace-nowrap" data-node-id="226:1719">
            <p className="leading-[normal]">FEATURED GUIDE</p>
          </div>
        </div>
        <p className="[word-break:break-word] font-[\'Plus_Jakarta_Sans:ExtraBold\'] font-extrabold leading-[1.15] min-w-full relative shrink-0 text-[#062530] text-[48px] w-[min-content]" data-node-id="226:1720">
          The Definitive Guide to Cash Flow Management for Nigerian SMEs
        </p>
        <p className="[word-break:break-word] font-[\'Inter:Regular\'] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#55606b] text-[20px] w-[min-content]" data-node-id="226:1721">
          Managing incoming invoices while waiting on client payments can paralyze operations. Learn how to secure working capital, structure payment cycles, and optimize liquidity without taking on expensive traditional debt.
        </p>
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="226:1722" data-name="Author Meta Block">
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-node-id="226:1723" data-name="Author Profile">
            <div className="relative shrink-0 size-[48px]" data-node-id="226:1724" data-name="Ellipse">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-node-id="226:1725" data-name="Author Name Role">
              <p className="font-[\'Inter:Bold\'] font-bold relative shrink-0 text-[#062530] text-[15px]" data-node-id="226:1726">Oluwaseun Adebayo</p>
              <p className="font-[\'Inter:Regular\'] font-normal relative shrink-0 text-[#8b939c] text-[13px]" data-node-id="226:1727">Senior Financial Analyst, Finbloom</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-node-id="226:1728" data-name="Date Time Details">
            <p className="[word-break:break-word] font-[\'Inter:Regular\'] font-normal leading-[normal] not-italic relative shrink-0 text-[#8b939c] text-[13px] whitespace-nowrap" data-node-id="226:1729">Published: March 7, 2025</p>
            <div className="relative shrink-0 size-[4px]" data-node-id="226:1730" data-name="Ellipse"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse1} /></div>
            <p className="[word-break:break-word] font-[\'Inter:Regular\'] font-normal leading-[normal] not-italic relative shrink-0 text-[#8b939c] text-[13px] whitespace-nowrap" data-node-id="226:1731">12 min read</p>
          </div>
        </div>
        <div className="h-[540px] relative rounded-[24px] shrink-0 w-full" data-node-id="226:1732" data-name="Featured Large Image">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgFeaturedLargeImage} />
        </div>
      </div>

      {/* Article Content Layout - with responsive padding */}
      <div className="content-stretch flex gap-[80px] items-start pb-[80px] md:px-[120px] px-[20px] relative shrink-0 w-full" data-node-id="226:1733" data-name="Article Content Layout">
        <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[800px]" data-node-id="226:1734" data-name="Main Editorial Content">
          <p className="[word-break:break-word] font-[\'Inter:Regular\'] font-normal leading-[1.7] not-italic relative shrink-0 text-[#062530] text-[16px] w-full" data-node-id="226:1735">
            In the Nigerian business ecosystem, cash flow is the ultimate lifeblood. Many SMEs fall into the fatal trap of conflating profitability with liquidity. A business can secure numerous purchase orders and have a highly profitable quarter on paper, but if cash is locked up in unpaid invoices while immediate operational expenses loom, that business is at risk of structural collapse.
          </p>
          <p className="[word-break:break-word] font-[\'Plus_Jakarta_Sans:ExtraBold\'] font-extrabold leading-[normal] relative shrink-0 text-[#062530] text-[28px] w-full" data-node-id="226:1736">1. Understanding Your Working Capital Cycle</p>
          <p className="[word-break:break-word] font-[\'Inter:Regular\'] font-normal leading-[1.7] not-italic relative shrink-0 text-[#062530] text-[16px] w-full" data-node-id="226:1737">
            Your working capital cycle measures the time it takes to convert net current assets and liabilities into cash. For retail and distribution businesses, this means the duration between purchasing raw inventory and actually receiving naira in your bank account from your final clients.
          </p>
          <div className="content-stretch flex flex-col gap-[16px] items-start pl-[24px] relative shrink-0 w-full" data-node-id="226:1738" data-name="Bulleted List Section">
            <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="226:1739" data-name="List Item">
              <div className="relative shrink-0 size-[6px]" data-node-id="226:1740" data-name="Ellipse"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse2} /></div>
              <p className="[word-break:break-word] flex-[1_0_0] font-[\'Inter:Regular\'] font-normal leading-[0] min-w-px not-italic relative text-[#062530] text-[16px]" data-node-id="226:1741">
                <span className="font-[\'Inter:Bold\'] font-bold leading-[1.6]">Inventory Days:</span>
                <span className="leading-[1.6]">{` How long your raw goods sit in storage before selling.`}</span>
              </p>
            </div>
            <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="226:1742" data-name="List Item">
              <div className="relative shrink-0 size-[6px]" data-node-id="226:1743" data-name="Ellipse"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse2} /></div>
              <p className="[word-break:break-word] flex-[1_0_0] font-[\'Inter:Regular\'] font-normal leading-[0] min-w-px not-italic relative text-[#062530] text-[16px]" data-node-id="226:1744">
                <span className="font-[\'Inter:Bold\'] font-bold leading-[1.6]">Receivable Days:</span>
                <span className="leading-[1.6]">{` The average time clients take to transfer funds after receiving invoices.`}</span>
              </p>
            </div>
            <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="226:1745" data-name="List Item">
              <div className="relative shrink-0 size-[6px]" data-node-id="226:1746" data-name="Ellipse"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse2} /></div>
              <p className="[word-break:break-word] flex-[1_0_0] font-[\'Inter:Regular\'] font-normal leading-[0] min-w-px not-italic relative text-[#062530] text-[16px]" data-node-id="226:1747">
                <span className="font-[\'Inter:Bold\'] font-bold leading-[1.6]">Payable Days:</span>
                <span className="leading-[1.6]">{` The grace period your suppliers grant you to settle outstanding balances.`}</span>
              </p>
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col items-start pl-[32px] pr-[24px] py-[24px] relative shrink-0 w-full" data-node-id="226:1748" data-name="Pull Quote Block">
            <p className="font-[\'Plus_Jakarta_Sans:Italic\'] font-normal italic leading-[1.5] min-w-full relative shrink-0 text-[#062530] text-[22px] w-[min-content]" data-node-id="226:1749">{`"The cost of waiting on cash is often higher than the cost of capital. Ambitious Nigerian businesses must treat liquidity management as a daily strategic operation, not an end-of-month accounting chore."`}</p>
            <p className="font-[\'Inter:Bold\'] font-bold leading-[normal] not-italic relative shrink-0 text-[#55606b] text-[14px] whitespace-nowrap" data-node-id="226:1750">— OLUWASEUN ADEBAYO, CHIEF RISK OFFICER AT FINBLOOM</p>
          </div>
          <p className="[word-break:break-word] font-[\'Plus_Jakarta_Sans:ExtraBold\'] font-extrabold leading-[normal] relative shrink-0 text-[#062530] text-[28px] w-full" data-node-id="226:1751">2. Structural Solutions: Invoice Financing vs. SME Loans</p>
          <p className="[word-break:break-word] font-[\'Inter:Regular\'] font-normal leading-[1.7] not-italic relative shrink-0 text-[#062530] text-[16px] w-full" data-node-id="226:1752">
            Traditional commercial banks in Nigeria often require heavy collateral like landed property in prime Lagos locations to secure basic credit. For modern digital businesses and logistics companies, this is an impractical barrier. Fast-growing SMEs instead turn to flexible financing options like Invoice Factoring, which unlocks up to 80% of your unpaid receivables value within 24 hours.
          </p>
          <div className="bg-[#e5eff1] border border-[#e7e5e1] border-solid content-stretch flex flex-col gap-[12px] items-start p-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="226:1753" data-name="Callout Box">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="226:1754" data-name="Callout Header">
              <div className="relative shrink-0 size-[20px]" data-node-id="226:1940" data-name="info"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgInfo} /></div>
              <p className="[word-break:break-word] font-[\'Inter:Bold\'] font-bold leading-[normal] not-italic relative shrink-0 text-[#046675] text-[14px] tracking-[1px] whitespace-nowrap" data-node-id="226:1756">LAGOS SME TIP</p>
            </div>
            <p className="[word-break:break-word] font-[\'Inter:Regular\'] font-normal leading-[1.6] min-w-full not-italic relative shrink-0 text-[#062530] text-[15px] w-[min-content]" data-node-id="226:1757">
              Always negotiate a 2% early-settlement discount with your key corporate clients. While it reduces your margin slightly, it dramatically accelerates your collection cycles and frees up immediate operating cash.
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[320px]" data-node-id="226:1758" data-name="Editorial Sidebar">
          <div className="[word-break:break-word] bg-white border border-[#e7e5e1] border-solid content-stretch flex flex-col gap-[16px] items-start leading-[normal] p-[24px] relative rounded-[16px] shrink-0 w-full whitespace-nowrap" data-node-id="226:1759" data-name="Quick Summary Card">
            <p className="font-[\'Plus_Jakarta_Sans:ExtraBold\'] font-extrabold relative shrink-0 text-[#062530] text-[18px]" data-node-id="226:1760">In This Guide</p>
            <div className="content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 text-[14px] w-full" data-node-id="226:1761" data-name="Index links">
              <p className="font-[\'Inter:Semi_Bold\'] font-semibold relative shrink-0 text-[#046675]" data-node-id="226:1762">1. Working Capital Cycle</p>
              <p className="font-[\'Inter:Regular\'] font-normal relative shrink-0 text-[#55606b]" data-node-id="226:1763">2. Invoice vs SME Loans</p>
              <p className="font-[\'Inter:Regular\'] font-normal relative shrink-0 text-[#55606b]" data-node-id="226:1764">3. Reducing Receivable Days</p>
              <p className="font-[\'Inter:Regular\'] font-normal relative shrink-0 text-[#55606b]" data-node-id="226:1765">4. Working with Finbloom</p>
            </div>
          </div>
          <div className="bg-[var(--teal\/accent-soft,#e5eff1)] content-stretch flex flex-col gap-[20px] items-start p-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="226:1766" data-name="Ad banner">
            <p className="[word-break:break-word] font-[\'Plus_Jakarta_Sans:ExtraBold\'] font-extrabold leading-[normal] relative shrink-0 text-[#062530] text-[20px] text-black whitespace-nowrap" data-node-id="226:1767">Need Cash Flow Support?</p>
            <p className="[word-break:break-word] font-[\'Inter:Regular\'] font-normal leading-[1.5] min-w-full not-italic opacity-80 relative shrink-0 text-[#55606b] text-[14px] w-[min-content]" data-node-id="226:1768">
              Get up to ₦10M in fast, collateral-free invoice financing or SME growth capital with Finbloom.
            </p>
            <a href="https://finbloom-capital-ltd.lsq.app/" target="_blank" rel="noopener noreferrer" className="bg-white content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[100px] shrink-0 w-full" data-node-id="226:1769" data-name="Frame">
              <p className="[word-break:break-word] font-[\'Inter:Bold\'] font-bold leading-[normal] not-italic relative shrink-0 text-[#034f5b] text-[14px] whitespace-nowrap" data-node-id="226:1770">Apply for financing</p>
            </a>
          </div>
        </div>
      </div>

      {/* Author Bio Wrapper - with responsive padding */}
      <div className="content-stretch flex flex-col items-start pb-[80px] md:px-[120px] px-[20px] relative shrink-0 w-full" data-node-id="226:1771" data-name="Author Bio Wrapper">
        <div className="bg-white border border-[#e7e5e1] border-solid content-stretch flex gap-[32px] items-center p-[40px] relative rounded-[24px] shrink-0 w-full" data-node-id="226:1772" data-name="Author Card">
          <div className="relative shrink-0 size-[120px]" data-node-id="226:1773" data-name="Ellipse"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse3} /></div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-node-id="226:1774" data-name="Author Info Details">
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-node-id="226:1775" data-name="Name row">
              <p className="[word-break:break-word] font-[\'Plus_Jakarta_Sans:ExtraBold\'] font-extrabold leading-[normal] relative shrink-0 text-[#062530] text-[22px] whitespace-nowrap" data-node-id="226:1776">Oluwaseun Adebayo</p>
              <div className="bg-[var(--warm\/yellow,#f8c535)] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[100px] shrink-0" data-node-id="226:1777" data-name="Frame">
                <p className="[word-break:break-word] font-[\'Inter:Bold\'] font-bold leading-[normal] not-italic relative shrink-0 text-[10px] text-[color:var(--neutral\/background,#faf9f6)] whitespace-nowrap" data-node-id="226:1778">AUTHOR</p>
              </div>
            </div>
            <p className="[word-break:break-word] font-[\'Inter:Semi_Bold\'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#55606b] text-[14px] whitespace-nowrap" data-node-id="226:1779">{`Senior Financial Analyst & Chief Risk Officer at Finbloom Capital`}</p>
            <p className="[word-break:break-word] font-[\'Inter:Regular\'] font-normal leading-[1.6] min-w-full not-italic relative shrink-0 text-[#55606b] text-[15px] w-[min-content]" data-node-id="226:1780">
              Oluwaseun has over 12 years of experience analyzing corporate credit risks and treasury operations across West Africa. He is dedicated to helping local SMEs simplify cash forecasting, optimize transaction liquidity, and access collateral-free capital.
            </p>
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-node-id="226:1781" data-name="Author Socials">
              <p className="[word-break:break-word] font-[\'Inter:Bold\'] font-bold leading-[normal] not-italic relative shrink-0 text-[#046675] text-[13px] whitespace-nowrap" data-node-id="226:1782">CONNECT WITH OLUWASEUN:</p>
              <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="226:1783" data-name="Frame">
                <div className="relative shrink-0 size-[18px]" data-node-id="226:1934" data-name="linkedin"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLinkedin1} /></div>
                <div className="relative shrink-0 size-[18px]" data-node-id="226:1937" data-name="twitter"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTwitter1} /></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles Section - with responsive padding */}
      <div className="bg-white border-[#e7e5e1] border-b border-solid border-t content-stretch flex flex-col gap-[40px] items-start md:px-[120px] px-[20px] py-[80px] relative shrink-0 w-full" data-node-id="226:1786" data-name="Related Articles Section">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[normal] relative shrink-0 w-full whitespace-nowrap" data-node-id="226:1787" data-name="Section Header">
          <p className="font-[\'Inter:Bold\'] font-bold not-italic relative shrink-0 text-[#046675] text-[14px] tracking-[1px]" data-node-id="226:1788">CONTINUE READING</p>
          <p className="font-[\'Plus_Jakarta_Sans:ExtraBold\'] font-extrabold relative shrink-0 text-[#062530] text-[32px]" data-node-id="226:1789">More practical guides for SME success</p>
        </div>
        <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-node-id="226:1790" data-name="Articles Grid">
          {[ /* array of article objects */
            { thumb: imgThumbnail, cat: "FINANCING TIPS", title: "How to Choose the Right Financing for Your Growing Business", desc: "Not all capital is created equal. Learn the structural differences between Invoice Factoring and SME Growth Loans.", author: "Timothy Adeyemi", date: "Feb 28, 2026" },
            { thumb: imgThumbnail1, cat: "BUSINESS GROWTH", title: "Scaling Your Distribution Network Across Southwest Nigeria", desc: "Strategic distribution planning is key. Here are the 5 logistics traps to avoid when expanding beyond Lagos.", author: "Faith Adeyemi", date: "Feb 24, 2026" },
            { thumb: imgThumbnail2, cat: "CASH FLOW", title: "6 Invoicing Best Practices to Shorten Your Payment Terms", desc: "Simple, highly actionable updates you can make to your invoice templates to ensure prompt customer responses and transfers.", author: "Timothy Adeyemi", date: "Feb 05, 2026" },
          ].map((a, i) => (
            <div key={i} className="bg-white border border-[#e7e5e1] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[16px]">
              <div className="aspect-[8/5] relative shrink-0 w-full">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={a.thumb} />
              </div>
              <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative shrink-0 w-full">
                <p className="[word-break:break-word] font-[\'Inter:Bold\'] font-bold leading-[normal] not-italic relative shrink-0 text-[#eb5b18] text-[13px] tracking-[1px] whitespace-nowrap">{a.cat}</p>
                <p className="[word-break:break-word] font-[\'Plus_Jakarta_Sans:ExtraBold\'] font-extrabold leading-[1.3] min-w-full overflow-hidden relative shrink-0 text-[#062530] text-[18px] text-ellipsis w-[min-content]">{a.title}</p>
                <p className="[word-break:break-word] font-[\'Inter:Regular\'] font-normal leading-[1.5] min-w-full not-italic overflow-hidden relative shrink-0 text-[#55606b] text-[14px] text-ellipsis w-[min-content]">{a.desc}</p>
                <div className="h-0 relative shrink-0 w-full"><div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgLine} /></div></div>
                <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] not-italic relative shrink-0 text-[13px] w-full whitespace-nowrap">
                  <p className="font-[\'Inter:Medium\'] font-medium relative shrink-0 text-[#55606b]">{a.author}</p>
                  <p className="font-[\'Inter:Regular\'] font-normal relative shrink-0 text-[#8b939c]">{a.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
