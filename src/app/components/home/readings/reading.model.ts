export class Reading {
    public bg: number
    public time: string
    public insulin?: number
    public note?: string

    constructor(bg: number, time: string, insulin?: number, note?: string) {
        this.bg = bg
        this.time = time
        this.insulin = insulin
        this.note = note
    }
}