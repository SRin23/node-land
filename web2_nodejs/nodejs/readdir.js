var dataFolder = './data';
var fs = require('fs');

//dataFolder안에 있는 파일 명을 배열 형식으로 출력해줌
fs.readdir(testFolder, function(err, filelist){
    console.log(filelist);
})