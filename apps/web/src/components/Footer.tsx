import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-slate-200">Lean Data Manager</p>
          <p>
            Contacto: <a href="mailto:hola@leandm.dev" className="text-sky-300">hola@leandm.dev</a>
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link to="/privacy" className="hover:text-sky-300">
            Aviso de privacidad
          </Link>
          <Link to="/terms" className="hover:text-sky-300">
            Términos y condiciones
          </Link>
          <a href="https://www.linkedin.com/company/redycom/" target="_blank" rel="noreferrer" className="hover:text-sky-300">
            LinkedIn
          </a>
        </div>
        <p className="text-xs uppercase tracking-wide text-slate-500">Powered by Redycom S.A. de C.V.</p>
      </div>
    </footer>
  );
};

export default Footer;
