'use strict';

class Status {
    constructor() {
        this.condition = 'playing'
    }

    isStatusPlaying() {
        return this.condition === 'playing';
    }

    setStatusStopped() {
        this.condition = 'stopped';
    }
}