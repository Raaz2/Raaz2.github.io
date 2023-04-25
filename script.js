const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('nav ul');
const links = document.querySelectorAll('nav ul li');

hamburger.addEventListener('click', () => {
    // Toggle hamburger menu
    hamburger.classList.toggle('active');

    // Toggle nav links
    navLinks.classList.toggle('active');

    // Animate nav links
    links.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
});
