//const apiURL = 'data/temples.json';
const apiURL = 'https://jeremy-diamond.github.io/wdd230/temple/data/temples.json';
const forcastcontainer = document.querySelector('.forcastcontainer');
const templemain = document.querySelector('.templesmain');
let likebtn = ""

fetch(apiURL)
    .then((response)=> response.json())
    .then((templelist)=> {
        //console.log(templelist);
        let templecount = Array.from(Array(templelist.temples.length).keys());
        //console.log(templecount)
        templecount.forEach(temple => {
            createtemplecards(templelist.temples[temple])
        });
    });

    function createtemplecards(temple) {
        //console.log(temple)
    
        // Create elements to add to the document
        let card = document.createElement('section');
        card.classList.add("templecard")
        let h2 = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let email = document.createElement('p');
        let templeimage = document.createElement('img');
        templeimage.classList.add("templeimage");
        
        // Change the textContent property of the h2 element to contain the temple name
        h2.textContent = temple.name;
     
        // Contact section
        let contactsection = document.createElement('div');
        contactsection.classList.add('contactcard');
     
        // contact header
        let contacth2 = document.createElement('h2');
        contacth2.textContent = 'Contact Information';
        contactsection.appendChild(contacth2);
        
        // Create Address string
        address.innerHTML = `Address: ${temple.address.street} ${temple.address.city} ${temple.address.state} ${temple.address.zip}`;
        contactsection.appendChild(address);
        
        // Add Phone 
        phone.textContent = `Phone: ${temple.phone}`;
        contactsection.appendChild(phone);
        
        // Add email 
        email.textContent = `Email: ${temple.email}`;
        contactsection.appendChild(email);
        
        // add website 
        let website = document.createElement('a');
        //let webURL = document.createElement('a');
        website.href = temple.websiteURL;
        website.textContent = "Go To Site";
        website.target = "blank";
        //website.textContent = `Website: ${temple.websiteURL}`;
        website.innerHTML = "Go To Temple Website Site"
        contactsection.appendChild(website);
    
        // Create images
        templeimage.setAttribute('src', temple.imageurl);
        templeimage.setAttribute('alt', `Image of ${temple.name}`);
        templeimage.setAttribute('loading', 'lazy');
        templeimage.setAttribute('width', '500');
        //templeimage.setAttribute('height', '150');
    
        //SCHEDULE ITEMS

        let schedulecard = document.createElement('div');
        schedulecard.classList.add('schedulelist');
    
        //let scheduleh2 = document.createElement('h2');
        //scheduleh2.textContent = "Schedule Items";
        //schedulecard.appendChild(scheduleh2);
        
        //Create closures list
        let closureh2 = document.createElement('h2');
        closureh2.textContent = 'Temple Closures';
        schedulecard.appendChild(closureh2);
        let closures = document.createElement('ul');
        closures.classList.add('closureslist');
        schedulecard.appendChild(closures);

        //Add Closures to list
        temple.closures.forEach(closure => {
            let closureitem = document.createElement('li');
            closureitem.classList.add('closure');
            //console.log(closure)
            closureitem.textContent = (closure);
            closures.appendChild(closureitem);
        });
       
        // ordenance schedule H2 with ul
        let ordananceh2 = document.createElement('h2');
        ordananceh2.textContent = 'Ordinance Schedule';
        schedulecard.appendChild(ordananceh2);
        let ordanance = document.createElement('ul');
        schedulecard.appendChild(ordanance);
        
        let scheduleli = document.createElement('li');
        scheduleli.textContent = temple.ordinanceschedule;
        ordanance.appendChild(scheduleli)

        // session schedule H2 with ul
        let sessionh2 = document.createElement('h2');
        sessionh2.textContent = 'Session Schedule';
        schedulecard.appendChild(sessionh2);
        let session = document.createElement('ul');
        schedulecard.appendChild(session);
        
        let sessionli = document.createElement('li');
        sessionli.textContent = temple.sessionschedule;
        session.appendChild(sessionli);
        
        //Create history list
        let historycard = document.createElement('div');
        historycard.classList.add('historylist');

        let historyh2 = document.createElement('h2');
        historyh2.textContent = "Temple History";
        historycard.appendChild(historyh2);
        
        let templehistory = document.createElement('ul');
        templehistory.classList.add('historylist');
        historycard.appendChild(templehistory)

        //Add history to list
        temple.history.forEach(inevent => {
            let event = document.createElement('li');
            event.classList.add('closure');
            //console.log(templehistory)
            event.textContent = `${inevent.event} on ${inevent.date}`;
            templehistory.appendChild(event);
        });
   
        //Create services list
        let servicesection = document.createElement('div');
        servicesection.classList.add('servicescard');
        
        let servicesh2 = document.createElement('h2');
        servicesh2.textContent = 'Provided Services';
        servicesection.appendChild(servicesh2);

        let templeservices = document.createElement('ul');
        templeservices.classList.add('serviceslist');
        servicesection.appendChild(templeservices)
        
        
        //Add services to list
        temple.services.forEach(inservice => {
            let service = document.createElement('li');
            service.classList.add('service');
            //console.log(service)
            service.textContent = (`${inservice}`);
            templeservices.appendChild(service);
        });
      
        /*----Like Button-----*/
        likebtn = document.createElement('button');
        likebtn.classList.add('likebtn');
        likebtn.id = `btn${temple.name.replace(/ /g, "")}`;
        likebtn.addEventListener('click',()=>{
            likestatus(temple.name.replace(/ /g, ""))
        })
        
        const likespan = document.createElement('span');
        likespan.textContent = 'Like';
        likespan.id = `like${temple.name.replace(/ /g, "")}`;
        likebtn.appendChild(likespan);
        
        let likedtemplelist = JSON.parse(localStorage.getItem('strippedtemplename')) || [];
        if(likedtemplelist.includes(temple.name.replace(/ /g, ""))){
            likespan.classList.add('liked'); 
            likebtn.classList.add('btnliked'); 
        } else{
            likespan.classList.add('likedefault');
        }
        
        //console.log(likebtn)
        
        // Add/append the section(card) with the h2 element
        card.appendChild(h2);
        card.appendChild(templeimage);
        card.appendChild(contactsection);
        card.appendChild(servicesection);
        card.appendChild(schedulecard);
        card.appendChild(historycard);
        card.appendChild(likebtn);


        
      
        // Add/append the existing HTML div with the cards class with the section(card)
        //console.log(card)
        templemain.appendChild(card); 

    
    }

