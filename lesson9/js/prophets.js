const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    //console.log(prophets)
    prophets.forEach(displayProphets);
});  

  function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let birthdetails = document.createElement('p');
    let deathdetails = document.createElement('p');
    let otherinfo = document.createElement('p')
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${prophet.name} ${prophet.lastname}`;

    // Add Date of birth, days till birthday

    // create birthday
    let birthday = new Date(prophet.birthdate)
    const formatedbirthday = new Intl.DateTimeFormat("en-UK",{dateStyle: "full"}).format(birthday);
    const birthplace = prophet.birthplace
    //console.log(`Birth ${formatedbirthday}`) 

    //set birthday
    birthdetails.textContent = `Born: ${formatedbirthday} in ${birthplace}`
    
    
    // create death date
    //console.log(prophet.death)
    if (prophet.death !== null){
        let deathdate = new Date(prophet.death)
        const formateddeahtdate = new Intl.DateTimeFormat("en-UK",{dateStyle: "full"}).format(deathdate);
        // console.log(`Death ${formateddeahtdate}`) 
        
        // create age
        const YEARSCONVERSION = 1000 * 60 * 60 * 24 * 365
        let age = Math.trunc((deathdate - birthday) / YEARSCONVERSION)
        //console.log(`Age ${age}`)

        //set death details
        deathdetails.textContent = `Died: ${formateddeahtdate} at age ${age}`
    } else {
        deathdetails.textContent = "Is our current Prophet!"}

      
    // Add Other info 
    let timeserved = prophet.length
    //console.log(timeserved)
    let childcount = prophet.numofchildren
    //console.log(childcount)
    // Set other info 
    if (prophet.death !== null) {  
        otherinfo.textContent = `Served for ${timeserved} years and had ${childcount} children`
    } else {
        otherinfo.textContent = `Has been Serving for ${timeserved} years and has ${childcount} children`
    }
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    //portrait.setAttribute('width', '100%');
    //portrait.setAttribute('height', '380');
    
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(birthdetails)
    card.appendChild(deathdetails)
    card.appendChild(otherinfo)
    card.appendChild(portrait);

  
    // Add/append the existing HTML div with the cards class with the section(card)
    //console.log(card)
    cards.appendChild(card);
  }