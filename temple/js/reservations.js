const siteURL = window.location.search;
console.log(siteURL)
const urlperams = new URLSearchParams(siteURL);
console.log(urlperams)

const checkout = urlperams.get('checkout');
console.log(checkout);

const adultcount = urlperams.get('adultcount');
console.log(adultcount);
const childcount = urlperams.get('childcount');
console.log(childcount);
const checkin = urlperams.get('checkin');
console.log(checkin);

