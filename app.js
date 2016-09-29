'use strict';
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var allLocations = [];
var tableDataDisplay = document.getElementById('salesDataTable');

// var table = document.getElementById('stores');
function Store(locationName, minCustPerHour, maxCustPerHour, avgCookiesPerCust) {
  this.locationName = locationName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.randCustomersPerHour = [];
  this.totalCookiesSoldPerHour = [];
  this.totalDailyCookiesSold = 0;
  this.calcRandCustomersPerHour = function(){
    for (var i = 0; i < hours.length; i++) {
      this.randCustomersPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    }
  };
  this.calctotalCookiesSoldPerHour = function(){
    this.calcRandCustomersPerHour();
    for (var i = 0; i < hours.length; i++) {
      this.totalCookiesSoldPerHour.push(Math.ceil(this.randCustomersPerHour[i] * this.avgCookiesPerCust));
      this.totalDailyCookiesSold += this.totalCookiesSoldPerHour[i];
    }
  };
  this.render = function() {
    this.calctotalCookiesSoldPerHour();

    var rowElement = document.createElement('tr');

    var dataCell = document.createElement('td');
    dataCell.textContent = this.locationName;
    rowElement.appendChild(dataCell);

    for (var i = 0; i < hours.length; i++) {
      dataCell = document.createElement('td');
      dataCell.textContent = this.totalCookiesSoldPerHour[i];
      rowElement.appendChild(dataCell);
    }

    dataCell = document.createElement('td');
    dataCell.textContent = this.totalDailyCookiesSold;
    rowElement.appendChild(dataCell);

    salesDataTable.appendChild(rowElement);
  };

  allLocations.push(this);
};

function makeHeaderRow() {
  var rowElement = document.createElement('tr');

  var headerCell = document.createElement('th');// far left cells
  headerCell.textContent = '' ;
  rowElement.appendChild(headerCell);

  for (var i = 0; i < hours.length; i++) { // middle cells
    var headerCell = document.createElement('th');
    headerCell.textContent = hours[i];
    rowElement.appendChild(headerCell);
  }

  var dataCell = document.createElement('td'); //far right cells
  dataCell.textContent = 'totals';
  rowElement.appendChild(dataCell);

  salesDataTable.appendChild(rowElement);
};

function renderAllLocations() {
  for (var i = 0; i < allLocations.length; i++) {
    allLocations[i].render();
  }
};

function makeFooterRow() {
  var rowElement = document.createElement('tr');

  var headerCell = document.createElement('th');// far left cells
  headerCell.textContent = 'Hourly Totals';
  rowElement.appendChild(headerCell);

  var dailyTotalAllLocations = 0;
  for (var i = 0; i < hours.length; i++) {
    var total = 0;
    for (var j = 0; j < allLocations.length; j++) {
      total += allLocations[j].totalCookiesSoldPerHour[i];
    }
    headerCell = document.createElement('th');
    headerCell.textContent = total;
    rowElement.appendChild(headerCell);
    dailyTotalAllLocations += total;
  }
  headerCell = document.createElement('th'); //far right cells
  headerCell.textContent = dailyTotalAllLocations;
  rowElement.appendChild(headerCell);

  salesDataTable.appendChild(rowElement);
};

new Store('1st and Pike', 23, 65, 6.3);
new Store('Seattle Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 3, 4.6);

makeHeaderRow();
renderAllLocations();

 //list the times across the top
// loop through the array of objects representing each store location, and call the render method that each location has, so as to display the data in each row.
makeFooterRow();
