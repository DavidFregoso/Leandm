const columns = [
  {
    title: 'Kioskos Industriales (Opcional)',
    description:
      'Hardware robusto con pantalla táctil, diseñado para uso rudo en piso. Listo para conectarse y usarse.',
  },
  {
    title: 'App Web (Laptop/Tablet)',
    description:
      'Úsalo en cualquier PC, laptop o tablet que ya tengas. Ideal para registros de supervisores y visualización en oficinas.',
  },
  {
    title: 'Automatización (Cámaras/Sensores)',
    description:
      'Integra cámaras con IA para conteo automático o sensores/PLCs para detectar paros sin intervención humana.',
  },
];

const Ecosystem = () => {
  return (
    <section id="como-funciona" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-[#003366]">Un Ecosistema Flexible que se Adapta a Ti</h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title} className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 text-center">
              <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-[#00B3B3]/10">
                <svg className="h-16 w-16 text-[#00B3B3]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="10" y="10" width="28" height="28" rx="6" />
                  <path d="M16 22h16M16 28h16" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#003366]">{column.title}</h3>
              <p className="text-sm leading-relaxed text-[#2E2E2E]">{column.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
