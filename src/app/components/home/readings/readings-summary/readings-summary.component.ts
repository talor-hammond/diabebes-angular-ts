import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import { ReadingsService } from '../../../services/readings-service/readings.service'

import { Reading } from '../reading.model'

@Component({
  selector: 'app-readings-summary',
  templateUrl: './readings-summary.component.html',
  styleUrls: ['./readings-summary.component.css']
})
export class ReadingsSummaryComponent implements OnInit {
  readings: Reading[]
  glucoseReadings: number[] = []

  isOpen: boolean = false

  constructor(private readingsService: ReadingsService) { }

  ngOnInit() {
    this.readings = this.readingsService.getReadings()
    this.glucoseReadings = this.getGlucose(this.readings)

    this.readingsService.readingsUpdated
      .subscribe( // listen to the readingsUpdated event...
        (readings: Reading[]) => {  // ...the event outputs the updated readings array
          this.readings = readings  // ...which we can assign to this.readings on this component

          this.glucoseReadings = this.getGlucose(this.readings) // also, reinit the glucose-readings array
        }
      )
  }

  getGlucose(readings: Reading[]) {
    const glucoseReadings = readings.map(reading => { // turning our array of objects into an array of reading.bg(s)
      return reading.bg
    })

    return glucoseReadings
  }

  getAverage() {
    let sum: number = Math.floor(this.glucoseReadings.reduce((acc, curr) => acc + curr)) // reducing that array of glucoseReadings into a sum...

    return sum / this.glucoseReadings.length // ...which we can divide through by the length of the array to find the average.
  }

  getLows() {
    return this.glucoseReadings.filter(reading => reading < 4).length // filter the readings below 4 into a new array, and return its length
  }

  getHighs() {
    return this.glucoseReadings.filter(reading => reading > 10).length
  }

}
