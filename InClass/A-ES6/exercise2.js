class Polygon {
  constructor(height, width) {
    this.name = "Polygon";
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log('Hi, I am a ' + this.name);
  }
}

let p = new Polygon('Polygon', 300, 400);
p.sayName();
console.log('The area of this polygon is ' + p.area);


class Rectangle extends Polygon {
  constructor(height, width) {
    super(height, width);
    this.name = "Rectangle";
    this.sides = 4;
    //this.area = this.height * this.width;
  }
  get area() { return this.width * this.height; }
  sayName() {
    console.log('Hi I am a polygon and my name is ' + this.name + '.');
  }
}

let r = new Rectangle(50, 60);
r.sayName();
//r.area = 3;
console.log('The area of this polygon is ' + r.area);

//Create 2 new classes that extend from polygon: triangle and circle and log their names and areas

class Triangle extends Polygon {
  constructor(height, width) {
    super(height, width);
    this.name = "Triangle";
    this.area = (width * height) / 2;
  }
  get areaOf() {
    return this.area;

  }
  sayName() {
    console.log(`Hi I am a polygon and my name is ${this.name} `);
  }
}

let tr = new Triangle(10, 20);
tr.sayName();
console.log(`traingle area is ${tr.areaOf}`);



class Trapezoid extends Polygon {
  constructor(height, base1, base2) {
    super(height);
    this._name = "Trapezoid";
    this._base1 = base1;
    this._base2 = base2;
    this._height = height;
  }

  get areaOf() {
    return (this._base1 + this._base2) * this._height / 2;
  }

  nameOf() {
    console.log(`I am ${this._name}`);
  }
}

let trap = new Trapezoid(10, 20, 5);
trap.nameOf();
console.log(`I am Trapezoid and my area is ${trap.areaOf}`)