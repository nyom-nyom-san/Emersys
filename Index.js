// === Reveal animation on scroll ===
const reveals = document.querySelectorAll('.reveal');

function handleScroll() {
    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 30;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', handleScroll);
handleScroll(); // Trigger on load


// === Hamburger menu ===
const ham = document.querySelector('.ham');
const navMenu = document.querySelector('.offscreen');

ham.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    ham.classList.toggle('active')
});


// == Closing Nav ==
const navLinks = document.querySelectorAll('.offscreen a')

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        //Delaying
        setTimeout(() => {
            ham.classList.remove('active')
            navMenu.classList.remove('active')
        }, 250)
    })
})





