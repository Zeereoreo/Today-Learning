interface StringOnly {
    [key: string]: string
  }
  
  let obj :StringOnly = {
    name : 'kim',
    age : '20',
    location : 'seoul'
  }

  interface StringOnly {
    age : number,   ///에러남 ㅅㄱ
    [key: string]: string,
  }
  
  interface StringOnly {
    age : string,   ///가능  
    [key: string]: string,
  }

  interface StringOnly {
    age : number,   ///가능
    [key: string]: string | number,
  }

  let obj = {
    0 : 'kim'
    1 : '20',
    2 : 'seoul'
  }
  console.log(obj[2]) //이러면 'seoul' 출력됨  

  interface StringOnly {
    [key: number]: string,
  }
  
  let obj :StringOnly = {
    0 : 'kim'
    1 : '20',
    2 : 'seoul'
  }

  Recursive Index Signatures

  let obj = {
    'font-size' : {
      'font-size' : {
        'font-size' : 14
      }
    }
  }

  interface MyType {
    'font-size' : {
      'font-size' : {
        'font-size' : number
      }
    }
  }

  interface MyType {
    'font-size': MyType | number
  }
  
  
  let obj :MyType = {
    'font-size' : {
      'font-size' : {
        'font-size' : 14
      }
    }
  }

//   (숙제1) 다음 자료의 타입을 지정해보십시오. 


interface Type {
    [key :string] : string | number
}

  let obj1 :Type = {
    model : 'k5',
    brand : 'kia',
    price : 6000,
    year : 2030,
    date : '6월',
    percent : '5%',
    dealer : '김차장',
  }

//   (숙제2) 다음 object 자료의 타입을 interface 써서 만들어보십시오. 

interface Type0 {
    'font-size' : number,
  [key :string] : number | MyType,
}


let obj3 : Type0= {
    'font-size' : 10,
    'secondary' : {
      'font-size' : 12,
      'third' : {
        'font-size' : 14
      }
    }
  }