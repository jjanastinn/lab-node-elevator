class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction  = 1;
  }

  start() {
    this.interval = setInterval(function(){update()}, 1000);
  }
  stop() {
    setTimeout(function(){
      clearInterval(this.interval); 
    }, 1);
  }
  update() {
    console.log(`${this.floor}`);
  }
  _passengersEnter() {

  }
  _passengersLeave() { 
    
  }
  floorUp() { 
    if (this.floor >= 0 && this.floor < 10 && this.direction === 1) {
      this.floor++;
    }
  }
  floorDown() { 
    if (this.floor <= 10 && this.floor > 0 && this.direction === -1) {
      this.floor--;
    }
  }
  call(person) {
    this.requests.push(person);
  }
  log() { 
    console.log('Direction ' + this.direction + '| Floor :' + this.floor);
  }
}

module.exports = Elevator;

let el = new Elevator();
el.floorUp();
el.log();

