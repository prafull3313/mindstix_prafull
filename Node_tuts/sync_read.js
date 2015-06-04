/*
synchronous reading
*/
var fs = require("fs");
console.log("Staring");
var contents = fs.readFileSync("sample.rtf");
console.log("Contents : " + contents);
console.log("Carry on execution");