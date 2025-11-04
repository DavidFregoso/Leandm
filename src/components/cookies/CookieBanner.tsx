import { useEffect, useState } from 'react';
import { useCookieConsent } from '../../context/CookieConsentContext';

type CookieBannerProps = {
  consentStatus: 'granted' | 'denied' | 'unknown';
};

const CookieBanner = ({ consentStatus }: CookieBannerProps) => {
  const { grantConsent, denyConsent } = useCookieConsent();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(consentStatus === 'unknown');
  }, [consentStatus]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 inset-x-0 px-4 z-50">
      <div className="max-w-4xl mx-auto bg-white border border-slate-200 shadow-lg rounded-lg p-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-primary">Tu privacidad es prioridad</h2>
          <p className="text-sm text-text/80 mt-2">
            Utilizamos cookies para activar analítica y experiencias personalizadas. Puedes aceptar para habilitar analítica o rechazarla y continuar navegando sin seguimiento.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={denyConsent}
            className="px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary/10 transition"
          >
            Rechazar
          </button>
          <button
            onClick={grantConsent}
            className="px-4 py-2 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
