# Cypress

end-to-end tests in Cypress

## Setup 

```bash
$ npm i -D cypress eslint-plugin-cypress
```

add plugin:cypress/recommended to .eslintrc.json 

```json
{
  "extends": [
    "plugin:cypress/recommended"
  ],
}
```

add scripts to package.json 

```json
{
  "scripts": {
    "cy:open": "cypress open",
    "cy:run": "cypress run"
  }
}
```

run

```bash
$ npm run cy:open
```

### updates to setup 

- We've changed the default Cypress config file from: cypress.json to cypress.config.ts
- [Configuration](https://docs.cypress.io/guides/references/configuration)

```ts
import {defineConfig} from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
  },
})

```

## Setup - fixes et al.

updated cypress.config.ts 

```ts 
import {defineConfig} from 'cypress'

export default defineConfig({
  projectId: 'tyhfus',
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
  },
})
```

added support/components.ts file (not sure this was necessary)

``` ts
import {mount} from 'cypress/react18'
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount
    }
  }
}
Cypress.Commands.add('mount', mount)
```

create test (spec.cy.ts) file - originally put it in e2e folder, then added copy to tests/getting-started (b/c specPattern definition in config file)

```ts
describe('sepc.cy.ts', () => {
  it('shoulld visit', () => {
    cy.visit('/')
  })
})
```

## Setup - continued - fix error 

```bash 
TSError: ⨯ Unable to compile TypeScript:
error TS5095: Option 'bundler' can only be used when 'module' is set to 'es2015' or later.
``` 

changed bundler to node

```json
{
  "compilerOptions": {
    "module": "esnext",
    "moduleResolution": "node", // "bundler",
    ... 
  }
}
```

[Unable to run Cypress open command in Next.js project with Typescript](https://stackoverflow.com/questions/76875739/unable-to-run-cypress-open-command-in-next-js-project-with-typescript)

## links

[Writing Your First E2E Test](https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test)
[Component Testing with Cypress 12 and NextJS 13 Using TypeScript] (https://blog.bitsrc.io/component-testing-with-cypress-12-and-nextjs-13-using-typescript-14825ea05f58)
