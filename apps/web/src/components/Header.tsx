import { MouseEvent, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { href: '#hero', label: 'Inicio' },
  { href: '#acciones', label: 'Acciones inmediatas' },
  { href: '#historia', label: 'Historia' },
  { href: '#oferta', label: 'Oferta' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contacto', label: 'Contacto' },
];

const scrollToSection = (hash: string) => {
  const id = hash.replace('#', '');
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const Header = () => {
  const [open, setOpen] = useState(false);
  const calendlyUrl = useMemo(() => import.meta.env.VITE_CALENDLY_URL || '#', []);
  const basePath = useMemo(() => import.meta.env.BASE_URL || '/', []);
  const homeHref = basePath.endsWith('/') ? `${basePath}#/` : `${basePath}/#/`;
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToSection(href), 150);
    } else {
      scrollToSection(href);
    }
  };

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToSection('#hero'), 150);
    } else {
      scrollToSection('#hero');
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a href={homeHref} onClick={handleLogoClick} className="text-lg font-bold tracking-tight text-sky-300">
          Lean Data Manager
        </a>
        <button
          className="inline-flex items-center gap-2 rounded-md border border-slate-700 px-3 py-2 text-sm font-medium text-slate-50 lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="primary-navigation"
        >
          <span>{open ? 'Cerrar' : 'Menú'}</span>
        </button>
        <nav
          id="primary-navigation"
          className={`${open ? 'block' : 'hidden'} absolute left-0 top-full w-full border-b border-slate-800 bg-slate-950 lg:static lg:block lg:w-auto lg:border-none`}
        >
          <ul className="flex flex-col gap-4 px-4 py-4 text-sm lg:flex-row lg:items-center lg:gap-6 lg:px-0 lg:py-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={`${basePath}${link.href}`}
                  className="font-medium text-slate-200 no-underline hover:text-sky-300"
                  onClick={(event) => handleNavClick(event, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={calendlyUrl}
                className="inline-flex items-center rounded-md bg-sky-500 px-4 py-2 font-semibold text-slate-950 transition hover:bg-sky-400"
              >
                Agendar demo
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
