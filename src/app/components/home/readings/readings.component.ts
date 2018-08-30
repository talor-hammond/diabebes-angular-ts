import { Component, OnInit } from '@angular/core'

// Model(s)
import { Reading } from './reading.model'

@Component({
  selector: 'app-readings',
  templateUrl: './readings.component.html',
  styleUrls: ['./readings.component.css']
})
export class ReadingsComponent implements OnInit {
  name: string
  // readings: Reading[] = [] // type: array of 'Reading' objects, defaulting to an empty array
  readings: Reading[] = [
    {
      bg: 6.4,
      time: '9:00AM',
      insulin: 4,
      note: '~30grams of carbs for breakfast'
    },
    {
      bg: 12.2,
      time: '12:30PM',
      insulin: 2,
      note: '4 units / 30g could be too low'
    },
    {
      bg: 8.1,
      time: '2:30PM',
      insulin: 7
    },
    {
      bg: 3.1,
      time: '5:00PM',
      insulin: 0,
      note: '25 grams of carbs to correct'
    }
  ]

  constructor() {
    this.name = 'Talor'
  }

  ngOnInit() {
  }

  onReadingAdded(reading: Reading) {
    this.readings.push(reading)
  }

  // TODO: method to edit reading.note with new content:

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
