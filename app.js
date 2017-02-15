// 'use strict';
//
// // store one start
// var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];
//
// var storeOne = {
//   name: 'firstAndPike',
//   minHourlyCustomers: 23,
//   maxHourlyCustomers: 65,
//   averageCookiesPerHour: 6.3,
//   cookiesEachHour: [],
//   customersPerHour: function(){
//     return(Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers));
//   },
//   genCookiesEachHour: function(){
//     var simSales;
//     var total = 0;
//     for(var i = 6; i < 21; i++){
//       var customersPerHour = this.customersPerHour();
//       simSales = Math.floor(this.averageCookiesPerHour * customersPerHour);
//       this.cookiesEachHour.push(simSales);
//       total += simSales;
//     }
//     this.cookiesEachHour.push(total);
//   }
// };
// storeOne.genCookiesEachHour();
// console.log(storeOne.cookiesEachHour);
// //store one end
//
// //store two start
// var storeTwo = {
//   name: 'seaTacAirport',
//   minHourlyCustomers: 3,
//   maxHourlyCustomers: 24,
//   averageCookiesPerHour: 1.2,
//   cookiesEachHour: [],
//   customersPerHour: function(){
//     return(Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers));
//   },
//   genCookiesEachHour: function(){
//     var simSales;
//     var total = 0;
//     for(var i = 6; i < 21; i++){
//       var customersPerHour = this.customersPerHour();
//       simSales = Math.floor(this.averageCookiesPerHour * customersPerHour);
//       this.cookiesEachHour.push(simSales);
//       total += simSales;
//     }
//     this.cookiesEachHour.push(total);
//   }
// };
//
// storeTwo.genCookiesEachHour();
// console.log(storeTwo.cookiesEachHour);
// //store two end
//
// //store three start
// var storeThree = {
//   name: 'seattleCenter',
//   minHourlyCustomers: 11,
//   maxHourlyCustomers: 38,
//   averageCookiesPerHour: 1.2,
//   cookiesEachHour: [],
//   customersPerHour: function(){
//     return(Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers));
//   },
//   genCookiesEachHour: function(){
//     var simSales;
//     var total = 0;
//     for(var i = 6; i < 21; i++){
//       var customersPerHour = this.customersPerHour();
//       simSales = Math.floor(this.averageCookiesPerHour * customersPerHour);
//       this.cookiesEachHour.push(simSales);
//       total += simSales;
//     }
//     this.cookiesEachHour.push(total);
//   }
// };
//
// storeThree.genCookiesEachHour();
// console.log(storeThree.cookiesEachHour);
// //store three end
//
// //store four start
// var storeFour = {
//   name: 'capitolHill',
//   minHourlyCustomers: 20,
//   maxHourlyCustomers: 38,
//   averageCookiesPerHour: 2.3,
//   cookiesEachHour: [],
//   customersPerHour: function(){
//     return(Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers));
//   },
//   genCookiesEachHour: function(){
//     var simSales;
//     var total = 0;
//     for(var i = 6; i < 21; i++){
//       var customersPerHour = this.customersPerHour();
//       simSales = Math.floor(this.averageCookiesPerHour * customersPerHour);
//       this.cookiesEachHour.push(simSales);
//       total += simSales;
//     }
//     this.cookiesEachHour.push(total);
//   }
// };
// storeFour.genCookiesEachHour();
// console.log(storeFour.cookiesEachHour);
// //store four end
//
// //store five start
// var storeFive = {
//   name: 'Alki',
//   minHourlyCustomers: 2,
//   maxHourlyCustomers: 16,
//   averageCookiesPerHour: 4.6,
//   cookiesEachHour: [],
//   customersPerHour: function(){
//     return(Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers));
//   },
//   genCookiesEachHour: function(){
//     var simSales;
//     var total = 0;
//     for(var i = 6; i < 21; i++){
//       var customersPerHour = this.customersPerHour();
//       simSales = Math.floor(this.averageCookiesPerHour * customersPerHour);
//       this.cookiesEachHour.push(simSales);
//       total += simSales;
//     }
//     this.cookiesEachHour.push(total);
//   }
// };
//
// storeFive.genCookiesEachHour();
// console.log(storeFive.cookiesEachHour);
// //store five end
//
// //start of list creation on page
// for(var i = 0; i < storeHours.length; i++){
//   var userElement = document.createElement('li'); //Step 1
//   userElement.setAttribute('id', 'time'); //Step 2
//   userElement.textContent = storeHours[i];
//   var sectionEl = document.getElementById('list1');
//   sectionEl.appendChild(userElement); //step 3
// }
//
// for(var i = 0; i < storeHours.length; i++) {
//   var userElement = document.createElement('li');
//   userElement.setAttribute('id', 'StoreOne');
//   userElement.textContent = storeOne.cookiesEachHour[i];
//   var sectionEl = document.getElementById('list2');
//   sectionEl.appendChild(userElement);
// }
//
// for(var i = 0; i < storeHours.length; i++) {
//   var userElement = document.createElement('li');
//   userElement.setAttribute('id', 'StoreTwo');
//   userElement.textContent = storeTwo.cookiesEachHour[i];
//   var sectionEl = document.getElementById('list3');
//   sectionEl.appendChild(userElement);
// }
//
// for(var i = 0; i < storeHours.length; i++) {
//   var userElement = document.createElement('li');
//   userElement.setAttribute('id', 'StoreThree');
//   userElement.textContent = storeThree.cookiesEachHour[i];
//   var sectionEl = document.getElementById('list4');
//   sectionEl.appendChild(userElement);
// }
// for(var i = 0; i < storeHours.length; i++) {
//   var userElement = document.createElement('li');
//   userElement.setAttribute('id', 'StoreFour');
//   userElement.textContent = storeFour.cookiesEachHour[i];
//   var sectionEl = document.getElementById('list5');
//   sectionEl.appendChild(userElement);
// }
// for(var i = 0; i < storeHours.length; i++) {
//   var userElement = document.createElement('li');
//   userElement.setAttribute('id', 'StoreFive');
//   userElement.textContent = storeFive.cookiesEachHour[i];
//   var sectionEl = document.getElementById('list6');
//   sectionEl.appendChild(userElement);
// }

