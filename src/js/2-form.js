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

  const parsedValue = JSON.parse(storageValue);

  formEl.elements.email.value = parsedValue.email;
  formEl.elements.message.value = parsedValue.message;

  formData.email = parsedValue.email;
  formData.message = parsedValue.message;
}

addStorageValueToForm(localStorage.getItem(storageKey));

function formSubmitHandler(e) {
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

formEl.addEventListener('submit', formSubmitHandler);
