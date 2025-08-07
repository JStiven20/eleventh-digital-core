// Global type declarations
declare global {
  interface Window {
    fbq?: (action: string, eventName: string, data?: any) => void;
  }
}

export {};