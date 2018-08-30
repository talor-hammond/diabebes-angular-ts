import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-readings',
  templateUrl: './readings.component.html',
  styleUrls: ['./readings.component.css']
})
export class ReadingsComponent implements OnInit {
  name: string

  constructor() {
    this.name = 'Talor'
  }

  ngOnInit() {
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
