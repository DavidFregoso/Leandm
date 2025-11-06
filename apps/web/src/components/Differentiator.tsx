const steps = [
  {
    title: 'Líder',
    description:
      "El Supervisor asigna el rol de turno desde su PC o tablet (Ej: 'Operador David Fregoso -> Línea 3 -> Turno 1').",
  },
  {
    title: 'Operador',
    description:
      "El Operador solo reporta el evento en el Kiosko (Ej: 'Paro de máquina', 'Rechazo de calidad'). Nunca necesita iniciar sesión, usar contraseñas ni identificarse.",
  },
  {
    title: 'LDM',
    description:
      'LDM vincula automáticamente el evento con el operador, turno, línea y horario correctos. Obtienes trazabilidad completa con cero esfuerzo del operador.',
  },
];

const Differentiator = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-[#003366]">Trazabilidad Total. Cero Fricción para el Operador.</h2>
          <p className="mt-3 text-lg text-[#2E2E2E]">
            El mayor reto de la digitalización es el rechazo del operador. LDM lo resuelve eliminando la fricción.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="relative rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00B3B3]/10 text-xl font-bold text-[#003366]">
                {index + 1}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[#003366]">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#2E2E2E]">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden md:block">
                  <svg
                    className="absolute right-[-24px] top-1/2 h-12 w-12 -translate-y-1/2 text-[#00B3B3]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M5 12h14" strokeLinecap="round" />
                    <path d="M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiator;
