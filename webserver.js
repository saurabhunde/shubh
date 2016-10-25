var http=require('http');
var fs=require('fs');
function great(req,res){
	console.log(req.url);
	res.statusCode =200;
	var s = fs.readFileSync("data.json", "utf-8");
	res.setHeader('content-type','text/plain');
	res.setHeader('Access-Control-Allow-Origin','*');
	res.end(s);
}
var h=http.createServer(great);
h.listen('8888','localhost',function(){
	console.log("webserver is intiated..");
});