const steps = [
  {
    number: '01',
    title: 'Registro en kiosko',
    description:
      'Operadores registran producto terminado, tiempos muertos y rechazos en kioskos con pantalla táctil.'
  },
  {
    number: '02',
    title: 'Trazabilidad total',
    description:
      "Supervisores asignan el 'rol de turno' (quién, qué línea, qué horario) vinculando cada registro al operador, sin que ellos inicien sesión."
  },
  {
    number: '03',
    title: 'Visualización inmediata',
    description:
      'Métricas en tiempo real (Rendimiento, Disponibilidad, OEE) para detectar y resolver problemas al instante.'
  }
];

const Solution = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary">Nuestra Solución: Kioskos, Trazabilidad y Dashboards en Vivo</h2>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="rounded-2xl border border-muted bg-muted/40 p-8 shadow-sm">
              <span className="text-sm font-semibold text-secondary">Paso {step.number}</span>
              <h3 className="mt-4 text-xl font-semibold text-text">{step.title}</h3>
              <p className="mt-3 text-text/70">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
