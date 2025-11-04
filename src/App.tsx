import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Checklist from './routes/Checklist';
import Thanks from './routes/Thanks';
import Privacy from './routes/Privacy';
import Terms from './routes/Terms';
import CookieConsentProvider from './context/CookieConsentContext';
import Layout from './components/Layout';

function App() {
  return (
    <CookieConsentProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checklist" element={<Checklist />} />
          <Route path="/gracias" element={<Thanks />} />
          <Route path="/privacidad" element={<Privacy />} />
          <Route path="/terminos" element={<Terms />} />
        </Routes>
      </Layout>
    </CookieConsentProvider>
  );
}

export default App;
