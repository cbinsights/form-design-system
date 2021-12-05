module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleDirectories: ['src'],
  rootDir: './',
  testPathIgnorePatterns: ['<rootDir>/lib/'],
  coveragePathIgnorePatterns: ['<rootDir>/src/icons/react'],
  setupFilesAfterEnv: ['<rootDir>/scripts/node/setupTests.js', 'jest-prop-type-error'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
