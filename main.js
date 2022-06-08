const name = 'Daria';
const age = "31";


console.log(`Hej! Mam na imię ${name} i mam ${age} lat.`);




const hamburger = document.querySelector('.hamburger--js');

hamburger.addEventListener('click', () => {
    const nav = document.querySelector('.navigation--js');
    nav.classList.toggle('navigation--open');
})