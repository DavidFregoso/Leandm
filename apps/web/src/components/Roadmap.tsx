const phases = [
  {
    title: 'Fase 1: Conecta tu ERP',
    description:
      'Integramos LDM con tu sistema actual (SAP, Oracle, Microsoft, SAE, Alpha SAI y más). Genera e imprime etiquetas de tarima desde el kiosko.',
  },
  {
    title: 'Fase 2: Automatiza la Planta',
    description:
      'Conecta sensores, PLCs y cámaras para registrar paros, ciclos y producción automáticamente.',
  },
  {
    title: 'Fase 3: Predice con IA',
    description:
      'Agente de IA (en desarrollo) para predecir fallas, optimizar mantenimientos y responder preguntas en tiempo real.',
  },
];

const Roadmap = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#003366]">Tu Socio en la Evolución a Industria 4.0</h2>
        </div>
        <div className="mt-12 space-y-10 border-l-4 border-[#00B3B3] pl-6">
          {phases.map((phase, index) => (
            <div key={phase.title} className="relative rounded-2xl bg-slate-50 p-6 shadow-sm">
              <div className="absolute -left-11 flex h-12 w-12 items-center justify-center rounded-full bg-[#003366] text-lg font-bold text-white">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-[#003366]">{phase.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#2E2E2E]">{phase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
