const config = {
  testEnvironment: 'node',
  verbose: true,
  moduleFileExtensions: ['js', 'mjs'],
  moduleDirectories: ['node_modules', 'src'],
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  testMatch: ['**/*.test.mjs'],
  setupFiles: ['<rootDir>/__tests__/env.mjs'],
  collectCoverageFrom: ['src/**/*.mjs', '!src/index.mjs'],
  transform: {
    '^.+\\.mjs': 'babel-jest',
  },
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};

export default config;
