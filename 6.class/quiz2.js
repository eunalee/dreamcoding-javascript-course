// 정직원과 파트타임 직원을 나타낼 수 있는 클래스를 만들어 보자
// 직원들의 정보 : 이름, 부서 이름, 한달 근무시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다
// 정직원은 시간당 10,000원
// 파트타임 직원은 시간당 8,000원

// 공통
// class Employee {
//     #name;
//     #department;
//     #hoursPerMonth;

//     constructor(name, department, hoursPerMonth) {
//         this.#name = name;
//         this.#department = department;
//         this.#hoursPerMonth = hoursPerMonth;
//     }

//     get name() {
//         return this.#name;
//     }
    
//     get department() {
//         return this.#department;
//     }

//     get hoursPerMonth() {
//         return this.#hoursPerMonth;
//     }
// }

// // 정직원
// class FullTimeEmployee extends Employee {
//     salary = () => {
//         return super.hoursPerMonth * 10000;
//     }
// }

// // 파트타임 직원
// class PartTimeEmployee extends Employee {
//     salary = () => {
//         return super.hoursPerMonth * 8000;
//     }
// }

// const bob = new FullTimeEmployee('bob', 'marketing', 160);
// console.log(bob.salary());

// const luna = new PartTimeEmployee('luna', 's/w', 128);
// console.log(luna.salary());


// sol.
class Employee {
    constructor(name, department, hoursPerMonth, payRate) {
        this.name = name;
        this.department = department;
        this.hoursPerMonth = hoursPerMonth;
        this.payRate = payRate;
    }

    calculatePay() {
        return this.hoursPerMonth * this.payRate;
    }
}

// 정직원
class FullTimeEmployee extends Employee {
    static #PAY_RATE = 10000;
    constructor(name, department, hoursPerMonth) {
        super(name, department, hoursPerMonth, FullTimeEmployee.#PAY_RATE)
    }
}

// 파트타임 직원
class PartTimeEmployee extends Employee {
    static #PAY_RATE = 8000;
    constructor(name, department, hoursPerMonth) {
        super(name, department, hoursPerMonth, PartTimeEmployee.#PAY_RATE)
    }
}

const bob = new FullTimeEmployee('bob', 'marketing', 160);
console.log(bob.calculatePay());

const luna = new PartTimeEmployee('luna', 's/w', 128);
console.log(luna.calculatePay());