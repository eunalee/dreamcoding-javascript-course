// 퀴즈!
// 1. 문자열의 모든 캐릭터를 하나씩 출력하라
// H
// e
// l
// l
// ..
// !
const text = 'Hello World!';
for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
}

// 2. 사용자들의 id 를 잘라내어 각각의 id 를 배열로 보관
// ['user1', 'user2', 'user3', 'user4']
const ids = 'user1, user2, user3, user4';
const array = ids.split(', ');
console.log(array);

// 3. 1초에 한 번씩 시계를 출력해보자 (날짜 포함)
// setInterval
setInterval(() => {
    const now = new Date();
    console.log(now.toLocaleString('ko-KR'))
}, 1000);