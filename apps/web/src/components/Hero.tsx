import { useMemo } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const calendlyUrl = useMemo(() => import.meta.env.VITE_CALENDLY_URL || '#', []);

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-20 text-center">
        <p className="rounded-full border border-sky-500/40 bg-sky-500/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-sky-200">
          Lean Data Manager
        </p>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
          ¿Quieres ahorrar en líneas de producción?
        </h1>
        <p className="max-w-2xl text-lg text-slate-200">
          ¿Quieres ahorrar dinero en la toma de decisiones? LDM registra en piso, calcula tu OEE en tiempo real y te muestra dónde estás perdiendo dinero.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href={calendlyUrl}
            className="inline-flex items-center justify-center rounded-md bg-sky-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-400"
          >
            Agendar demo
          </a>
          <Link
            to="/checklist"
            className="inline-flex items-center justify-center rounded-md border border-slate-700 px-6 py-3 font-semibold text-slate-100 transition hover:border-sky-400 hover:text-sky-300"
          >
            Descargar checklist OEE
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
