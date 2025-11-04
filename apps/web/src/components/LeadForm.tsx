import { FormEvent, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

type Status = 'idle' | 'loading' | 'success' | 'error';

const hiddenFields = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'gclid',
  'fbclid',
];

const LeadForm = () => {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');
  const [turnstileToken, setTurnstileToken] = useState('');
  const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
  const basePath = useMemo(() => import.meta.env.BASE_URL || '/', []);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const hashIndex = window.location.href.indexOf('#');
    if (hashIndex !== -1) {
      const hash = window.location.href.slice(hashIndex + 1);
      const queryIndex = hash.indexOf('?');
      if (queryIndex !== -1) {
        const hashParams = new URLSearchParams(hash.slice(queryIndex + 1));
        hashParams.forEach((value, key) => {
          if (!searchParams.has(key)) {
            searchParams.set(key, value);
          }
        });
      }
    }
    hiddenFields.forEach((field) => {
      const input = document.querySelector<HTMLInputElement>(`input[name="${field}"]`);
      if (input) {
        input.value = searchParams.get(field) ?? '';
      }
    });
  }, []);

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

  const utmValues = useMemo(() => {
    if (typeof window === 'undefined') {
      return Object.fromEntries(hiddenFields.map((field) => [field, '']));
    }
    const params = new URLSearchParams(window.location.search);
    const values: Record<string, string> = {};
    hiddenFields.forEach((field) => {
      values[field] = params.get(field) ?? '';
    });
    return values;
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formspreeEndpoint) {
      setMessage('No se ha configurado el endpoint de Formspree.');
      setStatus('error');
      return;
    }
    if (!turnstileToken) {
      setMessage('Completa la verificación de Cloudflare Turnstile.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setMessage('Enviando...');

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
      setMessage('¡Gracias! Revisa tu bandeja de entrada, nos pondremos en contacto.');
      form.reset();
      setTurnstileToken('');
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', 'lead_submitted');
      }
      const cleanBase = basePath.replace(/\/$/, '');
      window.location.assign(`${cleanBase}/#/thanks?type=lead`);
    } catch (error) {
      console.error(error);
      setStatus('error');
      setMessage('No pudimos enviar tu información. Intenta nuevamente o escríbenos a hola@leandm.dev.');
    }
  };

  return (
    <form
      aria-labelledby="lead-form-title"
      onSubmit={handleSubmit}
      className="space-y-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-8"
    >
      <div>
        <h2 id="lead-form-title" className="text-2xl font-bold text-white">
          Agenda una demo y descubre tu ahorro potencial
        </h2>
        <p className="mt-2 text-sm text-slate-300">
          Completa el formulario y te contactaremos para personalizar Lean Data Manager a tus líneas.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col text-sm text-slate-200">
          Nombre*
          <input name="nombre" required type="text" autoComplete="name" className="mt-1 rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-slate-50" />
        </label>
        <label className="flex flex-col text-sm text-slate-200">
          Empresa*
          <input name="empresa" required type="text" autoComplete="organization" className="mt-1 rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-slate-50" />
        </label>
        <label className="flex flex-col text-sm text-slate-200">
          Email*
          <input name="email" required type="email" autoComplete="email" className="mt-1 rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-slate-50" />
        </label>
        <label className="flex flex-col text-sm text-slate-200">
          Teléfono
          <input name="telefono" type="tel" autoComplete="tel" className="mt-1 rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-slate-50" />
        </label>
        <label className="flex flex-col text-sm text-slate-200">
          # líneas
          <input name="lineas" type="number" min="0" className="mt-1 rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-slate-50" />
        </label>
        <label className="flex flex-col text-sm text-slate-200">
          ERP
          <select name="erp" className="mt-1 rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-slate-50">
            <option value="">Selecciona una opción</option>
            <option value="SAP">SAP</option>
            <option value="Oracle">Oracle</option>
            <option value="Microsoft Dynamics">Microsoft Dynamics</option>
            <option value="TOTVS">TOTVS</option>
            <option value="Otro">Otro</option>
          </select>
        </label>
      </div>
      <label className="flex flex-col text-sm text-slate-200">
        Comentarios
        <textarea
          name="comentarios"
          rows={4}
          className="mt-1 rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-slate-50"
        ></textarea>
      </label>
      {hiddenFields.map((field) => (
        <input key={field} type="hidden" name={field} defaultValue={utmValues[field]} />
      ))}
      <div className="space-y-2">
        <p className="text-sm font-semibold text-slate-200">Integración Cloudflare Turnstile</p>
        <div
          className="cf-turnstile"
          data-sitekey={import.meta.env.VITE_TURNSTILE_SITEKEY || ''}
          data-callback="handleTurnstileToken"
          data-expired-callback="handleTurnstileExpired"
        ></div>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-md bg-sky-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:bg-slate-700"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Enviando...' : 'Enviar'}
        </button>
        <span className="text-xs text-slate-400">
          Al enviar aceptas nuestro <Link to="/privacy" className="text-sky-300">aviso de privacidad</Link>.
        </span>
      </div>
      <div aria-live="polite" className="text-sm text-slate-200">
        {message}
      </div>
    </form>
  );
};

export default LeadForm;
