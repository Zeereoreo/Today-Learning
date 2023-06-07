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
