'use strict';
// store one start
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'];

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
//store two end
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
//store three end
//store four start
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
//store four end
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

//start of list creation on page
for(var i = 0; i < storeHours.length; i++){
  var userElement = document.createElement('li'); //Step 1
//userElement =<li></li>
  userElement.setAttribute('id', 'time'); //Step 2
  //userElement = <li id = "time"></li>
  userElement.textContent = storeHours[i];
  var sectionEl = document.getElementById('list1');
  sectionEl.appendChild(userElement); //step 3
}

for(var i = 0; i < storeHours.length; i++) {
  var userElement = document.createElement('li');
  userElement.setAttribute('id', 'StoreOne');
  userElement.textContent = storeOne.cookiesEachHour[i];
  var sectionEl = document.getElementById('list2');
  sectionEl.appendChild(userElement); //step 3
}

for(var i = 0; i < storeHours.length; i++) {
  var userElement = document.createElement('li');
  userElement.setAttribute('id', 'StoreTwo');
  userElement.textContent = storeTwo.cookiesEachHour[i];
  var sectionEl = document.getElementById('list3');
  sectionEl.appendChild(userElement); //step 3
}

for(var i = 0; i < storeHours.length; i++) {
  var userElement = document.createElement('li');
  userElement.setAttribute('id', 'StoreThree');
  userElement.textContent = storeThree.cookiesEachHour[i];
  var sectionEl = document.getElementById('list4');
  sectionEl.appendChild(userElement); //step 3
}
for(var i = 0; i < storeHours.length; i++) {
  var userElement = document.createElement('li');
  userElement.setAttribute('id', 'StoreFour');
  userElement.textContent = storeFour.cookiesEachHour[i];
  var sectionEl = document.getElementById('list5');
  sectionEl.appendChild(userElement); //step 3
}
for(var i = 0; i < storeHours.length; i++) {
  var userElement = document.createElement('li');
  userElement.setAttribute('id', 'StoreFive');
  userElement.textContent = storeFive.cookiesEachHour[i];
  var sectionEl = document.getElementById('list6');
  sectionEl.appendChild(userElement); //step 3
}
