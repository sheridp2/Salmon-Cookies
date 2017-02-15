'use strict';

console.log('-------------------------Constructor-------------------');
//costructors have capitolized first letter, upper camel case;
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

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

var salesTable = document.getElementById('table');
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
    console.log(stores[i].cookiesEachHour);
  }
}

createToplabelRow();
createAllRows();

console.log('-----------------Event Listeners--------------------');

//get access to form from the DOM
var storeFormEl = document.getElementById('new-store-form');

storeFormEl.addEventListener('submit', handleSubmit);
//press submit runs function handleSubmit, false prevents event capturing

function handleSubmit(event){
  event.preventDefault(); //prevents page from reloading/send to server
  event.stopPropagation();//prevents click event on parent tags

  var storeName = event.target.cookieStoreName.value;// event=eventlistener, target=target node"storeFormEl", cookieStoreNeme node within target node, value is input of node
  var minCustomers = parseInt(event.target.minCust.value); //gets minCust value, parseInt prevents input of string
  var maxCustomers = parseInt(event.target.maxCust.value);
  var avgCookies = parseInt(event.target.avgCookies.value);

  // console.log(storeName);
  // console.log(minCustomers);
  // console.log(maxCustomers);
  // console.log(avgCookies);

  var addedStore = new CookieStore(storeName, minCustomers, maxCustomers, avgCookies);
  // console.log(store);
  stores.push(this.storeName);
  console.log(stores);
  console.log(addedStore);
  console.log('User Pressed Subit on Form!');
}
