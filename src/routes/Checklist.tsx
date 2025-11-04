import { useNavigate } from 'react-router-dom';
import LeadForm from '../components/LeadForm';

const Checklist = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-primary">Descarga el Checklist Definitivo para Calcular tu OEE</h1>
        <p className="mt-4 text-lg text-text/80">
          Ingresa tus datos para recibir la guía gratuita y descubre los puntos ciegos en tu línea de producción.
        </p>
        <div className="mt-10 bg-muted/70 border border-muted rounded-2xl p-8 shadow-sm">
          <LeadForm
            leadType="checklist"
            onSuccess={() => navigate('/thanks?type=checklist', { replace: true })}
          />
        </div>
      </div>
    </section>
  );
};

export default Checklist;
