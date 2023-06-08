var module = require('./dbmodule');
var url = require('url');
var querystring = require('querystring');
var http = require('http');
http.createServer(function(request, response) {
    var data1 = ''; 
	request.on('data', function(chunk) { data1 += chunk; });
        request.on('end', function() {
            var visitor_name = querystring.parse(data1)["visitor_name"];
            console.log(visitor_name);
            var visitor_email = querystring.parse(data1)["visitor_email"];
            console.log(visitor_email);
            var visitor_phone = querystring.parse(data1)["visitor_phone"];
            console.log(visitor_phone);
            var total_adults = querystring.parse(data1)["total_adults"];
            console.log(total_adults);
            var total_children = querystring.parse(data1)["total_children"];
            console.log(total_children);
            var checkin = querystring.parse(data1)["checkin"];
            console.log(checkin);
            var checkout = querystring.parse(data1)["checkout"];
            console.log(checkout);
            var place = querystring.parse(data1)["place"];
            console.log(place);
            var visitor_message = querystring.parse(data1)["visitor_message"];
            console.log(visitor_message);
            
            
             if (request.url === '/enquire') {
                module.saveUser(visitor_name, visitor_email, visitor_phone,total_adults,total_children, checkin, checkout, place, visitor_message, response);
            } else {
                console.log("In else");
            }
            
        });
   
}).listen(3000);
console.log("Server started");