const Footer = () => {
  const basePath = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');

  return (
    <footer className="bg-[#002448] py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm md:flex-row">
        <div className="flex items-center gap-4">
          <a href={`${basePath}/#/privacy`} className="hover:text-[#00B3B3]">
            Aviso de Privacidad
          </a>
          <a href={`${basePath}/#/terms`} className="hover:text-[#00B3B3]">
            Términos y Condiciones
          </a>
        </div>
        <p className="text-center md:text-right">
          Powered by{' '}
          <a
            href="https://www.redycom.com.mx"
            target="_blank"
            rel="noopener"
            className="font-semibold text-[#00B3B3] hover:text-white"
          >
            Redycom S.A. de C.V.
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
