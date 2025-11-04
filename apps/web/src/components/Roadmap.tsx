const Roadmap = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary">Más que un software, un Ecosistema de Industria 4.0</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-white border border-muted p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-secondary">Próximamente</h3>
            <ul className="mt-4 space-y-3 text-text/80 list-disc list-inside">
              <li>Conexión con tu ERP.</li>
              <li>Generación de etiquetas para tarimas.</li>
              <li>Impresión directa desde kiosko.</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white border border-muted p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-secondary">Visión a Futuro</h3>
            <ul className="mt-4 space-y-3 text-text/80 list-disc list-inside">
              <li>Integración con sensores, cámaras y PLCs.</li>
              <li>Agente de IA para la alta dirección.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
