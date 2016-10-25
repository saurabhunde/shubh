var express=require("express");
var fs=require("fs");

var server = express();
//server.use(express.bodyParser());
server.get('/',function(request,response){
	console.log("Inside Request Handler");
	var file = fs.readFileSync("data.json", "utf-8");
	response.setHeader('Access-Control-Allow-Origin','*');
	response.send(file);  
});
console.log("Server started");
server.listen(8888);