const Privacy = () => {
  return (
    <div className="bg-slate-950">
      <div className="mx-auto max-w-4xl px-4 py-20 text-slate-200">
        <h1 className="text-3xl font-bold text-white">Aviso de privacidad</h1>
        <p className="mt-4 text-slate-300">
          Lean Data Manager (LDM) utiliza tus datos de contacto para coordinar demostraciones, compartir materiales técnicos y dar seguimiento comercial.
        </p>
        <ul className="mt-6 space-y-4 text-sm text-slate-300">
          <li>Los datos solicitados son: nombre, empresa, correo electrónico, teléfono y contexto operativo.</li>
          <li>Almacenamos esta información en herramientas CRM y de automatización para responder a tus solicitudes.</li>
          <li>No vendemos ni cedemos tus datos a terceros ajenos a Redycom S.A. de C.V.</li>
          <li>Puedes solicitar acceso, rectificación o eliminación escribiendo a <a href="mailto:hola@leandm.dev" className="text-sky-300">hola@leandm.dev</a>.</li>
          <li>Utilizamos analítica (GA4, Microsoft Clarity y Cloudflare Web Analytics) para mejorar el sitio. Puedes desactivar cookies en tu navegador.</li>
        </ul>
      </div>
    </div>
  );
};

export default Privacy;
