const StorySolution = () => {
  return (
    <section id="historia" className="bg-slate-950">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-20 md:grid-cols-2">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-white">Problemas actuales</h2>
          <ul className="space-y-3 text-slate-300">
            <li>La información llega tarde a las oficinas.</li>
            <li>No hay control de reprocesos ni de retrabajos.</li>
            <li>Se duplican registros y nadie confía en los datos.</li>
            <li>No existe trazabilidad clara entre operadores, turnos y líneas.</li>
          </ul>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-white">Solución LDM</h2>
          <p className="text-slate-300">
            Implementamos kioskos táctiles entre líneas para registrar producto terminado, tiempos muertos y rechazos.
            Visualiza en tiempo real tu Rendimiento, Disponibilidad y OEE con líneas de tiempo claras. Configura roles de turno
            que enlazan operador, línea y horario sin que los colaboradores memoricen usuarios y contraseñas.
          </p>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-xl font-semibold text-white">A futuro inmediato</h3>
            <ul className="mt-4 space-y-2 text-slate-300">
              <li>Integración con tu ERP, etiquetas para tarimas e impresión directa desde kiosko.</li>
              <li>Dashboards abiertos en planta, sensores, cámaras y PLCs para Industria 4.0.</li>
              <li>Un agente de IA que acompaña a dirección para priorizar inversiones y mejoras.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySolution;
