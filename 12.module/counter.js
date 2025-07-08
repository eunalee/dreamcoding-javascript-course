let count = 0;

// 1개만 export 할 때는 default 사용
// export default function increase() {
export function increase() {
    count++;
    console.log(count);
}

export function getCount() {
    return count;
}