'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var allLocations = [];
var myTable = document.getElementById('sales-table');
var submissionForm = document.getElementById('newstoresubmissionform');
// var removeLocationButton = document.getElementById('button');

function Store(locationName, minCustPerHour, maxCustPerHour, avgCookiesPerCust) {
  this.locationName = locationName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.randCustPerHour = [];
  this.totalCookiesPerHour = [];
  this.totalDailySales = 0;
  // this.calcTotalCookiesPerHour();
  this.index = allLocations.push(this) - 1;
};

Store.prototype.calcRandCustomersPerHour = function(){
  for (var i = 0; i < hours.length; i++) {
    this.randCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
  }
};
Store.prototype.calcTotalCookiesPerHour = function(){
  this.calcRandCustomersPerHour();
  for (var i = 0; i < hours.length; i++){
    this.totalCookiesPerHour.push(Math.ceil(this.randCustPerHour[i] * this.avgCookiesPerCust));
    this.totalDailySales += this.totalCookiesPerHour[i];
  }
};

//render function
Store.prototype.render = function(){
  this.calcTotalCookiesPerHour();
  var trEl = document.createElement('tr');

  var tdEl = document.createElement('td');
  tdEl.textContent = this.locationName;
  trEl.appendChild(tdEl);

  for (var i = 0; i < hours.length; i++){
    tdEl = document.createElement('td');
    tdEl.textContent = this.totalCookiesPerHour[i];
    trEl.appendChild(tdEl);
  }

  tdEl = document.createElement('td');
  tdEl.textContent = this.totalDailySales;
  trEl.appendChild(tdEl);
  myTable.appendChild(trEl);

  tdEl = document.createElement('td');
  var removeLocationButton = document.createElement('button');
  //event listener
  removeLocationButton.addEventListener('click', handleRemovingLocation);
  removeLocationButton.textContent = 'Remove location';
  removeLocationButton.dataset.storeIndex = this.index;
  tdEl.appendChild(removeLocationButton);
  trEl.appendChild(tdEl);
};

//functions
function makeHeaderRow(){
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = 'Location';
  trEl.appendChild(thEl);

  for (var i = 0; i < hours.length; i++){
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }

  thEl = document.createElement('th');
  thEl.textContent = 'Daily Location Total';
  trEl.appendChild(thEl);

  myTable.appendChild(trEl);
}

function renderAllLocations(){
  for (var i = 0; i < allLocations.length; i++) {
    allLocations[i].render();
  }
}

function makeFooterRow(){
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = 'Hourly Totals';
  trEl.appendChild(thEl);
  //below calculates total for all stores per hour
  var dailyTotalAllLocations = 0;
  for (var i = 0; i < hours.length; i++) {
    var total = 0;
    for (var j = 0; j < allLocations.length; j++){
      total += allLocations[j].totalCookiesPerHour[i];
    }
    thEl = document.createElement('th');
    thEl.textContent = total;
    trEl.appendChild(thEl);
    dailyTotalAllLocations += total;
    trEl.appendChild(thEl);
  }

  thEl = document.createElement('th');
  thEl.textContent = dailyTotalAllLocations;
  trEl.appendChild(thEl);

  myTable.appendChild(trEl);
}

//event handlers
function handleAddNewEntry(event) {
  event.preventDefault();

  if (!event.target.location.value || !event.target.min.value || !event.target.max.value || !event.target.average.value) {
    return alert('Fields cannot be empty!');
  }

  var location = event.target.location.value;
  var min = parseInt(event.target.min.value);
  var max = parseInt(event.target.max.value);
  var average = parseFloat(event.target.average.value);

  //Check for duplicate store locations

  new Store(location, min, max, average);

  event.target.location.value = null;
  event.target.min.value = null;
  event.target.max.value = null;
  event.target.average.value = null;

  myTable.innerHTML = '';
  makeHeaderRow();
  renderAllLocations();
  makeFooterRow();
};

function handleRemovingLocation(event) {
  event.preventDefault();
  allLocations.splice(this.dataset.storeIndex, 1);


  myTable.innerHTML = '';
  makeHeaderRow();
  renderAllLocations();
  makeFooterRow();
};

Store.all = [];
//running some awesome codes
new Store('First and Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);


makeHeaderRow();
renderAllLocations();
makeFooterRow();

//event listener
submissionForm.addEventListener('submit', handleAddNewEntry);
