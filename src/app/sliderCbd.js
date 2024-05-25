const sliderCbd = document.getElementById('slider-cbd');
const cbdValue = document.getElementById('cbd_max');

noUiSlider.create(sliderCbd, {
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

sliderCbd.noUiSlider.on('update', (values, handle) => {
    cbdValue.value = `${Math.round(values[handle])}%`;
});

cbdValue.addEventListener('change', () => {
    sliderCbd.noUiSlider.set(this.value);
});

toggleTooltips(sliderCbd); 