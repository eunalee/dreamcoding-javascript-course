const map = new Map([
    ['key1', '🍎'],
    ['key2', '🍌'],
]);
console.log(map);

// 사이즈 확인
console.log(map.size);

// 아이템이 존재하는지 확인
console.log(map.has('key1'));
console.log(map.has('key6'));

// 순회
map.forEach((value, key) => console.log(key, value));
console.log(map.keys());
console.log(map.values());
console.log(map.entries());

// 찾기
console.log(map.get('key1'));
console.log(map.get('key2'));
console.log(map.get('key4'));

// 추가 (중복 불가)
map.set('key3', '🥝');
console.log(map);

// 삭제
map.delete('key3');
console.log(map);

// 전부 삭제
map.clear();
console.log(map);

// 오브젝트와의 큰 차이점??
// 1. 사용할 수 있는 함수가 다름
const key = { name : 'milk', price : 10 };
const milk = { name: 'milk', price: 10, description: '맛있는 우유' };
const obj = {
    [key]: milk
};
console.log(obj);

const map2 = new Map([[key, milk]])
console.log(map2);

// 2. key 로 접근하는 방법이 다름
console.log(obj[key]);
console.log(map2.get(key));