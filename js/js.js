const items = document.querySelectorAll('.projects-li');
const prevBtn = document.querySelector('.previous');
const nextBtn = document.querySelector('.next');
const queryMatch = window.matchMedia('(max-width: 768px)');
const projectImgs = document.querySelectorAll('.project-img');

let activeItem = 0;

function setActiveItem() {
  activeItem += Number(this.value);

  if(activeItem > (Number(items.length) - 1)) {
    activeItem = 0;
  }

  if(activeItem < 0) {
    activeItem = (Number(items.length) - 1);
  }

  items.forEach(item => item.classList.remove('active'));

  items[activeItem].classList.add('active');
}

prevBtn.addEventListener('click', setActiveItem);
nextBtn.addEventListener('click', setActiveItem);

if(queryMatch.matches) {
  projectImgs.forEach(item => {
    item.src = './img/' + item.dataset.name + 'mobile-screenshot.png';
  });
}