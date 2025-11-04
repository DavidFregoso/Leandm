const offers = [
  {
    title: 'Cuota de implementación',
    description: 'Un pago único para el setup, onboarding y configuración inicial.'
  },
  {
    title: 'Suscripción mensual',
    description: 'Acceso a la plataforma, actualizaciones y soporte. Descuentos por volumen y prepago.'
  },
  {
    title: 'Kioskos (opcional)',
    description: 'Te ayudamos a seleccionar el hardware o puedes adquirir nuestros kioskos industriales (venta o renta).'
  }
];

const OfferStack = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary">Un modelo simple y escalable</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {offers.map((offer) => (
            <div key={offer.title} className="rounded-2xl border border-muted bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-text">{offer.title}</h3>
              <p className="mt-3 text-text/70">{offer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferStack;
