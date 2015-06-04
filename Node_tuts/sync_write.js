/*
writing in a file synchronously
*/
var fs = require("fs");
console.log("Starting");
fs.writeFileSync("sync_write.rtf", "Hello Prafull! I am writing this Synchronously!");
console.log("Finished writing");
