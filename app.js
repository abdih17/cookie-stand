'use strict';


var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


function Store(name, minimum, maximum, average) {
  this.locationName = name;
  this.minCustPerHour = minimum;
  this.maxCustPerHour = maximum;
  this.avgCookiesPerCust = average;
  this.randCustomersPerHour = [];
  this.totalCookiesSoldPerHour = [];
  this.totalDailyCookiesSold = 0;
  this.calcRandCustomersPerHour = function(){
    for (var i = 0; i < hours.length; i++) {
      this.randCustomersPerHour.push(Math.ceil(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    }
    return console.log('Random hourly customers has been calculated.');
  };
  this.calctotalCookiesSoldPerHour = function(){
    this.calcRandCustomersPerHour();
    for (var i = 0; i < hours.length; i++) {
      this.totalCookiesSoldPerHour.push(Math.ceil(this.randCustomersPerHour[i] * this.avgCookiesPerCust));
      this.totalDailyCookiesSold += this.totalCookiesSoldPerHour[i];
    }
    return console.log('Total cookies sold per hour has been calculated.');
  };

  // this.render = function() {
  //   this.calctotalCookiesSoldPerHour();
  //   //6am: 16 cookies
  //   var firstAndPikeUL = document.getElementById('firstAndPike');
  //   for (var i = 0; i < hours.length; i++) {
  //   //create an element
  //     var liEl = document.createElement('li');
  //   //give it content
  //     liEl.textContent = hours[i] + ': ' + this.totalCookiesSoldPerHour[i] + ' cookies';
  //   //append it to the document
  //     firstAndPikeUL.appendChild(liEl);
  //   }
  //   liEl = document.createElement('li');
  //   liEl.textContent = 'Total: ' + this.totalDailyCookiesSold + ' cookies';
  //   firstAndPikeUL.appendChild(liEl);
  // }
  this.calctotalCookiesSoldPerHour();
  allOfMyStores.push(this);
  // console.log(salmonCookies);
  // alert('The Salmon Cookie data has appeared.');
};

// firstAndPike.render();
var allOfMyStores = [];
var firstAndPike = new Store('1st and Pike', 23, 65, 6.3);
var seatacAirport = new Store('Seattle Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 3, 4.6);
