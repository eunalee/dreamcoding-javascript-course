// 접근자 프로퍼티 (Accessor Property)
class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        // 생성자에서 한 번 만들어지고 나면 업데이트가 되지X
        // this.fullName = `${this.lastName} ${this.firstName}`;
    }

    // 함수를 호출하는 시점에 fullName 을 만들어줌
    // 속성에 접근하듯이 만들어줌
    get fullName() {
        return `${this.lastName} ${this.firstName}`;
    }

    // 할당
    set fullName(value) {
        console.log('set', value);
    }
}

const student = new Student('수지', '김')
student.firstName = '안나';
console.log(student.firstName);
console.log(student.fullName);
student.fullName = '김철수';