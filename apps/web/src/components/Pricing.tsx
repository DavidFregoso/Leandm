const plans = [
  {
    title: 'Implementación',
    description: 'Cuota única de Onboarding y capacitación en planta.',
  },
  {
    title: 'Suscripción',
    description: 'Soporte continuo, actualizaciones y analítica 24/7.',
  },
  {
    title: 'Hardware Opcional',
    description: 'Kioskos industriales en venta o renta.',
  },
];

const Pricing = () => {
  return (
    <section id="precios" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#003366]">Un Modelo Simple y Escalable</h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.title} className="rounded-2xl border border-[#003366]/15 bg-slate-50 p-8 text-center shadow-sm">
              <h3 className="text-xl font-semibold text-[#003366]">{plan.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#2E2E2E]">{plan.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
