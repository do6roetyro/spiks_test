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
    format: {
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

priceMin.addEventListener('change', (event) => {
    const minPrice = parseFloat(event.target.value.replace('$', ''));
    const maxPrice = parseFloat(priceMax.value.replace('$', ''));

    if (minPrice > maxPrice || isNaN(minPrice) || isNaN(maxPrice)) {
        return;
    }

    sliderPrice.noUiSlider.set([minPrice, null]);
});

priceMax.addEventListener('change', (event) => {
    const maxPrice = parseFloat(event.target.value.replace('$', ''));
    const minPrice = parseFloat(priceMin.value.replace('$', ''));

    if (maxPrice < minPrice || isNaN(maxPrice) || isNaN(minPrice)) {
        return;
    }

    sliderPrice.noUiSlider.set([null, maxPrice]);
});

toggleTooltips(sliderPrice);
