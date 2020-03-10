/* Choose a topic/theme that you are interested in.
For example Movies, Cars, Music, Sports etc.
 */

function Bicycle (gear, speed) {
    this.gear = gear;
    this.speed = speed;
}

Bicycle.prototype.speedUp = function (increment) {
    var totalSpeed = "Speed up = " + (this.speed + increment) + " km/h";
    return totalSpeed;
}

Bicycle.prototype.applyBreak = function (decrement) {
    var breakSpeed = "When we apply break = " + (this.speed - decrement) + " km/h";
    return breakSpeed;
}

function MountainBike (gear, speed, seatHeight) {
    Bicycle.call(this, gear, speed);
    this.seatHeight = seatHeight;
}

function MotorBike (gear, speed, motor) {
    Bicycle.call(this, gear, speed);
    this.motor = motor;
}

Object.setPrototypeOf(MotorBike.prototype, Bicycle.prototype);
Object.setPrototypeOf(MountainBike.prototype, Bicycle.prototype);

const motob = new MotorBike(5, 150);
console.log(motob.speedUp(75));
console.log(motob.applyBreak(40));

const mb = new MountainBike(3, 100, 25);
console.log(mb.speedUp(25));
console.log(mb.applyBreak(35));
console.log(mb.hasOwnProperty('name'));
console.log(mb.valueOf());

const simpleBike = new Bicycle(2,85);
console.log(simpleBike.speedUp(20));
console.log(motob.applyBreak(15));