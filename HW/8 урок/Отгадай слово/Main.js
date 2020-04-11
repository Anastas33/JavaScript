'use strict';

window.addEventListener('load', () => {
    const task = new Task();
    const game = new Game();
    
    game.init(task);

    game.showWord();
    game.showCounts();
    game.run();

})