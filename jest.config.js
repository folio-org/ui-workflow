// eslint-disable-next-line import/no-extraneous-dependencies
const path = require('path');

const esModules = ['@folio', 'ky'].join('|');

module.exports = {
  collectCoverageFrom: [
    '**/(lib|src)/**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/test/jest/**',
  ],
  coverageDirectory: './artifacts/coverage-jest/',
  coverageReporters: ['lcov'],
  reporters: ['jest-junit', 'default'],
  transform: {
    '^.+\\.(t|j)sx?$': ['ts-jest', { tsconfig: 'tsconfig.json' }],
  },
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  moduleNameMapper: {
    '^.+\\.(css|svg)$': 'identity-obj-proxy',
  },
  moduleDirectories: ['node_modules', '<rootDir>'],
  testMatch: ['**/(lib|src)/**/?(*.)test.{ts,tsx}'],
  testPathIgnorePatterns: ['/node_modules/'],
  setupFiles: [
    path.join(__dirname, './test/jest/setupTests.ts')
  ],
  setupFilesAfterEnv: [path.join(__dirname, './test/jest/jest.setup.ts')],
};
