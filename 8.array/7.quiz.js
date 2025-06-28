// 퀴즈 1:
// 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input : ['🍌', '🍓', '🍇', '🍓']
// output : ['🍌', '🥝', '🍇', '🥝']
const replace = (array, from, to) => {
    // const result = array.map((item) => {
    //     if (item === from) {
    //         return to;
    //     } else {
    //         return item;
    //     }
    // });
    
    // return result;
    return array.map((item) => item === from ? to : item);
};

let array = ['🍌', '🍓', '🍇', '🍓'];
let result = replace(array, '🍓', '🥝');
console.log(result);

array = ['🍑', '🍋', '🍊', '🍇'];
result = replace(array, '🍑', '🥝');
console.log(result);


// 퀴즈 2:
// 배열과 특정한 요소를 전달받아 배열 안에 그 요소가 몇 개나 있는지 카운트하는 함수 만들기
// input : ['🍌', '🥝', '🍇', '🥝'], '🥝'
// output : 2
const count = (array, item) => {
    // const result = array.reduce((count, value) => {
    //     if (value === item) {
    //         count++;
    //     }
    //     return count;
    // }, 0);
    
    // return result;

    return array.filter((value) => value == item).length;
};

array = ['🍌', '🥝', '🍇', '🥝'];
result = count(array, '🥝');
console.log(result);

array = ['🍑', '🍋', '🍊'];
result = count(array, '🍊');
console.log(result);


// 퀴즈 3:
// 배열1, 배열2 두 개의 배열을 전달받아 배열1 아이템 중 배열2에 존재하는 아이템만 담고있는 배열 반환
// input : ['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']
// output : ['🍌', '🍇']
const match = (array1, array2) => {
    // const result = array1.filter((item) => {
    //     if (array2.includes(item)) {
    //         return item;
    //     }
    // });

    // return result;
    return array1.filter((item) => array2.includes(item));
};

let array1 = ['🍌', '🥝', '🍇'];
let array2 = ['🍌', '🍓', '🍇', '🍓'];
result = match(array1, array2);
console.log(result);

array1 = ['🍌', '🥝', '🍇', '🥝'];
array2 = ['🍋', '🍊', '🥝'];
result = match(array1, array2);
console.log(result);

array1 = ['🍌', '🥝', '🍇', '🍑'];
array2 = ['🍌', '🍓', '🍇', '🍓', '🍑'];
result = match(array1, array2);
console.log(result);


// 퀴즈 4:
// 5 이상(보다 큰)의 숫자들의 평균
const average = (array) => {
    // 5 이상(보다 큰)의 숫자들의 배열
    // const result = array.filter((item) => {
    //     if (item >= 5) {
    //         return item;
    //     }
    // });
    
    // 총합
    // const total = result.reduce((sum, value) => sum += value, 0);
    // // 평균
    // const avg = total / result.length;
    
    // return avg;

    const result = array
        .filter((item) => item >= 5)
        .reduce((avg, item, _, array) => avg + item / array.length, 0);
    
    return result;
};

const nums = [3, 16, 5, 25, 4, 34, 21];
result = average(nums);
console.log(result);