var events=require('events');

var eventEmitter=new events.EventEmitter();

 var ringBell=()=>{
 console.log("ring ring ring");
 }
 eventEmitter.on('doorOpen',ringBell);
 eventEmitter.emit('doorOpen');
 
 eventEmitter.on('bellrings',message=>{
	console.log(message); 
 });
 
 eventEmitter.emit('bellrings','welcome');