
var fs=require('fs');

var readableStream = fs.createReadStream('input.txt');

var data='';
readableStream.setEncoding('UTF8');

readableStream.on('data',function(chunk){
	data+=chunk;	
});

readableStream.on('end',function(){
	console.log("file content: "+data);
});
var writeableStream=fs.createWriteStream('output.txt');
var writeData="Hello World";

writeableStream.write(writeData,'UTF8');
writeableStream.end();
writeableStream.on('finish', function(){
	console.log('write completed');
});

