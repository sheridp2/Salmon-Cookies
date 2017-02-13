'use strict';

var storeOne = {
  name: firstAndPike,
  minHourlyCustomers: 23,
  maxHourlyCustomers: 64,
  averageCookiesPerHour: 6.3,
  customersPerHour: function(){
    console.log(Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers));
  }
};

var storeTwo = {
  name: seaTacAirport,
  minHourlyCustomers: 3,
  maxHourlyCustomers: 24,
  averageCookiesPerHour: 1.2,
  customersPerHour: function(){
    console.log(Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers));
  }
};

var storeThree = {
  name: seattleCenter,
  minHourlyCustomers: 11,
  maxHourlyCustomers: 38,
  averageCookiesPerHour: 3.7,
  customersPerHour: function(){
    console.log(Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers));
  }
};

var storeFour = {
  name: capitolHill,
  minHourlyCustomers: 20,
  maxHourlyCustomers: 38,
  averageCookiesPerHour: 2.3,
  customersPerHour: function(){
    console.log(Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers));
  }
};

var storeFive = {
  name: Alki,
  minHourlyCustomers: 2,
  maxHourlyCustomers: 16,
  averageCookiesPerHour: 4.6,
  customersPerHour: function(){
    console.log(Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers));
  }
};

storeOne.customersPerHour();
storeTwo.customersPerHour();
storeThree.customersPerHour();
storeFour.customersPerHour();
storeFive.customersPerHour();
