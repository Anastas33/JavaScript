'use strict';

let showButton = document.getElementById('show');
let hideButton = document.getElementById('hide');
let div = document.querySelector('div');

showButton.addEventListener ('click', function(event) {
    div.style.display = 'block';
});

hideButton.addEventListener ('click', function(event) {
    div.style.display = 'none';
})