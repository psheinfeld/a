// Use a Node.js core library
var url = require('url');

// Parse the URL of the current location
var parts = url.parse(window.location);


var tether = require('tether');

// Log the parts object to our browser's console
console.log(parts);