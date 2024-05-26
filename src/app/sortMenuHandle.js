const sortButton = document.querySelector('.sort__button');
const sortList = document.querySelector('.sort__list');

sortButton.addEventListener('click', () => {
    sortList.classList.toggle('visible');
});