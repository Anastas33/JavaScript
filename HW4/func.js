'use strict';

function askForNum() {
    return prompt('Введите целое число от 0 до 999');
};

let number = askForNum();

number = Number(number);

if (!Number.isInteger(number)) {
    number = 123456;
}

number = String(number);

let objNum = {};

switch (number.length) {
    case 3:
        objNum = {
            units: Number(number.charAt(2)),
            tens: Number(number.charAt(1)),
            hundreds: Number(number.charAt(0)),
        }
        break;
    case 2:
        objNum = {
            units: Number(number.charAt(1)),
            tens: Number(number.charAt(0)),
            hundreds: 0,
        }
        break;
    case 1:
        objNum = {
            units: Number(number.charAt(0)),
            tens: 0,
            hundreds: 0,
        }
        break;
    default:
        console.log('Вы ввели не целое число или не число');
        break;
}

console.log(objNum);



