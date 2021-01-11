// ----------------------------------------------------------
// [Javascript]
// ----------------------------------------------------------
// Javascript = not Java
// html:틀, 골격, 사람자체
// css:디자인, 옷
// Javascript:움직임, 동작, 댄스, 축구...
// ex) 회원가입 : 숫자대신 문자치는 경우 해결하는 JS
// 특징 : 접근할 수 있는 html 태그가 한정된 것이 기본
// <img><input>에는 접근 가능
// <body><h1><div>에는 접근 불가능

// window > document(화면내용 출력되는 부분) > form > img & input
// html은 w3c에서 관장
// Javascript는 ECMA(Europe Coumputer Manufactor Association) => ECMAScript

// DOMScript란 ? 
// javascript + DOM = Dhtml (Dynamic html)
//              (모든태그에 접근하자)
//              (document object model)
// dhtml > xhtml (x)

// 처음 이름은 livescript
// by netscape navigator 브라우저에서 실행되도록, 자바문법을 참고하여
// (참고) mozilla firefox
// netscape가 Breden Eich를 영입하여 개발
// 추후 sun microsystems 과 공동으로 개발하면서 javascript로 명명

// javascript로는 소스코드를 web browser가 해석하여 run하는 script언어
// ECMA
// HTML5에서 사용하는 script language는 자바스크립트
// (참고 : VBScript)

// javascript의 장점 : 서버의 부하를 줄임(bugs)
//              단점 : 소스코드가 노출, 보안

// javascript의 특징 : ECMA, ECMAScript
// 객체기반언어--객체지향언어
// object oriented language
//          (based)

// <script>태그 사용
// 기본적으로 html문서내에서 작성되어 실행된다.(마치 jsp = html+java)
// 즉 html+js
// 단, script내에서의 html문은 js+html
// ex)
// <body>
//     <script>
//         alert("온달")
//         document.write("<h1>온달</h1>")
//     </script>
// </body>

// 프로그래밍에서 동작(동적웹페이지)를 담당 (참고 : 정적 웹페이지)

// javascript 객체종류 3가지
// 1. user defined Object(사용자 정의 객체) : 정의 - 생성 - 사용
// 정의 : 자바 class BBang{}
// javascript
//      function BBang(){}
//      BBang = function(){}

// 2. 내장객체 : (정의) - 생성 - 사용
// Date d = new Date()

// 3. 브라우저객체 (BOM : Browser Object Model) : (정의 - 생성) - 사용
// window.location = "http://www.naver.com"
// 객체.속성=값

// javascript 문법(flexible)
// window.alert()
// 대소문자 구분 alert() o / ALERT() x
// <html> o / <HTML> X
//     (참고) block 후 ctrl + shift + x : 소문자=>대문자
//     ctrl + shift + y : 대문자=>소문자

// "",'' 둘다 사용가능 alert("바보") alert('바보')
// ;은 사용, 비사용 다됨 (단, 다수의 객체를 쓸때는 ;반드시 사용)

// 주석은 //,/* */ 사용
// 변수 자료형은 var이다
// var aa = 30;
// var aa = "ondal";

// 변수 자료형은 생략가능하다.
// 선언 위치 및 의미
// var aa;//전역(함수밖에서 선언)
// function kaja(){
//     aa=50;
//     var bb=100;//지역
// }

// 객체 선언
// var aa={}
// var bb="tom"

// 자바스크립트 사용처
// 회원가입시 기입내용 검증
// 이벤트에 대한 동작부분을 담당한다 등등...

// <script></script>태그 위치
// head, body에서 사용가능
// <script>가 여러번 나와도 된다

// <script> 사용법
// body에 작성
// head에 작성하고 body에서 call
// .js파일을 call
// script 태그 없이 html에서 call