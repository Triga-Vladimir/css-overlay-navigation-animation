const btn = document.querySelector('.menu-toggle');

btn.addEventListener('click', onClick);

function onClick() {
    document.querySelector('body').classList.toggle('open');
}