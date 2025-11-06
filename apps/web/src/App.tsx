import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Checklist from './pages/Checklist';
import Thanks from './pages/Thanks';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

const App = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Nav />
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
    </div>
  );
};

export default App;
