import { Link } from 'react-router-dom';

const base = import.meta.env.BASE_URL || '/';
const checklistUrl = `${base.replace(/\/$/, '')}/leadmagnet/README.txt`;

const Checklist = () => {
  return (
    <div className="bg-slate-950">
      <div className="mx-auto max-w-3xl px-4 py-20 text-slate-200">
        <h1 className="text-3xl font-bold text-white">Descarga checklist OEE</h1>
        <p className="mt-4 text-slate-300">
          Obtén los pasos clave para medir y mejorar tu OEE. Revisa el documento y comparte con tus líderes de operación para detectar pérdidas rápidamente.
        </p>
        <a
          href={checklistUrl}
          className="mt-8 inline-flex items-center rounded-md bg-sky-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-400"
        >
          Descargar checklist
        </a>
        <p className="mt-6 text-sm text-slate-400">
          ¿Te interesa recibir una guía personalizada? <Link to="/" className="text-sky-300">Agenda una demo</Link> y conviértelo en un plan para tu planta.
        </p>
      </div>
    </div>
  );
};

export default Checklist;
