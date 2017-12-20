interface IRectangle {
  height: number;
  width: number;
  getArea(): number;
}

namespace Shapes {
  export class Rectangle implements IRectangle {
    constructor (public height: number, public width: number) { }
    getArea(): number { return this.height * this.width; }
  }
}

// The Rectangle class is accesible because of the "export" keyword
var r = new Shapes.Rectangle(6, 3);

// We can extend the module by writing it again
namespace Shapes {
  export class Circle {
    constructor (public radius: number) { }
  }
}

var c = new Shapes.Circle(4);
