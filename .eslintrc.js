module.exports = {
  extends: ['react-app'],
  parser: '@typescript-eslint/parser',
  rules: {
    'react/react-in-jsx-scope': 0 // '@babel/preset-react' 配置 runtime: 'automatic' 就不需要在所有文件头引入React
  }
}
