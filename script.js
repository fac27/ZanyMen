const contactSubmissions = [];
const orderSubmissions = [];

// toggle bio description
const toggleDescription = (button) => {
  button.target.parentElement.classList.toggle('bio-box__info--active');
};

const readMoreBtns = document.querySelectorAll('.bio-box__button');
for (let btn of readMoreBtns) {
  btn.addEventListener('click', (btn) => toggleDescription(btn));
}

// toggle forms
const contactBtn = document.querySelector('.contact__button');
const contactForm = document.querySelector('.contact__form');

const orderBtn = document.querySelector('.order__button');
const orderForm = document.querySelector('.order__form');

contactBtn.addEventListener('click', () => {
  orderForm.classList.remove('active__form');
  contactForm.classList.add('active__form');

  contactBtn.style.borderBottom = '5px solid red';
  orderBtn.style.borderBottom = 'none';
});

orderBtn.addEventListener('click', () => {
  contactForm.classList.remove('active__form');
  orderForm.classList.add('active__form');

  orderBtn.style.borderBottom = '5px solid red';
  contactBtn.style.borderBottom = 'none';
});

// form submission
const submissionInfo = document.querySelector('.submission__info');
const orderInfo = document.querySelector('.order__info');

contactForm.addEventListener('submit', (e) => {
  const name = e.target.children[0].children[1].value;
  const email = e.target.children[0].children[3].value;
  const message = e.target.children[0].children[5].value;

  const contactObj = { contact: [name, email, message] };
  contactSubmissions.push(contactObj);

  e.preventDefault();
  contactForm.reset();
  submissionInfo.classList.add('info__active');
});

orderForm.addEventListener('submit', (e) => {
  const name = e.target.children[0].children[1].value;
  const email = e.target.children[0].children[3].value;
  const model = e.target.children[0].children[5].value;
  const amount = e.target.children[0].children[7].value;

  const orderObj = { order: [name, email, model, amount] };
  orderSubmissions.push(orderObj);

  e.preventDefault();
  orderForm.reset();
  orderInfo.classList.add('info__active');
});
