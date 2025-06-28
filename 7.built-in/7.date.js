// UTC 기준 (협정 세계시, 1970년 1월 1일 UTC 자정과의 시간 차이를 밀리초 단위로 표기)

// 현재 시간 출력
console.log(new Date());
console.log(new Date('Jun 5, 2025'));
console.log(new Date('2025-07-01T03:24:00'));

// 현재 시간 밀리초 단위로 표시
console.log(Date.now());
console.log(Date.parse('2025-07-01T03:24:00'));

const now = new Date();

now.setFullYear(2023);
console.log(now);

now.setMonth(0);    // 0 : 1월
console.log(now);

// 년도
console.log(now.getFullYear());
// 날짜
console.log(now.getDate());
// 월
console.log(now.getMonth());    // 0 : 1월
// 요일
console.log(now.getDay());      // 0 일요일부터, 1... 6 : 토요일
// 시간
console.log(now.getHours());
// 분
console.log(now.getMinutes());
// 초
console.log(now.getSeconds());
// 시간(밀리초)
console.log(now.getTime());

// 날짜+시간 문자열로 변환
console.log(now.toString());
// 날짜만 문자열로 변환
console.log(now.toDateString());
// 시간만 문자열로 변환
console.log(now.toTimeString());
// ISO 8601 형식으로 변환
console.log(now.toISOString());
// 지역에 맞는 문자열로 변환
console.log(now.toLocaleString('en-US'));
console.log(now.toLocaleString('ko-KR'));