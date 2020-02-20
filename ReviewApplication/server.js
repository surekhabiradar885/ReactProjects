var http=require('http');
var url=require('url');

var startServer=(route,handle)=>{
	var onRequest=(req,resp)=>{
			var reviewData='';
			var pathName=url.parse(req.url).pathname;
			console.log("request recieved for "+pathName);
			req.setEncoding('utf8');
			req.addListener("data",function(chunk){
				reviewData+=chunk;;
			});
			req.addListener('end',function(){
				route(handle,pathName,resp,reviewData);
			});								
	}
http.createServer(onRequest).listen(8888);
console.log("Server started at port 8888");
}
exports.startServer=startServer;

