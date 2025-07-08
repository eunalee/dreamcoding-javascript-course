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

// async 키워드를 사용하면 비동기적인 코드를 동기적(절차적)으로 사용 가능!
async function fetchFruits() {
    // Promise 를 리턴하는 함수 호출시에는 await 키워드 사용
    // Promise 가 끝날때까지 기다렸다가 리턴
    const banana = await getBanana();
    const apple = await getApple();

    return [banana, apple];
}

fetchFruits()
    .then(console.log);