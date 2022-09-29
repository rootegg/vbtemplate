module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: ['eslint:recommended', 'plugin:vue/essential', '@vue/prettier'],
  overrides: [],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  plugins: ['vue'],
  rules: {}
}
