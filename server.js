var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var cache = {};

function send404(respone) {
	response.writeHead(404, {'Content-type': 'text/plain'});
	response.write('Error 404: reseouce not found.');
	response.end();
}

function sendFile(response, filePath, fileContents) {
	response.writeHead(
		200,
		{"content-type": mime.lookup(path.basename(filepath))}
		);
	response.end(fileContents);
}

