'use strict';

window.addEventListener('load', () => {
    const map = new Map();
    const game = new Game();
    const status = new Status();

    game.init(map, status);

    map.renderMap();
    game.initEventHandlers();
});