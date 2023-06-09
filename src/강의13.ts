// rest 파라미터 개념설명

function 전부더하기(...a){
    console.log(a)
  }
  
  전부더하기(1,2,3,4,5)

// rest 파라미터 타입지정

function 전부더하기(...a :number[]){
    console.log(a)
  }
  
  전부더하기(1,2,3,4,5)

  //Spread operator
  let arr = [3,4,5];
let arr2 = [1,2, ...arr]
console.log(arr2)

//array 혹은 object 왼쪽에 점3개 붙이면 괄호 벗겨주세요~ 라는 뜻입니다.

//  arr2 출력해보면 [1,2,3,4,5] 나옵니다. 

// 괄호벗겨주는 ...spread는 array, object 자료 왼쪽에,

// 여러개의 파라미터를 의미하는 ...rest는 함수선언할 때 소괄호 안에 출몰합니다. 


// Destructuring 문법 개념설명

let 사람 = { student : true, age : 20 }
let student = 사람.student;
let age = 사람.age

let { student, age } = { student : true, age : 20 }

let [a, b] = ['안녕', 100]

//bject destructuring할 땐 변수이름을 속성이름과 맞춰주는게 편리

//Destructuring 문법도 함수 파라미터에 사용가능

let person = { student : true, age : 20 }

function 함수(a, b){
  console.log(a, b)
}
함수(person.student, person.age)

let person = { student : true, age : 20 }

function 함수({student, age}){
  console.log(student, age)
}
함수({ student : true, age : 20 })

//Q. 위의 함수 파라미터에 타입지정해보도록 합시다 어떻게 하게요 

let person = { student : true, age : 20 }

function 함수({student, age} :{student : boolean, age : number}){
  console.log(student, age)
}
함수({ student : true, age : 20 })