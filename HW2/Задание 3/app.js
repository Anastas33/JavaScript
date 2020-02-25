'use strict';

let a = parseInt(prompt('Введите первое любое целочисленное значение'));
let b = parseInt(prompt('Введите второе любое целочисленное значение'));

if (a >= 0 && b >= 0) {
    alert('Разность чисел равна ' + (a - b));
} else if (a < 0 && b < 0) {
    alert('Произведение чисел равно ' + (a * b));
} else {
    alert('Сумма чисел равна ' + (a + b));
}


Math.sign(a);
