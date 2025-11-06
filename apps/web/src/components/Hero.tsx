const backgroundUrl =
  'https://images.unsplash.com/photo-1581092334504-25b1c2b1d396?auto=format&fit=crop&w=1600&q=80';

const Hero = () => {
  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL;

  const handleCalendly = () => {
    if (calendlyUrl) {
      window.open(calendlyUrl, '_blank', 'noopener');
    } else {
      document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleScroll = () => {
    const section = document.getElementById('como-funciona');
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[#003366] text-white"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundUrl})`, filter: 'blur(6px)', opacity: 0.35 }}
        aria-hidden
      ></div>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 py-24 md:flex-row md:items-center">
        <div className="space-y-6 md:w-1/2">
          <p className="inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-[#00B3B3]">
            Lean Data Manager
          </p>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Deja de perder dinero en tu línea de producción.
          </h1>
          <p className="text-lg text-slate-100">
            LDM (Lean Data Manager) es la plataforma web que registra tu piso, calcula tu OEE en tiempo real y te muestra
            exactamente dónde actuar para recuperar la eficiencia perdida.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={handleCalendly}
              className="inline-flex items-center justify-center rounded-md bg-[#00B3B3] px-6 py-3 text-base font-semibold text-[#003366] shadow-lg transition hover:bg-[#02c7c7]"
            >
              Agendar Demo de 30 min
            </button>
            <button
              type="button"
              onClick={handleScroll}
              className="inline-flex items-center justify-center rounded-md border border-white/70 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Ver cómo funciona ↓
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="rounded-3xl bg-white/95 p-6 text-[#2E2E2E] shadow-2xl">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-[#003366]">Dashboard OEE</h2>
              <span className="text-sm text-slate-500">Tiempo real</span>
            </div>
            <p className="mt-4 text-sm text-slate-600">
              Rendimiento, Disponibilidad y Calidad por turno y línea.
            </p>
            <svg viewBox="0 0 360 200" className="mt-6 w-full">
              <defs>
                <linearGradient id="oeeCard" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#00B3B3" />
                  <stop offset="100%" stopColor="#003366" />
                </linearGradient>
              </defs>
              <rect x="20" y="30" width="320" height="32" rx="16" fill="#e2e8f0" />
              <rect x="20" y="30" width="288" height="32" rx="16" fill="#16a34a" />
              <text x="24" y="52" fill="#0f172a" fontSize="16" fontWeight="600">
                OEE Global
              </text>
              <text x="300" y="52" textAnchor="end" fill="#0f172a" fontSize="16" fontWeight="700">
                90%
              </text>

              <rect x="20" y="96" width="320" height="32" rx="16" fill="#e2e8f0" />
              <rect x="20" y="96" width="240" height="32" rx="16" fill="#fbbf24" />
              <text x="24" y="118" fill="#0f172a" fontSize="16" fontWeight="600">
                Disponibilidad
              </text>
              <text x="300" y="118" textAnchor="end" fill="#0f172a" fontSize="16" fontWeight="700">
                75%
              </text>

              <rect x="20" y="162" width="320" height="32" rx="16" fill="#e2e8f0" />
              <rect x="20" y="162" width="176" height="32" rx="16" fill="#ef4444" />
              <text x="24" y="184" fill="#0f172a" fontSize="16" fontWeight="600">
                Calidad
              </text>
              <text x="300" y="184" textAnchor="end" fill="#0f172a" fontSize="16" fontWeight="700">
                55%
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
