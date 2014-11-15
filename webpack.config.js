module.exports = {

  entry: './app/js/app.js',

  output: {
    path: './app/js',
    filename: 'bundle.js'   
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
