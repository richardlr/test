var http = require('http');
var webserver = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<!doctype html>\n<html lang="zh-cn">\n<head>\n<meta charset="utf-8">\n<title>Test nodejs</title>\n</head>\n<body>\n');
  res.write('<h1>Hello World</h1><h1>你好，世界</h1>\n');
  res.end('</body></html>');
});
webserver.listen(9999, '127.0.0.1');

console.log('Server running at http://127.0.0.1:9999/');
