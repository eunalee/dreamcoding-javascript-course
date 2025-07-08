{
    const x = 1;
    {
        // 자식 블럭은 부모 블럭의 변수를 참조 ⭕
        const y = 2;
        console.log(x);
    }
    console.log(x);
    // 블럭 외부에서는 블럭 내부 변수 참조 ❌
    // console.log(y);
}

// 전역 변수, 전역 스코프 (글로벌 변수, 글로벌 스코프)
const text = 'global';
{
    // 지역 변수, 지역 스코프 (로컬 변수, 로컬 스코프)
    const text = 'inside block1';
    {
        const text = 'inside block2';
        console.log(text);      // 가장 근접한 변수에 접근
    }
}