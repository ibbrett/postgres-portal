# Testing

[Jest](./README-JEST.md) and [Cypress](./README-CYPRESS.md) are complementary tools that can cover different aspects of testing and debugging your web applications. While Jest is ideal for testing the logic and behavior of your components and functions, Cypress is ideal for testing the user interface and experience of your applications

## Jest

Jest is a JavaScript testing framework that is designed to work with any JavaScript project, from React to Vue, Angular, Node, and more. It offers a range of features to make testing easy and enjoyable, such as fast parallel execution, built-in code coverage and mocking support, snapshot testing, interactive watch mode, customizable matchers and assertions, and seamless integration with other tools and libraries. _With Jest you can write unit tests, integration tests, and snapshot tests for your web components, logic, and data_. Plus, it supports TypeScript, Babel, and webpack so you can use the latest JavaScript features and syntax.

- By default, Jest expects to find test files in a folder called &lowbar;&lowbar;tests&lowbar;&lowbar; in your project folder

### you can:

- check if a given function produces the expected result

### describe

- **describe**: a Jest method for containing one or more related tests
- it takes two arguments: a string for describing the test suite, and a callback function for wrapping the actual test.

### test

- **test** block

### run

npm run dev

```bash
$ npm test
$ npm test -- --coverage
```

## Cypress

Cypress is a web testing framework that simplifies and automates **end-to-end testing** of web applications. It runs in the same browser as your application, allowing it to access and control DOM elements, network requests, local and session storage, cookies, authentication, browser tabs, and windows. With Cypress, you can write end-to-end tests to simulate real user interactions such as _filling out forms, navigating between pages, handling alerts and pop-ups, performing drag-and-drop and file upload actions, and testing responsive layouts and accessibility features_. Additionally, Cypress provides a user-friendly interface to view tests running live, debug code, and inspect the application state.

### testing cats

- unit testing
- integration testing
- UI testing

### links

[How to use Jest and Cypress together?](https://www.linkedin.com/advice/0/how-do-you-use-jest-cypress-web-development-skills-web-development)
[Jest Tutorial for Beginners: Getting Started With JavaScript Testing](https://www.valentinog.com/blog/jest/)
