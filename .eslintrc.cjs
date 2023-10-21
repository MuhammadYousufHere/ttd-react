module.exports = {
  root: true,
  env: { browser: true, es2020: true, 'jest/globals': true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jest/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:testing-library/react',
    'prettier',
    'airbnb'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'src/assets/*'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'jest', 'react-hooks'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/display-name': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-use-before-define': ['off'],
    '@typescript-eslint/consistent-type-exports': 'error',
    'no-console': [
      'error',
      {
        allow: ['warn', 'error']
      }
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before'
          }
        ],
        pathGroupsExcludedImportTypes: ['react'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ]
  },
  overrides: [
    {
      files: ['*.spec.js', '*.spec.ts', '*.spec.tsx'],
      env: {
        jest: true
      }
    }
  ]
}
