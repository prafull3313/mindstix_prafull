var fs = require("fs");
console.log("Starting");
var contents = fs.readFileSync("myJSON.json");
console.log("Contents : " + contents);
var config = JSON.parse(contents);
console.log("Config : ", config);
console.log("Hi " + config.name + ". Your username is " + config.username + " and password is " + config.password + ". Have a nice day...!!!");