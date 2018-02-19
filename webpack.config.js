const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (env = {}) {
  return {
    context: path.resolve(__dirname, './src'),
    entry: {
      index: './index.js',
    },
    target: 'electron-renderer',
    output: {
      path: path.join(__dirname, 'www'),
      filename: 'lib/[name].js',
    },
    devtool: 'sourcemap',
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/,
          use: getScssLoader(env),
        },
        {
          test: /\.css$/,
          use: getCssLoader(env),
        },
        {
          test: /\.html$/,
          use: getHtmlLoader(env),
        },
        {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/i,
          use: getUrlLoader('./images/[name].[ext]'),
        },
        {
          test: /\.(woff2?|eot|ttf)(\?.*)?$/i,
          use: getUrlLoader('./fonts/[name].[ext]'),
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: getBabelLoader(env),
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
      }),
    ],
    devServer: {
      compress: true,
      contentBase: path.join(__dirname, 'www'),
      host: '0.0.0.0',
      hot: false,
    },
  };
};

function getUrlLoader (name = '[name].[ext]') {
  return {
    loader: 'url-loader',
    options: {
      limit: 1000,
      name: name,
    },
  };
}

function getHtmlLoader () {
  return 'html-loader';
}

function getCssLoader () {
  return [ 'style-loader', 'css-loader' ];
}

function getScssLoader () {
  return [ 'style-loader', 'css-loader', 'sass-loader' ];
}

function getBabelLoader () {
  let plugins = [
    'syntax-dynamic-import',
  ];

  let presets = [
    // [require.resolve('babel-preset-env')],
  ];

  return {
    loader: 'babel-loader',
    options: {
      babelrc: false,
      plugins,
      presets,
      cacheDirectory: true,
    },
  };
}
