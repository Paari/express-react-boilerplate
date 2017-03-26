var config = {
  entry: './views/App/main.js',

  output: {
    path: 'public/scripts/',
    filename: 'index.js',
  },

  devServer: {
    port: 1234
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["react-hot-loader", "babel-loader"],
      }
    ]
  }
}

module.exports = config;
