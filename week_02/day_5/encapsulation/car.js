class Car {

  constructor() {
    let milesDriven = 0;

    this.drive = function(distance){
      milesDriven += distance;
    },

    this.getMilesDriven = function(){
      return milesDriven;
    }
  }
}

const tesla = new Car();
tesla.drive(10);
console.log(tesla.getMilesDriven()); // 10
console.log(tesla.milesDriven); // Invalid. Undefined.
