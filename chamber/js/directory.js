const requestURL = 'https://jeremy-diamond.github.io/wdd230/chamber/data/directory.json';
const cards = document.querySelector('.directorycards');


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject);  // temporary checking for valid response and data parsing
    const companies = jsonObject['companies'];
    console.log(companies)
    companies.forEach(displayCompanies);
});  


  function displayCompanies(company) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let companylogo = document.createElement('img');
  
    // Change the textContent property of the h2 element to contain the Company name
    h2.textContent = company.companyName;

    // Create Address string
    address.textContent = `${company.street} ${company.city} ${company.state} ${company.zip}`

    // Add Phone 
    phone.textContent = company.phone;
    // Create Logo images
    companylogo.setAttribute('src', company.imageurl);
    companylogo.setAttribute('alt', `Logo for ${company.companyName}`);
    companylogo.setAttribute('loading', 'lazy');
    companylogo.setAttribute('width', '700');
    companylogo.setAttribute('height', '400');

  
    
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(address);
    card.appendChild(phone)
    card.appendChild(companylogo);
    
  
    // Add/append the existing HTML div with the cards class with the section(card)
    //console.log(card)
    cards.appendChild(card);
  }

