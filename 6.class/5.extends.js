// class Tiger {
//     constructor(color) {
//         this.color = color;
//     }

//     eat() {
//         console.log('먹자!');
//     }

//     sleep() {
//         console.log('잔다');
//     }
// }

// class Dog {
//     constructor(color) {
//         this.color = color;
//     }

//     eat() {
//         console.log('먹자!');
//     }

//     sleep() {
//         console.log('잔다');
//     }

//     play() {
//         console.log('놀자아~!');
//     }
// }

// 공통의 템플릿
class Animal {
    constructor(color) {
        this.color = color;
    }

    eat() {
        console.log('먹자!');
    }

    sleep() {
        console.log('잔다');
    }
}

class Tiger extends Animal { }
const tiger = new Tiger('노랑이');
console.log(tiger);
tiger.sleep();
tiger.eat();

class Dog extends Animal {
    constructor(color, ownerName) {
        // super : 상속하고 있는 부모 클래스를 가리킴
        // 부모 생성자에 값 전달
        super(color);
        this.ownerName = ownerName;
    }

    play() {
        console.log('놀자아~!');
    }

    // 오버라이딩 overriding
    // 자식 클래스에서 부모 클래스의 요소를 덮어씌운다!
    eat() {
        // 부모의 함수를 호출
        super.eat();
        console.log('강아지가 먹는다!');
    }
}

const dog = new Dog('빨강이', '루나');
console.log(dog);
dog.sleep();
dog.eat();
dog.play();