'use strict';


var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//First and Pike
var firstAndPike = {
  locationName: '1st and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  randCustomersPerHour: [],
  totalCookiesSoldPerHour: [],
  totalDailyCookiesSold: 0,
  calcRandCustomersPerHour: function(){
    for (var i = 0; i < hours.length; i++) {
      this.randCustomersPerHour.push(Math.ceil(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    }
    return console.log('Random hourly customers has been calculated.');
  },
  calctotalCookiesSoldPerHour: function(){
    this.calcRandCustomersPerHour();
    for (var j = 0; j < hours.length; j++) {
      this.totalCookiesSoldPerHour.push(Math.ceil(this.randCustomersPerHour[j] * this.avgCookiesPerCust));
      this.totalDailyCookiesSold += this.totalCookiesSoldPerHour[j];
    }
    return console.log('Total cookies sold per hour has been calculated.');
  },
};

firstAndPike.calctotalCookiesSoldPerHour();

function firstAndPikeResults () {
  for (var k = 0; k < hours.length; k++) {
    var totalCookiesSoldPerHour = document.getElementById('firstAndPike');
    var firstAndPikeLi = document.createElement('li');
    firstAndPikeLi.textContent = hours[k] + ': ' + firstAndPike.totalCookiesSoldPerHour[k] + ' cookies';
    console.log(totalCookiesSoldPerHour);
    totalCookiesSoldPerHour.appendChild(firstAndPikeLi);
  };
  firstAndPikeLi.textContent = 'Total Cookies Sold Today: ' + firstAndPike.totalDailyCookiesSold;
  totalCookiesSoldPerHour.appendChild(firstAndPikeLi);
}
firstAndPikeResults();
console.log(firstAndPike);

//SeaTac Airport
var seatacAirport = {
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesPerCust: 1.2,
  randCustomersPerHour: [],
  totalCookiesSoldPerHour: [],
  totalDailyCookiesSold: 0,
  locationName: 'Seatac Airport',
  calcRandCustomersPerHour: function(){
    for (var i = 0; i < hours.length; i++) {
      this.randCustomersPerHour.push(Math.ceil(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustomersPerHour[i]);
    }
  },
  calctotalCookiesSoldPerHour: function(){
    this.calcRandCustomersPerHour();
    for (var j = 0; j < hours.length; j++) {
      this.totalCookiesSoldPerHour.push(Math.ceil(this.randCustomersPerHour[j] * this.avgCookiesPerCust));
      console.log(this.totalCookiesSoldPerHour[j]);
      this.totalDailyCookiesSold += this.totalCookiesSoldPerHour[j];
    }
  },
};
seatacAirport.calcRandCustomersPerHour();
seatacAirport.calctotalCookiesSoldPerHour();

function seatacAirportResults () {
  for (var k = 0; k < hours.length; k++) {
    var totalCookiesSoldPerHour = document.getElementById('seatacAirport');
    var seatacAirportLi = document.createElement('li');
    seatacAirportLi.textContent = hours[k] + ': ' + seatacAirport.totalCookiesSoldPerHour[k] + ' cookies';
    console.log(totalCookiesSoldPerHour);
    totalCookiesSoldPerHour.appendChild(seatacAirportLi);
  };
  seatacAirportLi.textContent = 'Total Cookies Sold Today: ' + seatacAirport.totalDailyCookiesSold;
  totalCookiesSoldPerHour.appendChild(seatacAirportLi);
}
seatacAirportResults();
console.log(seatacAirport);

//Seattle Center
var seattleCenter = {
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesPerCust: 3.7,
  randCustomersPerHour: [],
  totalCookiesSoldPerHour: [],
  totalDailyCookiesSold: 0,
  locationName: 'Seattle Center',
  calcRandCustomersPerHour: function(){
    for (var i = 0; i < hours.length; i++) {
      this.randCustomersPerHour.push(Math.ceil(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustomersPerHour[i]);
    }
  },
  calctotalCookiesSoldPerHour: function(){
    this.calcRandCustomersPerHour();
    for (var j = 0; j < hours.length; j++) {
      this.totalCookiesSoldPerHour.push(Math.ceil(this.randCustomersPerHour[j] * this.avgCookiesPerCust));
      console.log(this.totalCookiesSoldPerHour[j]);
      this.totalDailyCookiesSold += this.totalCookiesSoldPerHour[j];
    }
  },
};
seattleCenter.calcRandCustomersPerHour();
seattleCenter.calctotalCookiesSoldPerHour();

function seattleCenterResults () {
  for (var k = 0; k < hours.length; k++) {
    var totalCookiesSoldPerHour = document.getElementById('seattleCenter');
    var seattleCenterLi = document.createElement('li');
    seattleCenterLi.textContent = hours[k] + ': ' + seattleCenter.totalCookiesSoldPerHour[k] + ' cookies';
    console.log(totalCookiesSoldPerHour);
    totalCookiesSoldPerHour.appendChild(seattleCenterLi);
  };
  seattleCenterLi.textContent = 'Total Cookies Sold Today: ' + seattleCenter.totalDailyCookiesSold;
  totalCookiesSoldPerHour.appendChild(seattleCenterLi);
}
seattleCenterResults();
console.log(seattleCenter);

//Capitol Hill
var capitolHill = {
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookiesPerCust: 2.3,
  randCustomersPerHour: [],
  totalCookiesSoldPerHour: [],
  totalDailyCookiesSold: 0,
  locationName: 'Capitol Hill',
  calcRandCustomersPerHour: function(){
    for (var i = 0; i < hours.length; i++) {
      this.randCustomersPerHour.push(Math.ceil(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustomersPerHour[i]);
    }
  },
  calctotalCookiesSoldPerHour: function(){
    this.calcRandCustomersPerHour();
    for (var j = 0; j < hours.length; j++) {
      this.totalCookiesSoldPerHour.push(Math.ceil(this.randCustomersPerHour[j] * this.avgCookiesPerCust));
      console.log(this.totalCookiesSoldPerHour[j]);
      this.totalDailyCookiesSold += this.totalCookiesSoldPerHour[j];
    }
  },
};
capitolHill.calcRandCustomersPerHour();
capitolHill.calctotalCookiesSoldPerHour();

function capitolHillResults () {
  for (var k = 0; k < hours.length; k++) {
    var totalCookiesSoldPerHour = document.getElementById('capitolHill');
    var capitolHillLi = document.createElement('li');
    capitolHillLi.textContent = hours[k] + ': ' + capitolHill.totalCookiesSoldPerHour[k] + ' cookies';
    console.log(totalCookiesSoldPerHour);
    totalCookiesSoldPerHour.appendChild(capitolHillLi);
  };
  capitolHillLi.textContent = 'Total Cookies Sold Today: ' + capitolHill.totalDailyCookiesSold;
  totalCookiesSoldPerHour.appendChild(capitolHillLi);
}
capitolHillResults();
console.log(capitolHill);

//Alki
var alki = {
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiesPerCust: 4.6,
  randCustomersPerHour: [],
  totalCookiesSoldPerHour: [],
  totalDailyCookiesSold: 0,
  locationName: 'Alki',
  calcRandCustomersPerHour: function(){
    for (var i = 0; i < hours.length; i++) {
      this.randCustomersPerHour.push(Math.ceil(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustomersPerHour[i]);
    }
  },
  calctotalCookiesSoldPerHour: function(){
    this.calcRandCustomersPerHour();
    for (var j = 0; j < hours.length; j++) {
      this.totalCookiesSoldPerHour.push(Math.ceil(this.randCustomersPerHour[j] * this.avgCookiesPerCust));
      console.log(this.totalCookiesSoldPerHour[j]);
      this.totalDailyCookiesSold += this.totalCookiesSoldPerHour[j];
    }
  },
};
alki.calcRandCustomersPerHour();
alki.calctotalCookiesSoldPerHour();

function alkiResults () {
  for (var k = 0; k < hours.length; k++) {
    var totalCookiesSoldPerHour = document.getElementById('alki');
    var alkiLi = document.createElement('li');
    alkiLi.textContent = hours[k] + ': ' + alki.totalCookiesSoldPerHour[k] + ' cookies';
    console.log(totalCookiesSoldPerHour);
    totalCookiesSoldPerHour.appendChild(alkiLi);
  };
  alkiLi.textContent = 'Total Cookies Sold Today: ' + alki.totalDailyCookiesSold;
  totalCookiesSoldPerHour.appendChild(alkiLi);
}
alkiResults();
console.log(alki);
