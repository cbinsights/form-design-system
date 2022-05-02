module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleDirectories: ['src'],
  rootDir: './',
  testPathIgnorePatterns: ['<rootDir>/lib/'],
  coveragePathIgnorePatterns: ['<rootDir>/src/icons/react'],
  setupFilesAfterEnv: ['<rootDir>/scripts/node/setupTests.js', 'jest-prop-type-error'],
  testRegex: '(/__tests__/.*|(\\.|/)(test))\\.[jt]sx?$',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '^.+\\.(svg|png)$': '<rootDir>/svgTransform.js',
  },
};
