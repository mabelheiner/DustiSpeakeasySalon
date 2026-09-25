const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('#nav-links');
toggle.addEventListener('click', (event) => {

    if (toggle.textContent == 'X') {
        toggle.textContent = '☰';
    } else {
        toggle.textContent = "X"
    }
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    
});
links.addEventListener('click', (event) => {
    if (event.target.matches('a')) {
        links.classList.remove('open');
        toggle.textContent = '☰'
        toggle.setAttribute('aria-expanded', 'false');
    }
    
});
document.querySelector('#year').textContent = new Date().getFullYear();