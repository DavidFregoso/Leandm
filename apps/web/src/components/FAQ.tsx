import { useState } from 'react';

type Item = {
  question: string;
  answer: string;
};

const items: Item[] = [
  {
    question: '¿Es LDM para mi empresa?',
    answer:
      'Si tienes líneas con operadores/turnos y retos de OEE, calidad o desperdicio, LDM es para ti. Escalamos de 5 a 100+ líneas.',
  },
  {
    question: '¿Reemplaza a mi ERP?',
    answer: 'No. LDM captura la realidad del piso y envía datos limpios al ERP.',
  },
  {
    question: '¿Es difícil para operadores?',
    answer:
      "No usan contraseñas; el líder asigna turno y el operador presiona botones grandes (p.ej., 'Paro por Mantenimiento').",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-center text-3xl font-bold text-[#003366]">Preguntas Frecuentes</h2>
        <div className="mt-12 space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className="overflow-hidden rounded-2xl border border-[#003366]/15 bg-white">
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-6 py-4 text-left text-lg font-semibold text-[#003366]"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  {item.question}
                  <span className="text-2xl text-[#00B3B3]">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                  <div className="border-t border-slate-100 px-6 py-4 text-sm leading-relaxed text-[#2E2E2E]">
                    {item.answer}
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
