
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }


const reservebtn = document.querySelector('.reservebtn');
const reserveform = document.querySelector('.reserveform');

reservebtn.addEventListener('click', () => {reserveform.classList.toggle('showform')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 780) reserveform.classList.remove('showform')};