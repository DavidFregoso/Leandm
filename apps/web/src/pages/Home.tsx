import ActionsNow from '../components/ActionsNow';
import FAQ from '../components/FAQ';
import Hero from '../components/Hero';
import LeadForm from '../components/LeadForm';
import OfferStack from '../components/OfferStack';
import StorySolution from '../components/StorySolution';

const Home = () => {
  return (
    <div>
      <Hero />
      <ActionsNow />
      <StorySolution />
      <OfferStack />
      <section id="contacto" className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="grid gap-12 lg:grid-cols-[2fr,1fr]">
            <LeadForm />
            <aside className="space-y-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-sm text-slate-300">
              <h3 className="text-xl font-semibold text-white">¿Por qué decidir hoy?</h3>
              <ul className="space-y-3">
                <li>Visualiza pérdidas económicas por línea y turno en minutos.</li>
                <li>Elimina el papeleo duplicado con registros digitales inmediatos.</li>
                <li>Prepara a tu planta para integración con sensores, cámaras y ERP.</li>
              </ul>
            </aside>
          </div>
        </div>
      </section>
      <FAQ />
    </div>
  );
};

export default Home;
