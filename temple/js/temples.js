//const apiURL = 'data/temples.json';
const apiURL = 'https://jeremy-diamond.github.io/wdd230/temple/data/temples.json';
const forcastcontainer = document.querySelector('.forcastcontainer');

fetch(apiURL)
    .then((response)=> response.json())
    .then((jsObject)=> {
        console.log(jsObject)
    });