let webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  output: {
    path: 'dist',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: './dist',
    port: 3000
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=20000'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(scss|sass)$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      { 
        test: /bootstrap\/js\//, 
        loader: 'imports?jQuery=jquery' 
      },
      { 
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,   
        loader: "url?limit=10000&minetype=application/font-woff" 
      },
      { 
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    
        loader: "url?limit=10000&minetype=application/octet-stream" 
      },
      { 
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    
        loader: "file" 
      },
      { 
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    
        loader: "url?limit=10000&minetype=image/svg+xml" 
      }
    ]
  }
};