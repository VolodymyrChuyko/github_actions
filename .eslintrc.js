module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  rules: {
    'semi': 'error',
    'arrow-parens': ["error", "always"],
    'no-multi-spaces': "error",
    'no-multiple-empty-lines': ["error", { "max": 1, "maxEOF": 0 }],
    'no-trailing-spaces': "error",
    'eol-last': ["error", "always"],
  },
};
