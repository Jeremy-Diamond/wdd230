const requestURL = 'https://jeremy-diamond.github.io/wdd230/chamber/data/directory.json';
const cards = document.querySelector('.directorycards');


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject);  // temporary checking for valid response and data parsing
    const companies = jsonObject['companies'];
    //console.log(companies)
    companies.forEach(displayCompanies);
});  


  function displayCompanies(company) {
    // Create elements to add to the document
    let card = document.createElement('section');
    card.classList.add("directorycard")
    let h2 = document.createElement('h2');
    h2.classList.add("directorycell")
    let address = document.createElement('p');
    address.classList.add("directorycell")
    let phone = document.createElement('p');
    phone.classList.add("directorycell")
    let website = document.createElement('p')
    website.classList.add("directorycell")
    let companylogo = document.createElement('img');
    companylogo.classList.add("directoryimage")
  
    // Change the textContent property of the h2 element to contain the Company name
    h2.textContent = company.companyName;

    // Create Address string
    address.innerHTML = `${company.street} ${company.city} ${company.state} ${company.zip}`

    // Add Phone 
    phone.textContent = company.phone;

    // add website 
    website.textContent = company.websiteURL;

    // Create Logo images
    companylogo.setAttribute('src', company.imageurl);
    companylogo.setAttribute('alt', `Logo for ${company.companyName}`);
    companylogo.setAttribute('loading', 'lazy');
    companylogo.setAttribute('width', '150');
    companylogo.setAttribute('height', '150');

  
    
    // Add/append the section(card) with the h2 element
    card.appendChild(companylogo);
    card.appendChild(h2);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    
  
    // Add/append the existing HTML div with the cards class with the section(card)
    //console.log(card)
    cards.appendChild(card);
  }


  // Listner to swap grid and list

  const switchFormat = document.querySelector(".switchFormat");
  switchFormat.addEventListener("click", () => {
    let images = document.querySelectorAll(".directoryimage");
    images.forEach((item) => {
      item.classList.toggle("hide");
    });
    let table = document.querySelectorAll(".directorycard");
    table.forEach((item) => {
      item.classList.toggle("table");
    });
    let cells = document.querySelectorAll(".directorycell");
    cells.forEach((item) => {
      item.classList.toggle("cell");
    });
    let card = document.querySelector(".directorycards");
    card.classList.toggle("removegrid");
    // Switch Button Text 
    let buttontext = document.querySelector(".switchFormat").textContent;
    if(buttontext === "Switch to List"){
      document.querySelector(".switchFormat").textContent = "Switch to Grid"
    } else {
      document.querySelector(".switchFormat").textContent = "Switch to List"
    }
  });