console.log('-------------------------Constructor-------------------');
//costructors have capitolized first letter, upper camel case;
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var salesTable = document.getElementById('table');

function CookieStore(name, minCustomers, maxCustomers, avgCookies, hourlyCookies){
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  this.hourlyCookies = [];
}
//calc random number
CookieStore.prototype.cookiesHour = function() {
  return(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers));
};
//creating an array for all times
CookieStore.prototype.cookiesEachHour = function(){
  for(var i = 0; i < storeHours.length; i++){
    var sales = Math.floor(this.cookiesHour() * this.avgCookies);
    this.hourlyCookies.push(sales);
    console.log(sales);
  }
};
//add method to CookieStore that adds rows for each store
CookieStore.prototype.createRow = function(){
  this.cookiesEachHour();
  var storeRowEl = document.createElement('tr');
  salesTable.appendChild(storeRowEl);

  var storeNameEl = document.createElement('th');
  storeNameEl.textContent = this.name;
  storeRowEl.appendChild(storeNameEl);
  console.log('got here 1');
  for(var i = 0; i < this.hourlyCookies.length; i++){
    console.log('got here 2');
    var hourlySalesEl = document.createElement('td');
    hourlySalesEl.textContent = this.hourlyCookies[i];
    storeRowEl.appendChild(hourlySalesEl);
  }
};

var pikePlace = new CookieStore('Pike Place', 23, 65, 6.3);
var seaTac = new CookieStore('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new CookieStore('Seattle Center', 11, 38, 3.7);
var capitolHill = new CookieStore('Capitol Hill', 20, 38, 2.3);
var alki = new CookieStore('Alki', 2, 16, 4.6);

var stores = [pikePlace, seaTac, seattleCenter, capitolHill, alki];
//make table

function createToplabelRow(){
  var labelRowEl = document.createElement('tr');
  salesTable.appendChild(labelRowEl);

  var rowHeaderEmptyEl = document.createElement('th');
  rowHeaderEmptyEl.textContent = 'Hours';
  labelRowEl.appendChild(rowHeaderEmptyEl);

  for(var i = 0; i < storeHours.length; i++ ){
    var hourOpenEl = document.createElement('th');
    hourOpenEl.textContent = storeHours[i];
    labelRowEl.appendChild(hourOpenEl);
  }
}
function createAllRows() {
  for(var i = 0; i < stores.length; i++){
    stores[i].createRow();
  }
}
// function createCookieRows(){
//   cookieRowEl = document.createElement('tr');
//   salesTable.appendChild(cookieRowEl);
//
//   for(var i = 0; i < stores.length; i++){
//     var labelStoreName = document.createElement('td');
//     labelStoreName.textContent = this.name;
//     cookieRowEl.appendChild(labelStoreName);
//   }
// }

// var tableEl = document.createElement('table');
// console.log(tableEl);
// var sectionEl = document.getElementById ('CookieTable');
// sectionEl.appendChild(tableEl);
//
// CookieStore.prototype.createHourlySalesRow = function(tableToDrawInto){
//   var hourlySalesRowEl = document.createElement('tr');
//   var hourlySalesHeaderEl = document.createElement('th');
//   hourlySalesHeaderEl.textContent = this.name;
//   hourlySalesRowEl.appendChild(hourlySalesHeaderEl);
//
//   for (var i = 0; i < this.hourlyCookies.length; i++){
//     var hourlySaleFigureEl = document.createElement('td');
//     hourlySaleFigureEl.textContent = this.hourlyCookies[i];
//     hourlySalesRowEl.appendChild(hourlySaleFigureEl);
//   }
//   tableToDrawInto.appendChild(hourlySalesRowEl);
// };
//
// stores[0].createHourlySalesRow(tableEl);
// stores[1].createHourlySalesRow(tableEl);
// stores[2].createHourlySalesRow(tableEl);
// stores[3].createHourlySalesRow(tableEl);
// stores[4].createHourlySalesRow(tableEl);
// var tableEl = document.createElement('table');
//
// for(var i = 0; i < stores.length; i++){
//   var currentStores = stores[i];
//
//   var rowEl = document.createElement('tr');
//   tableEl.appendChild(rowEl);
//
//   var nameEl = document.createElement('th');
//   nameEl.textContent = currentStores.name;
//   rowEl.appendChild(nameEl);
//
//   var minCustEl = document.createElement('td');
//   minCustEl.textContent = currentStores.minCustomers;
//   rowEl.appendChild(minCustEl);
//
//   var maxCustEl = document.createElement('td');
//   maxCustEl.textContent = currentStores.maxCustomers;
//   rowEl.appendChild(maxCustEl);
//
//   var avgCookiesEl = document.createElement('td');
//   avgCookiesEl.textContent = currentStores.avgCookies;
//   rowEl.appendChild(avgCookiesEl);
// }
//
// document.body.appendChild(tableEl);

createToplabelRow();
createAllRows();
