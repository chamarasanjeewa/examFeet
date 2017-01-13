
export class Result {

    public questions: number;
    public correct: number;
    public incorrect: number;
    public duration: number;
    public get averageDuration(): number {
        return (this.questions === 0) ? 0 : (this.duration / this.questions);
    }
    public get percentage(): number {
        return (this.questions === 0) ? 0 : ((this.correct / this.questions) * 100);
    }

    constructor() {}
}
