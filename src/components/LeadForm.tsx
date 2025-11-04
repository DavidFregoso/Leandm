import { FormEvent, useCallback, useRef, useState } from 'react';
import { Turnstile, type TurnstileInstance } from '@cloudflare/turnstile';
import { trackEvent } from '../hooks/useAnalytics';

interface LeadFormProps {
  redirectTo: string;
  leadType: 'demo' | 'lead' | 'checklist';
  title?: string;
  description?: string;
}

interface LeadFormData {
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  comentarios: string;
}

const initialState: LeadFormData = {
  nombre: '',
  empresa: '',
  email: '',
  telefono: '',
  comentarios: ''
};

const LeadForm = ({ redirectTo, leadType, title, description }: LeadFormProps) => {
  const [formData, setFormData] = useState<LeadFormData>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance | null>(null);

  const siteKey = import.meta.env.VITE_TURNSTILE_SITEKEY as string | undefined;
  const apiUrl = import.meta.env.VITE_API_GATEWAY_URL as string | undefined;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = useCallback(() => {
    setFormData(initialState);
    turnstileRef.current?.reset();
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const token = turnstileRef.current?.getResponse();

    if (!token) {
      setError('Confirma que no eres un robot.');
      setIsSubmitting(false);
      return;
    }

    if (!apiUrl) {
      setError('API no configurada. Contacta al administrador.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          leadType,
          turnstileToken: token,
          origin: window.location.href
        })
      });

      if (!response.ok) {
        throw new Error('No se pudo enviar la información. Intenta de nuevo.');
      }

      trackEvent('lead_submitted', { leadType });
      resetForm();
      window.location.href = redirectTo;
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'Error inesperado.');
      turnstileRef.current?.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-lg p-8">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <h3 className="text-2xl font-semibold text-primary">{title ?? 'Solicita más información'}</h3>
          {description && <p className="mt-2 text-sm text-text/70">{description}</p>}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="flex flex-col text-sm font-medium text-text/80">
            Nombre*
            <input
              required
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="mt-1 rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/60"
              placeholder="Nombre completo"
            />
          </label>
          <label className="flex flex-col text-sm font-medium text-text/80">
            Empresa*
            <input
              required
              name="empresa"
              value={formData.empresa}
              onChange={handleChange}
              className="mt-1 rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/60"
              placeholder="Nombre de la empresa"
            />
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="flex flex-col text-sm font-medium text-text/80">
            Correo electrónico*
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/60"
              placeholder="tucorreo@empresa.com"
            />
          </label>
          <label className="flex flex-col text-sm font-medium text-text/80">
            Teléfono*
            <input
              required
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              className="mt-1 rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/60"
              placeholder="10 dígitos"
            />
          </label>
        </div>
        <label className="flex flex-col text-sm font-medium text-text/80">
          Comentarios
          <textarea
            name="comentarios"
            value={formData.comentarios}
            onChange={handleChange}
            rows={3}
            className="mt-1 rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/60"
            placeholder="Comparte contexto de tu operación"
          />
        </label>
        {siteKey && (
          <Turnstile
            ref={turnstileRef}
            sitekey={siteKey}
            options={{ theme: 'light', language: 'es' }}
            className="mt-4"
          />
        )}
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-secondary text-white font-semibold py-3 rounded-lg hover:bg-secondary/90 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar'}
        </button>
        <p className="text-xs text-text/60 text-center">
          Al enviar aceptas nuestro{' '}
          <a href="/privacidad" className="underline hover:text-primary" target="_blank" rel="noreferrer">
            Aviso de Privacidad
          </a>
          .
        </p>
      </form>
    </div>
  );
};

export default LeadForm;
