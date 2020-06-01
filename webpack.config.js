const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'app'), // the entry point of your app
  output: { // definition of the one file the app will become
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/' // where code expects to find this bundle.js output file
  },
  resolve: {
    extensions: [ // array of extensions we want webpack to process
      '.js', 'jsx'
    ]
  },
  devServer: {
    historyApiFallback: true // setting necessary to use React Router
  },
  module: { // where we describe how we want our app to be compiled
    rules: [
      {
        test: /\.jsx?/, // regex webpack will use to determine if a file should or should not be compiled
        loader: 'babel-loader'
      }
    ]
  }
};