const siteURL = window.location.search;
const urlperams = new URLSearchParams(siteURL);

const checkin = urlperams.get('checkin');
document.querySelector('#checkin').value = checkin;
//console.log(checkin);

const checkout = urlperams.get('checkout');
document.querySelector('#checkout').value = checkout;
//console.log(checkout);

const adultcount = urlperams.get('adultcount');
document.querySelector('#adultcount').value = adultcount;
//console.log(adultcount);

const childcount = urlperams.get('childcount');
document.querySelector('#childcount').value = childcount;
//console.log(childcount);


