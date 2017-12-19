class Engine{
  constructor(public horsePower: number, public engineType: string) { }
  print(): void {
    console.log(this.horsePower + " - " + this.engineType);
  }
  start(callback: (startStatus: boolean, engineType: string) => void) {
    window.setTimeout(() => {
      callback(true, this.engineType);
    }, 2000);
  }
}

class Car{

  private _engine: Engine;

  constructor(engine: Engine){
    this.engine = engine;
    console.log("Car created");
    engine.print();
  }

  get engine(): Engine {
    return this._engine;
  }

  set engine(value: Engine) {
    if ( value == undefined ) throw 'Supply an Engine!';
    this._engine = value;
    console.log("New engine");
    value.print();
  }

  start(){
    console.log("Engine started");
  }
  stop(){
    console.log("Engine stopped");
  }
  speed(finalSpeed?: number): void {
    console.log("new speed: " + (finalSpeed || 10));
  }
}

class Truck extends Car {
  fourByFour: boolean;

  constructor(engine: Engine, fourByFour: boolean){
    super(engine);
    this.fourByFour = fourByFour;
  }

}

window.onload = function() {
  var e = new Engine(2500, "V8");
  var c = new Car(e);
  c.start();
  c.stop();
  c.speed();
  c.speed(35);
  c.speed();


  var e2 = new Engine(1500, "V7");
  c.engine = e2;

  var e3 = new Engine(2900, "V8");
  var t = new Truck(e3, true);
  t.start();
  t.engine.start((status: boolean, engineType: string) => {
    if(status){
      console.log("Engine directly started for " + engineType);
    } else {
      console.log("Engine directly could not be started for " + engineType);
    }
  });
}
