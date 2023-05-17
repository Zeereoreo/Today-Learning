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

//숙제 1
