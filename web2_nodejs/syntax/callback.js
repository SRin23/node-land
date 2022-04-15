// function a(){
//     console.log('A');
// }

//변수의 값으로써 익명 함수 사용 가능 -> 함수가 값이다.
var a = function(){
    console.log('A');
}

//굉장히 오랜시간이 걸리는 함수이므로 함수 실행이 끝나면 다음 실행을 하세요 하고 명령?? -> callback
function slowFunc(callback){
    callback();
}

slowFunc(a);