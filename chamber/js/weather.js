

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5781087&units=imperial&appid=f5754c8dd8285a6e865afb1599d2c869";

fetch(apiURL)
    .then((response)=> response.json())
    .then((jsObject)=> {
        //console.log(jsObject)
        const currenttemp = jsObject.main.temp;
        const displaytemp = currenttemp.toFixed(1);

        const currentwspeed = jsObject.wind.speed;
        const displaywspeed = currentwspeed.toFixed(1);
    
        //console.log(displaywspeed)

        document.querySelector("#degrees").innerHTML = displaytemp;
        document.querySelector("#windspeed").innerHTML = displaywspeed;

        const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
        const desc = jsObject.weather[0].description;
        let properdesc = desc.split(' ').map(propercase).join(' ');
        //console.log(`${properdesc}`);
        document.querySelector('#weathericon').setAttribute('src', iconsrc);
        document.querySelector('#weathericon').setAttribute('alt', desc);
        document.querySelector('#weathericon').setAttribute('width', 75);
        document.querySelector('#weathericon').setAttribute('height', 75);
        document.querySelector('figcaption').textContent = properdesc;

        if(currenttemp <= 50 && currentwspeed > 3){
            let windchill = (35.74 + (0.6215 * currenttemp))-(35.75 * Math.pow(currentwspeed,0.16)) + (0.4275*currenttemp*Math.pow(currentwspeed,0.16));
            windchill = Math.round((windchill + Number.EPSILON) * 10) / 10;
            document.querySelector("#windchill").innerHTML = `${windchill}&#176;F`;
            //console.log(`WIND CHILL ${windchill}`)
        } else{
            document.querySelector("#windchill").innerHTML = "N/A";
            //console.log(`WIND CHILL is 4`)
        }
    });


function propercase(word){
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`
}



/*

const temp = parseFloat(document.querySelector("#degrees").innerHTML)
const windspeed = parseFloat(document.querySelector("#windspeed").innerHTML)



if(temp <= 50 && windspeed > 3){
    let windchill = (35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16));
    windchill = Math.round((windchill + Number.EPSILON) * 10) / 10;
    document.querySelector("#windchill").innerHTML = `${windchill}&#176;F`;
} else{
    "N/A"
}

*/