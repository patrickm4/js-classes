class Rectangle {
    // Setup object
    constructor (_width, _height, _color) {
        console.log("the rectangle is being created!");

        // instance properties
        this.width = _width;
        this.height = _height;
        this.color = _color;
    }

    getArea () {
        return this.width * this.height
    }

    printDescription () {
        console.log(`I am a rectangle of ${this.width} x ${this.height} and I am ${this.color}`)
    }
}

let myRectangle1 = new Rectangle(5, 3, "blue")
let myRectangle2 = new Rectangle(10, 5, "red")


// console.log(myRectangle1.getArea())
myRectangle2.printDescription()