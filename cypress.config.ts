import { defineConfig } from 'cypress';

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || 'https://automationexercise.com',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.{js,ts}',
    fixturesFolder: 'cypress/fixtures',
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',

    blockHosts: [
      '*google-analytics.com',
      '*googletagmanager.com',
      '*googlesyndication.com',
      '*googleads.g.doubleclick.net',
      '*adservice.google.com',
      '*pagead2.googlesyndication.com',
      '*tpc.googlesyndication.com',
      '*doubleclick.net',
    ],

    // Desativa vídeo por padrão para performance em CI; ative se necessário
    video: false,
    screenshotOnRunFailure: true,

    // Resolução e timeouts padrão
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 15000,
    pageLoadTimeout: 60000,
    requestTimeout: 15000,
    chromeWebSecurity: false,

    // Tentativas automáticas apenas no modo headless (CI)
    retries: {
      runMode: 2,
      openMode: 1,
    },

    setupNodeEvents(on, config) {
      // Configurar reporter
      require('cypress-mochawesome-reporter/plugin')(on);

      // Otimizações de flags para navegadores Chromium no Linux/CI
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.family === 'chromium' && browser.name !== 'electron') {
          launchOptions.args.push('--disable-dev-shm-usage');
          launchOptions.args.push('--no-sandbox');
        }
        return launchOptions;
      });

      return config;
    },
  },
});
