const faqs = [
  {
    question: '¿Es para mi empresa?',
    answer:
      'Si tienes líneas de producción con operadores, turnos y retos de calidad o desperdicio, Lean Data Manager se adapta para darte datos en tiempo real y decisiones accionables.',
  },
  {
    question: '¿Reemplaza ERP?',
    answer:
      'LDM complementa tu ERP capturando lo que sucede en el piso. Integraremos tus datos actuales para que la planeación y el ERP reciban información confiable sin cambiar procesos administrativos.',
  },
  {
    question: '¿Dificultad para operadores?',
    answer:
      'Diseñamos kioskos táctiles y flujos guiados para que tus operadores registren en segundos sin capacitación extensa. Roles por turno eliminan contraseñas y mantienen la trazabilidad.',
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="bg-slate-950">
      <div className="mx-auto max-w-4xl px-4 py-20">
        <h2 className="text-3xl font-bold text-center text-white">Preguntas frecuentes</h2>
        <div className="mt-10 space-y-6">
          {faqs.map((faq) => (
            <details key={faq.question} className="rounded-xl border border-slate-800 bg-slate-900/70 p-6">
              <summary className="cursor-pointer text-lg font-semibold text-white">{faq.question}</summary>
              <p className="mt-4 text-slate-300">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
