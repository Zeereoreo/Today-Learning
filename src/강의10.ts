//타입스크립트로 HTML 변경과 조작할 때 주의점

//index.html

// <h4 id="title">안녕하세요</h4>
// <a href="naver.com">링크</a>
// <button id="button">버튼</button>

// <script src="변환된 자바스크립트파일.js"></script>

let 제목 = document.querySelector('#title')

제목.innerHTML = '반갑소' // null 일 수 도있다는 에러가 발생

// union type이기 때문에 type narrowing을 사용하자

// 1번째 narrowing

if (제목 != null){
    제목.innerHTML = '반갑소'
}

// 2번째 instatneof

if (제목 instanceof HTMLElement){
    제목.innerHTML = '반갑소'
}

// 3번째 assertion 비추

let 제목 = document.querySelector('#title') as HTMLElement;
제목.innerHTML = '반갑소'

// 4번째 opttional chaining 연산자
if (제목?.innerHTML != undefined) { // js 신문법 ?왼쪽 object 자료 안에 오른쪽에 적힌게 존재한다면 쓰고 아니면 undefind가 나옴
    제목.innerHTML = '반갑소'
  }


  //a 태그의 href 속성을 바꿔보자
  let 링크 = document.querySelector('#link');
if (링크 instanceof HTMLElement) {
  링크.href = 'https://kakao.com' //에러남 ㅅㄱ
}

let 링크 = document.querySelector('#link');
if (링크 instanceof HTMLAnchorElement) { 
  링크.href = 'https://kakao.com'  //잘됨
}

// 이유는 html 태그 종류별로 정확한 타입명칭이 있습니다.

// a 태그는 HTMLAnchorElement

// img 태그는 HTMLImageElement

// h4 태그는 HTMLHeadingElement

// 이벤트리스너 부착해보기

let 버튼 = document.getElementById('button');
버튼.addEventListener('click', function(){ //narrowing으로 해결하기
  console.log('안녕')
}) 

버튼?.addEventListener('click', function(){
  console.log('안녕')
}) 

//(숙제1) 버튼을 누르면 이미지를 바꿔봅시다.
// <img id="image" src="test.jpg">
// html 안에 test.jpg를 보여주고 있는 이미지 태그가 있다고 칩시다. 

// 이미지를 new.jpg 라는 이미지로 바꾸고 싶으면 자바스크립트 코드를 어떻게 짜야할까요?

// 성공여부는 크롬 개발자도구 켜면 src 속성이 잘 바뀌었는지 확인가능하겠죠?

let 이미지 = document.querySelector('#image')
if(이미지 instanceof HTMLImageElement){
    이미지.src ="change.jpg"
}

//(숙제2) 바꾸고 싶은 html 요소가 많습니다.

// <a class="naver" href="naver.com">링크</a>
// <a class="naver" href="naver.com">링크</a>
// <a class="naver" href="naver.com">링크</a> 

// 3개의 링크가 있는데 이 요소들의 href 속성을 전부 https://kakao.com으로 바꾸고 싶은 겁니다.

// 자바스크립트 코드를 어떻게 짜야할까요? 

let 링크 = document.querySelectorAll('.naver');

링크.forEach((a)=>{
  if (a instanceof HTMLAnchorElement){
    a.href = 'https://kakao.com'
  }
})