//기존 지정
let 이름 : string; 

// 더 염격한 타입지정 가능
let 이름2 : 'kim'
// 이 조건에는 무조건 kim만 가능 -> Literal types
이름2 = 123

// union으로도 가능
let 접니다 : '대머리' | '솔로';
접니다 = '대머리'
// 함수도 가능
// 파라미터 자리에 지정 가능
// return 값에도 적용 가능
function 함수(a:'hello') : 1 | 0{
    return 1
}
함수('hello')

// 1. 가위바위보 중 한개만 입력가능 -> 파라미터로
// 2. 가위바위보만 들어올 수 있는 array를 return 해야함

function 함수2(a : '가위' | '바위' | '보' ) : ('가위'|'바위'|'보')[]{
    return ['가위']
}

함수2('가위')

// const 변수의 한계 -> object 일 때 값 변경 가능

const 변수 = {object : 변경가능}
// 이럴 경우 자료.name => string 내함수의 들어올 수 있는 파라미터는 오직 'kim'
// 솔루션 1 : object 만들 때 타입지정 확실히
// 솔루션 2 : as문법으로 해결
// 솔루션 3 : as const 이상한 키워드 쓰기
var 자료  = { //솔루션 1 자료 : {name : 'kim'}으로 타입지정
    name : 'kim'
} // 솔루션 3 : 1. as const -> object value 값을 그대로 타입으로 지정 / 2. object 속성들에 모두 readonly 붙여줌


function 내함수(a:'kim') {
    
}

내함수(자료.name)