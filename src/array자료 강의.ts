//Tuple 타입

tuple type은 array에 붙일 수 있는 타입인데

자료의 위치까지 정확히 지정할 수 있는 타입입니다. 

let 멍멍이 :[string, boolean];
멍멍이 = ['dog', true]

//Tuple 응용 : rest parameter

function 함수(...x :[string, number] ){
    console.log(x)
  }
  함수('kim', 123)  //가능
  함수('kim', 123, 456)  //에러
  함수('kim', 'park')  //에러

  //tuple 안에도 옵션가능

  type Num = [number, number?, number?];
let 변수1: Num = [10];
let 변수2: Num = [10, 20];
let 변수3: Num = [10, 20, 10]; 

? 옵션기호는 뒤에만 붙일 수 있습니다.


//array 두개를 spread 연산자로 합치는 경우 타입지정은?

let arr = [1,2,3]
let arr2 = [4,5, ...arr]  

let arr = [1,2,3]
let arr2 :[number, number, ...number[]] = [4,5, ...arr]  

(숙제1) 여러분이 최근에 사먹은 음식의 1. 이름 2. 가격 3. 맛있는지여부를 array 자료에 담아보고 타입지정까지 해보십시오.

(예시) [ '동서녹차', 4000, true ] 이런 자료 만들고 타입지정하라는 소리

const 음식 : [string,number,boolean] =  [ '동서녹차', 4000, true ] 

(숙제2) 이렇게 생긴 자료는 타입지정 어떻게 해야할까요?

let arr:Arr = ['동서녹차', 4000, true, false, true, true, false, true]

type Arr = [string,number,...boolean[]]

(숙제3) 함수에 타입지정을 해보도록 합시다.


1. 이 함수의 첫째 파라미터는 문자,

2. 둘째 파라미터는 boolean,

3. 셋째 파라미터부터는 숫자 또는 문자가 들어와야합니다. 

그럼 함수에 파라미터를 어떻게 만들고 타입지정은 또 어떻게 해야할까요? 

오늘 배운 tuple 타입과 rest parameter를 사용해봅시다.

type 파라미터 = [string,boolean,(number|string)[]] 

function 함수(...x:파라미터){
  console.log(x)
}

(숙제4) 다음과 같은 문자/숫자 분류기 함수를 만들어보십시오.

파라미터 중 문자만 모아서 [] 에 담아주고, 숫자만 모아서 [] 에 담아주는 함수가 필요합니다.

문자 숫자 외의 자료는 입력불가능하고 파라미터 갯수 제한은 일단 없습니다. 

함수 만들어보시고 함수의 파라미터/return 타입지정도 확실하게 해봅시다. 


(동작예시)

함수('b', 5, 6, 8, 'a') 이렇게 사용할 경우 이 자리에 [ ['b', 'a'], [5, 6, 8] ] 이 return 되어야합니다.

type 함수 = [string[],number[]]

function 함수(...x : (number|string)[]) {
    let result : 함수 = [[],[]]
    for(let i = 0; i<x.length; i++){
        if(typeof i === "string"){
            result[0].push(i)
        } else {
            result[1].push(i)
        }
    }
    return result
}

function 함수(...rest :(string|number)[]){

    let result :[string[], number[]] = [[],[]];
  
    rest.forEach((a)=>{
      if (typeof a === 'string') {
        result[0].push(a)
      } else {
        result[1].push(a)
      }
    })
  
    return result;  
  } 

  1. 함수 만들었습니다. 파라미터는 몇개가 들어올지 몰라서 rest parameter 썼고

파라미터 타입은 (string|number)[] 이게 좋겠군요.

2. 결과를 저장할 result라는 변수를 만들었습니다. 기본값은 [[], []] 이렇게 만들었고 그거 타입지정은 tuple type을 활용해봤습니다.

3. rest 파라미터에 반복문 돌렸습니다. 타입이 string이면 result[0]에 추가해주고 number면 result[1]에 추가해줍니다.

4. return 해줌 근데 타입은 알아서 지정 잘 되어있어있군요 