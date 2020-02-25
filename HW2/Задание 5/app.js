'use strict';

let a = parseInt(prompt('Введите первое число'));
let b = parseInt(prompt('Введите второе число'));
let action = prompt('Введите желаемое действие (сложение, вычитание, умножение, деление');
action = action.toLowerCase();

function getPlus (num1, num2) {
    return num1 + num2;
}

function getMinus (num1, num2) {
    return num1 - num2;
}

function getMulti (num1, num2) {
    return num1 * num2;
}

function getDivis (num1, num2) {
    return num1 / num2;
}

function mathOperation(arg1, arg2, operation) {
    let result = 0;
    switch (operation) {
        case 'сложение':
            result = getPlus(arg1, arg2);
            break;
        case 'вычитание':
            result = getMinus(arg1, arg2);
            break;
        case 'умножение':
            result = getMulti(arg1, arg2);
            break;
        case 'деление':
            result = getDivis(arg1, arg2);
            break; 
        default:
            alert('Вы ввели неверное действие')
            break;
    }
    return result;
}

alert(mathOperation(a, b, action));