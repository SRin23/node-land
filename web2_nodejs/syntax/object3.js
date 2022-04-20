var v1 = 'v1';
var v2 = 'v2';

//폴더에 파일을 정리하듯 변수 정리 가능
var o = {
    v1:'v1',
    v2:'v2',
    //함수가 자신이 속해있는 요소에 접근할 수 있는 방법 : this
    f1:function (){
        console.log(this.v1);   //o.v1
    },
    f2:function (){
        console.log(this.v2);   //o.v2
    }
}

o.f1();
o.f2();

//summary
//함수는 값이다
//객체는 값들을 저장하는 그릇이다.
//서로 연관된 데이터/연관된 처리방법을 가지고 있는 변수, 함수들은 객체로 모아 정리할 수 있다.
//객체를 이용한 정리정돈을 통해 코드의 복잡성을 정리할 수 있다.