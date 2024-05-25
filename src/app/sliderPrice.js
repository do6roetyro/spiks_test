// =require ./showTooltips.js

const sliderPrice = document.getElementById('slider-price');
const priceMin = document.getElementById('price_min');
const priceMax = document.getElementById('price_max');

noUiSlider.create(sliderPrice, {
    start: [234, 7500],
    connect: true,
    range: {
        'min': 0,
        'max': 9999
    },
    format : {
        to: (value) => Math.round(value),
        from: (value) => Math.round(value),
      },
      tooltips: {
        to: (value) => `${Math.round(value)}$`,
        from: (value) => Number(value.replace('$', ''))
    }
   
});

sliderPrice.noUiSlider.on('update', function (values, handle) {
    if (handle === 0) {
        priceMin.value = `${Math.round(values[handle])}$`;
    }
    if (handle === 1) {
        priceMax.value = `${Math.round(values[handle])}$`;
    }
});

priceMin.addEventListener('change', function () {
    sliderPrice.noUiSlider.set([this.value, null]);
});

priceMax.addEventListener('change', function () {
    sliderPrice.noUiSlider.set([null, this.value]);
});

toggleTooltips(sliderPrice);

