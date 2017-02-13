'use strict';

var firstAndPike = {
  minHourlyCustomers: 23,
  maxHourlyCustomers: 64,
  averageCookiesPerHour: 6.3,
  customersPerHour: function(){
    console.log(Math.random() * (maxHourlyCustomers - minHourlyCustomers) + minHourlyCustomers);
  }
};
