import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

const Thanks = () => {
  const [params] = useSearchParams();

  const message = useMemo(() => {
    const type = params.get('type');
    if (type === 'checklist') {
      return '¡Gracias! Revisa tu correo, hemos enviado el checklist.';
    }
    return '¡Gracias por contactarnos! Un especialista se comunicará contigo pronto.';
  }, [params]);

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-bold text-primary">¡Tu información está en camino!</h1>
        <p className="mt-6 text-lg text-text/80">{message}</p>
        <p className="mt-4 text-sm text-text/60">
          Si no ves el correo en los próximos minutos, revisa tu carpeta de spam o comunícate con nosotros.
        </p>
      </div>
    </section>
  );
};

export default Thanks;
