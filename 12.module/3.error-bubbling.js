// Bubbling up, Propagating 🧼
// 에러는 전파가 된다!
// 적합한 곳에서 에러 처리하기
function a() {
    throw new Error('error!');
}

// 제일 근접한 곳에서 에러 잡기
function b() {
    try {
        a();
    } catch (error) {
        // console.log(error);
        console.log('생각해보니깐 이 에러는 내가 핸들링 할 수 없을 것 같군!');
        throw error;
    }
}

function c() {
    b();
}

// 호출한 곳에서 에러 잡기 
try {
    c();
} catch (error) {
    console.log('Catched!');
}
console.log('done!');