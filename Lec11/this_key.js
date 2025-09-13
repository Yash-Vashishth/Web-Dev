//default binding

function temp() {
    console.log(this);
    this.fruitName = "Mango";
}

// implicit binding
 
obj={
    a: 1,
    b: 2,
    c: ()=> {
        console.log(this)
    }
}
console.log(c);

// Explicit Binding

const person = {
    name: "Anurag",
    age: 30,
    address: "Noida,India",
}

// function updateAge(person, age) {
//     person.age = age;
// }

function updateAgeNew(age, address) {
    this.age = age;
}

function updatePerson(age, address) {
    this.age = age;
    this.address = address;
}

updateAgeNew.apply(person, [50]);
updateAgeNew.call(person, 55);

const fn = updatePerson.bind(person)
fn(18, "Pune,India");
console.log(person)

// new 
function Person(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
}
const p= new Person("Mohit", 40, "Delhi,India") 