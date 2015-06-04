/*
asynchronous reading
*/
var fs = require("fs");
console.log("Staring");
fs.readFile("sample.rtf", function(error, data){
	console.log("Contents : " + data);
});
console.log("Carry on execution");