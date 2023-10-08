export default {
  preset: 'ts-jest',
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx,tsx}', '!<rootDir>/src/main.tsx'],
  testEnvironment: 'jest-environment-jsdom',
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/mocks/fileMock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/styles.ts'
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts']
}
