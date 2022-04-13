//Array Data Type : 배열

//CRUD
//CREATE / READ / UPDATE / DELETE

//ARRAY literal
var arr = ['A', 'B', 'C', 12] //배열 안 값은 숫자, bool, string 뭐든 상관 없다.
//'A' : 0번쨰 인덱스
//'B' : 1번째 인덱스
//'C' : 2번째 인덱스
//12 : 3번째 인덱스

//출력
console.log('arr[1] : ' + arr[1]);    //'B'
console.log('arr[3] : ' + arr[3]);    //12

arr[2] = 3; //arr의 2번째 요소인 'C'를 3으로 변경

console.log(arr);   //arr 배열의 모든 값 출력

console.log('arr의 길이 : ' + arr.length);    //arr배열의 크기 출력

arr.push('E');  //배열 끝에 'E' 추가
console.log(arr);