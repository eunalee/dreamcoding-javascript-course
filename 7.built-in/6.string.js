const textObj = new String('Hello World!');
const text = 'Hello World!'

console.log(textObj);
console.log(text);

// 위치별 문자열 확인
console.log(text[0]);
console.log(text[1]);
console.log(text[2]);
console.log(text.charAt(0));
console.log(text.charAt(1));
console.log(text.charAt(2));

// 문자열 길이 확인
console.log(text.length);

// 문자열 인덱스 확인
console.log(text.indexOf('l'));
console.log(text.lastIndexOf('l'));

// 특정 문자열 포함 여부 확인
console.log((text.includes('tx')));
console.log((text.includes('h')));
console.log((text.includes('H')));

// 특정 문자열로 시작하는지 확인
console.log(text.startsWith('He'));

// 특정 문자열로 끝나는지 확인
console.log(text.endsWith('!'));

// 대문자로 변환
console.log(text.toUpperCase());

// 소문자로 변환
console.log(text.toLowerCase());

// 특정 범위의 문자열 추출
console.log(text.substring(0, 2));

// 특정한 위치부터 문자열 추출
console.log(text.slice(2));
console.log(text.slice(-2));

// 문자열 공백 제거
const space = '             space       ';
console.log(space.trim());

// 구분자로 문자열 분리
const longText = 'Get to the point';
console.log(longText.split(' '));
console.log(longText.split(', ', 2));