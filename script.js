// show/hide bio description
function toggleDescription(button) {
  button.target.parentElement.classList.toggle('bio-box__info--active');
}

const readMoreBtns = document.querySelectorAll('.bio-box__button');
for (let btn of readMoreBtns) {
  btn.addEventListener('click', (btn) => toggleDescription(btn));
}