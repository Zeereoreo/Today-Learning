//object에 타입지정하려면 insterface도 있다. 원래는 자동
//interface 문법을 쓰시면 object 자료형의 타입을 보다 편리하게 지정가능
type Animal1 = {
    name : string
}
type Cat = {
    age : number
} & Animal1

let 동물1 : Cat = {name : 'kim', age : 20}

interface Student {
    name : string
}

interface Teacher extends Student{
    // name : string,
    age : number
}

let 학생 :Student = { name : 'kim'}
let 선생 :Teacher = { name: 'kim', age:20}

//(숙제1) interface 이용해서 간단하게 타입을 만들어봅시다

interface Product {
    brand : string,
    serialNumber : number,
    model : string[]
}

let 상품 :Product = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }

//(숙제2) array 안에 object 여러개가 필요합니다.
interface Basket {
    product : string,
    price : number
}


let 장바구니 :Basket[] = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ] 

//(숙제3) 위에서 만든 타입을 extends 해봅시다.

interface New extends Basket {
    card : boolean
}

//(숙제4) object 안에 함수를 2개 넣고 싶은데요 

// 1. 이 object 자료는 plus() 함수를 내부에 가지고 있으며 plus 함수는 파라미터 2개를 입력하면 더해서 return 해줍니다. 

// 2. 이 object 자료는 minus() 함수를 내부에 가지고 있으며 minus 함수는 파라미터 2개를 입력하면 빼서 return 해줍니다. 

// 이 object 자료를 어떻게 만들면 될까요? 

interface MathObj {
    plus : (a:number, b:number) => number,
    minus : (a:number, b:number) => number
  }
  
  let 오브젝트 :MathObj = {
    plus(a,b){
      return a + b
    },
    minus(a,b){
      return a - b
    }
  } 