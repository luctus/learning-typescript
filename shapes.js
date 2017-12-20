"use strict";
var Shapes;
(function (Shapes) {
    var Rectangle = (function () {
        function Rectangle(height, width) {
            this.height = height;
            this.width = width;
        }
        return Rectangle;
    }());
    Shapes.Rectangle = Rectangle;
})(Shapes || (Shapes = {}));
var r = new Shapes.Rectangle(6, 3);
(function (Shapes) {
    var Circle = (function () {
        function Circle(radius) {
            this.radius = radius;
        }
        return Circle;
    }());
    Shapes.Circle = Circle;
})(Shapes || (Shapes = {}));
var c = new Shapes.Circle(4);
