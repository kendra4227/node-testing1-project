/**
 * [Exercise 1] trimProperties copies an object trimming its properties
 * @param {object} obj - an object with properties that are strings
 * @returns {object} - a copy of the object with strings trimmed
 *
 * EXAMPLE
 * trimProperties({ name: '  jane  ' }) // returns a new object { name: 'jane' }
 */
function trimProperties(obj) {
  // ✨ implement
  const newObj = {...obj};
  const keys = Object.keys(newObj);
  keys.forEach(key =>{
    newObj[key] = newObj[key].trim()
  });
  return newObj;
  
}

/**
 * [Exercise 2] trimPropertiesMutation trims in place the properties of an object
 * @param {object} obj - an object with properties that are strings
 * @returns {object} - the same object with strings trimmed
 *
 * EXAMPLE
 * trimPropertiesMutation({ name: '  jane  ' }) // returns the object mutated in place { name: 'jane' }
 */
function trimPropertiesMutation(obj) {
  // ✨ implement
  const keys = Object.keys(obj);
  keys.forEach(key =>{
    object[key] = obj[key].trim();
  })
  return obj;
}

/**
 * [Exercise 3] findLargestInteger finds the largest integer in an array of objects { integer: 1 }
 * @param {object[]} integers - an array of objects
 * @returns {number} - the largest integer
 *
 * EXAMPLE
 * findLargestInteger([{ integer: 1 }, { integer: 3 }, { integer: 2 }]) // returns 3
 */
function findLargestInteger(integers) {
  // ✨ implement
  const largestInt = integers.reduce((highNum, currentNumObj) => {
    return Math.max(highNum, currentNumObj.integer);
  }, integers[0].integer);
  return largestInt;
}

class Counter {
  /**
   * [Exercise 4A] Counter creates a counter
   * @param {number} initialNumber - the initial state of the count
   */
  constructor(initialNumber) {
    // ✨ initialize whatever properties are needed

      this.initialNumber = initialNumber;
      this.count = initialNumber + 1;
    }
  
    
    }
  
  
  /**
   * [Exercise 4B] Counter.prototype.countDown counts down to zero
   * @returns {number} - the next count, does not go below zero
   *
   * EXAMPLE
   * const counter = new Counter(3)
   * counter.countDown() // returns 3
   * counter.countDown() // returns 2
   * counter.countDown() // returns 1
   * counter.countDown() // returns 0
   * counter.countDown() // returns 0
   */
  countDown() {
    if (this.count > this.initialNumber) {
      this.count--;
      return this.count
    } else if (this.count > 0) {
      this.count--;
      return this.count;
    } else {
      return 0;
    }
  }
  
    next() {
      switch(this.season) {
        case 'spring':
          this.season = 'summer';
          break;
        case 'summer':
          this.season = 'fall';
          break;
        case 'fall':
          this.season = 'winter';
          break;
        case 'winter':
          this.season = 'spring';
          break;
        default:
          console.log('something went wrong in seasons.next');
      }
      return this.season;
    }
  
    
      
    
  


class Car {
  /**
   * [Exercise 6A] Car creates a car object
   * @param {string} name - the name of the car
   * @param {number} tankSize - capacity of the gas tank in gallons
   * @param {number} mpg - miles the car can drive per gallon of gas
   */
  constructor(name, tankSize, mpg) {
    this.odometer = 0 // car initilizes with zero miles
    this.tank = tankSize // car initiazes full of gas
    this.mpg = mpg;
    this.name = name;
    this.milesToEmpty = tankSize * mpg;

    // ✨ initialize whatever other properties are needed
  }

  /**
   * [Exercise 6B] Car.prototype.drive adds miles to the odometer and consumes fuel according to mpg
   * @param {string} distance - the distance we want the car to drive
   * @returns {number} - the updated odometer value
   *
   * EXAMPLE
   * const focus = new Car('focus', 20, 30)
   * focus.drive(100) // returns 100
   * focus.drive(100) // returns 200
   * focus.drive(100) // returns 300
   * focus.drive(200) // returns 500
   * focus.drive(200) // returns 600 (ran out of gas after 100 miles)
   */
  drive(distance) {
    if (this.milesToEmpty > 0 && this.milesToEmpty >= distance) {
      this.odometer += distance;
      this.milesToEmpty -= distance;
      this.tank = this.milesToEmpty / this.mpg;
    } else if (this.milesToEmpty > 0 && this.milesToEmpty < distance) {
      this.odometer += this.milesToEmpty;
      this.milesToEmpty = 0;
      this.tank = 0;
    } else {
      console.log("The car is out of gas");
    }
    return this.odometer;
  }

  /**
   * [Exercise 6C] Adds gallons to the tank
   * @param {number} gallons - the gallons of fuel we want to put in the tank
   * @returns {number} - the miles that can be driven after refueling
   *
   * EXAMPLE
   * const focus = new Car('focus', 20, 30)
   * focus.drive(600) // returns 600
   * focus.drive(1) // returns 600 (no distance driven as tank is empty)
   * focus.refuel(99) // returns 600 (tank only holds 20)
   */
  refuel(gallons) {
    if (gallons < 0) {
      return "Invalid amount of gas"
    } else if (gallons > this.tankSize || gallons > (this.tankSize - this.tank)) {
      this.tank = this.tankSize;
      this.milesToEmpty = this.tank * this.mpg;
    } else {
      this.tank += gallons;
      this.milesToEmpty = this.tank * this.mpg;
    }
    return this.milesToEmpty;
  }
  }


/**
 * [Exercise 7] Asynchronously resolves whether a number is even
 * @param {number} number - the number to test for evenness
 * @returns {promise} - resolves true if number even, false otherwise
 *
 * EXAMPLE
 * isEvenNumberAsync(2).then(result => {
 *    // result is true
 * })
 * isEvenNumberAsync(3).then(result => {
 *    // result is false
 * })
 * isEvenNumberAsync('foo').catch(error => {
 *    // error.message is "number must be a number"
 * })
 * isEvenNumberAsync(NaN).catch(error => {
 *    // error.message is "number must be a number"
 * })
 */
function isEvenNumberAsync(number) {
  const type = typeof number;
  const error = {};
  if (type !== "number" || isNaN(number)) {
    error.message = 'number must be a number';
    throw error;
  } else {
    const result = (number % 2  === 0) ? true : false;
    return result;
  }
}

isEvenNumberAsync(NaN)
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error.message);
  })


module.exports = {
  trimProperties,
  trimPropertiesMutation,
  findLargestInteger,
  isEvenNumberAsync,
  Counter,
  Seasons,
  Car,
}
