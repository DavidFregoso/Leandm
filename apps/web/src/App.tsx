import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import Home from './pages/Home';
import Checklist from './pages/Checklist';
import Thanks from './pages/Thanks';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

const AnalyticsListener = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: location.pathname,
        page_location: `${window.location.origin}${window.location.hash}`,
      });
    }
  }, [location]);

  return null;
};

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <AnalyticsListener />
      <CookieBanner />
      <Header />
      <main className="pb-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checklist" element={<Checklist />} />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
