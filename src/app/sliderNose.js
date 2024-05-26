document.querySelectorAll('.radio-input').forEach(radio => {
    radio.addEventListener('change', function () {
        const radios = document.querySelectorAll('.radio-input');
        radios.forEach((r, index) => {
            if (index <= Array.from(radios).indexOf(this)) {
                r.closest('.slider-nose__item').classList.add('active');
            } else {
                r.closest('.slider-nose__item').classList.remove('active');
            }
        });
    });
});