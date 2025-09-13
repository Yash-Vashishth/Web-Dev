function Person(name, age, address,marks) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.marks = marks;
}

Person.prototype.totalMarks = function () {
    return this.marks.reduce((acc, num) => acc + num);
}
const p= new Person("Mohit", 40, "Delhi,India",[40,50,50]) 