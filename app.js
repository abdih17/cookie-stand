'use strict';


var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//First and Pike
var firstAndPike = {
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  randCustomersPerHour: [],
  totalCookiesPerHour: [],
  totalDailySalesPerHour: 0,
  locationName: 'First and Pike',
  calcRandCustomersPerHour: function(){
    for (var i = 0; i < hours.length; i++) {
      this.randCustomersPerHour.push(Math.ceil(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustomersPerHour[i]);
    }
  },
  calcTotalCookiesPerHour: function(){
    this.calcRandCustomersPerHour();
    for (var j = 0; j < hours.length; j++) {
      this.totalCookiesPerHour.push(Math.ceil(this.randCustomersPerHour[j] * this.avgCookiesPerCust));
      console.log(this.totalCookiesPerHour[j]);
      this.totalDailySalesPerHour += this.totalCookiesPerHour[j];
    }
  },
};

firstAndPike.calcRandCustomersPerHour();
firstAndPike.calcTotalCookiesPerHour();

function firstAndPikeResults () {
  for (var k = 0; k < hours.length; k++) {
    var totalCookiesPerHour = document.getElementById('firstAndPike');
    var firstAndPikeLi = document.createElement('li');
    firstAndPikeLi.textContent = hours[k] + ': ' + firstAndPike.totalCookiesPerHour[k] + ' cookies';
    console.log(totalCookiesPerHour);
    totalCookiesPerHour.appendChild(firstAndPikeLi);
  };
  firstAndPikeLi.textContent = 'Total cookies for the day is ' + firstAndPike.totalDailySalesPerHour + '.';
  totalCookiesPerHour.appendChild(firstAndPikeLi);
}

firstAndPikeResults();

console.log(firstAndPike);


//SeaTac Airport
var seatacAirport = {
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesPerCust: 1.2,
  randCustomersPerHour: [],
  totalCookiesPerHour: [],
  totalDailySalesPerHour: 0,
  locationName: 'Seatac Airport',
  calcRandCustomersPerHour: function(){
    for (var i = 0; i < hours.length; i++) {
      this.randCustomersPerHour.push(Math.ceil(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustomersPerHour[i]);
    }
  },
  calcTotalCookiesPerHour: function(){
    this.calcRandCustomersPerHour();
    for (var j = 0; j < hours.length; j++) {
      this.totalCookiesPerHour.push(Math.ceil(this.randCustomersPerHour[j] * this.avgCookiesPerCust));
      console.log(this.totalCookiesPerHour[j]);
      this.totalDailySalesPerHour += this.totalCookiesPerHour[j];
    }
  },
};

seatacAirport.calcRandCustomersPerHour();
seatacAirport.calcTotalCookiesPerHour();

function seatacAirportResults () {
  for (var k = 0; k < hours.length; k++) {
    var totalCookiesPerHour = document.getElementById('seatacAirport');
    var seatacAirportLi = document.createElement('li');
    seatacAirportLi.textContent = hours[k] + ': ' + seatacAirport.totalCookiesPerHour[k] + ' cookies';
    console.log(totalCookiesPerHour);
    totalCookiesPerHour.appendChild(seatacAirportLi);
  };
  seatacAirportLi.textContent = 'Total cookies for the day is ' + seatacAirport.totalDailySalesPerHour + '.';
  totalCookiesPerHour.appendChild(seatacAirportLi);
}

seatacAirportResults();

console.log(seatacAirport);

//Seattle Center
var seattleCenter = {
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesPerCust: 3.7,
  randCustomersPerHour: [],
  totalCookiesPerHour: [],
  totalDailySalesPerHour: 0,
  locationName: 'Seattle Center',
  calcRandCustomersPerHour: function(){
    for (var i = 0; i < hours.length; i++) {
      this.randCustomersPerHour.push(Math.ceil(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustomersPerHour[i]);
    }
  },
  calcTotalCookiesPerHour: function(){
    this.calcRandCustomersPerHour();
    for (var j = 0; j < hours.length; j++) {
      this.totalCookiesPerHour.push(Math.ceil(this.randCustomersPerHour[j] * this.avgCookiesPerCust));
      console.log(this.totalCookiesPerHour[j]);
      this.totalDailySalesPerHour += this.totalCookiesPerHour[j];
    }
  },
};

seattleCenter.calcRandCustomersPerHour();
seattleCenter.calcTotalCookiesPerHour();

function seattleCenterResults () {
  for (var k = 0; k < hours.length; k++) {
    var totalCookiesPerHour = document.getElementById('seattleCenter');
    var seattleCenterLi = document.createElement('li');
    seattleCenterLi.textContent = hours[k] + ': ' + seattleCenter.totalCookiesPerHour[k] + ' cookies';
    console.log(totalCookiesPerHour);
    totalCookiesPerHour.appendChild(seattleCenterLi);
  };
  seattleCenterLi.textContent = 'Total cookies for the day is ' + seattleCenter.totalDailySalesPerHour + '.';
  totalCookiesPerHour.appendChild(seattleCenterLi);
}

seattleCenterResults();

console.log(seattleCenter);


//Capitol Hill
var capitolHill = {
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookiesPerCust: 2.3,
  randCustomersPerHour: [],
  totalCookiesPerHour: [],
  totalDailySalesPerHour: 0,
  locationName: 'Capitol Hill',
  calcRandCustomersPerHour: function(){
    for (var i = 0; i < hours.length; i++) {
      this.randCustomersPerHour.push(Math.ceil(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustomersPerHour[i]);
    }
  },
  calcTotalCookiesPerHour: function(){
    this.calcRandCustomersPerHour();
    for (var j = 0; j < hours.length; j++) {
      this.totalCookiesPerHour.push(Math.ceil(this.randCustomersPerHour[j] * this.avgCookiesPerCust));
      console.log(this.totalCookiesPerHour[j]);
      this.totalDailySalesPerHour += this.totalCookiesPerHour[j];
    }
  },
};

capitolHill.calcRandCustomersPerHour();
capitolHill.calcTotalCookiesPerHour();

function firstAndPikeResults () {
  for (var k = 0; k < hours.length; k++) {
    var totalCookiesPerHour = document.getElementById('capitolHill');
    var capitolHillLi = document.createElement('li');
    capitolHillLi.textContent = hours[k] + ': ' + capitolHill.totalCookiesPerHour[k] + ' cookies';
    console.log(totalCookiesPerHour);
    totalCookiesPerHour.appendChild(capitolHillLi);
  };
  capitolHillLi.textContent = 'Total cookies for the day is ' + capitolHill.totalDailySalesPerHour + '.';
  totalCookiesPerHour.appendChild(capitolHillLi);
}

capitolHillResults();

console.log(capitolHill);


//Alki
var alki = {
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiesPerCust: 4.6,
  randCustomersPerHour: [],
  calcRandCustomersPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustomersPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    }
  }
};
