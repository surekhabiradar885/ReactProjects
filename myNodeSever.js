var http=require('http');

http.createServer(function(req,resp){
resp.writeHead(200,{"Content-Type":"text/plian"});
resp.write("Hello World");
resp.end();
}
).listen(8888);