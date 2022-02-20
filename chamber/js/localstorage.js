
const lastvisit = localStorage.getItem('lastvisit');

const SECONDS_FACTOR = 1000;
const MINUTES_FACTOR = SECONDS_FACTOR * 60;
const HOURS_FACTOR = MINUTES_FACTOR * 60;
const DAYS_FACTOR = HOURS_FACTOR * 24;

let daysbetween = Date.now() - lastvisit;

let numberofseconds = Math.round(daysbetween / SECONDS_FACTOR);
let numberofminutes =  Math.round(daysbetween / MINUTES_FACTOR);
let numberofhours = Math.round(daysbetween / HOURS_FACTOR);
let numberofdays = Math.round( daysbetween / DAYS_FACTOR);


if(lastvisit === null) {
    document.querySelector(".dayssincelastvisit").textContent = "Welcome to the Diamond City Discover Page!"
} else if (numberofdays >= 1) {
        document.querySelector(".dayssincelastvisit").textContent = `Welcome back! It has been ${numberofdays} days since we have seen you.`
    }else if(numberofhours >= 1){
        document.querySelector(".dayssincelastvisit").textContent = `I knew you would only make it ${numberofhours} hours before needing to come back!`
    }else if (numberofminutes >= 1){
        document.querySelector(".dayssincelastvisit").textContent = `I was sad when you left, but I didn't know it was only going to be ${numberofminutes} minutes!`
    }else{
        document.querySelector(".dayssincelastvisit").textContent = `That is a new record! You couldn't stay away for more than ${numberofseconds} seconds`
    }

localStorage.setItem("lastvisit",Date.now());