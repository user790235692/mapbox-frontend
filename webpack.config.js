const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),

  },
  plugins: [
    new Dotenv()
  ],
  
  module:{
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ]
  }

};