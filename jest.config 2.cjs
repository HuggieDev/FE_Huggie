
module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    "^.+\\.tsx?$": "babel-jest"
  },
  preset: "ts-jest",
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    'jest-plugin-context/setup',
  ],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
};