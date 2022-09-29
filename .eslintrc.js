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
  parser: '',
  overrides: [
    {
      files: ['*.tsx?'],
      parser: '@typescript-eslint/parser',
      plugins: ['react', '@typescript-eslint'],
      rules: {
        'react/react-in-jsx-scope': 0 // '@babel/preset-react' 配置 runtime: 'automatic' 就不需要在所有文件头引入React
      }
    },
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      plugins: ['vue'],
      rules: {}
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: [],
  rules: {}
}
