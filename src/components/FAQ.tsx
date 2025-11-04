import { useState } from 'react';

const questions = [
  {
    question: '¿Es LEAN DATA MANAGER para mi empresa?',
    answer:
      'Ideal si facturas más de 10M MXN al mes, operas líneas de producción, gestionas estándares como ISO9001 y ya cuentas con un ERP que necesitas alimentar con datos confiables.'
  },
  {
    question: '¿Esto reemplaza a mi ERP?',
    answer:
      'No, lo complementa. LEAN DATA MANAGER captura eventos de piso, los normaliza y los integra con tu ERP para que tus procesos administrativos y financieros reflejen lo que sucede en planta en tiempo real.'
  },
  {
    question: '¿Qué tan difícil es para los operadores usarlo?',
    answer:
      'Es muy intuitivo. El operador no necesita iniciar sesión: selecciona su rol de turno y captura en kioskos táctiles con flujos guiados. En minutos adoptan la herramienta y elevan la disciplina operativa.'
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary">Preguntas Frecuentes</h2>
        <div className="mt-8 divide-y divide-muted border border-muted rounded-2xl bg-white">
          {questions.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div key={item.question}>
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-semibold text-text">{item.question}</span>
                  <span className="text-secondary text-2xl" aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-text/80">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
