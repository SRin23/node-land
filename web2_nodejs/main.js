var http = require("http");
var fs = require("fs");
var url = require("url"); //url module 사용

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;
 

  //console.log(url.parse(_url, true)); //url의 내용을 저장해놓은 객체

  if(pathname === '/'){
    if(queryData.id===undefined){
      fs.readdir('./data', function(err, filelist){
        var title = 'Welcome';
        var description = 'Hello, Node js';

        var list = '<ul>';
        var i = 0;
        while(i<filelist.length){
          list+=`<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
          i+=1;
        }
        list = list + '</ul>';

        var template = `
        <!doctype html>
          <html>
          <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
          </head>
          <body>
            <h1><a href="/">WEB</a></h1>
              ${list}
            <h2>${title}</h2>
            <p>
              ${description}
            </p>
          </body>
          </html>
        `;
        response.writeHead(200);  //파일 성공적으로 저장
        response.end(template); //queryData.id를 화면에 출력시킴
      });
    }else{
      fs.readdir('./data', function(err, filelist){
        var list = '<ul>';
        var i = 0;
        while(i<filelist.length){
          list+=`<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
          i+=1;
        }
        list = list + '</ul>';

        fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
          var title = queryData.id;
          var template = `
          <!doctype html>
            <html>
            <head>
              <title>WEB1 - ${title}</title>
              <meta charset="utf-8">
            </head>
            <body>
              <h1><a href="/">WEB</a></h1>
              ${list}
              <h2>${title}</h2>
              <p>
                ${description}
              </p>
            </body>
            </html>
          `;
          response.writeHead(200);  //파일 성공적으로 저장
          response.end(template); //queryData.id를 화면에 출력시킴
        });
      });
    }
  }else{
    response.writeHead(404);  //파일을 찾을 수 없음
    response.end('Not Found');
  }
});
app.listen(3000);
