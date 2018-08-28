export class Reading {
    public bg: Number
    public time: String
    public insulin?: Number

    constructor(bg: Number, time: String, insulin?: Number) {
        this.bg = bg
        this.time = time
        this.insulin = insulin
    }
}