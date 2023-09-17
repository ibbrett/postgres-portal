# Jest

Jest is an amazing, inbuilt tool to test React apps  
since Next.js released v12, it has Jest configuration inbuilt as well, powered by the Rust compiler (a highlight of the Next v12 update).

## Setup

### Install Jest dev dependencies

```bash
$ npm install --save-dev jest @testing-library/react @testing-library/jest-dom
```

This adds the following:

```json
"devDependencies": {
  "@testing-library/jest-dom": "^6.1.3",
  "@testing-library/react": "^14.0.0",
  "jest": "^29.7.0",
}

```

### Install additional Jest dev dependencies

```bash
$ npm install --save-dev @testing-library/user-event jest-environment-jsdom ts-jest
```

```json
"devDependencies": {
  "@testing-library/jest-dom": "^6.1.3",
  "@testing-library/react": "^14.0.0",
  "@testing-library/user-event": "^14.5.1",
  "jest": "^29.7.0",
  "jest-environment-jsdom": "^29.7.0",
  "ts-jest": "^29.1.1"
}

```

### Install Jest eslint dev dependencies

```bash
$ npm i -D eslint-plugin-jest-dom eslint-plugin-testing-library
```

```json
"devDependencies": {
  "eslint-plugin-jest-dom": "^5.1.0",
  "eslint-plugin-testing-library": "^6.0.1",
}

```

edit .eslint.json  
add "plugin:testing-library/react", "plugin:jest-dom/recommended" to extends

```json
{
  "extends": [
    "next/core-web-vitals",
    "prettier",
    "plugin:testing-library/react",
    "plugin:jest-dom/recommended"
  ],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": ["error"]
  }
}
```

### Create the Jest configuration file in project root (outdated?)

```bash
$ touch jest.config.js
```

Add the following to the config file

```js
const nextJest = require('next/jest')
const createJestConfig = nextJest({
  dir: './',
})
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
}
module.exports = createJestConfig(customJestConfig)
```

### Create the Jest configuration file in project root (outdated)

```bash
$ touch jest.config.mjs
```

```js
import nextJest from 'next/jest.js'
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})
// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
}
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)
```

### Create the Jest configuration file in project root (here we go again)

```bash
$ touch jest.config.js
```

```js
const nextJest = require('next/jest')
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})
// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  preset: 'ts-jest',
}
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(config)
```

### Create a new "test" folder in project root (deleted)

```bash
$ mkdir test
$ cd test
$ touch index.test.js
```

### Add two scripts to package.json

```json
"scripts": {
  "test": "jest",
  "test:watch": "jest --watch"
},
```

### Add Jest setup file

```bash
$ touch jest.setup.js
```

```json
import '@testing-library/jest-dom/extend-expect'

```

### Create first test

```bash
$ mkdir __tests__
$ cd __tests__
$ touch Home.test.tsx
```

```js
import {render, screen} from '@testing-library/react'
import Home from '@/app/page'

// AAA method
it('should have Docs text', () => {
  render(<Home />) // 1. ARRANGE
  const myElement = screen.getByText('Docs') // 2. ACT
  expect(myElement).toBeInTheDocument() // 3. ASSERT
})
```

### Ran into issues with next and testing-library/jest-dom versions

These were the versions installed:

- "next": "13.4.19",
- "@testing-library/jest-dom": "^6.1.3"

To fix:

```bash
$ npm i next@13.4.10
$ npm i -D @testing-library/jest-dom@5.16.5
```

### Cleanup

- remove dev dependencies from package.json
- reset up-to-date versions of next and testing-library/jest-dom modules
- delete **tests** folder
- delete jest.config and jest.setup files
- remove "plugin:testing-library/react", "plugin:jest-dom/recommended" extends in .eslint.json
- remove jest scripts from package.json

### links

- [LogRocket: Testing Next.js apps with Jest](https://blog.logrocket.com/testing-next-js-apps-jest/)
- [Next.js with React Testing Library, Jest, TypeScript](https://youtu.be/AS79oJ3Fcf0?si=SfQK-mT3QWdTU4Ck) - \*version 13
