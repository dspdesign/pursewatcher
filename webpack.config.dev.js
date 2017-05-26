const path = require('path');
const webpack = require('webpack');

const config = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        './src/app.js',
        'webpack-hot-middleware/client'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            }
        ]
    }
};

module.exports = config;
