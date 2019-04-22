var phoneMask = new IMask(
    document.getElementById('phone-mask'), {
        mask: '+{7}(000)000-00-00'
    });

new window.JustValidate('.about-self__form', {
    rules: {
        email: {
            required: true,
            email: true
        },
        name: {
            required: true,
            minLength: 3,
            maxLength: 40
        },
        text: {
            required: true,
            maxLength: 1200,
            minLength: 5
        },
        tel: {
            required: true,
        }
    },
    messages: {
        required: 'Обязательное поле для заполнения',
        email: 'Введите эл. адрес. Прим. site@example.ru',
        name: {
            required: 'Обязательное поле для заполнения',
            maxLength: 'Поле не должно превышать более 40 символов',
            minLength: 'Поле должно содержать не менее 3 символов',
        },
        tel: {
            required: 'Обязательное поле для заполнения',
        },
        text: {
            required: 'Обязательное поле для заполнения',
            maxLength: 'Поле не должно превышать более 1200 символов',
            minLength: 'Поле должно содержать не менее 5 символов',
        }
    },
});