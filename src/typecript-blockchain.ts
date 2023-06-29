
function superPrint<V>(a:V[]){
    return a[0]
}

const a = superPrint([1,2,3,4])
const b = superPrint([true,false,true])

function last<T>(arr:T[]){
    return arr[arr.length-1];
}


