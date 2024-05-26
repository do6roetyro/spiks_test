const buttons = document.querySelectorAll('.option__button');

buttons.forEach(button => {
    button.addEventListener('click', event => {
        const container = event.currentTarget.closest('.option__element');
        const list = container.querySelector('.option__list');
        const icons = button.querySelectorAll('.option__icon');
        list.classList.toggle('visible');
        icons.forEach(icon => icon.classList.toggle('rotate'));
    });
});