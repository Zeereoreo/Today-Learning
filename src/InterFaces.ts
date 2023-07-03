import { Name } from './강의 18';
type Nickname = string
type Health = number
type Friends = Array<string>
// string[] = Array<string>
type Team = "red" | "blue" | "yellow"
// 특정 값을 가지게 하는방법 -> 3가지만 사용 가능  

type Player = {
    nickname : Nickname,
    healthBar: Health,
    team : Team,
}

const nico : Player = {
    nickname : "nico",
    healthBar : 10,
    team : 'blue'
}

// interface
// 오브젝트의 모양을 알려주는 방법 React에서 많이 사용 -> 오브젝트에만 사용 가능
// type : 유연
// interface : 객체지향프로그램과 비슷
//interface Hello = string; // 에러

interface People  {
    age : number;
}

interface User {
    name:string
}

interface Player extends User{

}
const nico2 :Player {
    name : "nico"
}

abstract class User {
    constructor (
        protected fistName : string,
        protected lastName : string,
    ){
        
    }
    abstract sayHi(name:string) : string
    abstract fullName():string
}
class Player extends User {
    fullName(): string {
        return `${this.fistName} ${this.lastName}`
    }
    sayHi(name: string): string {
        return `hello ${name} . My name is ${this.fullName()}`
    }
}
Type Aliases과 Interfaces의 차이점

Type Aliases과 인터페이스는 매우 유사하며 많은 경우 자유롭게 선택할 수 있습니다. 인터페이스의 거의 모든 기능은 type에서 사용할 수 있으며, 주요 차이점은 type을 다시 열어 새 속성을 추가할 수 없는 것입니다. 반면 인터페이스는 항상 확장 가능합니다.

결론: 대부분의 경우 개인 취향에 따라 선택 가능
(인터페이스 사용을 조금 더 추천)