const Solution = () => {
  return (
    <section id="solucion" className="bg-slate-50 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="text-3xl font-bold text-[#003366]">Tu OEE en Tiempo Real. Simple y Confiable.</h2>
          <p className="mt-4 text-lg text-[#2E2E2E]">
            LDM es una plataforma web que digitaliza tu piso de producción para darte una sola fuente de verdad.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#2E2E2E]">
            Conectamos a tus operadores, líderes y máquinas en un solo lugar. Visualiza en tiempo real tu Rendimiento,
            Disponibilidad y Calidad. Detecta paros de máquina en el minuto que suceden, no al día siguiente.
          </p>
        </div>
        <div className="relative">
          <div className="rounded-3xl border border-[#00B3B3] bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold uppercase tracking-wide text-[#00B3B3]">LDM Monitor</span>
              <span className="rounded-full bg-[#003366] px-3 py-1 text-xs font-semibold text-white">OEE Tiempo Real</span>
            </div>
            <div className="mt-6 grid gap-4 text-sm text-[#2E2E2E]">
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-wide text-[#003366]">Línea 3 - Turno 1</p>
                <p className="mt-2 text-2xl font-bold text-[#003366]">OEE 90%</p>
                <div className="mt-3 space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span>Rendimiento</span>
                    <span className="font-semibold text-[#16a34a]">95%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Disponibilidad</span>
                    <span className="font-semibold text-[#f59e0b]">82%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Calidad</span>
                    <span className="font-semibold text-[#ef4444]">74%</span>
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-wide text-[#003366]">Alertas inmediatas</p>
                <ul className="mt-2 space-y-2 text-sm">
                  <li className="flex items-center justify-between text-[#003366]">
                    <span>Paro por mantenimiento</span>
                    <span className="rounded-full bg-[#ef4444]/10 px-2 py-0.5 text-xs font-semibold text-[#ef4444]">01:32</span>
                  </li>
                  <li className="flex items-center justify-between text-[#003366]">
                    <span>Cambio de modelo</span>
                    <span className="rounded-full bg-[#f59e0b]/10 px-2 py-0.5 text-xs font-semibold text-[#f59e0b]">00:12</span>
                  </li>
                  <li className="flex items-center justify-between text-[#003366]">
                    <span>Rechazo calidad</span>
                    <span className="rounded-full bg-[#16a34a]/10 px-2 py-0.5 text-xs font-semibold text-[#16a34a]">3 piezas</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="absolute -right-6 -top-6 hidden h-20 w-20 rounded-full border-4 border-white bg-[#00B3B3] text-white shadow-lg md:grid place-content-center">
            <span className="text-sm font-semibold">24/7</span>
            <span className="text-xs">Monitoreo</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
