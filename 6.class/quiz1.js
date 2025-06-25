// 카운터를 만들기
// 0 이상의 값으로 초기화 한 뒤, 하나씩 숫자를 증가할 수 있는 카운터를 만들기
// Counter 클래스 만들기
// class Counter {
//     constructor() {
//         this.num = 0;
//     }

//     count = () => {
//         this.num++;
//     }

//     reset = () => {
//         this.num = 0;
//     }
// }

// const counter = new Counter();
// counter.count();
// counter.count();
// counter.count();
// counter.count();
// console.log(counter.num);
// counter.reset();
// console.log(counter.num);

// sol.
class Counter {
    // 외부에서 변수 접근 불가
    #value;

    // 생성자
    constructor(startValue) {
        if (isNaN(startValue) || startValue < 0) {
            this.#value = 0;
        } else {
            this.#value = startValue;
        }
    }

    increment = () => {
        this.#value++;
    }

    // 외부에서 변수 접근 시,
    get value() {
        return this.#value;
    }
}

// 사용할 때, 어떻게 사용할 수 있을지 사용자의 입장에서 미리 만들어보기!
const counter = new Counter(0);
counter.increment();    // 1
counter.increment();    // 2
console.log(counter.value);

const counter1 = new Counter(-2);
counter1.increment()
console.log(counter1.value);