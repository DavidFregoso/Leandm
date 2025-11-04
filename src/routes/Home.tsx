import { ArrowLongRightIcon, CheckCircleIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import LeadForm from '../components/LeadForm';
import { trackEvent } from '../hooks/useAnalytics';

const steps = [
  {
    title: 'Captura estructurada',
    description: 'Digitaliza incidencias con kioskos táctiles en piso y formularios guiados para operadores.',
    icon: '🧾'
  },
  {
    title: 'Visualiza en tiempo real',
    description: 'Tableros OEE listos para planta, gerencia y dirección en un solo clic.',
    icon: '📊'
  },
  {
    title: 'Decide con confianza',
    description: 'Analiza tendencias, identifica cuellos de botella y automatiza alertas de mantenimiento.',
    icon: '⚙️'
  }
];

const modules = [
  {
    title: 'Kiosko de captura',
    description: 'Terminales industriales resistentes con flujos intuitivos para operadores.',
    icon: <ShieldCheckIcon className="h-10 w-10 text-secondary" />
  },
  {
    title: 'Dashboards OEE',
    description: 'Indicadores de disponibilidad, desempeño y calidad con alertas configurables.',
    icon: <ArrowLongRightIcon className="h-10 w-10 text-secondary" />
  },
  {
    title: 'Integraciones ERP',
    description: 'Conectores listos para SAP, Microsoft Dynamics y ERPs industriales regionales.',
    icon: <CheckCircleIcon className="h-10 w-10 text-secondary" />
  }
];

const bonuses = [
  'Plantillas de reportes diarios y semanales (Excel y Power BI)',
  'Onboarding presencial para supervisores y responsables de planta',
  'Reportes automáticos por correo con alertas de tiempo muerto'
];

const faqs = [
  {
    question: '¿Cómo se integra con mi ERP actual?',
    answer:
      'Nuestro equipo configura conectores seguros vía API o archivos planos programados. Validamos credenciales, mapeamos catálogos y aseguramos sincronización bidireccional con tus sistemas existentes.'
  },
  {
    question: '¿Qué tan seguro es el sistema?',
    answer:
      'Toda la infraestructura opera en AWS con cifrado en reposo y tránsito. Incluimos Turnstile, WAF y controles de acceso. También podemos alinearnos a tus políticas de ciberseguridad.'
  },
  {
    question: '¿Los operadores adoptarán el kiosko?',
    answer:
      'Los flujos se diseñaron para uso táctil con lenguaje claro. Incluimos capacitación presencial, materiales visuales y soporte en planta las primeras semanas.'
  },
  {
    question: '¿Cuál es el ROI típico?',
    answer:
      'Clientes reducen hasta 18% los tiempos muertos en los primeros tres meses. El dashboard de OEE evidencia decisiones más rápidas y ahorros en turnos extra.'
  },
  {
    question: '¿Cuánto tarda la implementación?',
    answer:
      'El piloto se ejecuta en 3 semanas y la implementación completa en 6-8 semanas según el número de líneas y turnos.'
  }
];

const logos = ['Logo 1', 'Logo 2', 'Logo 3', 'Logo 4'];

const testimonials = [
  {
    name: 'María López',
    role: 'Directora de Operaciones - Manufacturas del Norte',
    quote:
      '“LEAN DATA MANAGER nos permitió ver el OEE de cada línea en tiempo real. Tomamos decisiones diarias basadas en datos y eliminamos tiempos muertos invisibles.”'
  },
  {
    name: 'Carlos Méndez',
    role: 'Gerente de Planta - Plásticos MX',
    quote:
      '“Con los kioskos en planta dejamos atrás los formatos en papel. Los operadores cargan incidencias en segundos y los supervisores reciben alertas inmediatas.”'
  },
  {
    name: 'Laura Gutiérrez',
    role: 'CEO - Metalmecánica Nova',
    quote:
      '“El valor del equipo es el acompañamiento. Nos guiaron en cada paso, integraron con nuestro ERP y hoy proyectamos el OEE en juntas de dirección.”'
  }
];

const scarcityMessage = 'Solo abrimos 4 implementaciones completas por mes para garantizar acompañamiento personalizado. Reserva tu lugar.';

const calendlyUrl = import.meta.env.VITE_CALENDLY_URL as string | undefined;

const Home = () => {
  const handleDemoClick = () => {
    trackEvent('cta_click', { type: 'demo' });
    if (calendlyUrl) {
      window.open(calendlyUrl, '_blank', 'noopener');
    }
  };

  return (
    <div className="bg-gradient-to-b from-white via-slate-50 to-white">
      <section className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-secondary/10 px-3 py-1 text-secondary text-sm font-medium">
              Manufactura inteligente sin fricción
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl font-bold text-primary leading-tight">
              Detecta problemas antes de que cuesten dinero: registra tiempos muertos y calcula tu OEE en tiempo real.
            </h1>
            <p className="mt-4 text-lg text-text/80">
              LEAN DATA MANAGER centraliza capturas en kioskos, conecta con tu ERP y te da tableros listos para decidir. Cambia hojas de cálculo por decisiones inmediatas respaldadas en datos.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleDemoClick}
                className="px-6 py-3 rounded-lg bg-secondary text-white font-semibold hover:bg-secondary/90 transition"
              >
                Agendar demo
              </button>
              <Link
                to="/checklist"
                className="px-6 py-3 rounded-lg border border-secondary text-secondary font-semibold hover:bg-secondary/10 transition"
                onClick={() => trackEvent('cta_click', { type: 'checklist' })}
              >
                Descargar checklist OEE
              </Link>
            </div>
            <p className="mt-6 text-sm text-text/60">
              Value Ladder: checklist gratuito → demo guiada → piloto pagado → implementación completa.
            </p>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-sm text-text/60">
              {logos.map((logo) => (
                <div key={logo} className="border border-slate-200 rounded-lg py-4">
                  <span>{logo}</span>
                </div>
              ))}
            </div>
          </div>
          <LeadForm
            redirectTo="/gracias?type=lead"
            leadType="lead"
            title="Agenda una llamada de diagnóstico"
            description="Cuéntanos tus retos de planta y agenda una sesión para mapear el piloto ideal."
          />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-primary">Cómo funciona</h2>
          <p className="mt-3 text-text/70">La metodología Hook-Story-Offer adaptada a tu operación industrial.</p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.title} className="bg-slate-50 rounded-2xl p-6 shadow-sm border border-slate-100">
                <div className="text-4xl">{step.icon}</div>
                <h3 className="mt-4 text-xl font-semibold text-primary">{step.title}</h3>
                <p className="mt-2 text-sm text-text/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-semibold text-primary">El mecanismo único</h2>
              <p className="mt-4 text-text/70">
                Integramos kioskos industriales, captura estructurada y dashboards OEE en un flujo continuo. Olvida papeles, radios y hojas de Excel que nunca cuadran.
              </p>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                {modules.map((module) => (
                  <div key={module.title} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                    <div>{module.icon}</div>
                    <h3 className="mt-4 text-lg font-semibold text-primary">{module.title}</h3>
                    <p className="mt-2 text-sm text-text/70">{module.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-secondary/40 rounded-2xl p-6 shadow-lg">
              <h3 className="text-2xl font-semibold text-primary">Oferta de valor completa</h3>
              <ul className="mt-4 space-y-3 text-sm text-text/80">
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5" /> Implementación guiada paso a paso
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5" /> Suscripción al software LEAN DATA MANAGER
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5" /> Kioskos industriales opcionales
                </li>
              </ul>
              <p className="mt-4 text-sm font-medium text-text/70">Bonos incluidos:</p>
              <ul className="mt-2 space-y-2 text-sm text-text/70 list-disc list-inside">
                {bonuses.map((bonus) => (
                  <li key={bonus}>{bonus}</li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-secondary font-semibold">{scarcityMessage}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.name} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
                <p className="text-sm text-text/80">{testimonial.quote}</p>
                <footer className="mt-4 text-sm font-semibold text-primary">
                  {testimonial.name}
                  <span className="block text-xs text-text/60">{testimonial.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-primary text-center">Preguntas frecuentes</h2>
          <div className="mt-10 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-primary">{faq.question}</h3>
                <p className="mt-2 text-sm text-text/80">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold">¿Listo para eliminar tiempos muertos?</h2>
          <p className="mt-4 text-white/80">
            Agenda tu demo hoy y recibe la checklist de OEE + guía de tiempos muertos para iniciar tu value ladder.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleDemoClick}
              className="px-6 py-3 rounded-lg bg-secondary text-white font-semibold hover:bg-secondary/90 transition"
            >
              Agendar demo
            </button>
            <Link
              to="/checklist"
              className="px-6 py-3 rounded-lg border border-white text-white font-semibold hover:bg-white hover:text-primary transition"
            >
              Descargar checklist OEE
            </Link>
          </div>
          <p className="mt-6 text-sm text-white/80">Cupo limitado para implementaciones por mes.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
