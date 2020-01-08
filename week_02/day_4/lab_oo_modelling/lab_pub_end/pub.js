class Pub{

  constructor(name, till, drinks){
    this.name   = name;
    this.till   = till;
    this.drinks = drinks;
  }

  serve(customer, drink){
    if(this.customerTooYoung(customer)) return;
    if(this.customerTooDrunk(customer)) return;

    if(this.drinks.indexOf(drink) != -1){
      customer.buyDrink(drink);
      this.till += drink.price;
    }
  }

  customerTooYoung(customer) {
    return customer.age < 18;
  }

  customerTooDrunk(customer) {
    return customer.drunkenness >= 50;
  }
}

module.exports = Pub;
