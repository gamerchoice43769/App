// Responsive Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Smooth Scroll for Nav Links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            window.scrollTo({
                top: target.offsetTop - 65,
                behavior: 'smooth'
            });
            if (window.innerWidth < 700) {
                menu.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        }
    });
});

// Simple Animation on Load
window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.hero').style.animation = "fadeIn 1.1s";
});
