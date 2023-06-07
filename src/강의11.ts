// class 문법 타입지정

//class 내부에는 모든 자식 object들이 사용가능한 속성같은걸 만들 수 있습니다.

// 예를 들어서 모든 Person 클래스의 자식들에게 data 라는 속성을 부여해주고 싶으면 

class Person1 {
    data = 0; //가만히 냅두셔도 자동으로 number 타입
  }
  
  let john = new Person1();
  let kim = new Person1();
  
  console.log(john.data);
  console.log(kim.data); 

class Person2 {
    name :string; // ts 와 js의 다른점
    age: number;
    constructor (a:string, b: number){
        this.name = a;
        this.age = b;
    }
}

let 사람1 = new Person2('kim', 20);
let 사람2 = new Person2('lee', 30);


//Q. 필드값이랑 constructor랑 똑같은 역할이네요? 왜 구분해놓음?

// 들켰군요 똑같은 기능을 합니다.

// 근데 new Person() 사용할 때 파라미터로 뭔가 집어넣고 싶으면 constructor로 만들어야합니다. 


// (숙제1) Car 클래스를 만들고 싶습니다.

// 1. 대충 { model : '소나타', price : 3000 } 이렇게 생긴 object를 복사해주는 class를 만들어보십시오.

// 2. 그리고 복사된 object 자료들은 .tax() 라는 함수를 사용가능한데 현재 object에 저장된 price의 10분의1을 출력해주어야합니다. 

// 3. model과 price 속성의 타입지정도 알아서 잘 해보십시오. tax() 함수의 return 타입도요. 

class Car {
    model : string;
    price : number;
    constructor (a:string,b:number){
        this.model = a;
        this.price = b;
        
    }
    tax(b:number){
        return this.price/10
    }
}

let 아반떼 = new Car ('아반떼', 3000)

// (숙제2) class인데 파라미터가 잔뜩 들어가는 class Word를 만들어봅시다.

// 1. object 만들 때 new Word() 소괄호 안에 숫자 혹은 문자를 입력하면 

// 2. 숫자는 전부 object 안의  num 속성 안에 array 형태로 저장되고 

// 3. 문자는 전부 object 안의 str 속성 안에 array 형태로 저장되는 class를 만들어봅시다.

// 4. class 만들 때 넣을 수 있는 숫자와 문자 갯수는 일단 제한은 없습니다. 그리고 타입 빼먹지 마셈 


class Word1 {

    constructor(){
        this.
    }
}

class Word{
    num;
    str;
  
    constructor(...param : (number | string)[] ){
      let 숫자들 :number[] = [];
      let 문자들 :string[] = [];
  
      param.forEach((i)=>{
        if (typeof i ==='string') {
          문자들.push(i)
        } else {
          숫자들.push(i)
        }
      })
  
      this.num = 숫자들;
      this.str = 문자들;
    }
  }
  
  
  let obj = new Word('kim', 3, 5, 'park');
  console.log(obj.num) //[3,5]
  console.log(obj.str) //['kim', 'park'] 