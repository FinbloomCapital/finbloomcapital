import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import ProductsPage from './pages/products/ProductsPage';
import CashflowFlexPage from './pages/products/CashflowFlexPage';
import AboutPage from './pages/about/AboutPage';
import TermsPage from './pages/terms/TermsPage';
import PrivacyPage from './pages/privacy/PrivacyPage';
import SmoothScrollProvider from './components/shared/SmoothScrollProvider';
import ScrollRevealProvider from './components/shared/ScrollRevealProvider';
import AssetFinanceDesktop from './components/pages/AssetFinanceDesktop';
import ArticleDetailPage from './components/pages/ArticleDetailPage';
import FinsureLoanDesktop from './components/pages/FinsureLoanDesktop';
import LearnLandingPage from './components/pages/LearnLandingPage';
import SecureYieldLoanDesktop from './components/pages/SecureYieldLoanDesktop';
import SmeGrowthLoanDesktop from './components/pages/SmeGrowthLoanDesktop';
import InvoiceFinanceDesktop from './components/pages/InvoiceFinanceDesktop';
import AppShell from './components/layout/AppShell';

export default function App() {
  return (
    <SmoothScrollProvider>
      <ScrollRevealProvider>
        <Routes>
          <Route path="/" element={<AppShell><HomePage /></AppShell>} />
          <Route path="/products" element={<AppShell><ProductsPage /></AppShell>} />
          <Route path="/products/cashflow-flex" element={<AppShell><CashflowFlexPage /></AppShell>} />
          <Route path="/about" element={<AppShell><AboutPage /></AppShell>} />
          <Route path="/terms" element={<AppShell><TermsPage /></AppShell>} />
          <Route path="/privacy" element={<AppShell><PrivacyPage /></AppShell>} />
          <Route path="/asset-finance-desktop" element={<AppShell><AssetFinanceDesktop /></AppShell>} />
          <Route path="/article-detail/:id" element={<AppShell><ArticleDetailPage /></AppShell>} />
          <Route path="/finsure-loan-desktop" element={<AppShell><FinsureLoanDesktop /></AppShell>} />
          <Route path="/learn-landing-page" element={<AppShell><LearnLandingPage /></AppShell>} />
          <Route path="/secure-yield-loan-desktop" element={<AppShell><SecureYieldLoanDesktop /></AppShell>} />
          <Route path="/sme-growth-loan-desktop" element={<AppShell><SmeGrowthLoanDesktop /></AppShell>} />
          <Route path="/invoice-finance-desktop" element={<AppShell><InvoiceFinanceDesktop /></AppShell>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </ScrollRevealProvider>
    </SmoothScrollProvider>
  );
}
