import { Component, OnInit } from '@angular/core'

// Model(s)
import { Reading } from './reading.model'

// Services:
import { ReadingsService } from './readings.service'

@Component({
  selector: 'app-readings',
  templateUrl: './readings.component.html',
  styleUrls: ['./readings.component.css']
})
export class ReadingsComponent implements OnInit {
  name: string = 'Talor'
  readings: Reading[]

  constructor(private readingsService: ReadingsService) { }

  ngOnInit() {
    this.readings = this.readingsService.readings
    console.log(this.readings)
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
