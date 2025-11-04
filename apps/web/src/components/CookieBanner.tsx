import { useEffect, useState } from 'react';

const STORAGE_KEY = 'cookie_consent';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const storedConsent = window.localStorage.getItem(STORAGE_KEY);
    setIsVisible(storedConsent !== 'accepted');
  }, []);

  const handleAccept = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, 'accepted');
    }
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-primary text-white">
      <div className="max-w-5xl mx-auto px-4 py-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm sm:text-base">
          Usamos cookies para analizar nuestro tráfico y mejorar tu experiencia. ¿Aceptas?
        </p>
        <button
          onClick={handleAccept}
          className="inline-flex items-center justify-center px-5 py-2 rounded-md bg-white text-primary font-semibold hover:bg-white/90 transition"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
