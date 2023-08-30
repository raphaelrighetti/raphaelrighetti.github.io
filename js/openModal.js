const modalButton = document.querySelector('.modal-button');
const sectionListContainer = document.querySelector('.section-list-container');
const sectionContainers = document.querySelectorAll('.section-container');

modalButton.addEventListener('click', toggleModalActive);

function toggleModalActive() {
  this.classList.toggle('active');
  sectionListContainer.classList.toggle('modal-active');

  sectionContainers.forEach(item => item.classList.remove('active'));
}
