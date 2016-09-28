'use strict';


var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var allOfMyStores = [];
var salesPerHour = [];
var totalSoldPerLocation = 0;

new Store('1st and Pike', 23, 65, 6.3);
new Store('Seattle Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 3, 4.6);
var table = document.getElementById("stores");


function Store(location, minCustPerHour, maxCustPerHour, avgCookiesPerCust) {
  this.location = location;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.hours = hours;
  this.randCustomersPerHour = [];
  this.totalCookiesSoldPerHour = [];
  this.totalDailyCookiesSold = 0;
};
this.calcRandCustomersPerHour = function(){
  for (var i = 0; i < hours.length; i++) {
    this.randCustomersPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
  }
};
this.calcRandCustomersPerHour();
this.calctotalCookiesSoldPerHour = function(){
  for (var i = 0; i < hours.length; i++) {
    this.totalCookiesSoldPerHour.push(Math.ceil(this.randCustomersPerHour[i] * this.avgCookiesPerCust));
    this.totalDailyCookiesSold += this.totalCookiesSoldPerHour[i];
  }
  for (var j = 0; j < hours.length; j++) {
    tdEl = document.createElement('td');
    tdEl.textContent = allOfMyStores[i].totalCookiesSoldPerHour[j];
    trEl.appendChild(tdEl);
  }
  tableDataDisplay.appendChild(trEl);
};
this.calctotalCoookiesSoldPerHour();

this.renderTable = function () {
  var tableDataDisplay = document.getElementById('salesTable');
  for (var i = 0; i < hours.length; i++) {
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = allOfMyStores[i].location;
    location.appendChild(tdEl);//??
  }
  tdEl =
}


//     }
//     return console.log('Random hourly customers has been calculated.');
//   };
//     return console.log('Total cookies sold per hour has been calculated.');
//   }
// };
//
//   function salesTable(){
//     this.calctotalCookiesSoldPerHour();
//     var salesTable = document.getElementById('salesTable');
//     console.log('SalesTable is ', salesTable);
//     var locationsTR = document.createElement('tr');
//     locationsEl.textContent = 'Location Name'
//     salesTable.appendChild(locationsTR);
//
//   }
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + this.totalDailyCookiesSold + ' cookies';
//     firstAndPikeUL.appendChild(liEl);
//   }
//   this.calctotalCookiesSoldPerHour();
//   allOfMyStores.push(this);


  // console.log(salmonCookies);
  // alert('The Salmon Cookie data has appeared.');
};

// firstAndPike.render();
