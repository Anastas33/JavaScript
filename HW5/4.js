'use strict';

let buttons = document.querySelectorAll('button');
let images = document.querySelectorAll('img');

buttons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        handleClick(event);
    });
});

function handleClick(clickedButtonEvent) {
    let cardNode = clickedButtonEvent.target.parentNode;
    let card = {
        wrap: cardNode,
        productName: cardNode.querySelector('.productName'),
        img: cardNode.querySelector('img'),
        button: cardNode.querySelector('button'),
    };

    let buttonText = card.button.innerText;
    if (buttonText === 'Подробнее') {
        showText(card);
    } else if (buttonText === 'Отмена') {
        hideText(card);
    };
};

function showText(card) {
    let desc = document.createElement('div');
    desc.innerText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque in numquam voluptate, et aperiam magnam nemo temporibus reprehenderit vel cupiditate iste eius dignissimos quam dicta porro tempore quasi recusandae libero'
    desc.classList.add('desc');

    card.productName.insertAdjacentElement('afterend', desc);
    card.img.style.display = 'none';
    card.button.innerText = 'Отмена';
};

function hideText(card) {
    card.wrap.querySelector('.desc').remove();
    card.img.style.display = 'block';
    card.button.innerText = 'Подробнее';
};