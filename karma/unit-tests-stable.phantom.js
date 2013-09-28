module.exports = function(config) {
  config.set({
    autoWatch: false,
    basePath: '..',
    frameworks: ['jasmine'],
    browsers: ['PhantomJS'],
    singleRun: true,
    preprocessors: {},
    files: [
      'components/unstable-angular-complete/angular.js',
      'components/unstable-angular-complete/angular-mocks.js',
      'tests/libraries/mocker.js',
      '*.js',
      'tests/*.js'
    ]
  });
};