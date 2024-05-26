const toggleTooltips = slider => {
    const tooltips = slider.querySelectorAll('.noUi-tooltip');
    
    slider.noUiSlider.on('start', function () {
        tooltips.forEach(tooltip => {
            tooltip.classList.add('visible');
        });
    });

    slider.noUiSlider.on('end', function () {
        tooltips.forEach(tooltip => {
            tooltip.classList.remove('visible');
        });
    });
};
