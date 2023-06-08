//object에 타입지정하려면 insterface도 있다. 원래는 자동

interface Student {
    name : string
}

interface Teacher extends Student{
    // name : string,
    age : number
}

let 학생 :Student = { name : 'kim'}
let 선생 :Teacher = { name: 'kim', age:20}