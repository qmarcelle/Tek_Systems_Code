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
*       /contact/500
*       /contact
*
*
*
*
*
*
* */
const express = require('express'),
	app = express(),

    contacts = require('./contacts'),
    contactdata = contacts.contactdata,

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


app.get('/contact/:contactid', function (req, resp) {
    let contactid = req.params.contactid,
        results = {'error' : 'Not found.'};

    console.log('GET contact: ' + contactid);

    contactdata.forEach(function(contact){
        if (contact.contactid == contactid)  // only a double-equals here
            results = contact;
    });

    resp.json(results);
    resp.end();
});


app.get('/contact', function (req, resp) {
    let results={};
    results.contactdata = [];

    contactdata.forEach(function(c){
        let contact = {};
        contact.contactid        = c.contactid;
        contact.name             = c.name;
        contact.address          = c.address;
        contact.email            = c.email;
        contact.phone_num        = c.phones[0].number;
        contact.phone_type       = c.phones[0].type;
        contact.company          = c.company;
        contact.position         = c.position;
        results.contactdata.push(contact);
    });

    console.log('GET all contacts');

    resp.json(results);
    resp.end();
});

app.listen(8006, function () {
	console.log('Server running...');
	console.log('http://localhost:8006')
});

