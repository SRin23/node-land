//중복 발생 -> 유지보수 나쁨, 코드 가독성 떨어짐, 코드의 양이 길어짐

f1234();
console.log('A');
console.log('Z');
console.log('B');
f1234();
console.log('F');
console.log('C');
console.log('P');
console.log('J');
f1234();
console.log('U');
console.log('A');
console.log('Z');
console.log('J');
console.log('I');
f1234();

//함수는 일련의 로직에 이름을 붙이는 것과 같다.
function f1234(){
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
}