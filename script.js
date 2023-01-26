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
const orderBtn = document.querySelector('.order__button');
const contactForm = document.querySelector('.contact__form');
const orderForm = document.querySelector('.order__form');

contactBtn.addEventListener('click', () => {
  orderForm.classList.remove('active__form');
  contactForm.classList.add('active__form');

  contactBtn.classList.add('active__form-header');
  orderBtn.classList.remove('active__form-header');
});

orderBtn.addEventListener('click', () => {
  contactForm.classList.remove('active__form');
  orderForm.classList.add('active__form');

  orderBtn.classList.add('active__form-header');
  contactBtn.classList.remove('active__form-header');
});

// form submission
const submissionInfo = document.querySelector('.submission__info');
const orderInfo = document.querySelector('.order__info');

const getCustomizedDate = () => {
  const dateTime = new Date().toString();
  const customizedDate = dateTime
    .slice(0, dateTime.indexOf('('))
    .split(' ')
    .slice(1, 5)
    .join('-');

  return customizedDate;
};

contactForm.addEventListener('submit', (e) => {
  const name = e.target.children[0].children[1].value;
  const email = e.target.children[0].children[3].value;
  const message = e.target.children[0].children[5].value;

  e.preventDefault();
  contactForm.reset();
  submissionInfo.classList.add('info__active');

  // store info into localstorage
  const contactObj = { [getCustomizedDate()]: [name, email, message] };

  const contactSubmissions = JSON.parse(
    localStorage.getItem('contactSubmissions')
  );

  if (contactSubmissions) {
    contactSubmissions.push(contactObj);
    localStorage.removeItem('contactSubmissions');
    localStorage.setItem(
      'contactSubmissions',
      JSON.stringify(contactSubmissions)
    );
  } else {
    localStorage.setItem('contactSubmissions', JSON.stringify([contactObj]));
  }
});

orderForm.addEventListener('submit', (e) => {
  const name = e.target.children[0].children[1].value;
  const email = e.target.children[0].children[3].value;
  const model = e.target.children[0].children[5].value;
  const amount = e.target.children[0].children[7].value;

  e.preventDefault();
  orderForm.reset();
  orderInfo.classList.add('info__active');

  // store info into localstorage
  const orderObj = { [getCustomizedDate()]: [name, email, model, amount] };

  const orderSubmissions = JSON.parse(localStorage.getItem('orderSubmissions'));

  if (orderSubmissions) {
    orderSubmissions.push(orderObj);
    localStorage.removeItem('orderSubmissions');
    localStorage.setItem('orderSubmissions', JSON.stringify(orderSubmissions));
  } else {
    localStorage.setItem('orderSubmissions', JSON.stringify([orderObj]));
  }
});
