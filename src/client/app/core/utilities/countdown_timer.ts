import { Timer } from './timer'

export class CountDownTimer extends Timer {

    public get renamingDuration(): number {
        return this._triggerDuration - this._elapsedDuration;
    }

    constructor(countDownDuration: number) {
        super(countDownDuration);
    }
}
