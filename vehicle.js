class Vehicle {
    move() {
        console.log("Kendaran bergerak");
    }
}

class Car extends Vehicle {
    move() {
        console.log("Mobil berjalan di jalan raya");
    }
}

class Boat extends Vehicle {
    move() {
        console.log("Kapal berlayar di laut");
    }
}

const vehicle = new Vehicle();
vehicle.move();

const car = new Car();
vehicle.car

const boat = new Boat();
vehicle.boat