

const hamburgerBtn = document.querySelector('.hambugerBtn');
const primaryNav = document.querySelector('.primaryNav')

hamburgerBtn.addEventListener('click', () => {primaryNav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) primaryNav.classList.remove('responsive')};
