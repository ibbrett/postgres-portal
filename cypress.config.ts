import {defineConfig} from 'cypress'

export default defineConfig({
  projectId: 'postgres_portal',
  component: {
    specPattern: 'app/**/*.cy.{js,jsx,ts,tsx}',
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
  e2e: {
    specPattern: 'cypress/tests/**/*.cy.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:3000/',
    supportFile: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    excludeSpecPattern: [
      'cypress/tests/sample-google',
      'cypress/tests/getting-started',
    ], // add items here to exclude from test runs
    // testIsolation: false,
  },

  // you can change viewport
  viewportHeight: 500,
  viewportWidth: 768,
})
