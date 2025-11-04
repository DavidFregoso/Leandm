const Problem = () => {
  const items = [
    {
      title: 'Decisiones tardías',
      description: 'Los problemas se identifican demasiado tarde.',
      icon: (
        <svg className="h-10 w-10 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.25h.007v.008H12v-.008z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Registros duplicados',
      description: 'Se generan múltiples registros con información duplicada.',
      icon: (
        <svg className="h-10 w-10 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5h7.5m-7.5 3h7.5m-7.5 3h3.75" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 21h-3A2.25 2.25 0 014.5 18.75v-12A2.25 2.25 0 016.75 4.5h6.563a2.25 2.25 0 011.591.659l3.187 3.187a2.25 2.25 0 01.659 1.591v8.813A2.25 2.25 0 0016.5 21h-2.25" />
        </svg>
      )
    },
    {
      title: 'Sin trazabilidad',
      description: 'No hay trazabilidad entre los registros físicos y los digitales.',
      icon: (
        <svg className="h-10 w-10 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-9A2.25 2.25 0 002.25 5.25v9A2.25 2.25 0 004.5 16.5H9" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 8.25h1.125a2.25 2.25 0 012.25 2.25v9A2.25 2.25 0 0119.125 21H9.375A2.25 2.25 0 017.125 18.75V18" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 12h3.75" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-primary">¿Tu planta sigue registrando en papel, Excel o pizarrones?</h2>
          <p className="mt-4 text-lg text-text/80">
            Los supervisores recopilan datos manualmente, pero esto causa problemas críticos:
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="bg-white border border-muted rounded-xl p-6 shadow-sm">
              {item.icon}
              <h3 className="mt-4 text-xl font-semibold text-text">{item.title}</h3>
              <p className="mt-2 text-text/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
