var databaseUrl = "mongodb://127.0.0.1:27017/mydb";
var mongojs = require("./node_modules/mongojs");
var db = mongojs(databaseUrl);
//var collections = db.collection("users");
console.log("Connected");

exports.authenticateUser = function(visitor_name, visitor_email, visitor_phone, total_adults, total_children, checkin, checkout, place, visitor_message, response) 
{
    console.log(visitor_name);
    console.log(visitor_email);
    console.log(visitor_phone);
    console.log(visitor_email);
    console.log(total_adults);
    console.log(total_children);
    console.log(checkin);
    console.log(checkout);
    console.log(place);
    console.log(visitor_message);
    db.users.find({ "visitor_name": visitor_name, "visitor_email": visitor_email, "visitor_phone": visitor_phone, "total_adults": total_adults, "total_children": total_children, "checkin": checkin, "checkout": checkout, "place": place, "visitor_message": visitor_message},
        function(err, op) {
            
            if (err || !op) {
                response.write("..Not authorized user" || err);
                response.end();
            } else if (op.length == 0) {
                response.write("Not authorized user");
                response.end();
            } else {
                response.write("Authorized user");
                response.end();
            }

        });
}
exports.saveUser = function(visitor_name, visitor_email, visitor_phone, total_adults, total_children, checkin, checkout, place, visitor_message, response) {
console.log('Saving user to mongo');
db.users.insert({"visitor_name": visitor_name, "visitor_email": visitor_email, "visitor_phone": visitor_phone, "total_adults": total_adults, "total_children": total_children, "checkin": checkin, "checkout": checkout, "place": place, "visitor_message": visitor_message},
function(err, saved) 
{
    if (err || !saved)
        console.log(err);
    else
        response.write("Enquiry sent!");
        response.end();
         });
}