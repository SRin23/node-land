var http = require('http');
var fs = require('fs');
var url = require('url'); //url module 사용

var app = http.createServer(function(request,response){
    var _url = request.url;

    var queryData = url.parse(_url, true).query;
    console.log(queryData.id);
    console.log(_url);

    if(_url == '/'){
      _url = '/index.html';
    }

    if(_url == '/favicon.ico'){
        response.writeHead(404);
        response.end();
        return;
    }

    response.writeHead(200);
    //response.end(fs.readFileSync(__dirname + _url));  //사용자가 접속한 url에 따라서 그 파일을 읽어오는것
    response.end(queryData.id);  //queryData.id를 화면에 출력시킴
});
app.listen(3000);