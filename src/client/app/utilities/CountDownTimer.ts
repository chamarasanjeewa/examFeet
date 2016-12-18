import { ILiteEvent } from './ILiteEvent'
import { LiteEvent } from './LiteEvent'

export class CountDownTimer {

    private _countDownDuration: number;
    private _elapsedDuration: number;
    private _intervalTimer: any;
    private _intervalTimerInterval: number;

    get renamingDuration(): number {
        return this._countDownDuration - this._elapsedDuration;
    }

    get countDownDuration(): number {
        return this._countDownDuration;
    }
    set countDownDuration(value: number) {
        this._countDownDuration = value;
    }

    private _onElapsed: LiteEvent<Date>;

    get onElapsed(): ILiteEvent<Date> {
        return this._onElapsed;
    }

    constructor(countDownDuration: number) {

        this._intervalTimerInterval = 500;
        this._elapsedDuration = 0;
        this._countDownDuration = countDownDuration;
        this._onElapsed = new LiteEvent<Date>();
    }

    private updateTimerProperties() {
        this._elapsedDuration += this._intervalTimerInterval;
        if (this._elapsedDuration >= this.countDownDuration) {

            this.stop();
            this._onElapsed.trigger(new Date());
        }
    }

    start() {
        if (!!this._intervalTimer) {
            console.log('Timer is already running... Stop to start again.');
        }
        var self = this;
        this._intervalTimer = setInterval(() => {
            this.updateTimerProperties();
        }, this._intervalTimerInterval);
    }

    stop() {
        if (!this._intervalTimer) { return; }

        clearInterval(this._intervalTimer);
        this._intervalTimer = null;
    }

    reStart() {
        this.stop();
        this._elapsedDuration = 0;
        this.start();
    }
}
