module.exports = {
  collectCoverageFrom: [
    'src/**/*.js',
    '!node_modules/**',
  ],
  coverageReporters: [
    'html', 'cobertura',
  ],
  coverageDirectory: 'build/coverage',
  reporters: [
    'default',
    ['jest-junit', {outputDirectory: 'build'}],
  ],
};
