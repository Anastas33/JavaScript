'use strict';

let game = {
    run() {
        while (true) {
            let direction = mover.getDirection();
            if (direction === null) {
                console.log('Игра окончена');
                return;
            }
            let nextPoint = mover.getNextPosition(direction);
            renderer.clear();
            player.move(nextPoint);
            renderer.render();
        }

    },

    init() {
        console.log('Начнем игру');
        renderer.render();
        console.log('Для начала игры напишите "game.run()"');
    }
};

game.init();