module.exports = {
  mode: "development",
  module: {
    rules: [
      { test: /\.css$/, use: 'css-loader' },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
  

      {
        test: /\.js$/,
        

        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  }
}