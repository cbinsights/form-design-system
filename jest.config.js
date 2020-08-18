
module.exports = {
  rootDir: './',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/lib/',
  ],
  setupFilesAfterEnv: [
    '<rootDir>/scripts/node/setupTests.js',
  ],
  snapshotSerializers: [
    '<rootDir>/node_modules/enzyme-to-json/serializer',
  ],
};
