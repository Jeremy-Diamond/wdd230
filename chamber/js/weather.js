const temp = parseFloat(document.querySelector("#degrees").innerHTML)
const windspeed = parseFloat(document.querySelector("#windspeed").innerHTML)



if(temp <= 50 && windspeed > 3){
    let windchill = (35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16));
    windchill = Math.round((windchill + Number.EPSILON) * 10) / 10;
    document.querySelector("#windchill").innerHTML = `${windchill}&#176;F`;
} else{
    "N/A"
}