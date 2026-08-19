/**
 * Couche analytics légère et sans dépendance.
 *
 * Les événements sont poussés vers `window.dataLayer` (Google Tag Manager),
 * vers `gtag` si Google Analytics est présent, et diffusés via un
 * `CustomEvent` pour tout autre outil de mesure.
 */

export type AnalyticsEvent =
  | "whatsapp_click"
  | "contact_form_start"
  | "contact_form_submit"
  | "contact_form_consent"
  | "contact_form_success"
  | "contact_form_error"
  | "cta_click";

type AnalyticsPayload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(event: AnalyticsEvent, payload: AnalyticsPayload = {}) {
  if (typeof window === "undefined") return;

  const data = {
    event,
    event_category: "conversion",
    ...payload,
    timestamp: Date.now(),
  };

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(data);

  window.gtag?.("event", event, payload);

  window.dispatchEvent(new CustomEvent("analytics", { detail: data }));

  if (import.meta.env.DEV) {
    console.debug("[analytics]", event, payload);
  }
}
