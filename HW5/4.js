'use strict';

let buttons = document.querySelectorAll('button');
let images = document.querySelectorAll('img');

let desc = document.createElement('div');
desc.innerText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque in numquam voluptate, et aperiam magnam nemo temporibus reprehenderit vel cupiditate iste eius dignissimos quam dicta porro tempore quasi recusandae libero'
desc.classList.add('desc');

buttons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        showText(event);
    });
});

function showText(event) {
    console.dir(event.target.parentNode.childNodes[3]);
    
}