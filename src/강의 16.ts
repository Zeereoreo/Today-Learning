//public, private 키워드로 사용제한두기

//public이 붙은 속성은 자식 object들이 마음대로 사용하고 수정가능
class User {
    public name: string;
  
    constructor(){
      this.name = 'kim';
    }
  }
  
  let 유저1 = new User();
  유저1.name = 'park';  //가능

  // private 키워드를 붙이면 수정이 불가능
  //무조건 class { } 중괄호 안에서만 수정 및 사용가능

  class User {
    public name :string;
    private familyName :string;  
  
    constructor(){
      this.name = 'kim';
      let hello = this.familyName + '안뇽'; //가능
    }
  }
  
  let 유저1 = new User();
  유저1.name = 'park';  //가능
  유저1.familyName = 456; //에러남

  // private 부여된 속성을 class 밖에서 수정해야할 경우?

  class User {
    public name :string;
    private familyName :string;
  
    constructor(){
      this.name = 'kim';
      let hello = this.familyName + '안뇽';
    }
    changeSecret(){
      this.familyName = 'park';
    }
  }
  
  let 유저1 = new User();
  유저1.familyName = 'park';  //에러남
  유저1.changeSecret()        //가능

  //private 이걸 어따씀?

//   개발하다보면 소중하게 지켜주고 싶은 중요한 변수나 속성들이 있습니다.

// 예를 들면 위의 예제에선 familyName 이런건데 이걸 외부에서 실수로 수정하거나 그러면 큰일날 것 같은 그런 속성들이요.

// 이걸 외부에서 실수로 수정하지 않도록 지켜주고 싶으면 private를 붙여보시길 바랍니다.

// 그리고 이걸 쓰면 함수를 만들어서 수정해야하니 약간의 안전장치를 더해서 개발이 가능합니다. 

// 개발이 귀찮아지지만 버그를 예방해주는 키워드이며

// react-redux 이런거 하다보면 매번 보게될 패턴입니다. 

//public, private 키워드 쓰면 이런 것도 가능

class Person { 
    name;
    constructor ( name :string ){  
      this.name = name;
    } 
  }
  let 사람1 = new Person('john')
  
  
  class Person { 
    constructor ( public name :string ){  
    
    } 
  }
  let 사람1 = new Person('john')