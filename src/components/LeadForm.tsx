import { ChangeEvent, FormEvent, useState } from 'react';

interface LeadFormProps {
  leadType?: 'lead' | 'checklist';
  onSuccess?: () => void;
}

const INITIAL_FORM = {
  nombre: '',
  empresa: '',
  email: '',
  telefono: '',
  comentarios: ''
};

const LeadForm = ({ leadType = 'lead', onSuccess }: LeadFormProps) => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setForm(INITIAL_FORM);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    const endpoint = import.meta.env.VITE_API_GATEWAY_URL as string | undefined;

    try {
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            ...form,
            leadType,
            origin: typeof window !== 'undefined' ? window.location.href : '',
            turnstileToken: 'placeholder-token'
          })
        });

        if (!response.ok) {
          throw new Error('No pudimos registrar tu solicitud. Intenta de nuevo.');
        }
      }

      setSuccess(true);
      resetForm();
      onSuccess?.();
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Ocurrió un error inesperado.';
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="nombre" className="block text-sm font-semibold text-text">
          Nombre*
        </label>
        <input
          id="nombre"
          name="nombre"
          required
          value={form.nombre}
          onChange={handleChange}
          className="mt-2 w-full rounded-lg border border-muted bg-white px-4 py-3 text-text shadow-sm focus-visible:outline focus-visible:outline-secondary"
        />
      </div>
      <div>
        <label htmlFor="empresa" className="block text-sm font-semibold text-text">
          Empresa*
        </label>
        <input
          id="empresa"
          name="empresa"
          required
          value={form.empresa}
          onChange={handleChange}
          className="mt-2 w-full rounded-lg border border-muted bg-white px-4 py-3 text-text shadow-sm focus-visible:outline focus-visible:outline-secondary"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-text">
          Email*
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          className="mt-2 w-full rounded-lg border border-muted bg-white px-4 py-3 text-text shadow-sm focus-visible:outline focus-visible:outline-secondary"
        />
      </div>
      <div>
        <label htmlFor="telefono" className="block text-sm font-semibold text-text">
          Teléfono
        </label>
        <input
          id="telefono"
          name="telefono"
          value={form.telefono}
          onChange={handleChange}
          className="mt-2 w-full rounded-lg border border-muted bg-white px-4 py-3 text-text shadow-sm focus-visible:outline focus-visible:outline-secondary"
        />
      </div>
      <div>
        <label htmlFor="comentarios" className="block text-sm font-semibold text-text">
          Comentarios
        </label>
        <textarea
          id="comentarios"
          name="comentarios"
          rows={4}
          value={form.comentarios}
          onChange={handleChange}
          className="mt-2 w-full rounded-lg border border-muted bg-white px-4 py-3 text-text shadow-sm focus-visible:outline focus-visible:outline-secondary"
        />
      </div>
      <div className="rounded-lg border border-dashed border-secondary bg-muted/50 p-4 text-center text-sm text-text/70">
        <div id="cf-turnstile" className="flex h-16 items-center justify-center rounded-md bg-white">
          Integración Cloudflare Turnstile (coloca el widget real en producción)
        </div>
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
      {success && <p className="text-sm text-green-600">¡Gracias! Hemos recibido tu información.</p>}
      <button
        type="submit"
        disabled={isLoading}
        className="inline-flex w-full items-center justify-center rounded-lg bg-secondary px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-secondary/90 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isLoading ? 'Enviando...' : 'Enviar'}
      </button>
    </form>
  );
};

export default LeadForm;
