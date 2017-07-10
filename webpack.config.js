const webpack = require('webpack');
const path = require('path');
const fs = require('fs-extra');
const exec = require('child_process').execSync;
const Dotenv = require('dotenv-webpack');

const version = exec('git describe --exact-match --tag HEAD 2>/dev/null || git rev-parse --short HEAD').toString().trim();

if (!fs.existsSync('.env')) {
  fs.copySync('.env.example', '.env');
  console.log('Copied .env.example => .env');
}


module.exports = {
  target: 'web', // output is fine for nodejs usage
  entry: {
    'bundle': './src/index.js',
    'bundle.min': './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),

    library: 'maps4news',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        include: /(src)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
          },
        },
      },
    ],
  },
  devtool: 'source-map',
  plugins: [
    new Dotenv({
      safe: true,
      systemvars: true,
    }),

    new webpack.DefinePlugin({
      VERSION: JSON.stringify(version),
    }),

    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true,
    }),

    new webpack.BannerPlugin(
      'hash:[hash], chunkhash:[chunkhash], name:[name], version:' + version +
      '\n\nThis budle contains the following packages:\n' + exec('$(npm bin)/licensecheck')
    ),
    new webpack.BannerPlugin(fs.readFileSync('LICENSE', 'ascii')),
  ],
};
