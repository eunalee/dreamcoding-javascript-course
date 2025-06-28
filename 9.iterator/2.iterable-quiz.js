// [Symbol.iterator]() : Iterator { next() : {value, done} };
// 0부터 10이하까지 숫자의 2배를 순회하는 이터레이터(반복자) 만들기!
// 0, 1, 2, 3...., 9
// 0, 2, 4, 6...., 18

const multiple = {
    [Symbol.iterator]() {
        let i = 0;
        const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

        // Iterator { next() : {value, done} };
        return {
            next() {
                result = { value: array[i] * 2, done: (i === array.length) };
                i++;
                return result;
            }
        };
    }
};

for (const num of multiple) {
    console.log(num);
}