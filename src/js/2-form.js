const formEl = document.querySelector ('.feedback-form');
const formData = {
    email: '',
    message: '',
};
function saveToLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
};
function getFromLS(key, defaultValue) {
    try {
        return JSON.parse(localStorage.getItem(key));
    } catch {
        return defaultValue || localStorage.getItem(key);
    }
}

formEl.addEventListener('input', e => {
    const email = e.currentTarget.elements.email.value;
    const message = e.currentTarget.elements.message.value;

    formData.email = email;
    formData.message = message;
    saveToLS('formData', formData);
});

document.addEventListener('DOMContentLoaded', () => {
    const lsData = getFromLS('formData');
    if(lsData) {
        formData.email = lsData.email || '';
        formData.message = lsData.message || '';
        formEl.elements.email.value = formData.email;
        formEl.elements.message.value = formData.message;
    } 
});

formEl.addEventListener('submit', (e) => {
    e.preventDefault();

if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
}
console.log('Submitted', formData);
formEl.reset();
localStorage.removeItem('formData');
formData.email = '';
    formData.message = '';
});