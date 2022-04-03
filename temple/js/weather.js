const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=40.77&lon=-111.89&exclude=minutely,hourly&units=imperial&appid=f5754c8dd8285a6e865afb1599d2c869';
const forcastcontainer = document.querySelector('.forcastcontainer');const myalert = document.querySelector('.alert');
fetch(apiURL)
    .then((response)=> response.json())
    .then((jsObject)=> {
        //console.log(jsObject);
        
        //DOCUMENTATION SAID THAT IF THERE ARE NO ALERTS  THEY ARE NOT PART OF THE RESPONCE, SO I USED THE SAMPLE
        addfakealert();
        
        const currenttemp = jsObject.current.temp;
        const displaytemp = currenttemp.toFixed(1);

        document.querySelector('#degrees').innerHTML = displaytemp;
        document.querySelector('#humidity').innerHTML = jsObject.current.humidity;


        const iconsrc= `https://openweathermap.org/img/w/${jsObject.current.weather[0].icon}.png`;
        //console.log(iconsrc)
        const desc = jsObject.current.weather[0].description;
        let properdesc = desc.split(' ').map(propercase).join(' ');
        //console.log(`${properdesc}`);
        document.querySelector('#weathericon').setAttribute('src', iconsrc);
        document.querySelector('#weathericon').setAttribute('alt', desc);
        document.querySelector('#weathericon').setAttribute('width', 75);
        document.querySelector('#weathericon').setAttribute('height', 75);
        document.querySelector('figcaption').textContent = properdesc;

        // create forcastlist
        const forcastdays = jsObject['daily'];
        //console.log(forcastdays)
        //console.log(forcastdays[0])
        
        // create count of objects 
        let daycount = [1,2,3]; // THREE DAY FORCST
        //let daycount = Array.from(Array(forcastdays.length).keys()); // FULL FORCAST
        //console.log(daycount)

        daycount.forEach(day =>{
           createforcastcard(forcastdays[day]);
        })

    });

function createforcastcard(day){
    //console.log(day);

    // Create card
    let daycard = document.createElement('div');
    daycard.classList.add('daycard');
    //console.log(daycard);
    forcastcontainer.appendChild(daycard);
    
    //-----set dates------
    let weatherdate = new Date(day.dt * 1000);
    //console.log(weatherdate);
    const monthday = `${weatherdate.getMonth()+1}/${weatherdate.getDate()}`;
    //console.log(monthday);
    const weekday = weatherdate.toLocaleString('default',{weekday: 'short'});
    //console.log(weekday);

    //-----add date info
    let dates = document.createElement('h2');
    dates.classList.add('date');
    daycard.appendChild(dates);
    let headerdate = document.createElement('span');
    headerdate.textContent = weekday;
    dates.appendChild(headerdate);
    let daymonth = document.createElement('span');
    daymonth.textContent = monthday;
    dates.appendChild(daymonth);

    //-------set image
    const iconsrc = `https://openweathermap.org/img/w/${day.weather[0].icon}.png`;
    //console.log(iconsrc);
    const icondesc = `${day.weather[0].description} image`;
    //console.log(icondesc);

    //-----ADD IMAGE TO DOCUMENT
    let weatherimage = document.createElement('img')
    weatherimage.setAttribute('src', iconsrc);
    weatherimage.setAttribute('alt', `imge for ${icondesc}`);
    weatherimage.setAttribute('loading', 'lazy');
    weatherimage.setAttribute('width', '75');
    weatherimage.setAttribute('height', '75');
    daycard.appendChild(weatherimage);
    
    //-----set temps
    const hightemp = `${day.temp.max.toFixed(0)}°`;
    //console.log(hightemp);
    const lowtemp = `/${day.temp.min.toFixed(0)}°`;
    //console.log(lowtemp);

    //----ADD TEMP TO DOCUMENT
    let tempdiv = document.createElement('div')
    tempdiv.classList.add('temp');
    daycard.appendChild(tempdiv);
    let maxtemp = document.createElement('span');
    maxtemp.classList.add('high');
    maxtemp.textContent = hightemp;
    tempdiv.appendChild(maxtemp);
    let mintemp = document.createElement('span');
    mintemp.classList.add('low');
    mintemp.textContent = lowtemp;
    tempdiv.appendChild(mintemp);


    //-------set Probability of Precipitation POP
    
    let precipdiv = document.createElement('div')
    precipdiv.classList.add('precip');
    daycard.appendChild(precipdiv);

    let raindrop = document.createElement('img')
    raindrop.setAttribute('src', 'https://jeremy-diamond.github.io/wdd230/temple/images/raindrop.png');
    raindrop.setAttribute('alt', 'Image of a drop of rain');
    raindrop.setAttribute('loading', 'lazy');
    raindrop.setAttribute('width', '25');
    raindrop.setAttribute('height', '25');
    precipdiv.appendChild(raindrop);

    const poppre = day.pop * 100;
    const poppost = poppre.toFixed(0);
    const pop = `${poppost}%`;
    //console.log(pop);

    let precippercent = document.createElement('span');
    precippercent.textContent = pop;
    precipdiv.appendChild(precippercent)


    

    // Create date
   // let nextday = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1 )
    //console.log(today);
    //console.log(nextday);
}

function propercase(word){
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
}

function addfakealert(){
    
    if((Math.random() < 0.3) === true){ //30% probability of getting true
        fakeURL = 'data/fakealert.json'
        fetch(fakeURL)
            .then((response)=> response.json())
            .then((alerts)=> {
            //console.log(alerts); 
            const alert = document.createElement('div');
            document.querySelector('header').prepend(alert) ; 
            alert.classList.add('alert');
            
            const alerttext = document.createElement('p')
            alerttext.textContent = alerts.description[0].description;
            
            const h2alert = document.createElement('h2');
            h2alert.textContent = `${alerts.description[0].headline}!`;
            alert.append(h2alert);
            alert.append(alerttext)

            const closebutton = document.createElement('span');
            closebutton.classList.add('closealert');
            closebutton.innerHTML = '&times';
            closebutton.addEventListener('click', () => {alert.classList.add('hide')}, false);
            h2alert.append(closebutton);

        });
    }else{
        return
    }
}



