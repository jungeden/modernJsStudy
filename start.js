console.log(1 + 1); //3
console.log(2 + "1"); //21
console.log("1" + 2); //12

let a = 2;
let b = "4";

console.log(a + b);

//let 가변 const 불변 var

//스코프
//중괄호 느낌

x = 3; //전역스코프?

function foo() {
  var x = "function scope";
  console.log(x);
}

foo();
console.log(x);

//var는 지역 상과없이 같음 let은 지역 나눔 스코프로 이름 같이도
var x = 0;
{
  var x = 1;
  console.log(x);
}
console.log(x);

let y = 0;
{
  let y = 1;
  console.log(y);
}
console.log(y);

// '==','===' 차이 : 형변환이 자동으로 이루어지냐 안이루어지냐
// '==' => 1 '===' => 2
if (3 == "3") {
  console.log("1");
} else {
  console.log("2");
}
// ===을 쓰자
//typescript
