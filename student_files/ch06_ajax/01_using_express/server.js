/*


        To run, execute:  node server.js from the using_express folder


*/

var express = require('express'),
    empdata = require('./empdata.js'),
    emps    = empdata.empdata.emps,
    max     = 100+emps.length,
    port    = 8005,
    app     = express();


app.use(express.directory("public"))
   .use(express.static("public"))
   .use(express.bodyParser());

// supports CORS
app.options("*", function (req, res) {
    console.log("OPTIONS");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.setHeader("Access-Control-Allow-Headers", "accept, origin, format");
    res.end();
});

app.get("/employee/:empid", function (req, resp) {
    var empid = req.params.empid, 
        results = {"error" : "Not found."};

    resp.setHeader("Access-Control-Allow-Origin", "*");
	
	emps.forEach(function(emp) {
        if (parseInt(empid) === emp.empid)
            results = emp;
	});

    console.log("GET employee: " + empid);

	resp.json(results);
    resp.end();
});


app.get("/employee", function (req, resp) {
    var results = emps;
    console.log("GET all employees");
    resp.setHeader("Access-Control-Allow-Origin", "*");	
	resp.json(results);
    resp.end();
});



app.listen(port);
console.log('Server running. Type: http://localhost:8005/index.html in your browser to run.');
