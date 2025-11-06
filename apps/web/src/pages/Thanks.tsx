import { useMemo } from 'react';

const Thanks = () => {
  const params = useMemo(() => {
    const hash = window.location.hash;
    const queryIndex = hash.indexOf('?');
    return new URLSearchParams(queryIndex !== -1 ? hash.slice(queryIndex + 1) : '');
  }, []);

  const type = params.get('type');
  const message =
    type === 'lead'
      ? 'Hemos recibido tu información. Nuestro equipo te contactará en breve para agendar la demo.'
      : 'Gracias por tu interés en Lean Data Manager.';

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-20 text-[#2E2E2E]">
        <h1 className="text-3xl font-bold text-[#003366]">¡Gracias!</h1>
        <p className="mt-4 text-base leading-relaxed">{message}</p>
        <p className="mt-6 text-sm text-[#003366]">
          Agrega{' '}
          <a href="mailto:hola@leandm.dev" className="underline hover:text-[#00B3B3]">
            hola@leandm.dev
          </a>{' '}
          a tus contactos para que nuestros correos no se pierdan.
        </p>
      </div>
    </div>
  );
};

export default Thanks;
