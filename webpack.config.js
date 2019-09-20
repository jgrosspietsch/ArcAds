const path = require('path');

function generateBabelOptions(variation) {
  if (variation === 'browser') {
    return {
      presets: [
        [
          '@babel/preset-env',
          {
            corejs: 2,
            useBuiltIns: 'usage',
            targets: '> 1% and not dead, ie 11',
          },
        ],
      ],
    };
  }

  if (variation === 'node') {
    return {
      presets: [
        [
          '@babel/preset-env',
          {
            useBuiltIns: false,
            targets: '> 1% and not dead, ie 11',
          },
        ],
      ],
    };
  }

  return {};
}

module.exports = ['browser', 'node'].map((variation) => ({
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: variation === 'browser' ? 'arcads.js' : 'arcads.node.js',
    globalObject: variation === 'browser' ? 'window' : 'typeof self !== \'undefined\' ? self : this',
    libraryTarget: 'umd',
  },
  devtool: process.env.NODE_ENV === 'development' ? 'inline-source-map' : false,
  resolve: { extensions: ['.js', '.json'] },
  module: {
    rules: [
      {
        loader: 'eslint-loader',
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        options: { configFile: '.eslintrc.js' },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: generateBabelOptions(variation),
        },
      },
    ],
  },
}));
