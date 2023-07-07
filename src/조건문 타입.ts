import { Person } from './../typescript-ex/src/test.d';
type Age<T> = T extends string ? string : unknown;

let a :Age<string>


- 파라미터로 어레이 타입을 입력하면 어레이 첫 자료의 타입을 남김
- 어레이 타입말고 다른거 입력하면 any 남김

type FirstItem<T> = T extends any[] ? T[0] : any

let age1 :FirstItem<string[]>;
let age2 :FirstItem<number>; 

infer 키워드

조건문에 사용할 수 있는 특별한 infer 키워드가 있습니다. 

infer 키워드는 지금 입력한 타입을 변수로 만들어주는 키워드

type Person<T> = T extends infer R ? R : unknown; 
type 새타입 = Person<string> // 새타입은 string 타입입니다 

1. infer 키워드는 조건문 안에서만 사용가능합니다.

2. infer 우측에 자유롭게 작명해주면 타입을 T에서 유추해서 R이라는 변수에 집어넣어라~ 라는 뜻입니다.

그래서 위의 예제에서 <string> 이렇게 타입파라미터자리에 string 집어넣으면 R은 string이 됩니다.

3. R을 조건식 안에서 맘대로 사용가능합니다.

이런 식으로 타입파라미터에서 타입을 추출해서 쓰고싶을 때 쓰는 키워드

array 안에 있던 타입이 어떤 타입인지 뽑아서 변수로 만들어줄 수 있습니다.

type 타입추출<T> = T extends (infer R)[] ? R : unknown; 
type NewType = 타입추출< boolean[] > // NewType 은 boolean 타입입니다 

이런 식으로도 사용할 수 있는데 

(infer R)[] 이렇게 하면 array가 가지고 있던 타입부분만 쏙 뽑아서 R 변수에 할당할 수 있습니다.

함수의 return 타입이 어떤 타입인지 뽑아서 변수로 만들어줄 수 있습니다.

type 타입추출<T> = T extends ( ()=> infer R ) ? R : unknown; 
type NewType = 타입추출< () => number > // NewType은 number 타입입니다 