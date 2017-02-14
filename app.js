'use strict';

var storeOne = {
  name: 'firstAndPike',
  minHourlyCustomers: 23,
  maxHourlyCustomers: 64,
  averageCookiesPerHour: 6.3,
  cookiesEachHour: [],
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
  },
  customersPerHour: function(){
    return(Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers));
  }
};
storeOne.genCookiesEachHour();
console.log(storeOne.cookiesEachHour);









var storeTwo = {
  name: 'seaTacAirport',
  minHourlyCustomers: 3,
  maxHourlyCustomers: 24,
  averageCookiesPerHour: 1.2,
  cookiesEachHour: [],
  customersPerHour: function(){
    return (Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers));
  }
};

var storeThree = {
  name: 'seattleCenter',
  minHourlyCustomers: 11,
  maxHourlyCustomers: 38,
  averageCookiesPerHour: 3.7,
  cookiesEachHour: [],
  customersPerHour: function(){
    (Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers));
  }
};

var storeFour = {
  name:'capitolHill',
  minHourlyCustomers: 20,
  maxHourlyCustomers: 38,
  averageCookiesPerHour: 2.3,
  cookiesEachHour: [],
  customersPerHour: function(){
    (Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers));
  }
};

var storeFive = {
  name: 'Alki',
  minHourlyCustomers: 2,
  maxHourlyCustomers: 16,
  averageCookiesPerHour: 4.6,
  cookiesEachHour: [],
  customersPerHour: function(){
    (Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers));
  }
};
