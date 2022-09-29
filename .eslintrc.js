module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/react-in-jsx-scope': 0 // '@babel/preset-react' 配置 runtime: 'automatic' 就不需要在所有文件头引入React
  }
}
