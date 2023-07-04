// type Words = {
//     [key:string] : string
// }



// class Dict {
//     private words : Words
//     constructor(){
//         this.words = {}
//     }
//     add(word:Word){
//         if(this.words[word.term]===undefined){
//             this.words[word.term]= word.def;
//         }
//     }
//     def(term:string){
//         return this.words[term]
//     }
// }

// class Word {
//     constructor(
//         public term : string,
//         public def : string
//     )
// }

// const kimchi = new Word('kimchi', '한국의 음식')

// const dict = new Dict(

//     )
//     dict.add(kimchi)
//     dict.def('kimchi') 

// {
//      "potato" : "Food",
//      "rice" : "Also Food"
// }

// type Words = {
//     [key: string]: string;
//     };
    
//     class Dict {
//     private words: Words;
//     constructor() {
//     this.words = {};
//     }
//     add(word: Word) {
//     if (this.words[word.term] === undefined) {
//     this.words[word.term] = word.def;
//     }
//     }
//     def(term: string) {
//     return this.words[term];
//     }
//     update(word: Word) {
//     if (this.words[word.term] !== undefined) {
//     this.words[word.term] = word.def;
//     }
//     }
//     del(term: string) {
//     if (this.words[term] !== undefined) {
//     delete this.words[term];
//     }
//     }
//     }
    
//     class Word {
//     constructor(public term: string, public def: string) {}
//     }
    
//     const kimchi = new Word("kimchi", "super cool food");
//     const pizza = new Word("pizza", "super nice piazza");
//     const dict = new Dict();
    
//     dict.add(kimchi);
//     dict.add(pizza);
//     console.log("KIMCHI:", dict.def("kimchi"));
//     console.log("PIZZA:", dict.def("pizza"));
    
//     dict.update(new Word("kimchi", "very incredible super food"));
//     console.log("UPDATE KIMCHI:", dict.def("kimchi"));
//     console.log("NOT UPDATE PIZZA:", dict.def("pizza"));
    
//     dict.del("pizza");
//     console.log("DELETE PIZZA", dict.def("pizza"));
//     console.log("NOT DELETE KIMCHI:", dict.def("kimchi"));

Challenge goals:
타입스크립트의 클래스를 이용하여 Dict (딕셔너리. dictionary) 클래스를 만드세요. Dict 클래스는 아래와 같은 메소드들을 갖고 있어야 합니다.

add: 단어를 추가함.
get: 단어의 정의를 리턴함.
delete: 단어를 삭제함.
update: 단어를 업데이트 함.
showAll: 사전 단어를 모두 보여줌.
count: 사전 단어들의 총 갯수를 리턴함.
upsert 단어를 업데이트 함. 존재하지 않을시. 이를 추가함. (update + insert = upsert)
exists: 해당 단어가 사전에 존재하는지 여부를 알려줌.
bulkAdd: 다음과 같은 방식으로. 여러개의 단어를 한번에 추가할 수 있게 해줌. [{term:"김치", definition:"대박이네~"}, {term:"아파트", definition:"비싸네~"}]
bulkDelete: 다음과 같은 방식으로. 여러개의 단어를 한번에 삭제할 수 있게 해줌. ["김치", "아파트"]

type Words = {
    [key: string]: string;
    };

    
class Dict {
    private words: Words;
    constructor() {
    this.words = {};
    }
    add(word: Word) {
        if (this.words[word.term] === undefined) {
        this.words[word.term] = word.def;
        }
    }
    get(term:string){
        return this.words[term]
    }
    delete(term : string){
        if(this.words[term]) delete this.words[this.words.term]
    }
    update(word: Word) {
            if (this.words[word.term] !== undefined) {
            this.words[word.term] = word.def;
            }
    }
    showAll(){
        return Object.keys(this.words).forEach(term => console.log(term))
    }
    count(){
        return Object.keys(this.words).length
    }
    upsert(word: Word){
        this.words[word.term] = word.def
    }
    exists(term:string){
        if(this.words[term]) return true
        return false
    }
    bulkAdd(bluk: Word[]){
        bluk.forEach((word:Word)=>{
            if(this.words[word.term] === undefined) 
            this.words[word.term] = word.def
        })
    }
    bulkDelete(bulk: string[]) {
        bulk.forEach((word: string) => {
            if(this.words[word]) 
            delete this.words[word]
        })
    }
}

class Word {
    constructor(
        public term: string,
        public def: string
    ) {}
}

