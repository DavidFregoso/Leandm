const Privacy = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-primary">Aviso de Privacidad</h1>
        <p className="mt-6 text-text/70">
          Este aviso de privacidad se rige conforme a la legislación mexicana aplicable. Sustituye los textos placeholder antes del despliegue final.
        </p>
        <section className="mt-8 space-y-6 text-sm text-text/80 leading-relaxed">
          <article>
            <h2 className="text-xl font-semibold text-primary">1. Identidad y domicilio del responsable</h2>
            <p>
              LEAN DATA MANAGER, operado por Redycom S.A. de C.V., con domicilio en {/* Inserta domicilio legal */}, es responsable del tratamiento de los datos personales proporcionados por los usuarios.
            </p>
          </article>
          <article>
            <h2 className="text-xl font-semibold text-primary">2. Finalidades del tratamiento</h2>
            <p>
              Los datos personales recopilados se emplearán para dar seguimiento a solicitudes de demostración, compartir materiales informativos, gestionar propuestas comerciales y dar cumplimiento a obligaciones legales.
            </p>
          </article>
          <article>
            <h2 className="text-xl font-semibold text-primary">3. Datos personales recabados</h2>
            <p>
              Nombre, empresa, correo electrónico, teléfono y comentarios relacionados con los requerimientos de manufactura. {/* Ajustar según formularios definitivos */}
            </p>
          </article>
          <article>
            <h2 className="text-xl font-semibold text-primary">4. Mecanismos para revocar consentimiento</h2>
            <p>
              Puedes ejercer tus derechos ARCO enviando un correo a {/* Correo de contacto */} con copia de identificación oficial. Se dará respuesta en un plazo máximo de 15 días hábiles.
            </p>
          </article>
          <article>
            <h2 className="text-xl font-semibold text-primary">5. Transferencias y terceros</h2>
            <p>
              Compartiremos información únicamente con proveedores tecnológicos necesarios para la operación (AWS, Cloudflare, proveedores de analítica). Se formalizarán acuerdos de confidencialidad y protección de datos.
            </p>
          </article>
          <article>
            <h2 className="text-xl font-semibold text-primary">6. Cambios al aviso</h2>
            <p>
              Cualquier modificación se comunicará en este sitio web con al menos 5 días hábiles de anticipación. Te invitamos a consultarlo de forma periódica.
            </p>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
