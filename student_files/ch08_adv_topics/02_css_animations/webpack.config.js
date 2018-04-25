module.exports = {
	entry: [
		'./src/index.js'
	],
	output: {
		filename: 'bundle.js'
	},
	plugins: [],
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    },

	devtool: 'source-map',
};
