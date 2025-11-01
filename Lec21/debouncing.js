// function debounce(fn,delay) {
//     let id;

//     return function (...args) {
//         clearInterval(id);
//         id= setTimeout(() => {
//             fn()
//         },delay)
//     }

// }

// const input = document.querySelector("input");

// function print(val) {
//     console.log(val);
// }

// input.addEventListener("keydown", (e) => {
//     fn = debounce(print, 2000);
//     fn();
// })

let timer;
const input = document.querySelector("input");

input.addEventListener("keydown", (e) => {
    clearTimeout(timer);
    timer = setTimeout(() => console.log(e.target.value), 1000);
})

// Debouncing is the adding of delay before calling a function after the set delay (pause is observed)
// Throttling is also delay befor calling a function but it calls it in regular interval without any care

// if we remoe the clearTImeout it wil call the api every keydown with the delay present instead of the api being called after keydown is stopped
