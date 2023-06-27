(a.ts)

export var 이름 = 'kim';
export var 나이 = 30;

(b.ts)

import {이름, 나이} from './a'
console.log(이름)

(a.ts)

export type Name = string | boolean;
export type Age = (a :number) => number;

(b.ts)

import {Name, Age} from './a'
let 이름 :Name = 'kim';
let 함수 :Age = (a) => { return a + 10 }

//(숙제1) Car 그리고 Bike 타입을 만들었는데 너무 길어요 

(index.ts)

type Car = {
  wheel : number,
  model : string
}
interface Bike {
  wheel : 2,
  model : string
}

(a.ts)

export type Car = {
  wheel : number,
  model : string
}
export interface Bike {
  wheel : 2,
  model : string
}

(index.ts)

import {Car, Bike} from './a'

let 빠방이 :Car = { wheel : 4, model : 'Sonata' }

//(숙제2) 너무 자주만들어 쓰는 함수가 하나 있습니다

이 함수는 파라미터로 object자료 하나를 선택적으로 집어넣을 수 있고 

아무것도 return 해주지 않아야합니다. 

함수 만들 때마다 여기에 타입 일일이 붙이기 귀찮아서 그런데

이 타입을 다른 파일에 저장해두고 import 해와서 함수 만들 때마다 쓰려면 어떻게 코드를 짜야할까요
//
(a.ts)

export type ObjFunction = (a? :object) => void

(index.ts)

import {ObjFunction} from './a'

let 함수 :ObjFunction = function(a){
  console.log(a)
}

함수({abc : '안뇽'});

//(숙제3) 타입 중복이 너무 많이 발생합니다.

type Dog = string;
interface Dog { name : string };

let dog1 :Dog = 'bark';
let dog2 :Dog = { name : 'paw' }

namespace GoodDog {
    export type Dog = string;
  }
  namespace BadDog {
    export interface Dog { name : string };
  }
  
  let dog1 :GoodDog.Dog = 'bark';
  let dog2 :BadDog.Dog = { name : 'paw' }