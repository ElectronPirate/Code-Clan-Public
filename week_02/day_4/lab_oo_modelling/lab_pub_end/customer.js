class Customer{
  constructor(name, wallet, age, drunkenness){
    this.name        = name;
    this.wallet      = wallet;
    this.age         = age;
    this.drunkenness = drunkenness;
  }

  buyDrink(drink){
    if(this.sufficientFunds(drink)){
      this.wallet -= drink.price;
      this.drunkenness += drink.alcoholLevel;
    }
  }

  sufficientFunds(item){
    return this.wallet >= item.price;
  }

}

module.exports = Customer;
