// Symbol 심벌
// 유일한 키를 생성할 수 있음 🔑
const map = new Map();
// const key1 = 'key';
// const key2 = 'key';
// map.set(key1, 'Hello');

// // 원시타입(문자열)이라서 동일한 키라고 간주
// console.log(map.get(key2));
// console.log(key1 === key2);

const key1 = Symbol('key');
const key2 = Symbol('key');
map.set(key1, 'Hello');

// 서로 다른값이 생성됨
console.log(map.get(key2));
console.log(key1 === key2);

// 동일한 이름으로 하나의 키를 사용하고 싶다면 Symbol.for
// 전역 심벌 레지스트리 (Global Symbol Registry) - 동일한 심벌을 재사용
const k1 = Symbol.for('key');
const k2 = Symbol.for('key');
console.log(k1 === k2);

// 전역 심벌 레지스트리에 있는 경우에만, 심벌이 가진 문자열 추출
console.log(Symbol.keyFor(k1));
console.log(Symbol.keyFor(key1));

const obj = { [k1]: 'Hello', [Symbol('key')] : 1 };
console.log(obj);
console.log(obj[k1]);
// 외부에서 접근 불가
console.log(obj[Symbol('key')]);