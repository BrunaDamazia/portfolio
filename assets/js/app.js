const header = document.querySelector('#header');
const toggleButtons = document.querySelectorAll('.header .toggle');
const links = document.querySelectorAll('nav ul li a');

for (const button of toggleButtons) {
  button.addEventListener('click', () => {
    header.classList.toggle('show');
  });
}

for (const link of links) {
  link.addEventListener('click', () => {
    header.classList.remove('show');
  });
}