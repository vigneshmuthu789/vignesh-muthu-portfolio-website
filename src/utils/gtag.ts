declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

/**
  Track custom Google Analytics 4 events (e.g. resume download, contact CTA click)
 */
export function trackGAEvent(eventName: string, params?: Record<string, any>) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}
