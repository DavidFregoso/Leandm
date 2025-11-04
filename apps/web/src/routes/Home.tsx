import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Solution from '../components/Solution';
import Roadmap from '../components/Roadmap';
import OfferStack from '../components/OfferStack';
import FAQ from '../components/FAQ';
import LeadForm from '../components/LeadForm';

const Home = () => {
  return (
    <div className="space-y-16 lg:space-y-24">
      <Hero />
      <Problem />
      <Solution />
      <Roadmap />
      <OfferStack />
      <section className="py-16 lg:py-24 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary">Agenda una demo y descubre tus puntos ciegos</h2>
            <p className="mt-4 text-lg text-text/80">
              Muestra cómo LDM conecta tus kioskos, operadores y ERP para revelar el OEE real y eliminar la captura manual.
            </p>
            <ul className="mt-6 space-y-3 text-text/80 list-disc list-inside">
              <li>Identifica tiempos muertos y rechazos en minutos.</li>
              <li>Obtén dashboards en vivo para jefes de producción y dirección.</li>
              <li>Alinea datos de piso con tus procesos ISO9001 y ERP.</li>
            </ul>
          </div>
          <div className="bg-white border border-muted rounded-2xl p-8 shadow-lg">
            <LeadForm />
          </div>
        </div>
      </section>
      <FAQ />
    </div>
  );
};

export default Home;
