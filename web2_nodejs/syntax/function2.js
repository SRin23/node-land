//Math는 Javascript의 내장 객체
//round는 반올림
console.log(Math.round(1.6));   //2
console.log(Math.round(1.4));   //1

//함수에는 입력과 출력이 있다.
//두 값을 입력하여 더하는 sum 함수 만들기
//매개변수를 통해 입력값에 따라 출력문이 다르게 동작할 수 있게됨
sum(2, 4);  //argument

function sum(first, second){    //매개변수(parameter)
    console.log('A');
    return first + second;  //즉시 함수 실행 종료 -> 호출한 곳에 first + second의 값을 반환함
    console.log('B')    //실행되지 않음
}

console.log(sum(2, 4));