

let obj = {name : 'kim', age : 20}
Object.keys(obj)

interface Person {
    age : number,
    name : string
}

type PersonKeys = keyof Person 
let a :PersonKeys = 'name'

interface Person {
    age: number;
    name: string;
  }
  type PersonKeys = keyof Person;   //"age" | "name" 타입됩니다
  let a :PersonKeys = 'age'; //가능
  let b :PersonKeys = 'ageeee'; //불가능

  Person 타입은 age, name 이라는 key를 가지고 있었기 때문에  

이제 PersonKeys는 정말 'age' | 'name' 타입이 됩니다.

literal type



  interface Person {
    [key :string]: number;
  }
  type PersonKeys = keyof Person;   //string | number 타입됩니다
  let a :PersonKeys = 'age'; //가능
  let b :PersonKeys = 'ageeee'; //가능

  Person 타입은 모든 문자 key를 가질 수 있기 때문에

keyof Person 이렇게 하면 string 타입이 됩니다.

실은 string | number 타입이 됩니다. object key값에 숫자 넣어도 문자로 치환되어서 그렇습니다.

[key :number] 이렇게 숫자만 들어올 수 있다고 해놓으면 keyof Person 이렇게 하면 number 타입이 됩니다.

 

(참고) 쌩자바스크립트는 .keys() 이런거 붙이면 key값을 array자료로 담아줍니다.

// Mapped Types

type Car = {
    color: boolean,
    model : boolean,
    price : boolean | number,
  }; 

  type TypeChanger <MyType> = {
    [key in keyof MyType]: string;
  };

  [ 자유작명 in keyof 타입파라미터 ] : 원하는 타입

이렇게 입력하시면 object 타입을 입력했을 때 속성명은 그대로지만 다른 타입으로 변환해주는 변환기

type 새로운타입 = TypeChanger<Car>;

let obj :새로운타입 = {
  color: 'red',
  model : 'kia',
  price : '300',
}

//(숙제1) 다음 타입을 변환기 돌려보십시오.

type Bus = {
    color : string,
    model : boolean,
    price : number
  }

  동료가 잘못 만든 타입입니다.

color, model, price 속성은 전부 string 또는 number 타입이어야합니다.

1. 변환기 하나 만드시고

2. 기존 Bus 타입을 변환기 돌려서 위 조건을 충족하는 새로운 타입을 하나 만들어보십시오.

type TypeChanger <MyType> = {
    [key in keyof MyType]: string|number;
  };
  
  type NewBus = TypeChanger<Bus>

//   (숙제2) 이런 변환기는 어떻게 만들어야할까요?

object안에 들어있는 모든 속성을

string, number 이렇게 고정된 타입으로 변환해주는게 아니라

내가 원하는 타입을 입력하면 그걸로 변환해주는 범용성 좋은 변환기를 만들어보십시오.

type Bus = {
    color : string,
    model : boolean,
    price : number
  }
  
  type TypeChanger <MyType, T> = {
    [key in keyof MyType]: T;
  };
  
  type NewBus = TypeChanger<Bus, boolean>;
  type NewBus2 = TypeChanger<Bus, string[]>

  이러면 TypeChanger 쓸 때마다 타입파라미터를 T 자리에 하나 더 입력할 수 있게 됩니다.

그러면 이제 오브젝트 모든 속성은 T로 바뀜

 

NewBus 살펴보시면 모든 속성이 boolean으로 바뀌어있습니다.

NewBus2 살펴보시면 모든 속성이 string[] 으로 바뀌어있습니다.