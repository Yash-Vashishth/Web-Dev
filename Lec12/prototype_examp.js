function Rectangle(length, breadth) {
    this.length = length;
    this.breadth = breadth;

}

Rectangle.prototype.area = () => {
    return this.length * this.breadth;
}
function Cuboid(length, breadth, height) {
    Rectangle.call(this, length, breadth);
    this.height = height;
}

Cuboid.prototype.volume = () => {
    return this.length * this.breadth * this.height;
}

const r1 = new Rectangle(40, 20);
console.log(r1);


Cuboid.prototype = Object.create(Rectangle.prototype);