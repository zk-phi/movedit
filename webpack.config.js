module.exports = {
  mode: 'development',
  entry: './src/main.ts',
  devServer: {
    contentBase: 'dist',
    open: true
  },
  output: {
    path: `${__dirname}/dist`,
    filename: "main.js"
  },
  module: {
    rules: [
      { test: /\.ts$/, use: 'ts-loader' },
    ],
  },
  resolve: {
    extensions: [ '.ts', '.js' ],
  },
};
