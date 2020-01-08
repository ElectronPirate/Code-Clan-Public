myFunctions = {

  getName(shop) {
    return shop.name;
  },

  getTotalCash(shop) {
    return shop.admin.totalCash;
  },

  addOrRemoveCash(shop, amount) {
    shop.admin.totalCash += amount;
  },

  getPetsSold(shop) {
    return shop.admin.petsSold;
  },

  increasePetsSold(shop, num) {
    shop.admin.petsSold += num;
  },

  getStockCount(shop) {
    return shop.pets.length;
  },

  getPetsByBreed(shop, breed) {
    var count = 0;

    for(let pet of shop.pets){
      if(pet.breed === breed ){
        count++;
      }
    }

    return count;
  },

  getPetByName(shop, name) {
    for(let pet of shop.pets){
      if(pet.name === name ){
        return pet;
      }
    }
  },

  removePetByName(shop, name) {
    for (var i = shop.pets.length-1; i >= 0; i--) {
      if(shop.pets[i].name === name){
        shop.pets.splice(i, 1);
      }
    }
  },

  addPetToStock(shop, newPet) {
    shop.pets.push(newPet);
  },

  getCustomersCash(customer) {
    return customer.cash;
  },

  getCustomersCashTotal(customers) {
    var total = 0;
    for (let c of customers) {
      total += c.cash;
    }
    return total;
  },

  removeCustomerCash(customer, amount) {
    customer.cash -= amount;
  },

  getCustomerPetCount(customer) {
    return customer.pets.length;
  },

  addPetToCustomer(customer, pet) {
    customer.pets.push(pet);
  },

  customerCanAffordPet(customer, pet) {
    return customer.cash >= pet.price;
  },

  sellPetToCustomer(shop, pet, customer) {
    if(!pet) return;
    if(!myFunctions.customerCanAffordPet(customer, pet)) return;

    myFunctions.addPetToCustomer(customer, pet);
    myFunctions.addOrRemoveCash(shop, pet.price);
    myFunctions.removeCustomerCash(customer, pet.price);
    myFunctions.removePetByName(shop, pet.name);
    myFunctions.increasePetsSold(shop, 1);
  }


};

module.exports = myFunctions;
