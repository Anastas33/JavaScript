'use strict';

let buttons = document.querySelectorAll('button');
let cart = document.querySelector('.cart')

buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        handleClick(event);
    });
});

function handleClick(clickedButtonEvent) {
    const cardNode = clickedButtonEvent.target.parentNode;

    const card = {
        wrap: cardNode,
        id: cardNode.querySelector('.id'),
        img: cardNode.querySelector('img'),
        name: cardNode.querySelector('.name'),
        price: cardNode.querySelector('.price'),
    };

    addToCard(card);
};

function addToCard(card) {
    cart.insertAdjacentHTML('afterbegin', card);
};


