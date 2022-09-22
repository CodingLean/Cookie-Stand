'use strict';



let storeHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];



let seattle = {
  minCust: 23,
  maxCust: 65,
  avSale: 6.3,
  cityName: 'Seattle',
  cookieData: function(){
    return Math.floor(mathFuntion()*this.avSale);
    // code from MDN
    function mathFuntion() {
      return Math.random() * (seattle.maxCust - seattle.minCust) + seattle.minCust;
    }
  }
};
let bodyElem = document.getElementById('body');

let h1ElemSeattle = document.createElement('h1');
h1ElemSeattle.innerText = seattle.cityName;
bodyElem.appendChild(h1ElemSeattle);

let ulSeattle = document.getElementById('body');
for(let i = 0; i < storeHours.length; i++){
  let liElem = document.createElement('li');
  liElem.innerText = `${storeHours[i]}: ${seattle.cookieData()}`;
  ulSeattle.appendChild(liElem);
}

let tokyo = {
  minCust: 3,
  maxCust: 24,
  avSale: 1.2,
  cityName: 'Tokyo',
  cookieData: function(){
    return Math.floor(mathFuntion()*this.avSale);
    // code from MDN
    function mathFuntion() {
      return Math.random() * (tokyo.maxCust - tokyo.minCust) + tokyo.minCust;
    }
  }
};

let h2ElemTokyo = document.createElement('h2');
h2ElemTokyo.innerText = tokyo.cityName;
bodyElem.appendChild(h2ElemTokyo);

for(let i = 0; i < storeHours.length; i++){
  let liElem = document.createElement('li');
  liElem.innerText = `${storeHours[i]}: ${tokyo.cookieData()}`;
  bodyElem.appendChild(liElem);
}

// eslint-disable-next-line no-unused-vars
let Dubai = {
  minCust: 11,
  maxCust: 38,
  avSale: 3.7,
  cityName: 'Dubai',
  cookieData: function(){
    return Math.floor(mathFuntion()*this.avSale);
    // code from MDN
    function mathFuntion() {
      return Math.random() * (Dubai.maxCust - Dubai.minCust) + Dubai.minCust;
    }
  }
};

let h2ElemDubai = document.createElement('h2');
h2ElemDubai.innerText = Dubai.cityName;
bodyElem.appendChild(h2ElemDubai);

for(let i = 0; i < storeHours.length; i++){
  let liElemDubai = document.createElement('li');
  liElemDubai.innerText = `${storeHours[i]}: ${tokyo.cookieData()}`;
  bodyElem.appendChild(liElemDubai);
}

let Paris = {
  minCust: 20,
  maxCust: 38,
  avSale: 2.3,
  cityName: 'Paris',
  cookieData: function(){
    return Math.floor(mathFuntion()*this.avSale);
    // code from MDN
    function mathFuntion() {
      return Math.random() * (Paris.maxCust - Paris.minCust) + Paris.minCust;
    }
  }
};

let h2ElemParis = document.createElement('h2');
h2ElemParis.innerText = Paris.cityName;
bodyElem.appendChild(h2ElemParis);

for(let i = 0; i < storeHours.length; i++){
  let liElemParis = document.createElement('li');
  liElemParis.innerText = `${storeHours[i]}: ${Paris.cookieData()}`;
  bodyElem.appendChild(liElemParis);
}








