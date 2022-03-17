const requestURL = 'https://jeremy-diamond.github.io/wdd230/chamber/data/directory.json';
let spotlightcount = 1
const spotlights = document.querySelector('.spotlightcontainer')

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
   // console.table(jsonObject);  // temporary checking for valid response and data parsing
    const companies = jsonObject['companies'];
    let goldcompanies = companies.filter( company => company.membershipLevel === "Gold");

    //console.log(goldcompanies)
    //console.log(goldcompanies.length)

    // Create list of 3 companies
    let countofgold = Array.from(Array(goldcompanies.length).keys());
    countofgold = countofgold.sort(() => Math.random() - 0.5);
    countofgold = countofgold.slice(0,3);
    //console.log(countofgold);
    countofgold.forEach(companycount => {
        addspotlight(companies[companycount])       
    });
}); 



function addspotlight(company){
    //console.log(spotlightcount)

    //Create div with id
    let maindiv = document.createElement('div');
    maindiv.id = `spotlight${spotlightcount}`; 
    spotlights.appendChild(maindiv);

    //create h2 with company name
    let h2 = document.createElement('h2');
    h2.textContent = company.companyName;
    maindiv.appendChild(h2);

    //create image
    let companylogo = document.createElement('img')
    companylogo.setAttribute('src', company.imageurl);
    companylogo.setAttribute('alt', `Logo for ${company.companyName}`);
    companylogo.setAttribute('loading', 'lazy');
    companylogo.setAttribute('width', '100');
    companylogo.setAttribute('height', '100');
    maindiv.appendChild(companylogo);

    // create spotcontact div with two p tags for email and phone | website
    let contactdiv = document.createElement('div');
    contactdiv.classList.add('spotcontact');
    maindiv.appendChild(contactdiv);

    // p tag for email
    let email = document.createElement('p');
    email.innerText = company.email;
    contactdiv.appendChild(email);

    //ptag for phone and website
    let phoneweb = document.createElement('p');
    phoneweb.textContent = `${company.phone} | ${company.websiteURL}`;
    contactdiv.appendChild(phoneweb); 

    //console.log(spotlightcount)
    //console.log(`test${company.companyName}`)
    spotlightcount += 1
}