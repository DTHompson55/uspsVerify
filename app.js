/**
 * Module dependencies.
 */
var express = require("express");
var bodyParser = require("body-parser");
var verify = require('./verify.js').verifyAddress;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

// https://app.swaggerhub.com/apis/dataday/uspsVerify/1.0.0#/verify/verify
// sample http://localhost:3000/verify?addr={%22Address1%22:%223114%20Church%22,%22Address2%22:%22%22,%22City%22:%22Evanston%22,%22State%22:%20%22IL%22,%22ZIP%22:%22%22}

app.post("/dataday/uspsVerify/1.0.0/verify", function(req, res) {
	var addr = req.body;
	if ( addr.address == null ){
		addr = JSON.parse(req.query.address)
	}

	//else
//	verify(JSON.parse(x), function (address) {
	verify(addr, function (address) {
			res.status(200).send(JSON.parse(JSON.stringify(address).replace(/^................/g, '{')));
	});
});


app.get("/dataday/uspsVerify/1.0.0/verify", function(req, res) {	
	var addr = req.body;
	if ( addr.address == null ){
		addr = JSON.parse(req.query.address)
	}

	console.log("--- req query = ");
	console.log(req.query);
	console.log("---");
	console.log(addr);
	console.log("---");
	

//	verify(JSON.parse(x), function (address) {
	verify(req.body, function (address) {
			res.status(200).send(JSON.parse(JSON.stringify(address).replace(/^................/g, '{')));
	});
});


var server = app.listen(PORT, function () {
    console.log("app running on port.", server.address().port);
});



/**  
var addr = {"Address1": "3614 Church",
		"Address2": "",
		"City": "Evanston",
		"State": "IL",
		"ZIP": ""};

		verify(addr, function (address) {
		    // parsed response body as js object
		    console.log(address);
		    // raw response
		 //   console.log(response);
		});
	**/	 

