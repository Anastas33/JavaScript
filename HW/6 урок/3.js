'use strict';

let buttons = document.querySelectorAll('button');
let basket = document.querySelector('.basket')

buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        let cardNode = event.target.parentNode;
        let id = cardNode.querySelector('.id').innerText;
        let name = cardNode.querySelector('.name').innerText;
        let price = cardNode.querySelector('.price').innerText;
        cart.addCards({
            id: id,
            name: name,
            price: price
        });
    });
});

let cart = {
    cards: {},

    addCards(card) {
        this.addCardToObject(card);
        this.addProductToBasket(card);
        this.makeTotalSum();
    },

    addCardToObject(card) {
        if (this.cards[card.id] == undefined) {
            this.cards[card.id] = {
                name: card.name,
                price: card.price,
                count: 1
            }
        } else {
            this.cards[card.id].count++;
        }
    },

    addProductToBasket(card) {
        let cardExist = document.querySelector(`.cardCount[data-id='${card.id}']`);
        if (cardExist) {
            cardExist.textContent++;
            return;
        }
        let cardDiv = `
        <div class='product added'>
            <p class="id">${card.id}</p>
            <p>Наименование товара: <span class="name"> ${card.name}</span></p>
            <p>Стоимость товара: <span class="price"> ${card.price}</span> руб.</p>
            <p>Количество: <span class='cardCount' data-id='${card.id}'> 1</span></p>
        </div>
    `;
    basket.insertAdjacentHTML('beforeend', cardDiv);
    },

    makeTotalSum() {
        document.querySelector('.sum').textContent = this.getTotalSum();
    },

    getTotalSum() {
        let sum = 0;
        for (let key in this.cards) {
            sum += this.cards[key].price * this.cards[key].count;
        }
        return sum;
    }
}



    
    



