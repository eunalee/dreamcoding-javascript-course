const num1 = 123;
const num2 = new Number(123);
console.log(typeof num1);
console.log(typeof num2);

// 정수에서 사용할 수 있는 가장 큰 숫자
console.log(Number.MAX_VALUE);
// 정수에서 사용할 수 있는 가장 작은 숫자
console.log(Number.MIN_VALUE);
// 안전하게 사용할 수 있는 가장 큰 숫자
console.log(Number.MAX_SAFE_INTEGER);
// 안전하게 사용할 수 있는 가장 작은 숫자
console.log(Number.MIN_SAFE_INTEGER);
// Not a Number
console.log(Number.NaN);
// -무한대
console.log(Number.NEGATIVE_INFINITY);
// +무한대
console.log(Number.POSITIVE_INFINITY);

// 사용 예)
if (num1 === Number.MAX_SAFE_INTEGER) {
}

if (Number.isNaN(num1)) {
}

// 지수표기법 (매우 크거나 작은 숫자를 표기할 때 사용, 10의 n승으로 표기)
const num3 = 102;
console.log(num3.toExponential());

// 반올림하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed());
// 숫자 -> 문자열
console.log(num4.toString());
// 지역에 맞는 숫자로 변환
console.log(num4.toLocaleString('ar-EG'));
// 원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(5));
console.log(num4.toPrecision(2)); // 전체 자릿수 표기가 안될때는 지수표기법

// 0과 1 사이에서 나타낼 수 있는 가장 작은 숫자
if (Number.EPSILON > 0 && Number.EPSILON < 1) {
  console.log(Number.EPSILON);
}

// 10진수 -> 2진수로 변환하여 연산을 하고 다시 10진수로 변환 (정확히 부동소수점까지 계산이 되지X)
const num = 0.1 + 0.2 - 0.2; // 0.1
console.log(num);

function isEqual(original, expected) {
  //   return original === expected;
  // 작은 미세한 차이라면 똑같다고 간주하고 싶을 때
  return Math.abs(original - expected) < Number.EPSILON;
}

console.log(isEqual(1, 1));
console.log(isEqual(0.1, 0.1));
console.log(isEqual(num, 0.1)); // 0.10000000000000003 vs 0.1
