class Car{
  engine: string;
  constructor(engine: string){
    this.engine = engine;
  }
  start(){
    console.log("Engine start: " + this.engine);
  }
  stop(){
    console.log("Engine stopped: " + this.engine);
  }
}

window.onload = function() {
  var c = new Car("V8");
  c.start();
  c.stop();
}
