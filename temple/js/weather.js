const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=40.77&lon=-111.89&units=imperial&appid=f5754c8dd8285a6e865afb1599d2c869";
const forcastcontainer = document.querySelector('.forcastcontainer');

fetch(apiURL)
    .then((response)=> response.json())
    .then((jsObject)=> {
        //console.log(jsObject)

        const currenttemp = jsObject.current.temp;
        const displaytemp = currenttemp.toFixed(1);

        document.querySelector("#degrees").innerHTML = displaytemp;
        document.querySelector("#humidity").innerHTML = jsObject.current.humidity;


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
        let daycount = Array.from(Array(forcastdays.length).keys());
        //console.log(daycount)

        daycount.forEach(day =>{
           createforcastcard(forcastdays[day]);
        })

    });

function createforcastcard(day){
    console.log(day);

    // Create card
    let weathercard = document.createElement('div');
    weathercard.classList.add('weathercard');
    console.log(weathercard);
    forcastcontainer.appendChild(weathercard);
    
    //-----set dates------
    let weatherdate = new Date(day.dt * 1000);
    console.log(weatherdate);
    const monthday = `${weatherdate.getMonth()+1}/${weatherdate.getDate()}`;
    //console.log(monthday);
    const weekday = weatherdate.toLocaleString('default',{weekday: 'short'});
    //console.log(weekday);

    //-----add date info
    let dates = document.createElement('h2');
    dates.classList.add('date');
    weathercard.appendChild(dates);
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
    weathercard.appendChild(weatherimage);
    
    //-----set temps
    const hightemp = `${day.temp.max.toFixed(0)}°`;
    //console.log(hightemp);
    const lowtemp = `/${day.temp.min.toFixed(0)}°`;
    //console.log(lowtemp);

    //----ADD TEMP TO DOCUMENT
    let tempdiv = document.createElement('div')
    tempdiv.classList.add('temp');
    weathercard.appendChild(tempdiv);
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
    weathercard.appendChild(precipdiv);

    let raindrop = document.createElement('img')
    raindrop.setAttribute('src', "https://jeremy-diamond.github.io/wdd230/temple/images/raindrop.png");
    raindrop.setAttribute('alt', 'Image of a drop of rain');
    raindrop.setAttribute('loading', 'lazy');
    raindrop.setAttribute('width', '75');
    raindrop.setAttribute('height', '75');
    precipdiv.appendChild(raindrop);

    
    const pop = `${day.pop * 100}%`;
    //console.log(pop);


    

    // Create date
   // let nextday = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1 )
    //console.log(today);
    //console.log(nextday);
}

function propercase(word){
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
}