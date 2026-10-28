// ***********************************************************
// Arquivo de suporte Cypress E2E (cypress/support/e2e.ts)
// Executado automaticamente antes de cada arquivo de teste spec
// ***********************************************************

import './commands';
import 'cypress-mochawesome-reporter/register';


Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});


beforeEach(() => {
  cy.intercept({ url: /.*(googleads|googlesyndication|doubleclick|adservice|analytics).*/ }, { statusCode: 204, body: '' });
});


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
