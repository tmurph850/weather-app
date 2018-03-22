const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
/*const UglifyJSPlugin = require('uglifyjs-webpack-plugin');*/

const config = {
    entry: './src/index.js',
    output: {
      filename: 'app.js',
      path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist',
      hot: true,
      port: 9000,
      historyApiFallback: true,
      publicPath: '/',
      proxy: {
        "/create": {
          target: "http://localhost:3000",
          pathRewrite: {"^/create" : ""},
          secure: false,
          changeOrigin: true
        }
      }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
                //allows for import of styles (import css from 'file.css');
            }, {
                test: /\.js$|\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        'presets': [
                            [
                                'env', {
                                    'modules': false
                                }
                            ],
                            'stage-2',
                            'react',
                        ]
                    }
                }
            }
        ]
    },
    mode: 'development',
    plugins: [
      new HtmlWebpackPlugin({
        title: 'MyWeather',
        // Load a custom template (lodash by default see the FAQ for details)
        template: './public/index.html'
      }),
     new webpack.NamedModulesPlugin(),
     new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = config;
