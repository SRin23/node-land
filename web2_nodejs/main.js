var http = require("http");
var fs = require("fs");
var url = require("url"); //url module 사용
var qs = require('querystring');
var template = require('./lib/template.js');
var path = require('path');
var sanitizeHtml = require('sanitize-html');  //script 태그의 내용을 모두 삭제시킴(예민한 태그는 삭제)

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;
  //console.log(url.parse(_url, true)); //url의 내용을 저장해놓은 객체
  if(pathname === '/'){
    //queryData.id가 undefined라면, 그냥 localhost:3000일 경우
    if(queryData.id===undefined){
      fs.readdir('./data', function(err, filelist){ //./data 디렉토리의 파일을 읽어오기 -> 글 목록 출력을 위해 필요함
        var title = 'Welcome';
        var description = 'Hello, Node js';
        var list = template.list(filelist);
        var html = template.html(title, list, 
          `<h2>${title}</h2>${description}`, 
          `<a href="/create">create</a>`
        );
        response.writeHead(200);  //파일 성공적으로 저장
        response.end(html); //queryData.id를 화면에 출력시킴
      });
    }else{  //queryData.id가 있을 경우
      fs.readdir('./data', function(err, filelist){
        var filteredPath = path.parse(queryData.id).base;
        //./data에 있는 파일 중 queryData.id와 같은 파일명을 찾아 description에 저장
        fs.readFile(`data/${filteredPath}`, 'utf8', function(err, description){ 
          var title = queryData.id;
          var sanitizedTitle = sanitizeHtml(title);
          var sanitizedDescription = sanitizeHtml(description, {
            allowedTags : ['h1']
          });
          
          var list = template.list(filelist);
          var html = template.html(sanitizedTitle, list, 
            `<h2>${sanitizedTitle}</h2>${sanitizedDescription}`, 
            `
            <a href="/create">create</a> 
            <a href="/update?id=${sanitizedTitle}">update</a> 
            <form action="delete_process" method="post">
              <input type="hidden" name = "id" value="${sanitizedTitle}"/>
              <input type="submit" value="delete">
            </form>
            `
          );
          response.writeHead(200);  //파일 성공적으로 저장
          response.end(html); //queryData.id를 화면에 출력시킴
        });
      });
    }
  }else if(pathname==="/create"){
    if(queryData.id===undefined){
      fs.readdir('./data', function(err, filelist){ //./data 디렉토리의 파일을 읽어오기 -> 글 목록 출력을 위해 필요함
        var title = 'WEB - create';
        var list = template.list(filelist);
        var html = template.html(title, list, `
        <form action="/create_process" method="post">
          <p><input type="text" name="title" placeholder="title"></p>
          <p><textarea name="description" placeholder="description"></textarea></p>
          <p>
            <input type="submit">
          </p>
        </form>
        `, ' ');
    
        response.writeHead(200);  //파일 성공적으로 저장
        response.end(html); //queryData.id를 화면에 출력시킴
      });
    }
  }else if(pathname==='/create_process'){
    var body = '';
    request.on('data', function(data){
      body += data;
    });
    request.on('end', function(){
      var post = qs.parse(body);
      var title = post.title;
      var description = post.description;

      fs.writeFile(`data/${title}`, description, 'utf8', function(err){
        response.writeHead(302, {Location:`/?id=${title}`});  //작성한 title을 querystring으로 가진 페이지로 이동 
        response.end(); 
      })
    })
  }else if(pathname === '/update'){
    fs.readdir('./data', function(err, filelist){
      var filteredPath = path.parse(queryData.id).base;
      //./data에 있는 파일 중 queryData.id와 같은 파일명을 찾아 description에 저장
      fs.readFile(`data/${filteredPath}`, 'utf8', function(err, description){ 
        var title = queryData.id;
        var list = template.list(filelist);
        var html = template.html(title, list, 
          `
          <form action="/update_process" method="post">
            <input type="hidden" name = "id" value="${title}">
            <p><input type="text" name="title" placeholder="title" value="${title}"></p>
            <p><textarea name="description" placeholder="description">${description}</textarea></p>
            <p>
              <input type="submit">
            </p>
          </form>
        `, 
          `<a href="/create">create</a> <a href="/update?id=${title}">update</a>`
        );
        response.writeHead(200);  //파일 성공적으로 저장
        response.end(html); //queryData.id를 화면에 출력시킴
      }); 
    }); 
  }else if(pathname==="/update_process"){
    var body = '';
    request.on('data', function(data){
      body += data;
    });
    request.on('end', function(){
      var post = qs.parse(body);
      var title = post.title;
      var description = post.description;
      var id = post.id;
      //console.log(id);
      fs.rename(`data/${id}`, `data/${title}`, function(err){
        fs.writeFile(`data/${title}`, description, 'utf8', function(err){
          response.writeHead(302, {Location:`/?id=${title}`});  //작성한 title을 querystring으로 가진 페이지로 이동 
          response.end(); 
        })
      })
    })
  }else if(pathname==="/delete_process"){
    var body = '';
    request.on('data', function(data){
      body += data;
    });
    request.on('end', function(){
      var post = qs.parse(body);
      var id = post.id;
      var filteredPath = path.parse(id).base;
      fs.unlink(`data/${filteredPath}`, function(err){
        response.writeHead(302, {Location:'/'});
        response.end();
      })
    });
  }else{
    response.writeHead(404);  //파일을 찾을 수 없음
    response.end('Not Found');
  }
});
app.listen(3000);
