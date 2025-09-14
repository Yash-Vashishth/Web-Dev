class Rectangle{
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    area() {
        return this.length*this.breadth
    }
}

class Cuboid extends Rectangle{
    constructor(length, width, height) {
        super(length, width);
        this.height = height;
    }

    volume() {
        return this.breadth * this.length * this.height;
    }
}