import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';
import { loadAnalyticsScripts } from '../hooks/useAnalytics';

type ConsentStatus = 'granted' | 'denied' | 'unknown';

interface CookieConsentContextProps {
  consentStatus: ConsentStatus;
  grantConsent: () => void;
  denyConsent: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextProps | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'leandm-cookie-consent';

interface StoredConsent {
  status: ConsentStatus;
  updatedAt: string;
}

const CookieConsentProvider = ({ children }: { children: React.ReactNode }) => {
  const [consentStatus, setConsentStatus] = useState<ConsentStatus>('unknown');

  useEffect(() => {
    const storedValue = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedValue) {
      try {
        const parsed: StoredConsent = JSON.parse(storedValue);
        setConsentStatus(parsed.status);
        if (parsed.status === 'granted') {
          loadAnalyticsScripts();
        }
      } catch (error) {
        console.warn('No se pudo leer el consentimiento almacenado', error);
      }
    }
  }, []);

  const persistStatus = useCallback((status: ConsentStatus) => {
    const stored: StoredConsent = { status, updatedAt: new Date().toISOString() };
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(stored));
  }, []);

  const grantConsent = useCallback(() => {
    setConsentStatus('granted');
    persistStatus('granted');
    loadAnalyticsScripts();
  }, [persistStatus]);

  const denyConsent = useCallback(() => {
    setConsentStatus('denied');
    persistStatus('denied');
  }, [persistStatus]);

  const value = useMemo(
    () => ({
      consentStatus,
      grantConsent,
      denyConsent
    }),
    [consentStatus, grantConsent, denyConsent]
  );

  return <CookieConsentContext.Provider value={value}>{children}</CookieConsentContext.Provider>;
};

export const useCookieConsent = () => {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error('useCookieConsent debe ser usado dentro de CookieConsentProvider');
  }
  return context;
};

export default CookieConsentProvider;
