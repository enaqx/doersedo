module.exports = {

  entry: './app/js/app.js',

  output: {
    filename: './app/js/bundle.js'       
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'jsx-loader?harmony' }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.json', '.jsx'] 
  }

};
