const actions = [
  'Vendemos kioskos para registros.',
  'Cámaras con inteligencia artificial para que no cambies tu manera de registrar.',
  'Puedes registrar desde tu laptop.',
  'Puedes ver los resultados de tu maquinaria (OEE) en tiempo real y tomar decisiones.',
  'Organiza tus operadores y turnos y enlaza competitividad.',
  'No desperdicies tiempo de tus líderes/supervisores en transcribir lo que los operadores hacen: nosotros te damos la solución.',
  'Etiquetas para ahorro de embarques.',
  'Solución a tu medida.',
  'Integración a tu ERP.',
];

const ActionsNow = () => {
  return (
    <section id="acciones" className="bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="mb-8 flex flex-col gap-3 text-center">
          <h2 className="text-3xl font-bold text-white">Acciones inmediatas</h2>
          <p className="text-slate-300">Así empezamos a generar ahorros desde el primer día.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {actions.map((item) => (
            <div key={item} className="rounded-xl border border-slate-800 bg-slate-950/60 p-6 shadow-lg shadow-slate-950/40">
              <p className="text-sm text-slate-200">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActionsNow;
