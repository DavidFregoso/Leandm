import { useCallback, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const navItems = [
  { label: 'Inicio', targetId: 'inicio' },
  { label: 'El Problema', targetId: 'problema' },
  { label: 'La Solución LDM', targetId: 'solucion' },
  { label: 'Cómo Funciona', targetId: 'como-funciona' },
  { label: 'Precios', targetId: 'precios' },
  { label: 'Agendar Demo', targetId: 'demo', openCalendly: true },
] as const;

type NavItem = (typeof navItems)[number];

const scrollToId = (id: string, attempt = 0): void => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else if (attempt < 5) {
    setTimeout(() => scrollToId(id, attempt + 1), 80);
  }
};

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL;
  const basePath = useMemo(() => (import.meta.env.BASE_URL || '/').replace(/\/$/, ''), []);

  const handleNavigation = useCallback(
    (item: NavItem) => {
      setMenuOpen(false);

      if (item.openCalendly && calendlyUrl) {
        window.open(calendlyUrl, '_blank', 'noopener');
      }

      const goToSection = () => scrollToId(item.targetId);

      if (location.pathname !== '/') {
        navigate('/');
        requestAnimationFrame(() => {
          setTimeout(goToSection, 120);
        });
      } else {
        goToSection();
      }
    },
    [calendlyUrl, location.pathname, navigate],
  );

  return (
    <header className="sticky top-0 z-50 bg-white/90 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a
          href={`${basePath}/#/`}
          onClick={(event) => {
            event.preventDefault();
            handleNavigation(navItems[0]);
          }}
          className="text-lg font-semibold text-[#003366]"
        >
          LDM | Lean Data Manager
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => handleNavigation(item)}
              className="text-sm font-medium text-[#003366] transition hover:text-[#00B3B3]"
            >
              {item.label}
            </button>
          ))}
        </nav>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-[#003366] p-2 text-[#003366] md:hidden"
          aria-label="Abrir menú"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3">
            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavigation(item)}
                className="w-full rounded-md px-3 py-2 text-left text-sm font-semibold text-[#003366] transition hover:bg-slate-100"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Nav;
