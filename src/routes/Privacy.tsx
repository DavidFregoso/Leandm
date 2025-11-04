const Privacy = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <header>
          <h1 className="text-3xl font-bold text-primary">Aviso de Privacidad</h1>
          <p className="mt-4 text-text/70">
            Este aviso es un placeholder profesional. Sustituye el contenido con el documento validado por tu equipo legal.
          </p>
        </header>
        <article className="space-y-6 text-text/80">
          <section>
            <h2 className="text-xl font-semibold text-text">1. Responsable</h2>
            <p>
              LEAN DATA MANAGER, representado por Redycom S.A. de C.V., es responsable del uso y protección de sus datos personales.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-text">2. Finalidades del tratamiento</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Atender solicitudes de información, demos y materiales descargables.</li>
              <li>Personalizar propuestas comerciales y soporte postventa.</li>
              <li>Cumplir con obligaciones contractuales y regulatorias.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-text">3. Datos personales recabados</h2>
            <p>Podemos recabar datos de identificación, contacto, laborales y relacionados con procesos productivos.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-text">4. Transferencias</h2>
            <p>
              Compartiremos datos únicamente con proveedores que apoyen la operación (por ejemplo, servicios cloud) y siempre con medidas de seguridad adecuadas.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-text">5. Derechos ARCO</h2>
            <p>
              Para ejercer sus derechos de acceso, rectificación, cancelación u oposición, escriba a <strong>privacidad@leandm.dev</strong>.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-text">6. Cambios al aviso</h2>
            <p>
              Cualquier actualización se publicará en este sitio web con la fecha de última modificación.
            </p>
          </section>
        </article>
      </div>
    </section>
  );
};

export default Privacy;
