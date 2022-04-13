var number = [1, 400, 12, 34];

//반복문을 통해 배열 안에 있는 요소 모두 더하기
var i = 0;
var total = 0;

while(i<number.length){
    total += number[i];
    i+=1;
}

console.log(`total : ${total}`);