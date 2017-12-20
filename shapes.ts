namespace Shapes {
  export class Rectangle {
    constructor (public height: number, public width: number){ }
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
