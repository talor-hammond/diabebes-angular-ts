import { 
  Component,
  OnInit,
  Input
} from '@angular/core';

import { Reading } from '../reading.model'

@Component({
  selector: 'app-readings-summary',
  templateUrl: './readings-summary.component.html',
  styleUrls: ['./readings-summary.component.css']
})
export class ReadingsSummaryComponent implements OnInit {
  @Input() readings: Reading[] // making the array of readings available to our component's mark-up
  glucoseReadings: number[] = []
  isOpen: boolean = false

  constructor() { }

  ngOnInit() {
    this.glucoseReadings = this.readings.map(reading => { // turning our array of objects into an array of reading.bg(s)
      return reading.bg
    })

    this.getLows()
  }

  getAverage() {
    let sum: number = 0

    sum = Math.floor(this.glucoseReadings.reduce( (acc, curr) => { // reducing that array of glucoseReadings into a sum...
      return acc + curr
    }))

    return sum / this.glucoseReadings.length // ...which we can divide through by the length of the array to find the average.
  }

  getLows() {
    let lows: number[]

    lows = this.glucoseReadings.filter(reading => reading < 4)

    return lows.length
  }

  getHighs() {
    let highs: number[]

    highs = this.glucoseReadings.filter(reading => reading > 10)

    return highs.length
  }

}
