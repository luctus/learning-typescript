"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Engine = /** @class */ (function () {
    function Engine(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
    }
    Engine.prototype.print = function () {
        console.log(this.horsePower + " - " + this.engineType);
    };
    return Engine;
}());
var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
        console.log("Car created");
        engine.print();
    }
    Object.defineProperty(Car.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        set: function (value) {
            if (value == undefined)
                throw 'Supply an Engine!';
            this._engine = value;
            console.log("New engine");
            value.print();
        },
        enumerable: true,
        configurable: true
    });
    Car.prototype.start = function () {
        console.log("Engine started");
    };
    Car.prototype.stop = function () {
        console.log("Engine stopped");
    };
    Car.prototype.speed = function (finalSpeed) {
        console.log("new speed: " + (finalSpeed || 10));
    };
    return Car;
}());
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(engine, fourByFour) {
        var _this = _super.call(this, engine) || this;
        _this.fourByFour = fourByFour;
        return _this;
    }
    return Truck;
}(Car));
window.onload = function () {
    var e = new Engine(2500, "V8");
    var c = new Car(e);
    c.start();
    c.stop();
    c.speed();
    c.speed(35);
    c.speed();
    var e2 = new Engine(1500, "V7");
    c.engine = e2;
};
