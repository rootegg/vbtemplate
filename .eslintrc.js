module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:react/recommended',
    'prettier'
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: ['vue'],
  rules: {}
}
