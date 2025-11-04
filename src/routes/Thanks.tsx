import { useEffect, useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { trackEvent } from '../hooks/useAnalytics';

const messages: Record<string, { title: string; description: string }> = {
  demo: {
    title: '¡Gracias por agendar tu demo!',
    description:
      'Nuestro equipo te contactará en las próximas horas para confirmar la sesión y preparar un recorrido personalizado por tus líneas de producción.'
  },
  lead: {
    title: '¡Tu solicitud fue recibida!',
    description:
      'Analizaremos tu información y nos comunicaremos para diseñar el piloto que libere tiempos muertos y eleve tu OEE.'
  },
  checklist: {
    title: 'Checklist OEE en camino',
    description:
      'En minutos recibirás un correo con el enlace de descarga. Revisa tu carpeta de spam o promociones si no lo encuentras.'
  }
};

const eventMap: Record<string, string> = {
  demo: 'demo_booked',
  checklist: 'ebook_downloaded',
  lead: 'lead_confirmed'
};

const Thanks = () => {
  const location = useLocation();
  const params = useMemo(() => new URLSearchParams(location.search), [location.search]);
  const type = params.get('type') ?? 'lead';
  const message = messages[type] ?? messages.lead;

  useEffect(() => {
    const eventName = eventMap[type];
    if (eventName) {
      trackEvent(eventName, { type });
    }
  }, [type]);

  return (
    <div className="py-24 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-primary">{message.title}</h1>
        <p className="mt-4 text-text/70">{message.description}</p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-3 rounded-lg bg-secondary text-white font-semibold hover:bg-secondary/90 transition"
          >
            Volver al inicio
          </Link>
          <Link
            to="/checklist"
            className="px-6 py-3 rounded-lg border border-secondary text-secondary font-semibold hover:bg-secondary/10 transition"
          >
            Ver checklist OEE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
