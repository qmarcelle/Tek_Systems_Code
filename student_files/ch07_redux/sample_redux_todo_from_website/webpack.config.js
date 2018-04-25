let config = {
    entry: './index.js',

    output: {
        filename: './bundle.js',
        sourceMapFilename: './bundle.js.map',
    },

    debug: true,
    devtool: 'inline-source-map',

    devServer: {
        contentBase: './',
        inline: true,
        port: 8006
    },


    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    },
};

module.exports = config;