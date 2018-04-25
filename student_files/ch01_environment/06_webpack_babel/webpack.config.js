let config = {
    entry: './index.js',

    output: {
        filename: 'bundle.js',
        sourceMapFialename: "bundle.js.map",
    },

    devtool: 'inline-source-map',

    devServer: {
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