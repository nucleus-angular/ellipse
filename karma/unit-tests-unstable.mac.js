basePath = '..';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'components/unstable-angular-complete/angular.js',
  'components/unstable-angular-complete/angular-mocks.js',
  'tests/libraries/mocker.js',
  '*.js',
  'tests/*.js'
];

reporters = ['dots'];

autoWatch = false;

browsers = ['Chrome', 'Firefox', 'Safari', 'Opera'];

singleRun = true;
