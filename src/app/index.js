// =require ../core/config/js/index.js
// =require ../core/lib/js/index.js
// =require ./sliderPrice.js
// =require ./sliderThc.js
// =require ./sliderCbd.js
// =require ./optionMenuHandle.js
// =require ./optionCheckboxHandle.js


const sortButton = document.querySelector('.sort__button');
const sortList = document.querySelector('.sort__list');


sortButton.addEventListener('click', () => {

    sortList.classList.toggle('visible');
});


