export class Reading {
    public bg: Number
    public time: String
    public note: String
    public insulin?: Number

    constructor(bg: Number, time: String, note: String, insulin?: number) {
        this.bg = bg
        this.time = time
        this.note = note        
        this.insulin = insulin
    }
}