// // function definition
// function print(val) {
//     console.log(val);
// }

// // function add(a, b) {
// //     var c= a+b;
// //     console.log(c);
// // }

// function a() {
//     console.log("Here is a")
//     return "a";
// }

// print(25 + 25);
// // add(12,13)

function temp1(a) {
    return 2 * a;
}

function temp2(a) {
    return a(5);
}

var x = temp2(temp1);
console.log(x);
