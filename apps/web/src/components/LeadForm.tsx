import { FormEvent, useEffect, useMemo, useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

const hiddenFields = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'gclid',
  'fbclid',
] as const;

const LeadForm = () => {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');
  const [turnstileToken, setTurnstileToken] = useState('');
  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL;
  const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

  useEffect(() => {
    window.handleTurnstileToken = (token: string) => {
      setTurnstileToken(token);
    };
    window.handleTurnstileExpired = () => {
      setTurnstileToken('');
    };
    return () => {
      delete window.handleTurnstileToken;
      delete window.handleTurnstileExpired;
    };
  }, []);

  const hiddenValues = useMemo(() => {
    if (typeof window === 'undefined') {
      return Object.fromEntries(hiddenFields.map((field) => [field, ''])) as Record<(typeof hiddenFields)[number], string>;
    }

    const queryParams = new URLSearchParams(window.location.search);

    if (window.location.hash.includes('?')) {
      const [, hashQuery] = window.location.hash.split('?');
      const hashParams = new URLSearchParams(hashQuery);
      hashParams.forEach((value, key) => {
        if (!queryParams.has(key)) {
          queryParams.set(key, value);
        }
      });
    }

    return hiddenFields.reduce((acc, field) => {
      acc[field] = queryParams.get(field) ?? '';
      return acc;
    }, {} as Record<(typeof hiddenFields)[number], string>);
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formspreeEndpoint) {
      setStatus('error');
      setMessage('No se ha configurado el endpoint de Formspree.');
      return;
    }

    if (!turnstileToken) {
      setStatus('error');
      setMessage('Completa la verificación de Cloudflare Turnstile.');
      return;
    }

    setStatus('loading');
    setMessage('Enviando...');

    if (calendlyUrl) {
      window.open(calendlyUrl, '_blank', 'noopener');
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append('turnstile_token', turnstileToken);

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Error en el envío');
      }

      setStatus('success');
      setMessage('¡Gracias! Te contactaremos muy pronto.');
      form.reset();
      setTurnstileToken('');

      const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
      window.location.assign(`${base}/#/thanks?type=lead`);
    } catch (error) {
      console.error(error);
      setStatus('error');
      setMessage('No pudimos enviar tu información. Intenta de nuevo o escríbenos a hola@leandm.dev.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="-mt-16 mx-auto max-w-4xl rounded-3xl border border-white/40 bg-white p-10 shadow-xl"
      aria-labelledby="lead-form-heading"
    >
      <div className="space-y-2 text-center">
        <h2 id="lead-form-heading" className="text-2xl font-semibold text-[#003366]">
          Cuéntanos sobre tu operación
        </h2>
        <p className="text-sm text-[#2E2E2E]">
          Uno de nuestros consultores se pondrá en contacto para preparar tu demo personalizada de Lean Data Manager.
        </p>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-semibold text-[#003366]">
          Nombre*
          <input
            required
            type="text"
            name="nombre"
            autoComplete="name"
            className="rounded-lg border border-slate-200 px-4 py-3 text-[#2E2E2E] focus:border-[#00B3B3]"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-semibold text-[#003366]">
          Empresa*
          <input
            required
            type="text"
            name="empresa"
            autoComplete="organization"
            className="rounded-lg border border-slate-200 px-4 py-3 text-[#2E2E2E] focus:border-[#00B3B3]"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-semibold text-[#003366]">
          Email*
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            className="rounded-lg border border-slate-200 px-4 py-3 text-[#2E2E2E] focus:border-[#00B3B3]"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-semibold text-[#003366]">
          Teléfono
          <input
            type="tel"
            name="telefono"
            autoComplete="tel"
            className="rounded-lg border border-slate-200 px-4 py-3 text-[#2E2E2E] focus:border-[#00B3B3]"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-semibold text-[#003366]">
          Número de líneas de producción
          <input
            type="number"
            min="0"
            name="lineas"
            className="rounded-lg border border-slate-200 px-4 py-3 text-[#2E2E2E] focus:border-[#00B3B3]"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-semibold text-[#003366]">
          ¿Qué ERP utilizas?
          <select name="erp" className="rounded-lg border border-slate-200 px-4 py-3 text-[#2E2E2E] focus:border-[#00B3B3]">
            <option value="">Selecciona una opción</option>
            <option value="SAP">SAP</option>
            <option value="Oracle">Oracle</option>
            <option value="Microsoft Dynamics">Microsoft Dynamics</option>
            <option value="SAE">SAE</option>
            <option value="Alpha SAI">Alpha SAI</option>
            <option value="TOTVS">TOTVS</option>
            <option value="Otro">Otro</option>
            <option value="Aún no tengo ERP">Aún no tengo ERP</option>
          </select>
        </label>
      </div>
      <label className="mt-6 flex flex-col gap-2 text-sm font-semibold text-[#003366]">
        Comentarios
        <textarea
          name="comentarios"
          rows={4}
          className="rounded-lg border border-slate-200 px-4 py-3 text-[#2E2E2E] focus:border-[#00B3B3]"
        ></textarea>
      </label>
      {hiddenFields.map((field) => (
        <input key={field} type="hidden" name={field} value={hiddenValues[field]} readOnly />
      ))}
      <div className="mt-6 space-y-3">
        <p className="text-sm font-semibold text-[#003366]">Verificación Turnstile</p>
        <div
          className="cf-turnstile"
          data-sitekey={import.meta.env.VITE_TURNSTILE_SITEKEY || ''}
          data-callback="handleTurnstileToken"
          data-expired-callback="handleTurnstileExpired"
        ></div>
      </div>
      <div className="mt-8 flex flex-col items-center gap-3 md:flex-row">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex w-full items-center justify-center rounded-md bg-[#00B3B3] px-6 py-3 text-base font-semibold text-[#003366] shadow-sm transition hover:bg-[#02c7c7] disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Enviando...' : 'Enviar y Agendar Demo'}
        </button>
        <span className="text-xs text-[#2E2E2E]">
          Al enviar aceptas nuestro{' '}
          <a href="/#/privacy" target="_blank" rel="noopener" className="text-[#003366] underline hover:text-[#00B3B3]">
            aviso de privacidad
          </a>
          .
        </span>
      </div>
      <div className="mt-4 text-sm text-[#003366]" aria-live="polite">
        {message}
      </div>
    </form>
  );
};

export default LeadForm;
