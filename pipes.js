var fs= new require('fs');

var readableStream=fs.createReadStream('input.txt');
var writeableStream=fs.createWriteStream('output.txt');

readableStream.pipe(writeableStream);