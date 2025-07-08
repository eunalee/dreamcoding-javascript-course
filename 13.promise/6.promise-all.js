function getBanana() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('🍌');
        }, 1000);
    });
}

function getApple() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('🍎');
        }, 3000);
    });
}

function getOrange() {
    return Promise.reject(new Error('no orange'));
}

// 바나나와 사과를 같이 가져오기
// 총 4초
getBanana()
    .then((banana) =>
        getApple()
            .then((apple) => [banana, apple])
    )
    .then(console.log);

// Promise.all : 병렬적으로 한번에 모든 Promise 들을 실행!
// 총 3초
Promise.all([getBanana(), getApple()])
    .then((fruits) => console.log('all', fruits));

// Promise.race : 주어진 Promise 중에 제일 빨리 수행된 것이 이김!
// 1초 => 🍌
Promise.race([getBanana(), getApple()])
    .then((fruit) => console.log('race', fruit));

// Promise.allSettled : Promise 수행 결과를 배열로 반환!
Promise.allSettled([getBanana(), getApple(), getOrange()])
    .then((fruits) => console.log('all-settled', fruits))
    .catch(console.log);