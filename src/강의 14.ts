//Narrowing 하면서 코드짜는 것도 힘든데 특히나 

// 1. undefined 타입일 경우 처리하는거 

// 2. 복잡한 object자료들 narrowing 하는거

// 이게 가장 잦고 귀찮습니다. 이걸 쉽게 하는 법을 좀 알아봅시다. 

// null & undefined 체크하는 법

// 실제로 개발할 때 어떤 변수나 함수파라미터에 null, undefined가 들어올 경우 

// 어떻게 대처할지 if문으로 코드짜는 경우가 매우 많을 겁니다. 

function printAll(strs: string | undefined) {
    if (strs && typeof strs === "string") {  
      console.log(s);
    } 
  }

//   근데 한 눈에 안들어온다면 안쓰는게 좋습니다.

// 그냥 if (저 변수가 undefined일 경우) 어쩌구~ 이렇게 if문을 하나 더 쓰는게 어떨까요.


// 참고로 if (변수 != null) 이렇게 조건식을 써도 null, undefined 이거 두 개를 동시에 거를 수 있습니다. 

// in 연산자로 object 자료 narrowing

 

// 예를 들어서 파라미터로 object가 2개 들어올 수 있다고 타입지정을 해놓은 것입니다. 

// 하나는 {a : 'kim}

// 다른 하나는 {b : 'park'}

// 이렇게 서로 다른 유니크한 속성들을 가지고 있다면

 

// if (이 파라미터가 a라는 속성을 안에 가지고 있냐)

// 이런 if문을 써도 narrowing이 가능하다는 뜻입니다.

// if (키값 in object자료형) 이렇게 쓰면 됩니다.

// 타입스크립트 컴파일러는 똑똑한 편이라 이런 것들도 narrowing 으로 판정해줍니다. 
type Fish = { swim: string };
type Bird = { fly: string };
function 함수(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim
  }
  return animal.fly
} 

//서로 배타적인 속성을 가져와야 narrowing이 가능

//class로부터 생산된 object라면 instanceof로 narrowing

let 날짜 = new Date();
if (날짜 instanceof Date){
  console.log('참이에요')
}

//literal type이 있으면 narrowing 쉬움 

type Car = {
    wheel : '4개',
    color : string
  }
  type Bike = {
    wheel : '2개',
    color : string
  }
  
  function 함수(x : Car | Bike){
    if (x.wheel === '4개'){
      console.log('the car is ' + x.color)
    } else {
      console.log('the bike is ' + x.color)
    }
  }