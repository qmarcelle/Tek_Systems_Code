/*
*       This is our Node.js server.  It will server up content when
*       requests from a browser come in to localhost:8006, this
*       server will respond.
*
*       This server now spawns the webpack dev-server below, therefore
*       bundle.js will be generated in-memory now.
*
*       URLs:
*
*
*
* */
const express = require('express'),
	app = express(),

	webpack = require('webpack'),
	webpackDevMiddleware = require('webpack-dev-middleware'),
	webpackHotMiddleware = require('webpack-hot-middleware'),
	webpackConfigFile = require('./webpack.config'),
	path = require('path');

let compiler;

webpackConfigFile.plugins.push(new webpack.HotModuleReplacementPlugin());
compiler = webpack(webpackConfigFile);

app.use(webpackDevMiddleware(compiler, {
	publicPath: webpackConfigFile.output.publicPath,
	stats: {colors: true}
}));

app.use(webpackHotMiddleware(compiler, { log: console.log }));      // allow console.log output

app.use(express.static(path.join(__dirname, '/')));                 // sets project root to recognize files like .css

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'index.html'));               // sets the root url to work with index.html
});


app.listen(8006, function () {
	console.log('Server running...');
	console.log('http://localhost:8006')
});

