declare module '@cloudflare/turnstile' {
  import * as React from 'react';

  export interface TurnstileProps extends React.ComponentProps<'div'> {
    sitekey: string;
    className?: string;
    options?: {
      theme?: 'light' | 'dark' | 'auto';
      language?: string;
    };
  }

  export interface TurnstileInstance {
    reset: () => void;
    remove: () => void;
    getResponse: () => string | null;
  }

  export const Turnstile: React.ForwardRefExoticComponent<
    TurnstileProps & React.RefAttributes<TurnstileInstance>
  >;
}
