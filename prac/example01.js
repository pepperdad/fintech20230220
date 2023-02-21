// 사용하지말아요 ~ 
var a = "test";

// 변수 -> 재선언 불가, 재할당 가능
let b = 28123;

let c = 2312.213

// var, let 성능차이가 있을까? -> 같은 변수 선언인데 한 번 고민해보기 ! 면접에 나올 수도 있음, 내 생각을 근거 있게, 논리적으로 말하면 된다.

// 상수 -> 재할당 불가
const d = "test2";



const mulWithArrowFunc = (x, y) => {
    return x * y;
};


const divWithArrowFunc = (x, y) => {
    return x / y;
};



console.log(mulWithArrowFunc(2, 3));
console.log(divWithArrowFunc(6, 4));
