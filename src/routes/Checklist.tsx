import LeadForm from '../components/LeadForm';

const Checklist = () => {
  return (
    <div className="bg-gradient-to-b from-white to-slate-50 py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-bold text-primary">Checklist para calcular OEE sin dolores de cabeza</h1>
          <p className="mt-4 text-text/70">
            Descarga la guía práctica para identificar tiempos muertos, clasificar paros y calcular el OEE en cada turno. Incluye formatos editables y recomendaciones de implementación rápida.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-text/80 list-disc list-inside">
            <li>Checklist lista para piso de producción (PDF + editable)</li>
            <li>Guía rápida para categorizar tiempos muertos y micro paros</li>
            <li>Plantilla para comunicar resultados en juntas diarias</li>
          </ul>
        </div>
        <LeadForm
          redirectTo="/gracias?type=checklist"
          leadType="checklist"
          title="Recibe la checklist en tu correo"
          description="Compártenos tus datos y te enviaremos la guía directa a tu bandeja."
        />
      </div>
    </div>
  );
};

export default Checklist;
