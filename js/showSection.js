const showButtons = document.querySelectorAll(
  '[data-js="show-section-button"]'
);
const hideButtons = document.querySelectorAll('.hide-button');
const sections = document.querySelectorAll('.section-container');
const sectionModal = document.querySelector('.section-list-container');
const buttonModal = document.querySelector('.modal-button');

const sectionsMap = new Map();

showButtons.forEach((item, index) => {
  sectionsMap.set(item.value, sections[index]);

  item.addEventListener('click', function () {
    toggleActiveSection(this.value);
    sectionListContainer.classList.remove('modal-active');
    buttonModal.classList.remove('active');
  });
});

hideButtons.forEach(item =>
  item.addEventListener('click', function () {
    toggleActiveSection(this.value);
  })
);

function toggleActiveSection(value) {
  sectionsMap.get(value).classList.toggle('active');
}
