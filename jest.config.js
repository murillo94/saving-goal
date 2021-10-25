module.exports = {
  roots: ['<rootDir>'],
  resetMocks: false,
  testEnvironment: 'jsdom',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'json',
    'jsx',
    'page.ts',
    'page.tsx',
  ],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '^theme(.*)$': '<rootDir>/src/theme$1',
    '^components(.*)$': '<rootDir>/src/components$1',
    '^utils(.*)$': '<rootDir>/src/utils$1',
    '^hooks(.*)$': '<rootDir>/src/hooks$1',
    '^containers(.*)$': '<rootDir>/src/containers$1',
    '^persistence(.*)$': '<rootDir>/src/persistence$1',
  },
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    'jest-localstorage-mock',
  ],
};
