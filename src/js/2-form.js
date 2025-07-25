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

    const lsData = getFromLS('formData');
    if(lsData) {
        formData.email = lsData.email || '';
        formData.message = lsData.message || '';
        formEl.elements.email.value = formData.email;
        formEl.elements.message.value = formData.message;
}

formEl.addEventListener('input', e => {
    const email = e.currentTarget.elements.email.value;
    const message = e.currentTarget.elements.message.value;

    formData.email = email;
    formData.message = message;
    saveToLS('formData', formData);
});


formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = formData.email.trim();
    const message = formData.message.trim();

if (!email || !message) {
    alert('Fill please all fields');
    return;
}
console.log('Submitted', {email, message});
formEl.reset();
localStorage.removeItem('formData');
formData.email = '';
    formData.message = '';
});