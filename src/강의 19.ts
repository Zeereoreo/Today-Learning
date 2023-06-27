// Generic 함수

함수 return 값의 타입이 애매하면


예를 들어 1. 아무렇게나 생긴 array 자료를 입력하면 2. array의 첫 자료를 그대로 출력해주는 함수를 만들었다고 합시다. 


function 함수(x: unknown[]) {
    return x[0];
  }
  
  let a = 함수([4,2])
  console.log(a) 

  마우스 올려서 a의 타입을 확인해보면 숫자는 아니고 unknown 타입입니다.

왜냐면 지금 입력하는 array도 unknown 타입이라서 그렇습니다. 

여기서 중요포인트는 타입스크립트는 타입을 알아서 변경해주지 않습니다.

function 함수(x: unknown[]) {
    return x[0];
  }
  
  let a = 함수([4,2])
  console.log(a + 1) 

  그래서 이런 연산도 에러가 납니다

  함수에 불확실한 unknown, any, union 타입을 입력하면

나오는 값도 unknown, any, union 타입이고, 이 때문에 일어나는 문제들이 많습니다. 

예를 들면 "함수가 10을 return 하는데 타입이 unknown 이라서 맘대로 조작을 못하네" 문제요  

해결책은 1. narrowing 잘 하면 해결됩니다. 근데 귀찮음

2. 그냥 애초에 타입을 파라미터로 함수에 미리 입력하는 방법도 있습니다. 그럼 원하는 곳에 가변적으로 타입지정 가능 

2번을 Generic 이라고 부릅니다. 

Generic 적용한 함수만들기 

함수에 <> 이런 괄호를 열면 파라미터를 또 입력할 수 있습니다. 

근데 여기 안엔 타입만 입력할 수 있습니다. 타입파라미터 문법임

function 함수<MyType>(x: MyType[]) :MyType {
    return x[0];
  }
  
  let a = 함수<number>([4,2])
  let b = 함수<string>(['kim', 'park'])

  그럼 이제 함수를 사용할 때도 <> 안에 파라미터처럼 타입을 입력할 수 있습니다.

그럼 님들이 이제 함수<number>( ) 이렇게 쓰는 순간 

MyType 이라는 변수에 number 라는게 들어간다고 보시면 됩니다. 

그럼 이제 함수( x : number[] ) :number { } 이거랑 똑같이 동작합니다.

함수 이런거 만들었는데 왜 에러가 나는 것이죠? 

function 함수<MyType>(x: MyType) {
    return x - 1
  }
  
  let a = 함수<number>(100)

  <MyType> 이라는 곳에 number 말고도 다른거 혹시 집어넣을 수 있으니까 저런 - 1 연산을 미리 방지해주는 것

  Generic 타입 제한하기 (constraints)

  extends 문법을 쓰면 넣을 수 있는 타입을 제한

  MyType extends number 라고 쓰면 타입 파라미터에 넣을 수 있는 타입을 제한가능합니다. 

  interface 문법에 쓰는 extends와는 살짝 다른 느낌

  그 extends는 복사인데 이번 extends는 number와 비슷한 속성을 가지고 있는지 if 문으로 체크하는 문법

  function 함수<MyType extends number>(x: MyType) {
    return x - 1
  }
  
  let a = 함수<number>(100) //잘됩니다


  언제나 커스텀 타입도 extends 가능

  function 함수<MyType>(x: MyType) {
    return x.length
  }
  
  let a = 함수<string>('hello')

  왜냐면 MyType에 님들이 string을 집어넣었지만 나중에 number 이런거 실수로 집어넣으면 어쩔 것임 

그럴 수 있어서 아직 .length같은 조작을 일단 방지해주는 것

interface lengthCheck {
    length : number
  }
  function 함수<MyType extends lengthCheck>(x: MyType) {
    return x.length
  }
  
  let a = 함수<string>('hello')  //가능
  let a = 함수<number>(1234) //에러남

  1. length 속성을 가지고 있는 타입을 하나 만들었습니다. 이름은 lengthCheck로 했습니다. 

2. 그걸 extends 해주면 MyType도 length 속성을 복사해서 가집니다. 

3. 그래서 MyType은 length가 분명히 있기 때문에 맘대로 MyType을 부여받은 x는 .length 조작이 가능합니다. 

(숙제1) 문자를 집어넣으면 문자의 갯수, array를 집어넣으면 array안의 자료 갯수를 콘솔창에 출력해주는 함수는 어떻게 만들까요? 
연습삼아 Generic 이런걸로 만들어봅시다. 굳이 Generic 이런게 필요는 없겠지만요 

function 함수1(x) {
    return x.length
}

function 함수<MyType extends string | string[]>(x: MyType)  { 
    console.log(x.length)   
} 

함수<string>('hello');
함수<string[]>(['kim','park'])

1. <> 안에 타입을 집어넣을 수 있는 함수를 만들었습니다. 그리고 기능은 심플한데 x.length를 출력해줍니다.

2. 근데 에러가 납니다. x에 뭐가 들어올지 모르니까 미리 에러를 내주고 있습니다. 

3. 그래서 <>에 집어넣은 타입은 extends 를 이용해서 string 또는 string[] 얘네들의 특성을 가지고 있는지 확인하라고 했습니다.

그랬더니 x.length 잘 됩니다. 


(숙제2) Animal 이라는 타입이 있습니다.

interface Animal {
    name : string;
    age : number 
  }
  
  let data = '{"name" : "dog", "age" : 1 }'

  data라는 JSON 자료를 object { } 자료로 변환을 해서 return 해주는 함수를 만들어보십시오.

근데 변환된 object의 타입은 Animal이 되었으면 좋겠는데 어떻게 코드를 짜면 될까요?

오늘 배운 Generic을 이용해서 구현해보도록 합시다.  

 

(동작 예시)

함수<Animal>(data) 이렇게 쓰면 이 자리에 { name : 'dog' , age : 1 } 이런 object 자료가 남아야합니다. 근데 타입은 Animal임

function 함수<Animal>(data)=>{
    console.log(JSON.parse(data))
}

interface Animal {
    name : string;
    age : number 
  }
  
  let data = '{"name" : "dog", "age" : 1 }';
  
  
  function 함수<Type>(x :string) :Type {
    return JSON.parse(x);
  }
  let result = 함수<Animal>(data)
  console.log(result)

  (숙제3) class 를 수정해봅시다.

  class Person {
    name;
    constructor(a){
      this.name = a;
    }
  }
  let a = new Person('어쩌구');
  a.name //any 타입이 되었넹 

  class Person <T> {
    name;
    constructor(a :T){
      this.name = a;
    }
  }
  let a = new Person<string>('어쩌구');
  a.name //string 타입이 되었넹 