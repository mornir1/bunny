// const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const CopyWebpackPlugin = require("copy-webpack-plugin");
// var $ = require("jquery");


// module.exports = {
//     entry: './src/index.js',
//     output:{
//         path: path.resolve (__dirname, 'dist'),
//         filename:'app.bundle.js',
//     },
//     module:{
//         rules:[
//             {test:/\.js$/, use:'babel-loader', exclude:/node_modules/},
//            // { test: /\.css/,use: ['style-loader', 'css-loader'] }
//            {test: /\.css/,
//                use: ExtractTextPlugin.extract({
//                 fallback: "style-loader",
//                 use: "css-loader"

                
//                })
                

//            }
            
//         ]
//     },
//     plugins:[
//         new ExtractTextPlugin("globals.css"),
//         new CopyWebpackPlugin([
//           { from: 'src/index.html' },
//       ]) 
//     ],

//     devServer: {
//     contentBase: './',
//     compress: true,
//     port: 3000,
//     stats:"minimal",
//     open:true
//   },

  
//     devtool : "source-map"
// };
























const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
var $ = require("jquery");
// var  explode = require("jquery-image-explode");



module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'static/js/app.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      //{ test:/\.scss$/, use: ['style-loader','css-loader','sass-loader'] },
      {test:/\.js$/, use:'babel-loader', exclude:/node_modules/},
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader","sass-loader"]
        })
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin("static/css/globals.css"),
    new CopyWebpackPlugin([
          { from: 'src/index.html' },
          { from: 'src/images' , to: 'images'},
          { from: 'src/sounds' , to: 'sounds'},
           { from: 'src/js' , to: 'js'}

      ])
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 3000,
    stats:"minimal",
    open:true,
    openPage:""
  },
  devtool:"source-map"
};