// 접근제어자 - 캡슐화 (내부에서 필요한 데이터를 외부에서 수정하지 못하게 함)
// private(#), public(기본), protected
class Fruit {
    #name;
    #emoji;
    #type = '과일';
    constructor(name, emoji) {
        this.#name = name;
        this.#emoji = emoji;
    }

    #display = () => {
        console.log(`${this.#name}: ${this.#emoji}`);
    }
}
const apple = new Fruit('apple', '🍎');
// apple.#name = 'orange';  // # field 는 외부에서 접근이 불가능함
console.log(apple);
apple.display();