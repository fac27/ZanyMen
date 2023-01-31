// toggle bio description
const toggleDescription = (button) => {
  button.target.parentElement.classList.toggle('bio-box__info--active');
};

const readMoreBtns = document.querySelectorAll('.bio-box__button');
for (let btn of readMoreBtns) {
  btn.addEventListener('click', (btn) => toggleDescription(btn));
}

// toggle forms
const contactForm = document.querySelector('.contact__form');
const orderForm = document.querySelector('.order__form');
const formSelectors = document.querySelectorAll('.selector__button');

formSelectors.forEach((button) => {
  button.addEventListener('click', () => {
    contactForm.classList.toggle('active__form');
    orderForm.classList.toggle('active__form');
  });
});

// form submission
const submissionInfo = document.querySelector('.submission__info');
const orderInfo = document.querySelector('.order__info');

const getCustomizedDate = () => {
  const dateTime = new Date().toString();
  // extract date-time formated as mm/dd/yyyy-hour-min-sec
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

  const orderObj = { [getCustomizedDate()]: [name, email, model, amount] };

  const orderSubmissions = JSON.parse(localStorage.getItem('orderSubmissions'));

  if (orderSubmissions) {
    orderSubmissions.push(orderObj);
    localStorage.setItem('orderSubmissions', JSON.stringify(orderSubmissions));
  } else {
    localStorage.setItem('orderSubmissions', JSON.stringify([orderObj]));
  }
});
