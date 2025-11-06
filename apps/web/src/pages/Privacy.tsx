const Privacy = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-4 py-20 text-[#2E2E2E]">
        <h1 className="text-3xl font-bold text-[#003366]">Aviso de privacidad</h1>
        <p className="mt-4 text-base leading-relaxed">
          Lean Data Manager (LDM) utiliza tus datos de contacto para coordinar demostraciones, compartir materiales técnicos y
          dar seguimiento comercial.
        </p>
        <ul className="mt-6 space-y-4 text-sm leading-relaxed">
          <li>Los datos solicitados son: nombre, empresa, correo electrónico, teléfono y contexto operativo.</li>
          <li>Almacenamos esta información en herramientas CRM y de automatización para responder a tus solicitudes.</li>
          <li>No vendemos ni cedemos tus datos a terceros ajenos a Redycom S.A. de C.V.</li>
          <li>
            Puedes solicitar acceso, rectificación o eliminación escribiendo a{' '}
            <a href="mailto:hola@leandm.dev" className="text-[#003366] underline hover:text-[#00B3B3]">
              hola@leandm.dev
            </a>
            .
          </li>
          <li>
            Utilizamos analítica sin cookies mediante Cloudflare Web Analytics para entender el desempeño del sitio sin
            rastrear información personal.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Privacy;
