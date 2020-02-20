var querystring=require('querystring');
module.exports={
	home:function home(response){
		console.log("executing home handler");
		var htmlfile=
		'<!DOCTYPE html>'+
		'<html>'+
		'<head>'+
		'<meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>'+
		'<h2>'+"Form to review the Content"+'</h2>'+
		'</head>'+
		'<body>'+
			'<form action="/review" method="post">'+
				'<textarea name="text";rows="40" clos="60"></textarea>'+
				' <div><input type="submit" value="Submit text"/></div> '+
				'</form>'
			'</body>'

		'</html>';
			response.writeHead(200,{"Content-Type":"text/html"});
			response.write(htmlfile);
			response.end();
},
	review:function review(response,reviewData){
	console.log("executing review handler");
	response.writeHead(200,{"Content-Type":"text/plain"});
	response.write("Your review is "+querystring.parse(reviewData).text);
	response.end();
}
}