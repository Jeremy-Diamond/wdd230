// Easy Version

//Set the current date
const todaysDate = new Date()

//Fill in last modified date
document.querySelector("#lastUpdated").textContent = `Last Updated: ${document.lastModified}`;

//Add formatted date to header
const formateddate = new Intl.DateTimeFormat("en-UK",{dateStyle: "full"}).format(todaysDate);
document.querySelector("#date").textContent = formateddate;