// 식별자가 유효한 범위
// 코드 블럭 : { }, if() { }, for() { }, function() { }

// 블럭 외부에서는 블럭 내부의 변수를 참조 ❌
{
    const a = 'a';
}
const b = 'b';
// console.log(a);
console.log(b);

// 함수 외부에서는 함수 내부의 변수를 참조 ❌
function print() {
    const message = 'Hello World';
    console.log(message);
}
// console.log(message);

// 함수 외부에서는 함수의 매개변수를 참조 ❌
function sum(a, b) {
    console.log(a, b);
}
// console.log(a, b);
