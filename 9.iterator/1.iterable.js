// Iterable 하다는 건 순회가 가능하다!
// [Symbol.iterator]() : Iterator;
// 심볼 정의를 가진 객체나, 특정한 함수가 Iterator 를 리턴한다는 것은 순회 가능한 객체다!
// 순회가 가능하면 무엇을 할 수 있나? for..of, spread 연산자 사용 가능

// Array : 객체 안에 Iteration 프로토콜을 따르는 Symbol.iterator() 를 가지고 O
// values(), keys(), entries() 등은 Iterator 를 리턴해 다음값에 계속 접근 가능
const array = [1, 2, 3];
for (const item of array.entries()) {
    console.log(item);
}

// Object : 객체 안에 Iteration 프로토콜을 따르는 Symbol.iterator() 를 가지고 있지 X
const obj = { 0: 1, 1: 2 };
for (const item in obj) {
    // key 를 출력
    console.log(item);
}

const iterator = array.values();
while (true) {
    const item = iterator.next();
    if (item.done) break;
    console.log(item.value);
}