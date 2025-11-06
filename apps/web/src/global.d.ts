export {};

declare global {
  interface Window {
    handleTurnstileToken?: (token: string) => void;
    handleTurnstileExpired?: () => void;
  }
}
