// cucumber.js
const path = require('path');

module.exports = {
  default: {
    paths: ['features/e2e/**/*.feature'],
    requireModule: ['ts-node/register'],
    require: [
      'steps/**/*.ts',
      'support/**/*.ts',
      'features/**/support/**/*.ts',
      'features/**/steps/**/*.ts'
    ],
    format: [
      'progress',
      'summary',
      'json:reports/cucumber-report.json',
      path.resolve(__dirname, './reporter.cjs') 
    ],
    formatOptions: {
      resultsDir: 'allure-results'               
    },
    timeout: 60000,
    strict: true,
    tags: 'not @skip'
  }
};