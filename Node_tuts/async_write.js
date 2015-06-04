/*
writing in a file asynchronously
*/
var fs = require("fs");
console.log("Starting");
fs.writeFile("async_write.rtf", "Hi Prafull...!!! I am writing this asynchronously...!!!", function(error){
	console.log("File writing completed");
});
console.log("Finished");