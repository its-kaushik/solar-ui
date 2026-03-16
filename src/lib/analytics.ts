type GTagEvent = {
  action: string;
  category?: string;
  label?: string;
  value?: number;
  [key: string]: string | number | undefined;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent({ action, ...params }: GTagEvent) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, params);
  }
}

export function trackFormSubmit(propertyType: string, location: string) {
  trackEvent({
    action: 'contact_form_submit',
    category: 'engagement',
    property_type: propertyType,
    location,
  });
}

export function trackWhatsAppClick(page: string, context?: string) {
  trackEvent({
    action: 'whatsapp_click',
    category: 'engagement',
    page,
    context: context || 'general',
  });
}

export function trackCallClick(page: string) {
  trackEvent({
    action: 'call_click',
    category: 'engagement',
    page,
  });
}

export function trackCalculatorUsed(
  systemSize: number,
  propertyType: string,
  area: string
) {
  trackEvent({
    action: 'calculator_used',
    category: 'engagement',
    system_size: systemSize,
    property_type: propertyType,
    area,
  });
}

export function trackCalculatorCTA(systemSize: number) {
  trackEvent({
    action: 'calculator_cta_click',
    category: 'engagement',
    system_size: systemSize,
  });
}
