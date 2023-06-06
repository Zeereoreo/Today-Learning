// 숙제 1

function 클리닝함수(a : (number|string)[]){
    let array : number[] = []
    a.forEach((b) => {
        if (typeof b ==='string') {
            array.push(parseFloat(b))
        } else {
            array.push(b)
        }

        return array
    })
}

console.log(클리닝함수([123,'3'])) // 1233

// 숙제 2

let 철수쌤 = { subject : 'math' }
let 영희쌤 = { subject : ['science', 'english'] }
let 민수쌤 = { subject : ['science', 'art', 'korean'] }

// 지금 여러 변수에 선생님이 가르치고 있는 과목이 저장이 되어있습니다. 

// 과목 1개만 가르치는 쌤들은 문자 하나로 과목이 저장이 되어있고

// 과목 2개 이상 가르치는 쌤들은 array 자료로 과목들이 저장되어있습니다. 

 

// 철수쌤같은 선생님 object 자료를 집어넣으면 

// 그 선생님이 가르치고 있는 과목중 맨 뒤의 1개를 return 해주는 함수를 만들어봅시다.

// 그리고 타입지정도 엄격하게 해보도록 합시다. 

//ex
// 만들함수( { subject : 'math' } )  //이 경우 'math'를 return
// 만들함수( { subject : ['science', 'art', 'korean'] } ) //이 경우 'korean'을 return
// 만들함수( { hello : 'hi' } )  //이 경우 타입에러 나면 됩니다 

function sub(x:{ subject : string[]}){
    if(typeof x.subject === 'string'){
        return x.subject
    }else if(Array.isArray(x.subject)){
        return x.subject.slice(-1)
    }else {
        return 'X'
    }
}
console.log(sub ({subject:['english','art']})) // art
