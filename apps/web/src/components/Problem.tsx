const items = [
  {
    title: 'Reportes en Papel',
    description: 'La información de paros y rechazos llega en papel o Excel, 24 horas tarde.',
    icon: (
      <svg className="h-10 w-10 text-[#003366]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="12" y="6" width="24" height="36" rx="4" />
        <line x1="18" y1="16" x2="30" y2="16" />
        <line x1="18" y1="24" x2="30" y2="24" />
        <line x1="18" y1="32" x2="26" y2="32" />
      </svg>
    ),
  },
  {
    title: 'Datos Duplicados',
    description: 'Múltiples registros, datos que no cuadran, y nadie confía en los números del OEE.',
    icon: (
      <svg className="h-10 w-10 text-[#003366]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="18" cy="16" r="6" />
        <circle cx="30" cy="32" r="6" />
        <path d="M22 21l4 6" />
      </svg>
    ),
  },
  {
    title: 'Sin Trazabilidad',
    description:
      'Es imposible saber qué operador, turno o línea fue responsable de un lote defectuoso o un paro mayor.',
    icon: (
      <svg className="h-10 w-10 text-[#003366]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M24 6v10" />
        <circle cx="24" cy="26" r="6" />
        <path d="M18 32l-6 10h24l-6-10" />
      </svg>
    ),
  },
  {
    title: 'Decisiones a Ciegas',
    description:
      'Tomas decisiones de inversión y mejora basadas en intuición, no en datos reales de tus pérdidas.',
    icon: (
      <svg className="h-10 w-10 text-[#003366]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M24 10c-9 0-16 8-16 14 4 6 9 14 16 14s12-8 16-14c0-6-7-14-16-14z" />
        <circle cx="24" cy="24" r="4" />
      </svg>
    ),
  },
];

const Problem = () => {
  return (
    <section id="problema" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-[#003366]">Si no puedes medirlo, no puedes mejorarlo.</h2>
          <p className="mt-3 text-lg text-[#2E2E2E]">¿Tu piso de producción sigue siendo una caja negra?</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {items.map((item) => (
            <div key={item.title} className="flex gap-4 rounded-xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex-shrink-0">{item.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-[#003366]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#2E2E2E]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
