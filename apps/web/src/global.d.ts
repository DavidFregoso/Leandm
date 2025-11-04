export {};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    handleTurnstileToken?: (token: string) => void;
    handleTurnstileExpired?: () => void;
  }
}
