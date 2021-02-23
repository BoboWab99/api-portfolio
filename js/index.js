const navbtn = document.querySelector('.nav-btn');
const navlinks = document.querySelectorAll('.mynav_link');
const header = document.querySelector('.header');

navbtn.addEventListener('click',() => {
    header.classList.toggle('show-nav');
});

navlinks.forEach(link => {
    link.addEventListener('click', () => {
        header.classList.remove('show-nav');
    });
});