function likestatus(strippedtemplename){
    
    // retrieve temple list (Or create a blank array if there isn't one saved yet),
    let likedtemples = JSON.parse(localStorage.getItem('strippedtemplename')) || [];
    //console.log(strippedtemplename)
    if(likedtemples.includes(strippedtemplename)){
        //console.log('yup');
        document.querySelector(`#like${strippedtemplename}`).textContent = "Like";
        newlikedtemples = likedtemples.filter((value)=>{
            //console.log(`testvalue${value.value}`);
            //console.log(strippedtemplename);
            return(value != strippedtemplename);
        })
        localStorage.setItem('strippedtemplename', JSON.stringify(newlikedtemples));
        //console.log(newlikedtemples);
        
    }else{
        //console.log('nope');
        document.querySelector(`#like${strippedtemplename}`).textContent = "Liked!";
        // add temple
        likedtemples.push(strippedtemplename);
        //push it back to local Storage
        localStorage.setItem('strippedtemplename', JSON.stringify(likedtemples));
        }
    document.querySelector(`#like${strippedtemplename}`).classList.toggle('likedefault');
    document.querySelector(`#like${strippedtemplename}`).classList.toggle('liked');
    document.querySelector(`#btn${strippedtemplename}`).classList.toggle('btnliked');

}