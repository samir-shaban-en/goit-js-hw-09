const storageKey = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');

const formData = {
  email: '',
  message: '',
};

function formHandler(e) {
  const emailValue = e.currentTarget.email.value;
  const messageValue = e.currentTarget.message.value;

  formData.email = emailValue.trim();
  formData.message = messageValue.trim();
  console.log(formData);
  localStorage.setItem(storageKey, JSON.stringify(formData));
}

formEl.addEventListener('input', formHandler);

function addStorageValueToInput(storageValue) {
  if (!storageValue) {
    return;
  }

  const parsedValue = JSON.parse(storageValue);

  const emailValue = parsedValue.email;
  const messageValue = parsedValue.message;

  formEl.elements.email.value = emailValue;
  formEl.elements.message.value = messageValue;

  formData.email = emailValue;
  formData.message = messageValue;
}

addStorageValueToInput(localStorage.getItem(storageKey));

function formElSubmit(e) {
  e.preventDefault();

  if (formData.email === '' || formData.message === '') {
    console.log('«Fill please all fields».');
    return;
  }
  console.log(formData);
  localStorage.removeItem(storageKey);
  formData.email = '';
  formData.message = '';
  e.currentTarget.reset();
}

formEl.addEventListener('submit', formElSubmit);
