function throttle(func, wait) {
    // let t = 0;
    // return function (...args) {
    //     let now = Date.now();
    //     if (now - t >= delay) {
    //         fn.apply(this, args);
    //         t = now;
    //     }
    // };

    let timeout;
    return function () {
        if (!timeout) {
            timeout = setTimeout(() => {
                func();
                timeout = null;
            }, wait);
        }
        
    }
}

const input = document.querySelector("input");

function printValue() {
    console.log("Hello from printvalue");
}
const throttledFun = throttle(printValue, 800);

input.addEventListener("keydown", throttledFun);
