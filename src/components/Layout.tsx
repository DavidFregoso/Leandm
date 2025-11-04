import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import CookieBanner from './cookies/CookieBanner';
import { useCookieConsent } from '../context/CookieConsentContext';

const navigation = [
  { label: 'Inicio', to: '/' },
  { label: 'Checklist OEE', to: '/checklist' },
  { label: 'Aviso de Privacidad', to: '/privacidad' },
  { label: 'Términos y Condiciones', to: '/terminos' }
];

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { consentStatus } = useCookieConsent();

  const headerClass = useMemo(
    () =>
      'sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-100 shadow-sm transition-colors',
    []
  );

  return (
    <div className="min-h-screen flex flex-col">
      <header className={headerClass}>
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold text-primary">
            LEAN DATA MANAGER
          </Link>
          <div className="hidden md:flex space-x-6 text-sm font-medium text-text/80">
            {navigation.map((item) => (
              <Link key={item.to} to={item.to} className="hover:text-primary transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="md:hidden text-sm text-text/60">
            Navegación
          </div>
        </nav>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-primary text-white py-6 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p>© {new Date().getFullYear()} LEAN DATA MANAGER. Todos los derechos reservados.</p>
          <div className="flex space-x-4">
            <Link to="/privacidad" className="underline-offset-2 hover:underline">
              Aviso de Privacidad
            </Link>
            <Link to="/terminos" className="underline-offset-2 hover:underline">
              Términos y Condiciones
            </Link>
          </div>
          <p className="text-xs uppercase tracking-wide">Powered by Redycom S.A. de C.V.</p>
        </div>
      </footer>
      <CookieBanner consentStatus={consentStatus} />
    </div>
  );
};

export default Layout;
