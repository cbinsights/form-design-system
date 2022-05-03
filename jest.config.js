module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleDirectories: ['node_modules', 'src'],
  rootDir: './',
  testPathIgnorePatterns: ['<rootDir>/lib/'],
  transformIgnorePatterns: ['/node_modules/(?!(uuid|nanoid)/)'],
  coveragePathIgnorePatterns: ['<rootDir>/src/icons/react'],
  setupFilesAfterEnv: ['<rootDir>/scripts/node/setupTests.js', 'jest-prop-type-error'],
  testRegex: '(/__tests__/.*|(\\.|/)(test))\\.[jt]sx?$',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/fileTransformer.js',
  },
};
