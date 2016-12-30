import { ILiteEvent } from './ILiteEvent'
import { LiteEvent } from './LiteEvent'

export class Timer {

    protected _intervalTimer: any;
    protected _intervalTimerInterval: number;
    protected _elapsedDuration: number;
    protected _triggerDuration: number;
    protected _onElapsed: LiteEvent<Date>;

    public get elapsedDuration(): number {
        return this._elapsedDuration;
    }
    public get triggerDuration(): number {
        return this._triggerDuration;
    }
    public set triggerDuration(value: number) {
        this._triggerDuration = value;
    }
    public get onElapsed(): ILiteEvent<Date> {
        return this._onElapsed;
    }

    constructor(duration?: number) {
        this._intervalTimerInterval = 500;
        this._elapsedDuration = 0;
        this._triggerDuration = (!duration) ? null : duration;
        this._onElapsed = new LiteEvent<Date>();
    }

    protected updateTimerProperties(): void {
        this._elapsedDuration += this._intervalTimerInterval;
        if (this._triggerDuration != null && this._elapsedDuration >= this._triggerDuration) {
            this.stop();
            this._onElapsed.trigger(new Date());
        }
    }

    public start() {
        if (!!this._intervalTimer) { console.log('Timer is already running... Stop to start again.'); }

        this._intervalTimer = setInterval(() => {
            this.updateTimerProperties();
        }, this._intervalTimerInterval);
    }

    public stop() {
        if (!this._intervalTimer) { return; }

        clearInterval(this._intervalTimer);
        this._intervalTimer = null;
    }

    public reStart() {
        this.stop();
        this._elapsedDuration = 0;
        this.start();
    }
}
