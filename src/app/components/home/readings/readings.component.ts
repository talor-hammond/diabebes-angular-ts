import { Component, OnInit } from '@angular/core'

// Model(s)
import { Reading } from './reading.model'

@Component({
  selector: 'app-readings',
  templateUrl: './readings.component.html',
  styleUrls: ['./readings.component.css']
})
export class ReadingsComponent implements OnInit {
  name: String
  readings: Reading[] = [] // type: array of 'Reading' objects, defaulting to an empty array

  constructor() {
    this.name = 'Talor'
  }

  ngOnInit() {
  }

  onReadingAdded(reading: Reading) {
    this.readings.push(reading)
  }

}
