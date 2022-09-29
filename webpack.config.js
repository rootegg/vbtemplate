const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin') // webpack5 包中自动包含terser-webpack-plugin包，不需要单独安装
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { merge } = require('webpack-merge')
const isDevelopment = process.env.env == 'development'
const isProduction = process.env.env == 'production'
const isAnalyzer = process.env.env == 'analyzer'

/**
 * @type {webpack.Configuration} // 自动提示
 */
let webpackConfig = {
  entry: {
    index: './src/index.js'
  },
  output: {
    clean: true, // 清空dist目录，可以代替CleanWebpackPlugin
    path: path.resolve(__dirname, 'dist'), // 输入目录，绝对路径，默认dist
    filename: '[name].[chunkhash].js', // js用chunkhash
    chunkFilename: '[name].[chunkhash].js', // 通常是一个入口一个chunk，但是异步请求import('...')或require.ensure('...')会形成chunk，optimization.splitChunk可以独立chunk
    assetModuleFilename: 'assets/[name].[contenthash].[ext][query]' // 图片等素材文件夹和命名用contenthash
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /(\.css|\.scss)$/,
        use: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /(\.jpg|\.jpeg|\.png|\.gif|\.webp)$/,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        type: 'asset/resource'
      }
    ]
  },
  resolve: {
    alias: {
      '@/': path.resolve('./src')
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        elementUi: {
          name: 'element-ui',
          test: /[\\/]node_modules[\\/]element-ui[\\/]/,
          priority: 10
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '模板网页',
      template: './index.html',
      chunks: ['index'],
      minify: false // 是否压缩html
    }),
    /**
     * 提供给代码中可以使用变量，如果是字符串，要多包一层引号，否则会被当着变量
     */
    new webpack.DefinePlugin({
      MODE: JSON.stringify(process.env.env),
      BUILD: "'build'"
    })
  ].filter(Boolean)
}

if (isDevelopment) {
  /**
   * 只开发环境要 source-map
   */
  webpackConfig = merge(webpackConfig, {
    mode: 'development',
    output: {
      clean: false
    },
    devServer: {
      open: true,
      port: 3000,
      hot: true,
      proxy: {
        '^/api': {
          target: 'http://youdomain.com/',
          changeOrigin: true,
          headers: {
            referer: 'http://youdomain.com'
          }
        }
      }
    },
    devtool: 'source-map'
  })
}

if (isProduction || isAnalyzer) {
  webpackConfig = merge(webpackConfig, {
    mode: 'production',
    plugins: [
      /**
       * 清空dist目录
       */
      // new CleanWebpackPlugin(),
      /**
       * 提取css到独立文件
       */
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css', //css和图片素材用contenthash
        chunkFilename: '[id].css'
      })
      /**
       * 压缩js文件, 观察到production时js已经被压缩
       */
      // new TerserWebpackPlugin(),
    ]
    // optimization: {
    //   minimize: true,
    //   minimizer: [
    //     new CssMinimizerWebpackPlugin(), //  观察到production时css已经被压缩
    //   ],
    // },
  })
}
if (isAnalyzer) {
  // 体积分析
  webpackConfig = merge(webpackConfig, {
    plugins: [new BundleAnalyzerPlugin()]
  })
}

module.exports = webpackConfig
