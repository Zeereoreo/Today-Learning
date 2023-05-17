// type alias에 함수 type 저장해서 쓰는법
// 1. return 값에 지정하는 방법
type 함수타입 = (a : string) => number;
// 2. 표현식으로 정의 후 불러오기
let 표현식으로 :함수타입 = function (a){
    return 10
}

type NumOut = (x : number, y : number ) => number 
let ABC :NumOut = function(x,y){
  return x + y
}

// object 안에 함수 만들기

let 회원 = {
    name : 'kim',
    age : 30,
    plusOne (x){
      return x + 1
    },
    changeName : () => {
      console.log('안녕')
    }
  }

회원.plusOne(2)
회원.changeName()

// 콜백함수 개념
// 

function 함수1 (a){
    a() // 함수2 가 실행 되는 것.
}
function 함수2 (){

}

함수1(함수2) //함수2가 콜백함수 : 함수가 실행되고 나서 함수가 실행 되는 것.