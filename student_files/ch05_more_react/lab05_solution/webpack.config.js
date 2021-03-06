let config = {
    entry: './src/index.js',

    output: {
        filename: './build/bundle.js',
	    sourceMapFilename: './build/bundle.js.map',
    },

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