console.log(1);

console.log(2);

window.setTimeout(() => {
    console.log(2);
}, 3000);

setTimeout(() => {
    console.log(3);
}, 1000)

console.log(4);
// This works but it slows down the loading of View Engine and the compnent of the website are also not
// not available for interaction as well.
// function delay(n) {
//     const currentTime = new Date().getTime();

//     while(new Date().getTime() < currentTime+n*1000){}
// }