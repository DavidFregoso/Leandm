import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import Home from './routes/Home';
import Checklist from './routes/Checklist';
import Thanks from './routes/Thanks';
import Privacy from './routes/Privacy';
import Terms from './routes/Terms';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-text">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checklist" element={<Checklist />} />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}

export default App;
