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
    let bg: number[] = []

    bg = this.readings.map(reading => {
      return reading.bg
    })

    console.log(bg)
  }

}
