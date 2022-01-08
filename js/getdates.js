// Easy Version

const options = {weekday: 'long', day:'numeric', month: 'long', year: 'numeric'};
const todaysDate = new Date()

document.querySelector("#currentYear").textContent = todaysDate.getFullYear();
document.querySelector("#lastUpdated").textContent = `Last Updated: ${document.lastModified}`;