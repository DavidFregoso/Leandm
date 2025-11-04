import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between text-sm">
        <div>
          <p className="font-semibold">LEAN DATA MANAGER</p>
          <p className="mt-2 opacity-80">© {new Date().getFullYear()} Todos los derechos reservados.</p>
        </div>
        <div className="flex gap-4">
          <Link to="/privacy" className="underline-offset-2 hover:underline">
            Aviso de Privacidad
          </Link>
          <Link to="/terms" className="underline-offset-2 hover:underline">
            Términos y Condiciones
          </Link>
        </div>
        <p className="text-xs uppercase tracking-wider">Powered by Redycom S.A. de C.V.</p>
      </div>
    </footer>
  );
};

export default Footer;
