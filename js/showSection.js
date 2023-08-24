const showButtons = document.querySelectorAll(
  '[data-js="show-section-button"]'
);
const hideButtons = document.querySelectorAll('.hide-button');
const sections = document.querySelectorAll('.section-container');

const sectionsMap = new Map();

showButtons.forEach((item, index) => {
  sectionsMap.set(item.value, sections[index]);

  item.addEventListener('click', function () {
    toggleActiveSection(this.value);
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
