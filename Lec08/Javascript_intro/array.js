arr = [1, 2, 3, 4];

console.log(arr);
console.log(arr[0]);

arr[2] = 'hi there';
console.log(arr);

arr.push(200);
console.log(arr);
arr.pop();

// arr.unshift(500);
// console.log(arr);
// // arr.shift();
// console.log(arr);
// arr.shift();
// console.log(arr);

arr.splice(2, 1);
console.log(arr);
arr.splice(2, 0, 300);
console.log(arr);
console.log(arr.join("-"));