var fs = require("fs");
console.log("Starting");
var myObj = JSON.parse(fs.readFileSync("myJSON.json"));
console.log("Initial myJSON : ", myObj);

fs.watchFile("myJSON.json", function(current, previous){
	console.log("myJSON changed.");
	myObj=JSON.parse(fs.readFileSync("myJSON.json"));
	console.log("New myJSON : ", myObj);
});