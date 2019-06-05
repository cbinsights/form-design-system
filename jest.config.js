module.exports = {
  rootDir: './',
  setupFilesAfterEnv: [
    '<rootDir>/scripts/setupTests.js',
  ],
  snapshotSerializers: [
    '<rootDir>/node_modules/enzyme-to-json/serializer',
  ],
};
