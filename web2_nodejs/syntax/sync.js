var fs = require("fs");

//동기와 비동기의 실행순서 확인하기

//readFileSync(동기)
// console.log('A');
// var result = fs.readFileSync('syntax/sample.txt', 'utf8');
// console.log(result)
// console.log('C');
//A->B->C


//readFile(비동기) -- 추천!! -> Callback이 추가됨
console.log('A');
//readFile은 return값이 없다. -> 인자로 값(파일의 내용)을 받는다.
fs.readFile('syntax/sample.txt', 'utf8', function(err, result){
    console.log(result);
});
console.log('C');
//A-> C -> B (함수 안에 있는 B가 이후에 실행됨)