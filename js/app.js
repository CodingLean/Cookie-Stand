'use strict';
let storeHours = [
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',
  '8pm',
];
// let bodyElem = document.getElementById('body');
let table = document.createElement('table');
let storeArray = [];

function StoreLocation(location, minCust, maxCust, avSale) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avSale = avSale;

  this.salesArray = this.sales();
  storeArray.push(this);
}

StoreLocation.prototype.randomNumCust = function () {
  let custNum = Math.floor(Math.random() * (this.maxCust - this.minCust + 1));
  return custNum;
};

StoreLocation.prototype.sales = function () {
  let salesArray = [];
  for (let i = 0; i < storeHours.length; i++) {
    let totaled = Math.floor(this.avSale * this.randomNumCust());
    salesArray.push(totaled);
  }
  return salesArray;
};
StoreLocation.prototype.render = function () {
  let rows = document.createElement('tr');
  table.appendChild(rows);
  let locationRow = document.createElement('td');
  locationRow.innerHTML = this.location;
  rows.appendChild(locationRow);
  for (let i = 0; i < this.salesArray.length; i++) {
    let newData = document.createElement('td');
    newData.innerHTML = this.salesArray[i];
    rows.appendChild(newData);
  }
  let rowOfTotals = document.createElement('th');
  rowOfTotals.innerHTML = locationTotal(this.sales());
  rows.appendChild(rowOfTotals);
};

new StoreLocation('Seattle', 23, 65, 6.3);
new StoreLocation('Tokyo', 3, 24, 1.2);
new StoreLocation('Dubai', 11, 38, 3.7);
new StoreLocation('Paris', 20, 38, 2.3);
new StoreLocation('Lima', 2, 16, 4.6);

let locationTotal = function (array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};
let main = document.querySelector('main');
const createTable = function () {
  main.appendChild(table);
  table.style.width = '100vw';
  table.style.border = '2px solid black';
};
const createHeader = function () {
  let hedRow = document.createElement('tr');
  hedRow.innerHTML = 'hours:';
  table.appendChild(hedRow);

  for (let i = 0; i < storeHours.length; i++) {
    let tableHeader = document.createElement('th');
    tableHeader.setAttribute('scope', 'column');
    tableHeader.innerHTML = storeHours[i];
    hedRow.appendChild(tableHeader);
  }
  let bttmR = document.createElement('th');
  bttmR.innerHTML = 'Daily Location Total';
  hedRow.appendChild(bttmR);
};

let createFooter = function () {
  let foot = document.createElement('tfoot');
  table.appendChild(foot);
  let totalsOverall = document.createElement('td');
  totalsOverall.innerHTML = 'Hourly Totals:';
  foot.appendChild(totalsOverall);

  let storeTotals = 0;
  for (let i = 0; i < storeHours.length; i++) {
    let total = 0;
    for (let j = 0; j < storeArray.length; j++) {
      total += storeArray[j].salesArray[i];
    }
    let totalPerHour = document.createElement('td');
    totalPerHour.innerHTML = total;
    foot.appendChild(totalPerHour);
    storeTotals += total;
  }
  let overallTotal = document.createElement('td');
  overallTotal.innerHTML = storeTotals;
  foot.appendChild(overallTotal);
};
const tableDisplayed = function () {
  createTable();
  createHeader();
  for (let i = 0; i < storeArray.length; i++) {
    storeArray[i].render();
  }
  createFooter();
};
tableDisplayed();


