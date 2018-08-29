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

  getClassByBg(reading: number) {
    switch (true) {
      case reading < 4: // for hypoglycaemia
        return 'list-group-item-warning'
      case reading > 10: // for hyperglycaemia
        return 'list-group-item-danger'
      default:
        return 'list-group-item-primary'
    }
  }

}
