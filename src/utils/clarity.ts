declare global {
  interface Window {
    clarity?: (...args: any[]) => void;
  }
}

/**
  Track custom events in Microsoft Clarity (e.g. CTA clicks, resume downloads, case study views).
 */
export function trackClarityEvent(eventName: string) {
  if (typeof window !== "undefined" && typeof window.clarity === "function") {
    window.clarity("event", eventName);
  }
}

/**
  Set custom key-value tags in Microsoft Clarity for session filtering.
 */
export function setClarityTag(key: string, value: string) {
  if (typeof window !== "undefined" && typeof window.clarity === "function") {
    window.clarity("set", key, value);
  }
}
