console.log(globalThis);
console.log(this);
console.log(Infinity);
console.log(NaN);
console.log(undefined);

// 문자열을 자바스크립트 코드로 평가해서 출력
eval('const num = 2; console.log(num);');

// 숫자가 유한한지 아닌지 확인
console.log(isFinite(1));
console.log(isFinite(Infinity));

// 문자열 숫자 -> 실수
console.log(parseFloat('12.43'));
// 문자열 숫자 -> 정수
console.log(parseInt('12.43'));
console.log(parseInt('11'));

// URL (URI, Uniform Resource Identifier 하위 개념)
// 아스키 문자로만 구성되어야함
// 한글이나 특수문자는 이스케이프 처리해야한다 (정해진 다른 문자로 변환)
const URL = 'https://드림코딩.com';
const encoded = encodeURI(URL);
console.log(encoded);

// 인코딩 -> 디코딩
const decoded = decodeURI(encoded);
console.log(decoded);

// 전체 URL 이 아니라 부분적인 것은 Component 이용
const part = '드림코딩.com';
console.log(encodeURIComponent(part));
