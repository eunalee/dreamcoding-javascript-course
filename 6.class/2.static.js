// static 정적 프로퍼티, 메서드
class Fruit {
    static MAX_FRUITS = 4;
    
    constructor(name, emoji) {
        this.name = name;
        this.emoji = emoji;
    }

    // 클래스 레벨의 메서드
    static makeRandomFruit() {
        // 클래스 레벨의 메서드에서는 this 를 참조할 수 없음 (클래스 자체는 아무것도 채워지지 않은 템플릿!)
        return new Fruit('banana', '🍌');
    }

    // 인스턴스 레벨의 메서드 (만들어진 인스턴스의 데이터에 접근해서 출력해야함)
    display = () => {
        console.log(`${this.name}: ${this.emoji}`);
    }
}

const banana = Fruit.makeRandomFruit()
console.log(banana);
console.log(Fruit.MAX_FRUITS);

// apple 은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple', '🍎');
// orange 는 Fruit 클래스의 인스턴스이다.
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
apple.display();

Math.pow();
Number.isFinite(1);