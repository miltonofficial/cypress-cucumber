# cypress-cucumber
Contains e2e tests in cypress cucumber (gherkin) in javascript with page object pattern.

## Prerequisites:
  - Node.js 12 and above

## Setup:
 To run e2e tests clone the repo and ```$ cd cypress-cucumber/```

  - run ```npm install```
  - run ```npm test```

## Running Test
- To run all the tests run ```npm run test:all```
- To run smoke tests run ```npm run test:smoke```
- To run regression tests run ```npm run test:regression```
- To run selected tests run ```npm test cypress/integration/elements.feature``` If you are trying to pass multiple arguments, separate them with commas instead: npm test ```cypress/integration/test1,cypress/integration/test2,cypress/integration/etc```