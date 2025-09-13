const obj = {
    a: [10, 20],
    b: 20,
    c:2
}

// const a = obj.a;
// const b = obj.b;
// const c = obj.c;

const { a, b, c } = obj;

console.log(a);
console.log(b);
console.log(c);


function add(a, b, ...c) {  // ...c--> rest c
    const sum = c.reduce((acc, num) => acc + num);
    console.log(sum + a + b);
}

const data = [10, 20, 30, 40, 50];
add(...data);