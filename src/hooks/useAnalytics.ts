let scriptsLoaded = false;

const createScript = (src: string, id: string, attributes: Record<string, string> = {}) => {
  if (document.getElementById(id)) return;
  const script = document.createElement('script');
  script.async = true;
  script.id = id;
  script.src = src;
  Object.entries(attributes).forEach(([key, value]) => {
    script.setAttribute(key, value);
  });
  document.head.appendChild(script);
};

const injectGA4 = (measurementId: string) => {
  if (!measurementId) return;
  if (document.getElementById('ga4-init')) return;

  const inlineScript = document.createElement('script');
  inlineScript.id = 'ga4-init';
  inlineScript.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${measurementId}');
  `;

  document.head.appendChild(inlineScript);
  createScript('https://www.googletagmanager.com/gtag/js?id=' + measurementId, 'ga4-script');
};

const injectCloudflareAnalytics = (token: string) => {
  if (!token) return;
  createScript('https://static.cloudflareinsights.com/beacon.min.js', 'cf-web-analytics', {
    'data-cf-beacon': `{"token": "${token}"}`
  });
};

const injectCalendly = (calendlyUrl?: string) => {
  if (!calendlyUrl) return;
  if (document.getElementById('calendly-style')) return;
  const style = document.createElement('link');
  style.id = 'calendly-style';
  style.rel = 'stylesheet';
  style.href = 'https://assets.calendly.com/assets/external/widget.css';
  document.head.appendChild(style);
  createScript('https://assets.calendly.com/assets/external/widget.js', 'calendly-script');
};

export const loadAnalyticsScripts = () => {
  if (scriptsLoaded) return;

  const gaId = import.meta.env.VITE_GA4_ID as string | undefined;
  const cfToken = import.meta.env.VITE_CF_WEB_ANALYTICS_TOKEN as string | undefined;
  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL as string | undefined;

  if (gaId) {
    injectGA4(gaId);
  }

  if (cfToken) {
    injectCloudflareAnalytics(cfToken);
  }

  injectCalendly(calendlyUrl);
  scriptsLoaded = true;
};

export const trackEvent = (eventName: string, params?: Record<string, unknown>) => {
  if (typeof window === 'undefined') return;
  if ((window as any).gtag) {
    (window as any).gtag('event', eventName, params || {});
  }
};
