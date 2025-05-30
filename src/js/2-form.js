const storageKey = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');

const formData = {
  email: '',
  message: '',
};

function collectValuesToStorageHandler(e) {
  const name = e.target.name;
  const value = e.target.value;

  formData[name] = value.trim();

  localStorage.setItem(storageKey, JSON.stringify(formData));
}

formEl.addEventListener('input', collectValuesToStorageHandler);

function addStorageValueToForm(storageValue) {
  if (!storageValue) {
    return;
  }

  const { email, message } = formEl.elements;

  const { email: parsedEmail, message: parsedMessage } =
    JSON.parse(storageValue);

  email.value = parsedEmail;
  message.value = parsedMessage;

  formData.email = parsedEmail;
  formData.message = parsedMessage;
}

addStorageValueToForm(localStorage.getItem(storageKey));

function formSubmitHandler(e) {
  e.preventDefault();

  const { email, message } = e.currentTarget.elements;

  if (email.value.trim() === '' || message.value.trim() === '') {
    console.log('«Fill please all fields».');

    return;
  }

  console.log(formData);

  localStorage.removeItem(storageKey);
  formData.email = '';
  formData.message = '';
  e.currentTarget.reset();
}

formEl.addEventListener('submit', formSubmitHandler);
