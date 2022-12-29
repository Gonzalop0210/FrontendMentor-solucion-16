const form = document.querySelector('.form');

const className = document.querySelector('.input__name');
const labelName = document.querySelector('.text__error__name');
const classLast = document.querySelector('.input__lastName');
const labelLast = document.querySelector('.text__error__last');
const classEmail = document.querySelector('.input__email');
const labelEmail = document.querySelector('.text__error__email');
const classPassword = document.querySelector('.input__password');
const labelPassword = document.querySelector('.text__error__password');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = form.elements.name;
    const lastName = form.elements.lastName;
    const email = form.elements.email;
    const password = form.elements.password;

    if (!name.value) {
        className.classList.remove('mostrar__icono__error');
        labelName.classList.remove('text__error__ocultar');
        className.classList.add('border__error');
        className.placeholder = '';
    }
    
    if (!lastName.value) {
        classLast.classList.remove('mostrar__icono__error');
        labelLast.classList.remove('text__error__ocultar');
        classLast.classList.add('border__error');
        classLast.placeholder = '';
    }

    if (!email.value) {
        classEmail.classList.remove('mostrar__icono__error');
        labelEmail.classList.remove('text__error__ocultar');
        classEmail.classList.add('border__error');
        classEmail.placeholder = 'email@example/com';
        classEmail.classList.add('error__correo');
    }

    if (!password.value) {
        classPassword.classList.remove('mostrar__icono__error');
        labelPassword.classList.remove('text__error__ocultar');
        classPassword.classList.add('border__error');
        classPassword.placeholder = '';
    }

    if (name.value && lastName.value && email.value && password.value) {
        form.submit();
    }
});