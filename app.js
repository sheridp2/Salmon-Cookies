'use strict';
// store one start

var storeOne = {
  name: 'firstAndPike',
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  averageCookiesPerHour: 6.3,
  cookiesEachHour: [],
  customersPerHour: function(){
    return(Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers));
  },
  genCookiesEachHour: function(){
    var simSales;
    var total = 0;
    for(var i = 6; i < 20; i++){
      var customersPerHour = this.customersPerHour();
      simSales = Math.floor(this.averageCookiesPerHour * customersPerHour);
      this.cookiesEachHour.push(simSales);
      total += simSales;
    }
    this.cookiesEachHour.push(total);
  }
};

storeOne.genCookiesEachHour();
console.log(storeOne.cookiesEachHour);

//store one end
//store two start
var storeTwo = {
  name: 'seaTacAirport',
  minHourlyCustomers: 3,
  maxHourlyCustomers: 24,
  averageCookiesPerHour: 1.2,
  cookiesEachHour: [],
  customersPerHour: function(){
    return(Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers));
  },
  genCookiesEachHour: function(){
    var simSales;
    var total = 0;
    for(var i = 6; i < 20; i++){
      var customersPerHour = this.customersPerHour();
      simSales = Math.floor(this.averageCookiesPerHour * customersPerHour);
      this.cookiesEachHour.push(simSales);
      total += simSales;
    }
    this.cookiesEachHour.push(total);
  }
};

storeTwo.genCookiesEachHour();
console.log(storeTwo.cookiesEachHour);

//store three start
var storeThree = {
  name: 'seattleCenter',
  minHourlyCustomers: 11,
  maxHourlyCustomers: 38,
  averageCookiesPerHour: 1.2,
  cookiesEachHour: [],
  customersPerHour: function(){
    return(Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers));
  },
  genCookiesEachHour: function(){
    var simSales;
    var total = 0;
    for(var i = 6; i < 20; i++){
      var customersPerHour = this.customersPerHour();
      simSales = Math.floor(this.averageCookiesPerHour * customersPerHour);
      this.cookiesEachHour.push(simSales);
      total += simSales;
    }
    this.cookiesEachHour.push(total);
  }
};

storeThree.genCookiesEachHour();
console.log(storeThree.cookiesEachHour);

var storeFour = {
  name: 'capitolHill',
  minHourlyCustomers: 20,
  maxHourlyCustomers: 38,
  averageCookiesPerHour: 2.3,
  cookiesEachHour: [],
  customersPerHour: function(){
    return(Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers));
  },
  genCookiesEachHour: function(){
    var simSales;
    var total = 0;
    for(var i = 6; i < 20; i++){
      var customersPerHour = this.customersPerHour();
      simSales = Math.floor(this.averageCookiesPerHour * customersPerHour);
      this.cookiesEachHour.push(simSales);
      total += simSales;
    }
    this.cookiesEachHour.push(total);
  }
};

storeFour.genCookiesEachHour();
console.log(storeFour.cookiesEachHour);

//store five start
var storeFive = {
  name: 'Alki',
  minHourlyCustomers: 2,
  maxHourlyCustomers: 16,
  averageCookiesPerHour: 4.6,
  cookiesEachHour: [],
  customersPerHour: function(){
    return(Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers));
  },
  genCookiesEachHour: function(){
    var simSales;
    var total = 0;
    for(var i = 6; i < 20; i++){
      var customersPerHour = this.customersPerHour();
      simSales = Math.floor(this.averageCookiesPerHour * customersPerHour);
      this.cookiesEachHour.push(simSales);
      total += simSales;
    }
    this.cookiesEachHour.push(total);
  }
};

storeFive.genCookiesEachHour();
console.log(storeFive.cookiesEachHour);
//store five end
