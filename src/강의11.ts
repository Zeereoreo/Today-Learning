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