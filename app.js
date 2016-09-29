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
  headerCell.textContent = '';
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
makeFooterRow();

var newStore = document.getElementById('new-store');
console.log('newStore: ', newStore);

// newStore.addEventListener('submit', handleCommentSubmit); //runs a funtion in response to an event.

function handleCommentSubmit(event) {
  console.log('HELLO WORLD');
  event.preventDefault();
  console.log(event.target);

  var locationName = event.target.store.value;
  var min = parseInt(event.target.minimum.value);
  var max = parseInt(event.target.maximum.value);
  var avg = parseInt(event.target.average.value);

  console.log(locationName, min, max, avg);

  if (store === null || min === null || max === null || avg === null) {
    alert ('You did fill out your form, please try again.');
    return;
  }

  clearInputs(event);

  var sameName = false;

  for (var i = 0; i < allLocations.length; i++) {
    console.log(i);
    if (locationName === allLocations[i].locationName) {
      sameName = true;
      console.log('SAME NAME EXISTED', locationName, sameName);
      break;
    }
  };

  if (sameName === false) {
    console.log('sameName: ', sameName, '\nlocationName: ', locationName);
    var newStoreRow = new Store(locationName, min, max, avg);
  }
  var clearTable = document.getElementById('salesDataTable');
  clearTable.innerHTML = '';
  makeHeaderRow();
  renderAllLocations();
  makeFooterRow();
  // console.log('log of the event object', event);
  // console.log('log of the event.target', event.target);
  // console.log('log of the event.target.min', event.target.min);
  // console.log('log of the event.target.min', event.target.min);
  // console.log('log of the event.target.says.value', event.target.says.value);
};

function clearInputs(event) {
  event.target.store.value = null;
  event.target.minimum.value = null;
  event.target.maximum.value = null;
  event.target.average.value = null;
}

newStore.addEventListener('submit', handleCommentSubmit);

// newStore.addEventListener('submit', formSubmithandler);
//
// function formSubmithandler(e) {
//   console.log(e);
//   e.preventDefault();
//
//   var locationName = event.target.store.value;
//   var min = parseInt(event.target.minimum.value);
//   var max = parseInt(event.target.maximum.value);
//   var avg = parseInt(event.target.average.value);
//
//   console.log(store, min, max, avg);
//   clearInputs(event);
//
//   var sameName = false;
//   console.log('sameName: ', sameName);
//   console.log('allLocations: ', allLocations);
//
//   for (var i = 0; i < allLocations.length; i++) {
//     if (locationName === allLocations[i].locationName) {
//       sameName = true;
//     }
//   };
//   console.log('sameName: ', sameName);
//
//   if (sameName === false) {
//     var newStoreRow = new Store(store, min, max, avg);
//   }
//
// }
