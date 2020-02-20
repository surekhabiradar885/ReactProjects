var fs=require('fs');

fs.readFile('input.txt',function(err,data){
if(err){
	console.log("error occured "+err);
}else {
	console.log("data from asych file " +data.toString());
}});

var data = fs.readFileSync('input.txt');
console.log("data from synch "+data.toString());
console.log("end of file read");