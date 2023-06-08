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