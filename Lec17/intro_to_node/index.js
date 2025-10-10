console.log("hello world");

// global.setTimeout(() => {           // instead of window, used global keyword 
//     console.log("Hello !!!"); 
// }, 2000);   

const intervalid= setInterval(() => {
    console.log("Hello there !!!");
}, 2000)

clearInterval(intervalid)