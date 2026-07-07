/**
 * Optional production analytics integrations.
 * Leave either value empty to keep that service disabled.
 */
const GA4_MEASUREMENT_ID = '';
const CLARITY_PROJECT_ID = '';

(function initializeAnalytics() {
  const ga4Id = GA4_MEASUREMENT_ID.trim();
  const clarityId = CLARITY_PROJECT_ID.trim();

  if (ga4Id) initializeGoogleAnalytics(ga4Id);
  if (clarityId) initializeMicrosoftClarity(clarityId);
})();

function initializeGoogleAnalytics(measurementId) {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', measurementId);

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.append(script);
}

function initializeMicrosoftClarity(projectId) {
  window.clarity = window.clarity || function clarity() {
    (window.clarity.q = window.clarity.q || []).push(arguments);
  };

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.clarity.ms/tag/${encodeURIComponent(projectId)}`;
  document.head.append(script);
}
