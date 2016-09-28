'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var allOfMyStores = [];
var salesPerHour = [];
var totalSoldPerLocation = 0;

new Store('1st and Pike', 23, 65, 6.3);
new Store('Seattle Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 3, 4.6);
// var table = document.getElementById('stores');


function Store(minCustPerHour, maxCustPerHour, avgCookiesPerCust, location) {
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.location = location;
  this.hours = hours;
  this.randCustomersPerHour = [];
  this.totalCookiesSoldPerHour = [];
  this.totalDailyCookiesSold = 0;
};
this.calcRandCustomersPerHour = function(){
  for (var i = 0; i < hours.length; i++) {
    this.randCustomersPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
  }
  this.calcRandCustomersPerHour();
};
this.calctotalCookiesSoldPerHour = function(){
  for (var i = 0; i < hours.length; i++) {
    this.totalCookiesSoldPerHour.push(Math.ceil(this.randCustomersPerHour[i] * this.avgCookiesPerCust));
    this.totalDailyCookiesSold += this.totalCookiesSoldPerHour[i];
  }
  //totalCookiesSoldPerHour
};

function renderTableB() {
  var tableDataDisplay = document.getElementById('salesTable');
  for (var i = 0; i < hours.length; i++) {
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = allOfMyStores[i]; //locations here right??
    trEl.appendChild(tdEl);
      //totalCookiesSoldPerHour
    for (var j = 0; j < hours.length; j++) {
      tdEl = document.createElement('td');
      tdEl.textContent = allOfMyStores[i].totalCookiesSoldPerHour[j];
      trEl.appendChild(tdEl);
    }
    //totalDailyCookiesSold
    tdEl = document.createElement('td');
    tdEl.textContent = allOfMyStores[i].totalDailyCookiesSold[k];
    trEl.appendChild(tdEl);
  }
  //How do I call this?? With a function? Too many functions?!!!!!!
  tableDataDisplay.appendChild(trEl);
  this.calctotalCoookiesSoldPerHour();
  this.renderTable();
  allOfMyStores.push(this);
};

renderTableB();

//header: contains total cookies sold at each location
function renderTableH(){
  var tableDataDisplay = document.getElementById('salesTable');
  //a row for the business locations
  var trEl = document.createElement('tr');
  //hours
  var thEl = document.createElement('th');
  thEl.textContent = allOfMyStores[i].location; //is this right?? or should it be times??
  trEl.appendChild(thEl);
  for (var i = 0; i < hours.lengh; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    thEl.textContent = ''; //blank??
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Location Totals';
  trEl.appendChild(tdEl);
  tableDataDisplay.appendChild(trEl);
};

renderTableH();

//footer: displays the total cookies sold.
function renderTableF(){
  var tableDataDisplay = document.getElementById('salesTable');
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Total Cookies'; //is this right?? or should it be simply total??
  trEl.appendChild(tdEl);
  for (var i = 0; i < hours.lengh; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = hours[i];
    tdEl.textContent = salesPerHour[i];
    trEl.appendChild(tdEl);
  }
  tdEl.textContent = totalSoldPerLocation;
  trEl.appendChild(tdEl);
  tableDataDisplay.appendChild(trEl);
};

renderTableF();
