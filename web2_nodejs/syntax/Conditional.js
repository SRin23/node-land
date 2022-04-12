//조건문 : 조건에 따라 서로다른 프로그램이 실행되는 문장

var args = process.argv;
console.log(args);  //nodejs 런타임위치, 파일 경로, 입력한 입력값 .... -> 배열

console.log('A');
console.log('B');

if(args[2] === '1'){    //만약, 입력한 값이 1이면 C1, 아니면 C2를 출력
    console.log('C1');
}else{  //if(true)
    console.log('C2');
}

console.log('D');
