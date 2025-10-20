const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx', // Точка входа для React. Для нативного JS укажите './src/index.ts'
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
    clean: true,
    publicPath: '/'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  devServer: {
    static: { directory: path.join(__dirname, 'dist') },
    historyApiFallback: true,
    port: 3000,
    hot: true,
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new MiniCssExtractPlugin()
  ],
  module: {
    rules: [
      // Обработка TypeScript и React
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader' // Можно заменить на babel-loader
      },
      // Обработка SASS/SCSS и CSS
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      // Обработка изображений
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      // Обработка шрифтов
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};