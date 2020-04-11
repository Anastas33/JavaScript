'use strict';

/** Здесь будет храниться статус игры, например, играем мы, завершили или остановлено. */
class Status {
    constructor() {
        this.setPaused();
    }

    /** Это значит мы играем */
    setPlaying() {
        this.condition = 'playing';
    }

    /** Это значит мгра на паузе */
    setPaused() {
        this.condition = 'paused';
    }

    /**
     * @returns {boolean} - если мы сейчас играем, тогда true, иначе false.
     */
    isPlaying() {
        return this.condition === 'playing';
    }

    /**
     * @returns {boolean} - если игра сейчас на паузе, тогда true, иначе false.
     */
    isPaused() {
        return this.condition === 'paused';
    }
}