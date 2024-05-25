const checkboxes = document.querySelectorAll('.option__input');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            createBadge(this);
        } else {
            removeBadge(this);
        }
    });
});

// Функция для создания бейджа
function createBadge(checkbox) {
    const label = checkbox.nextElementSibling; 
    const badgeContainer = document.querySelector('.form__badge');

    const badgeItem = document.createElement('div');
    const badgeDescription = document.createElement('span');
    const badgeButton = document.createElement('button');
    const badgeButtoninfo = document.createElement('span');
    badgeItem.classList.add('badge__item');
    badgeDescription.classList.add('badge__description');
    badgeDescription.textContent = label.textContent.trim();
    badgeButton.classList.add('badge__button');
    badgeButtoninfo.classList.add('visually-hidden');
    badgeButtoninfo.textContent = 'удалить этот фильтр';

    badgeButton.addEventListener('click', function() {
        badgeItem.remove(); 
        checkbox.checked = false; 
    });
    badgeButton.appendChild(badgeButtoninfo)
    badgeItem.appendChild(badgeDescription);
    badgeItem.appendChild(badgeButton);
    badgeContainer.appendChild(badgeItem);
}

function removeBadge(checkbox) {
    const label = checkbox.nextElementSibling; 
    const badgeItems = document.querySelectorAll('.badge__item'); 

    badgeItems.forEach(badgeItem => {
        if (badgeItem.querySelector('.badge__description').textContent.trim() === label.textContent.trim()) {
            badgeItem.remove(); 
        }
    });
}