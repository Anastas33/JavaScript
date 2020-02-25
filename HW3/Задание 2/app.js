'use strict';

for (let i = 0; i <= 10; i++) {
    let result = i % 2;
    if (i == 0) {
        console.log(i + ' - это ноль');
    } else if (result == 0) {
        console.log(i + ' - четное число');
    } else {
        console.log(i + ' - нечетное число');
    }
}