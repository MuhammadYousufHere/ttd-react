/** @type {import('ts-jest/dist/types').JestConfigWithTsJest} */
export default {
  clearMocks: true,
  preset: 'ts-jest',
  collectCoverage: true,
  testTimeout: 20000, //to resolve timeout error
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,jsx,tsx}',
    '!<rootDir>/src/main.tsx',
    '!src/**/*.d.ts',
    '!src/__mocks__/**'
  ],
  testEnvironment: 'jest-environment-jsdom',
  coverageDirectory: 'coverage',
  testEnvironmentOptions: {
    NODE_OPTIONS: '--experimental-vm-modules'
  },
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/mocks/fileMock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/styles.ts',
    axios: 'axios/dist/node/axios.cjs'
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transformIgnorePatterns: ['./node_modules/', './dist/', './public/'],
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        diagnostics: {
          ignoreCodes: [1343]
        },
        astTransformers: {
          before: [
            {
              path: 'node_modules/ts-jest-mock-import-meta', // or, alternatively, 'ts-jest-mock-import-meta' directly, without node_modules.
              options: { metaObjectReplacement: { env: { MODE: 'dev' } } }
            }
          ]
        }
      }
    ]
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/']
}
