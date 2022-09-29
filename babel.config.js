module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: 2,
        modules: false
      }
    ],
    ['react-app', { flow: false, typescript: true }]
  ],
  plugins: [
    ['@babel/plugin-transform-runtime'],
    [
      'babel-plugin-import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true
      },
      'vant'
    ],
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        style: true // or 'css'
      }
    ],
    [
      'babel-plugin-import',
      {
        libraryName: 'lodash',
        libraryDirectory: '',
        camel2DashComponentName: false // default: true
      },
      'lodash'
    ],
    [
      'babel-plugin-component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      },
      'element-ui'
    ]
  ]
}
