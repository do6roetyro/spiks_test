const sliderThc = document.getElementById('slider-thc');
const thcValue = document.getElementById('thc_max');

noUiSlider.create(sliderThc, {
    start: 65,
    connect: 'lower',
    range: {
        'min': 0,
        'max': 100
    },
    format: {
        to: (value) => Math.round(value),
        from: (value) => Math.round(value),
    },
    tooltips: {
        to: (value) => `${Math.round(value)}%`,
        from: (value) => Number(value.replace('%', ''))
    }
});

sliderThc.noUiSlider.on('update', (values, handle) => {
    thcValue.value = `${Math.round(values[handle])}%`;
});

thcValue.addEventListener('change', () => {
    sliderThc.noUiSlider.set(this.value);
});

toggleTooltips(sliderThc); 