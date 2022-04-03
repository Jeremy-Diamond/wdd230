//const apiURL = 'data/temples.json';
const apiURL = 'https://jeremy-diamond.github.io/wdd230/temple/data/temples.json';
const forcastcontainer = document.querySelector('.forcastcontainer');
const templemain = document.querySelector('.templesmain')

fetch(apiURL)
    .then((response)=> response.json())
    .then((templelist)=> {
        console.log(templelist)
        console.log(templelist.temples[0])

        let templecount = Array.from(Array(templelist.length).keys());
        //console.log(templelist)
        templecount.forEach(temple => {
            createtemplecards(templelist.temples[temple])
        });
    });

    function createtemplecards(temple) {
        console.log(temple)
    
        // Create elements to add to the document
        let card = document.createElement('section');
        card.classList.add("templecard")
        let h2 = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let email = document.createElement('p')
        let website = document.createElement('p')
        let templeimage = document.createElement('img');
        templeimage.classList.add("templeimage")
      
        // Change the textContent property of the h2 element to contain the temple name
        h2.textContent = temple.templeName;
    
        // Create Address string
        address.innerHTML = `${temple.address.street} ${temple.address.city} ${temple.address.state} ${temple.address.zip}`
    
        // Add Phone 
        phone.textContent = temple.phone;
        
        // Add email 
        phone.textContent = temple.email;
        
        // add website 
        website.textContent = temple.websiteURL;
    
        // Create Logo images
        templeimage.setAttribute('src', temple.imageurl);
        templeimage.setAttribute('alt', `Logo for ${temple.templeName}`);
        templeimage.setAttribute('loading', 'lazy');
        templeimage.setAttribute('width', '150');
        templeimage.setAttribute('height', '150');
    
      
        
        // Add/append the section(card) with the h2 element
        card.appendChild(templeimage);
        card.appendChild(h2);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(email);
        card.appendChild(website);
        
      
        // Add/append the existing HTML div with the cards class with the section(card)
        //console.log(card)
        templemain.appendChild(card); 
    }