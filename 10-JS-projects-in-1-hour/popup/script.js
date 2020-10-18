const openWindow = document.getElementById('open');
const closeWindow = document.getElementById('close');
const container = document.getElementById('container');

openWindow.addEventListener('click', () => {
    container.classList.add('active');
})

closeWindow.addEventListener('click', () => {
    container.classList.remove('active');
})