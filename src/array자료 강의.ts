//Tuple 타입

tuple type은 array에 붙일 수 있는 타입인데

자료의 위치까지 정확히 지정할 수 있는 타입입니다. 

let 멍멍이 :[string, boolean];
멍멍이 = ['dog', true]

//Tuple 응용 : rest parameter

function 함수(...x :[string, number] ){
    console.log(x)
  }
  함수('kim', 123)  //가능
  함수('kim', 123, 456)  //에러
  함수('kim', 'park')  //에러

  //tuple 안에도 옵션가능

  type Num = [number, number?, number?];
let 변수1: Num = [10];
let 변수2: Num = [10, 20];
let 변수3: Num = [10, 20, 10]; 

? 옵션기호는 뒤에만 붙일 수 있습니다.


//array 두개를 spread 연산자로 합치는 경우 타입지정은?

let arr = [1,2,3]
let arr2 = [4,5, ...arr]  

let arr = [1,2,3]
let arr2 :[number, number, ...number[]] = [4,5, ...arr]  