const esModules = ['@folio', 'ky'].join('|');

module.exports = {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/**/node_modules/**',
    '!<rootDir>/**/test/jest/**',
    '!<rootDir>/**/index.ts'
  ],
  coverageDirectory: './artifacts/coverage-jest/',
  coverageReporters: ['lcov'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageProvider: "babel",
  reporters: [ 'jest-junit', 'default' ],
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest',
  },
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
  maxWorkers: "50%",
  moduleFileExtensions: [ 'js', 'jsx', 'ts', 'tsx', 'json' ],
  moduleNameMapper: {
    '^.+\\.(css|svg)$': 'identity-obj-proxy',
  },
  moduleDirectories: [ 'node_modules', '<rootDir>' ],
  testMatch: ['<rootDir>/src/**/?(*.)test.{ts,tsx}'],
  testPathIgnorePatterns: ['/node_modules'],
  setupFiles: ['./test/jest/setupTests.ts'],
  setupFilesAfterEnv: ['<rootDir>/test/jest/jest.setup.ts'],
};
