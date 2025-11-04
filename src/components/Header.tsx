import { Link } from 'react-router-dom';

const calendlyUrl = import.meta.env.VITE_CALENDLY_URL;

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary tracking-tight">
          LEAN DM
        </Link>
        <a
          href={calendlyUrl ?? '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-secondary text-white font-semibold shadow-sm transition hover:bg-secondary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
        >
          Agendar demo
        </a>
      </div>
    </header>
  );
};

export default Header;
