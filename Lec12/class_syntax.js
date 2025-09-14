class Rectangle{
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    area() {
        return this.length * this.width;
    }

    get getLength() {
        return this.length;
    }

    get getWidth() {
        return this.width;
    }

    set setWidth(width) {
        this.width = width;
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

const r = new Rectangle(4,5);
console.log(r.area());