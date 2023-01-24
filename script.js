// show/hide bio description
function toggleDescription(button) {
  button.target.parentElement.classList.toggle('bio-box__info--active');
}

const readMoreBtns = document.querySelectorAll('.bio-box__button');
for (let btn of readMoreBtns) {
  btn.addEventListener('click', (btn) => toggleDescription(btn));
}

// form submission
const form = document.querySelector('.submission__form');
const submissionInfo = document.querySelector('.submission__info');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
  submissionInfo.classList.add('info__active');
});
