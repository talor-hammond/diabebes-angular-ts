export class Reading {
    public bg: Number
    public time: String
    public insulin?: Number
    public note?: String

    constructor(bg: Number, time: String, insulin?: Number, note?: String) {
        this.bg = bg
        this.time = time
        this.insulin = insulin
        this.note = note
    }
}