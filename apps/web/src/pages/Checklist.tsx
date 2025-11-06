import { Link } from 'react-router-dom';

const base = import.meta.env.BASE_URL || '/';
const checklistUrl = `${base.replace(/\/$/, '')}/leadmagnet/README.txt`;

const Checklist = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-20 text-[#2E2E2E]">
        <h1 className="text-3xl font-bold text-[#003366]">Descarga checklist OEE</h1>
        <p className="mt-4 text-base leading-relaxed">
          Obtén los pasos clave para medir y mejorar tu OEE. Revisa el documento y comparte con tus líderes de operación para
          detectar pérdidas rápidamente.
        </p>
        <a
          href={checklistUrl}
          className="mt-8 inline-flex items-center rounded-md bg-[#00B3B3] px-6 py-3 font-semibold text-[#003366] transition hover:bg-[#02c7c7]"
        >
          Descargar checklist
        </a>
        <p className="mt-6 text-sm text-[#003366]">
          ¿Te interesa recibir una guía personalizada?{' '}
          <Link to="/" className="underline hover:text-[#00B3B3]">
            Agenda una demo
          </Link>{' '}
          y conviértelo en un plan para tu planta.
        </p>
      </div>
    </div>
  );
};

export default Checklist;
