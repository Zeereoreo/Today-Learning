//Never type 을 알아보자

// 어떤 함수가

// 조건 1) 절대 return을 하지 않아야하고

// 조건 2) 함수 실행이 끝나지 않아야합니다 (전문용어로 endpoint가 없어야합니다)

// 그런 함수에 붙일 수 있는 타입니다. 

// 실은 조건1, 2는 같은 소리인데 모든 자바스크립트 함수 맨 밑엔 return undefined 라는 숨겨진 코드를 가지고 있습니다. 

// 그래서 조건2가 맞으면 1도 맞음 

function 함수() :never{
    while ( true ) {
      console.log(123)
    }
  }


  function 함수() :never{
    throw new Error('에러메세지')
  }

//   그래서 1. 무언가 return 하지 않고 2. 끝나지도 않는 함수를 표현하고 싶을 때 never 타입을 지정하면 되는데 

//   2번 조건의 함수를 만들 일이 거의 없기 때문에 never 타입은 쓸 일이 없습니다. 
  
//   무언가를 return하고싶지 않을 경우 그냥 void 타입을 이용하시면 되며
  
//   배우는 이유는 가끔 코드 이상하게 짜다보면 자동으로 등장하기 때문

//파라미터가 never 타입이 되는 경우도 있음

function 함수(parameter: string) {
    if ( typeof parameter === "string"){
      parameter + 1;
    } else {
      parameter;
    }
  }

//   지금 narrowing을 이용해서 파라미터의 타입이 string 이면 뭔가 해달라고 써놨는데

//   else 문이 존재합니다. 타입이 string이 아닐 경우 이거 해달라는 뜻입니다.
  
//   근데 else문은 말이 안되죠? 지금 파라미터가 string 밖에 못들어오는데 말입니다.
  
   
  
//   이런 잘못된 narrowing을 사용했을 때 파라미터의 타입이 never로 변합니다. 파라미터에 마우스 올려보셈
  
//   이런 건 있을 수 없다, 일어나면 안된다고 알려주는 느낌입니다. 
  
//   그럴 때 never를 구경할 수 있으니 never 타입이 발견되는 경우 코드를 수정하는게 어떨까요. 

// 자동으로 never 타입을 가지는 경우 

function 함수(){

}

let 함수2 = function (){

}

function 함수(){
    throw new Error()
  }
  
  let 함수2 = function (){
    throw new Error()
  }



//   tsconfig.json에서 strict 옵션을 켜둘 경우 

// 함부로 any 타입을 지정해주지 않는 경우가 있습니다. 

// 그럴 때 array 같은거 대충 타입지정 안하고 만들면

  let arr = [];

//   원래는 any[] 이런 타입이 되는데 any를 가질 수 없어서 

// never[] 이런 타입이 발견되기도 합니다. 