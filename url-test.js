var url = require('url');
var parsedUrl = url.parse("https://www.google.es?name=pepe");

console.log(parsedUrl.protocol);
console.log(parsedUrl.host);
console.log(parsedUrl.query);