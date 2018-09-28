export class Reading {
    public id: string;
    public bg: number;
    public time: string;
    public insulin?: number;
    public note?: string;

    constructor(id: string, bg: number, time: string, insulin?: number, note?: string) {
        this.id = id;
        this.bg = bg;
        this.time = time;
        this.insulin = insulin;
        this.note = note;
    }
}