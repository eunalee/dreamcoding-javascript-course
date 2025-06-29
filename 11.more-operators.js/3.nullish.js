// Nullish Coalescing Operator
// ES11 (ECMAScript 2020)
// ??
// null, undefined 인 경우에만 사용하고 싶을때 (상태만 판단, 값이 falshy 한지 아닌지 판단 X)
let num;
num = 0;
console.log(num || '-1');   // num 의 값이 falshy 하므로 -1 리턴
console.log(num ?? '-1');   // num 상태(num = 0)가 null, undefined 가 아니므로 0 리턴