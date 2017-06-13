var webpack = require('webpack')
HTMLWebpackPlugin = require('html-webpack-plugin');


module.exports = () => {
    return {
        entry: {
            'main': './src/index'
        },
        target: 'web',
        output: {
            path: __dirname + '/dist',
            publicPath: '/',
            filename: '[name].[hash].js'
        },
        resolve: {
            extensions: ['.js', '.css']
        },
        module: {
            rules: [{
                    test: /\.js$/,
                    loaders: ['babel-loader']
                },
                {
                    test: /\.(js|jsx)$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    query: {
                        presets: ['es2015', 'react']
                    }
                },
            ]
        },
        plugins: [
            new HTMLWebpackPlugin({
                template: './src/index.html',
            })
        ],
        devServer: {
            port: 8080,
        }
    }
}