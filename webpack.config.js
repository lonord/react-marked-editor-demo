var webpack = require('webpack');

module.exports = {
    entry: [
        './src/entry.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel-loader?presets[]=es2015,presets[]=es2016,presets[]=react']
        }]
    }
}
