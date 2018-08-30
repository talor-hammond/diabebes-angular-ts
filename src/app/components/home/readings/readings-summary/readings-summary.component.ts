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
  isOpen: boolean = false

  constructor() { }

  ngOnInit() {
    this.getAverage()
  }

  getAverage() {
    let glucoseReadings: number[] = []
    let sum: number = 0

    glucoseReadings = this.readings.map(reading => { // turning our array of objects into an array of reading.bg(s)
      return reading.bg
    })

    sum = Math.floor(glucoseReadings.reduce( (acc, curr) => { // reducing that array of glucoseReadings into a sum...
      return acc + curr
    }))

    return sum / glucoseReadings.length // ...which we can divide through by the length of the array to find the average.
  }

}
