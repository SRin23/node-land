//프로그래밍
//데이터
//그 데이터를 처리하는것
//array, object
//function

var f1 = function(){
    console.log(1+1);
    console.log(1+2);

    //함수는 처리해야할 구문이면서 값(변수에 넣을 수 있다)이다
}

//아래 statement들은 값이 될 수 없음
// var i = if(true){console.log(1);}
// var w = while(true) console.log(1);

//배열과 객체의 원소로써 함수 작성 가능
var a = [f1];
a[0]();

var o = {
    func:f1
}

o.func();