'use strict';
class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  //prototypes
  calAge() {
    console.log(2037 - this.birthYear);
  }
}

const jonas = new Person('Jonas', 1991);
console.log(jonas);

const matilda = new Person('Matilda', 2017);
const jack = new Person('jack', 1975);
console.log(matilda, jack);

jonas.calAge();

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`The ${this.make} is going at ${this.speed}km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`The ${this.make} is going at ${this.speed}km/h`);
  }
}

const BMW = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

BMW.accelerate();
BMW.accelerate();
BMW.accelerate();
BMW.brake();
car2.accelerate();

const account = {
  owner: 'jonas',
  movments: [200, 530, 120, 300],

  get latest() {
    return this.movments.slice(-1).pop();
  },
  set latest(mov) {
    this.movments.push(mov);
  },
};

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`The ${this.make} is going at ${this.speed}km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`The ${this.make} is going at ${this.speed}km/h`);
  }

  get speedUs() {
    this.speed / 1.6;
  }

  set speedUs(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('ford', 120);
console.log(ford.speedUs);
ford.accelerate();
ford.brake();
ford.accelerate();
ford.speedUs = 50;
console.log(ford);

const Car23 = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car23.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`The ${this.make} is going at ${this.speed}km/h`);
};
Car23.prototype.brake = function () {
  this.speed -= 5;
  console.log(`The ${this.make} is going at ${this.speed}km/h`);
};

const EV = function (make, speed, charge) {
  Car23.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car23.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);

class StudentCl extends Person {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }
}

class Account {
  constructor(owner, currency, pin, movments) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    this._movments = [];
    this.locale = navigator.language;
    console.log(`Thanks for opening an account ${owner}`);
  }
  deposit(val) {
    this.movments.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }
  _approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan aprroved');
    }
  }
}

const acc1 = new Account('jonas', 'Eur', 1111);
acc1.deposit(250);
acc1.withdraw(140);
console.log(acc1);
