(data.js)

var a = 10;
var b = {name :'kim'};

(index.ts)

console.log(a + 1);

(index.html)

<script src="data.js"></script>
<script src="index.js"></script>  //index.ts에서 변환된 js 파일

이게 원래 프론트엔드에서 import하는 방법입니다. 

아무튼 콘솔창에 11 잘 나옵니다. 

근데 타입스크립트 파일에선 a가 정의가 안되었다고 에러가 나는군요.

 

 

왜냐면 저거 <script> 태그로 자바스크립트 파일 2개를 연결해서 쓰는건 html 입장이고

ts 입장에서는 a라는 변수를 import 해온 적이 없기 때문에 에러가 나는 것입니다.

컴파일러가 징징대는걸 제압해봅시다. 


declare 키워드로 재정의하기 

(data.js)

var a = 10;
var b = {name :'kim'};

(index.ts)

declare let a :number;
console.log(a + 1);

TS의 이상한 특징 : Ambient Module 

(data.ts)

type Age = number;
let 나이 :Age = 20;

(index.ts)

console.log(나이 + 1) //가능
let 철수 :Age = 30; //가능

import / export 키워드가 적어도 하나 있으면 그 파일은 로컬 모듈이 되고

거기 있는 모든 변수는 export를 해줘야 다른 파일에서 사용가능

(data.ts)
export {};
type Age = number;
let 나이 :Age = 20;

(index.ts)

console.log(나이 + 1) //불가능
let 철수 :Age = 30; //불가능


declare global

declare global {
    type Dog = string;
  }

  종의 namespace 문법인데 여기다 적은건 global 이라는 이름의 namespace에 추가된다고 보시면 됩니다. 

그리고 global namespace는 모든 파일에서 기본적으로 이용이 가능