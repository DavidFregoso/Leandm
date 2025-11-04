import { useEffect, useState } from 'react';

const STORAGE_KEY = 'ldm-cookie-consent';

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 bg-slate-900/95 text-slate-100 shadow-lg shadow-slate-900/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="leading-relaxed">
          Utilizamos cookies para medir el rendimiento de Lean Data Manager y mejorar tu experiencia. Puedes desactivar el seguimiento en tu navegador cuando lo desees.
        </p>
        <button
          onClick={accept}
          className="inline-flex items-center justify-center rounded-md bg-sky-500 px-4 py-2 font-semibold text-slate-950 transition hover:bg-sky-400"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
