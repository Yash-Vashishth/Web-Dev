const data = [
    { length: 5, width: 4 },
    { length: 50, width: 40},
    { length: 10, width: 20 },
    { length: 50, width: 25 },
    { length: 9, width: 3}
]

const area = (a, b) => a * b;
const perimeter = (a, b) => 2 * (a + b);

function calculate(data, logic) {
    const result = [];

    for (let rect of data) {
        const output = logic(rect.length * rect.width);
        result.push(output);
    }

    return result;
}