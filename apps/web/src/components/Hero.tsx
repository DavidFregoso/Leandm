import { Link } from 'react-router-dom';

const calendlyUrl = import.meta.env.VITE_CALENDLY_URL;

const Hero = () => {
  return (
    <section className="bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary leading-tight">
            Detecta problemas antes de que cuesten dinero: registra tiempos muertos y calcula tu OEE en tiempo real.
          </h1>
          <p className="text-lg text-text mt-6 max-w-2xl">
            LEAN DATA MANAGER centraliza capturas en kioskos, conecta con tu ERP y te da tableros listos para decidir.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href={calendlyUrl ?? '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-secondary text-white font-semibold shadow-sm transition hover:bg-secondary/90"
            >
              Agendar demo
            </a>
            <Link
              to="/checklist"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/10 transition"
            >
              Descargar checklist OEE
            </Link>
          </div>
        </div>
        <div className="flex-1 w-full">
          <div className="bg-white shadow-xl rounded-3xl p-8 border border-muted/60">
            <p className="text-sm uppercase tracking-wider text-primary font-semibold">Mecanismo único</p>
            <h2 className="mt-4 text-2xl font-semibold text-text">
              Kioskos en planta + trazabilidad automática + dashboards en vivo.
            </h2>
            <p className="mt-4 text-text/80">
              Captura en piso sin fricción, vincula operadores al instante y visualiza métricas accionables en segundos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
