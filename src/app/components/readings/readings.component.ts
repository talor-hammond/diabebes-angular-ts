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
  // readings: Reading[] = [] // type: array of 'Reading' objects, defaulting to an empty array
  readings: Reading[] = [
    new Reading(8, '8:30PM', 0)
  ]

  constructor() {
    this.name = 'Talor'
  }

  ngOnInit() {
  }

}
