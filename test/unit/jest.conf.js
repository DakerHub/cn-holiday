const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  moduleFileExtensions: [
    'js',
    'json'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest'
  },
  testPathIgnorePatterns: [
    '<rootDir>/test/e2e'
  ],
  coverageDirectory: '<rootDir>/test/unit/coverage',
  collectCoverageFrom: [
    '!**/node_modules/**',
    '<rootDir>/src/*.js',
    '!<rootDir>/src/index.js'
  ]
}
