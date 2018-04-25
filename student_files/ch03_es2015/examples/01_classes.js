console.log('------------------------');
console.log('------01_classes.js-----');
//-----------------------------------
//  Constructor / Prototype Version

function Person0(name, age) {
    this.name = name;
    this.age = age;
}

Person0.prototype = {
    sayName: function() { return this.name; },

    getAgeInDays: function(age=0) {
        let ageInDays = 365 * (this.age || age);
        console.log('Age in days: ' + ageInDays);
    }
};

let p0 = new Person0('Teresa', 'Miller');



//--------------------------------

class Person {

}

let p = new Person();



//-----------------------------------------------------------------------------
// Providing a constructor
//
class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let p2 = new Person2('Sally', 41);




//-----------------------------------------------------------------------------
// Adding Methods and viewing the prototype
//
class Person3 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayName() { return this.name; }
    getAgeInDays(age=0) {
        let ageInDays = 365 * (this.age || age);
        console.log('Age in days: ' + ageInDays);
    }
}

let p3 = new Person3('Jennifer', 28);
console.log(p3.sayName());
p3.getAgeInDays();
Person3.prototype.getAgeInDays(50);


//--------------------------------------------------------------
// Extension - super must be called in order to use the this ref
//
class Worker extends Person {
    constructor(name, age, company) {
        super(name, age);
        this.company = company;
    }
}

let w4 = new Worker('Bob', 37, 'Google');
console.log(w4.company);


//--------------------------------------------------------------
// Overriding Methods
//
class Worker2 extends Person3 {
    constructor(name, age, company) {
        super(name, age);
        this.company = company;
    }

    sayName() {
        return 'Worker: ' + super.sayName();
    }
}

let w5 = new Worker2('Bob', 37, 'Google');
console.log(w5.sayName());



//---------------------------------------------------------------
// Static Methods and Class Variables
//
class RaceCar {
    static getMaxSpeed() {
        return RaceCar.maxSpeed;
    }
}
RaceCar.maxSpeed = 300;

class IndyCar extends RaceCar {
    getSpeed() {
        console.log(RaceCar.maxSpeed);
        console.log(IndyCar.maxSpeed);
        console.log(this.constructor.maxSpeed);
        console.log(this.maxSpeed);                 // this is undefined, maxSpeed is not on the prototype
    }
}

let car = new IndyCar();
console.log(car.constructor.maxSpeed);
console.log(RaceCar.getMaxSpeed());
car.getSpeed();


//---------------------------------------------------------------
// Extending Built-in Types
//
class FillArray extends Array {
    constructor(size, value){ super(size); this.fill(value); }
}
let arr = new FillArray(3, 7);
console.log(arr);