let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

let conf = {
    "entry": [
        './src/index.js'
    ],
    "output": {
        path: path.join(__dirname, 'dist'),
        publicPath: "/dist/",
        "filename": 'main.js'
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                // exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          filename: path.resolve(__dirname, 'dist/index.html'),
          template: path.resolve(__dirname, 'index.html'),
        }),
      ]
};

module.exports = conf;