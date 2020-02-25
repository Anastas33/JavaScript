'use strict';

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

let filteredByPhoto = function (product) {
    if (product.photos != undefined && product.photos.length != 0) {
        return true;
    } else {
        return false;
    }
}
console.log(products.filter(filteredByPhoto));

let sortedProducts = function (a, b) {
    if (a.price > b.price) {
        return 1;
    } else if (a.price < b.price) {
        return -1;
    } else {
        return 0;
    }
}
console.log(products.sort(sortedProducts));
