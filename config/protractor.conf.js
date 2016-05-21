require('cucumber');
require('ts-node/register');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    '../e2e/features/**/*.feature'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    format: 'pretty',
    require: [
      '../e2e/features/step_definitions/**/*.steps.ts'
    ]
  },
  useAllAngular2AppRoots: true,
  beforeLaunch: function() {
    require('ts-node').register({
      project: 'e2e'
    });
  },
  onPrepare: function() {
    browser.ignoreSynchronization = false;
  }
};
