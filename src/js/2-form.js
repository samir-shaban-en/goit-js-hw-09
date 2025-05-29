const storageKey = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');

const formData = {
  email: '',
  message: '',
};

function formHandler(e) {
  const emailValue = e.currentTarget.email.value;
  const messageValue = e.currentTarget.message.value;

  formData.email = emailValue;
  formData.message = messageValue;

  localStorage.setItem(storageKey, JSON.stringify(formData));
}

formEl.addEventListener('input', formHandler);

function addStorageValueToInput(storageValue) {
  if (!storageValue) {
    return;
  }

  const parsedValue = JSON.parse(storageValue);

  formEl.elements.email.value = parsedValue.email;
  formEl.elements.message.value = parsedValue.message;

  formData.email = parsedValue.email;
  formData.message = parsedValue.message;
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
