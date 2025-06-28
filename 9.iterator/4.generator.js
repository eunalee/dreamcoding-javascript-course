// Generator 생성
function* multipleGenerator() {
    try {
        for (let i = 0; i < 10; i++) {
            // 사용자가 next() 를 호출할 때까지 기다렸다가 사용자가 next() 가 호출하면 리턴
            yield i ** 2;
        }
    } catch (error) {
        console.log(error);
    }
}

const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done);

// Generator 종료
// multiple.return();

// Generator 에 에러를 던짐
// multiple.throw('Error!');

next = multiple.next();
console.log(next.value, next.done);