const path = require('path');
const webpack = require('webpack');
/*const UglifyJSPlugin = require('uglifyjs-webpack-plugin');*/

module.exports = {
    entry: [
        'babel-polyfill',
        './src/index.js'
    ],
  output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),
  },
    //watch: true,
    devServer: {
      contentBase: "./dist",
      compress: true,
      port: 9000
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
                            'react',
                            'stage-2'
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        })/*,
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }) */
    ],
    externals: {

  }
    //devtool: 'source-map'
};
