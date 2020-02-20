
var route=(handle,pathname,response,reviewData)=>{
	console.log("routing for request url1 "+ pathname);
	if(typeof handle[pathname]==='function'){
		handle[pathname](response,reviewData);
	} else{
		response.writeHeader(404,{"Content-Type":"text/plain"})
		response.write("404 page not found");
		response.end();
	}
}
exports.route=route;