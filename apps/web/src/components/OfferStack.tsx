const OfferStack = () => {
  return (
    <section id="oferta" className="bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white">Oferta y modelo comercial</h2>
          <p className="mt-4 text-lg text-slate-300">
            Cuota de implementación + Suscripción mensual + Kioskos (opcionales).
          </p>
          <p className="mt-3 text-slate-300">
            Descuentos por volumen de líneas, prepago anual y programa de referidos.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-6">
              <h3 className="text-lg font-semibold text-white">Implementación</h3>
              <p className="mt-3 text-sm text-slate-300">
                Onboarding en planta, configuración de líneas y capacitación práctica.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-6">
              <h3 className="text-lg font-semibold text-white">Suscripción</h3>
              <p className="mt-3 text-sm text-slate-300">
                Soporte continuo, evolución del roadmap y analítica disponible 24/7.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-6">
              <h3 className="text-lg font-semibold text-white">Kioskos opcionales</h3>
              <p className="mt-3 text-sm text-slate-300">
                Hardware robusto para piso de producción con garantía y mantenimiento.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <a
              href={import.meta.env.VITE_CALENDLY_URL || '#'}
              className="inline-flex items-center rounded-md bg-sky-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-400"
            >
              Agendar demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferStack;
