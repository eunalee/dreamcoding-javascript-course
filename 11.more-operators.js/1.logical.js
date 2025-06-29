// 논리연산자 Logical Operator
// && 그리고
// || 또는
// 단축평가 : short-circuit evaluation
const obj1 = { name: '🐶' };
const obj2 = { name: '🐱', owner: 'euna' };

// 앞의 값이 False 면 전체 조건이 False
// 앞의 값이 True 면 뒤의 값 평가
if (obj1 && obj2) {
    console.log('둘 다 true!');
}

// 앞의 값이 True 면 전체 조건이 True
// 앞의 값이 False 면 뒤의 값 평가
if (obj1 || obj2) {
    console.log('둘 다 true!');
}

// 조건문 밖에서 사용하면 true/false 로 평가 X
// && : 하나가 true 면 뒤의 값이 (평가되지 않고) 할당됨
let result = obj1 && obj2;
console.log(result);

// || : 하나가 true 면 바로 그 값이 할당됨 (true 인 값이 할당됨!)
result = obj1 || obj2;
console.log(result);


// 활용 예
// 조건이 truthy 일 때 && 무언가를 해야할 경우
// 조건이 falshy 일 때 || 무언가를 해야할 경우

// 주인이 있는 경우, 주인 바꾸기
function changeOwner(animal) {
    if (!animal.owner) {
        // 앱을 종료하는 에러를 던진다
        throw new Error('주인이 없어');
    }
    
    animal.owner = '바뀐 주인!';
}

// 주인이 없는 경우, 새로운 주인 만들기
function makeNewOwner(animal) {
    if (animal.owner) {
        // 앱을 종료하는 에러를 던진다
        throw new Error('주인이 있어');
    }
    animal.owner = '새로운 주인!';
}

obj1.owner && changeOwner(obj1);    // obj1.owner 가 false 라서 뒤의 changeOwner(obj1) 는 실행 X
obj2.owner && changeOwner(obj2);    // obj2.owner 는 true 라서 뒤의 changeOwner(obj2) 가 실행됨
console.log(obj1);
console.log(obj2);

obj1.owner || makeNewOwner(obj1);    // obj1.owner 가 false 라서 뒤의 makeNewOwner(obj1) 가 실행됨
obj2.owner || makeNewOwner(obj2);    // obj2.owner 는 true 라서 뒤의 makeNewOwner(obj2)는 실행 X
console.log(obj1);
console.log(obj2);

// null 또는 undefined 인 경우를 확인할때
let item = { price: 1 };
const price = item && item.price;
console.log(price);

// 기본값을 설정
// default parameter 는 전달하지 않거나 undefined 인 경우에만 설정 가능
// || 는 값이 falshy 한 경우에 설정 가능(할당) : 0, -0, null, undefined, ''
function print(message ) {
    const text = message || 'Hello';
    console.log(text);
}

print();
print(undefined);
print(null);
print(0);