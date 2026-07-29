import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import ProductsPage from './pages/products/ProductsPage';
import CashflowFlexPage from './pages/products/CashflowFlexPage';
import AboutPage from './pages/about/AboutPage';
import TermsPage from './pages/terms/TermsPage';
import PrivacyPage from './pages/privacy/PrivacyPage';
import SmoothScrollProvider from './components/shared/SmoothScrollProvider';
import ScrollRevealProvider from './components/shared/ScrollRevealProvider';

export default function App() {
  return (
    <SmoothScrollProvider>
      <ScrollRevealProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/cashflow-flex" element={<CashflowFlexPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </ScrollRevealProvider>
    </SmoothScrollProvider>
  );
}
