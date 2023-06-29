
function superPrint<V>(a:V[]){
    return a[0]
}

const a = superPrint([1,2,3,4])
const b = superPrint([true,false,true])

function last<T>(arr:T[]){
    return arr[arr.length-1];
}

function prepend<T>(arr : T[],item : T){
    return [item,...arr]
}

function mix<T>(arr1:T[],arr1:T[]){
    return [...arr1,...arr2]
}

function count<T>(arr:T[]){
    return arr.length
}

function findIndex<T>(arr:T[],item:T){
    let answer = arr.indexOf(item)

    if(answer)return answer
    else if (answer === 0) return 0
    return null
}

function slice<T>(arr:T[],startIndex:number,endIndex?:number){
    return arr.slice(startIndex,endIndex)
}