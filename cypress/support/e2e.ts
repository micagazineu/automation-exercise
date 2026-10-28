// ***********************************************************
// Arquivo de suporte Cypress E2E (cypress/support/e2e.ts)
// Executado automaticamente antes de cada arquivo de teste spec
// ***********************************************************

import './commands';
import 'cypress-mochawesome-reporter/register';

// Ignora exceções não tratadas de scripts de terceiros (ex: Google Analytics, ads)
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

// Bloqueia e cancela requisições de anúncios do Google
beforeEach(() => {
  cy.intercept({ url: /.*(googleads|googlesyndication|doubleclick|adservice|analytics).*/ }, { statusCode: 204, body: '' });
});

// Injeta CSS no carregamento da página para ocultar elementos de anúncios e overlays
Cypress.on('window:before:load', (win) => {
  const style = win.document.createElement('style');
  style.id = 'cypress-hide-ads';
  style.innerHTML = `
    iframe[id*="aswift"],
    iframe[id*="google"],
    div[id*="google_vignette"],
    #ad_iframe,
    .ad-container,
    ins.adsbygoogle {
      display: none !important;
      visibility: hidden !important;
      pointer-events: none !important;
      height: 0 !important;
      width: 0 !important;
    }
  `;
  win.document.head.appendChild(style);
});
