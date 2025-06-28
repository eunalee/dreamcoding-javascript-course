// 퀴즈 1:
// 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input : ['🍌', '🍓', '🍇', '🍓']
// output : ['🍌', '🥝', '🍇', '🥝']
const replaceItem = (arr, item) => {
    const replaceFruit = '🥝';
    let outputArr = [];

    if (arr.includes(item)) {
        for (let i = 0; i < arr.length; i++) {
            const currentItem = arr[i];
            if (currentItem === item) {
                outputArr.push(replaceFruit);
            } else {
                outputArr.push(currentItem);
            }
        }
    }
    
    return outputArr;
}

let array = ['🍌', '🍓', '🍇', '🍓'];
console.log(replaceItem(array, '🍓'));

array = ['🍑', '🍋', '🍊', '🍇'];
console.log(replaceItem(array, '🍑'));

// sol.
// function replace(array, from, to) {
//     const replaced = Array.from(array);
//     for (let i = 0; i < replaced.length; i++) {
//         if (replaced[i] === from) {
//             replaced[i] = to;
//         }
//     }

//     return replaced;
// }

// const array = ['🍌', '🍓', '🍇', '🍓'];
// const result = replace(array, '🍌', '🥝');
// console.log(result);


// 퀴즈 2:
// 배열과 특정한 요소를 전달받아 배열 안에 그 요소가 몇 개나 있는지 카운트하는 함수 만들기
// input : ['🍌', '🥝', '🍇', '🥝'], '🥝'
// output : 2
const countItem = (arr, item) => {
    let count = 0;

    if (arr.includes(item)) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                count++;
            }
        }
    }

    return count;
}

array = ['🍌', '🥝', '🍇', '🥝'];
console.log(countItem(array, '🥝'));

array = ['🍑', '🍋', '🍊'];
console.log(countItem(array, '🍊'));

// sol.
// function count(array, item) {
//     let counter = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === item) {
//             counter++;
//         }
//     }

//     return counter;
// }

// console.log(count(['🍌', '🥝', '🍇', '🥝'], '🥝'));


// 퀴즈 3:
// 배열1, 배열2 두 개의 배열을 전달받아 배열1 아이템 중 배열2에 존재하는 아이템만 담고있는 배열 반환
// input : ['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']
// output : ['🍌', '🍇']
const getEqualItem = (arr1, arr2) => {
    let outputArr = [];

    for (let i = 0; i < arr1.length; i++) {
        const currentItemArr1 = arr1[i];

        for (let j = 0; j < arr2.length; j++) {
            const currentItemArr2 = arr2[j];

            if (currentItemArr1 === currentItemArr2) {
                // 중복 제거
                if (!outputArr.includes(currentItemArr1)) {
                    outputArr.push(currentItemArr1);
                }
            }
        }
    }

    return outputArr;
}

let array1 = ['🍌', '🥝', '🍇'];
let array2 = ['🍌', '🍓', '🍇', '🍓'];
console.log(getEqualItem(array1, array2));

array1 = ['🍌', '🥝', '🍇', '🥝'];
array2 = ['🍋', '🍊', '🥝'];
console.log(getEqualItem(array1, array2));

// sol.
// function match(input, search) {
//     const result = [];
//     for (let i = 0; i < input.length; i++) {
//         if (search.includes(input[i])) {
//             result.push(input[i]);
//         }
//     }

//     return result;
// }

// console.log(match(['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']));
// console.log(match(['🍌', '🥝', '🍇', '🥝'], ['🍋', '🍊', '🥝']));
// console.log(match(['🍌', '🥝', '🍇', '🍑'], ['🍌', '🍓', '🍇', '🍓', '🍑']));
