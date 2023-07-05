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