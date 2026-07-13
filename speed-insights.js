/**
 * Vercel Speed Insights Integration for Static Sites
 * 
 * This script initializes Vercel Speed Insights for static HTML websites.
 * Speed Insights automatically tracks Web Vitals and performance metrics.
 * 
 * Note: This only tracks data in production when deployed to Vercel.
 * No data is collected in local development.
 * 
 * Documentation: https://vercel.com/docs/speed-insights/quickstart
 */

(function() {
  // Initialize Speed Insights queue
  window.si = window.si || function () { 
    (window.siq = window.siq || []).push(arguments); 
  };
  
  // Load Speed Insights script
  // In production (deployed to Vercel), this will use the Vercel-provided script
  // In development, this uses the debug version
  var script = document.createElement('script');
  script.defer = true;
  
  // Check if we're in production (deployed to Vercel)
  var isProduction = window.location.hostname !== 'localhost' && 
                     window.location.hostname !== '127.0.0.1' &&
                     window.location.hostname !== '';
  
  if (isProduction) {
    // When deployed to Vercel with Speed Insights enabled,
    // Vercel automatically injects the correct script path
    // For manual setup, you would use: /_vercel/insights/script.js
    script.src = '/_vercel/insights/script.js';
  } else {
    // In development, use the debug script
    script.src = 'https://va.vercel-scripts.com/v1/speed-insights/script.debug.js';
  }
  
  // Append script to head
  if (document.head) {
    document.head.appendChild(script);
  }
})();
