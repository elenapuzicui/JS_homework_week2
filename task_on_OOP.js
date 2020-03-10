class Bicycle {
    constructor(gear, speed) {
        this.gear = gear;
        this.speed = speed;
    }

    speedUp(increment) {
        let totalSpeed = "Speed up = " + (this.speed + increment) + " km/h";
        return totalSpeed;
    }

    applyBreak(decrement) {
        let breakSpeed = "When we apply break = " + (this.speed - decrement) + " km/h";
        return breakSpeed;
    }
}
    class MountainBike extends Bicycle {
        constructor(gear, speed, seatHeight) {
            super(gear,speed);
            this.seatHeight = seatHeight;
        }
    }

    class MotorBike extends Bicycle {
        constructor(gear, speed, motor){
            super(gear, speed);
            this.motor = motor;
        }
    }

    let bike = new Bicycle(2, 100);
    let motorBike = new MotorBike(3, 115, true);
    let mountainBike = new MountainBike(4, 140, true);

    console.log(bike.speedUp(25));
    console.log(motorBike.applyBreak(25));
    console.log(mountainBike.speedUp(10));
