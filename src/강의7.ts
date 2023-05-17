//type alias 만두는 법

type Animal = string | number | undefined  // 변수랑 차이를 주기 위해 대문자 시작 or AnimalType 이렇게 작성

let 동물 : Animal = '원숭이'

type Animals = {name : string, age: number}

let 다른동물:Animals= {name : '원숭이', age : 20}

const 출생지역 = 'seoul' // 바꿀수없는 변수 설정 하기 위해
출생지역 = 'busan'

const 출생지역2 = {region:'seoul'} // object 자료 수정은 가능함
출생지역2.region = 'busan'

// object 자료 수정 막기 위한 방법 readonly -> 단지 에디터&터미널에서만 존재, 실제로는 적용됨.
type Girlfriend = {
    readonly name : string
}
const 여친:Girlfriend = {
    name : 'ember'
}
여친.name = 'ura' // 읽기전용이므로 수정 불가 

//옵션 선택사항 -> ?를 활용 옵션 -> ? = string | undefind
type Girlfriend = {
     name? : string
}

// union type으로 합치기 가능
type Name = string;
type Age = number;
type Person = Nmae | Age;

type PositionX = { x : number };
type PositionY = { y : number };

{ x : number, y : number } //이 것으로 만들기 위해서는 

type NewType = PositionX & PositionY; // & 로 활용하기

let position :NewType = { x:10, y:20 }

// 주의사항 type 변수 재정의 불가능

type NewType = string // const와 마찬가지

//(숙제 1) :
// object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요?
//잘 된다.

type Type1 = number
type Type2 = number

type Type3 = Type1 & Type2 

//(숙제 2) : 
// 다음 조건을 만족하는 타입을 만들어봅시다. 

// 1. 이 타입은 object 자료형이어야합니다.

// 2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다. 

// 3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.

// 4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.  

// type alias로 만들어보셈 

type HomeWork = { color? : string, size : number, readonly position : number[]}

let 테스트용변수 :HomeWork = {
    size : 123,
    position : [1,2,3]
}

// (숙제3) :
// 다음을 만족하는 type alias를 연습삼아 간단히 만들어보십시오. 

// 1. 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. { name : 'kim', phone : 123, email : 'abc@naver.com' }

// 2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.

// 3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오. 

type HomeWork2 = { name : string, phone : number, email? : string} // 회원가입정보에 email이 포함이 안되어 있어서 email에 ?가 들어가야 한다.

let 회원가입정보 :HomeWork2 = {
    name : 'kim',
    phone : 123,
  }

// (숙제4) :
// 다음을 만족하는 type alias를 만들어보십시오.

// 1. 숙제2와 똑같은데 이번엔 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.

// 2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다. 

// 3. 멋있게 숙제3에서 만들어둔 type alias를 재활용해봅시다.

type HomeWork3 = { adult : boolean}
type HomeWork4 = HomeWork2 & HomeWork3 //숙제 3에서 만드거 재활용

let 회원가입정보2 :HomeWork4 = {
    name : 'kim',
    adult : false,
    phone : 1234
  }