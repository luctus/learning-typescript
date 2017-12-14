var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.start = function () {
        console.log("Engine start: " + this.engine);
    };
    Car.prototype.stop = function () {
        console.log("Engine stopped: " + this.engine);
    };
    Car.prototype.speed = function (finalSpeed) {
        console.log("new speed: " + (finalSpeed || 10));
    };
    return Car;
}());
window.onload = function () {
    var c = new Car("V8");
    c.start();
    c.stop();
    c.speed();
    c.speed(35);
    c.speed();
};
